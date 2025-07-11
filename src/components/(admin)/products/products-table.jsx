"use client"

import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDeleteCarMutation, useGetCarQuery } from "@/service/carApi"
import { toast } from "sonner"


export function ProductsTable() {
    const { data, isLoading } = useGetCarQuery();
    const [deleteCar] = useDeleteCarMutation();
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});

    const columns = [
        {
            accessorKey: "id",
            header: "ID",
            cell: ({ row }) => <div>{row.getValue("id")}</div>,
        },
        {
            accessorKey: "image",
            header: "Image",
            cell: ({ row }) => {
                const imgSrc = row.getValue("image");
                return (
                    <img
                        src={`https://j46.e0c.mytemp.website/storage/${imgSrc}`}
                        alt="car"
                        className="w-14 h-14 object-cover rounded"
                    />
                )
            },
        },
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => <div>{row.getValue("name")}</div>,
        },
        {
            accessorKey: "category",
            header: "Category",
            cell: ({ row }) => <div>{row.getValue("category")}</div>,
        },
        {
            accessorKey: "passenger_capacity",
            header: "Passengers",
            cell: ({ row }) => <div>{row.getValue("passenger_capacity")}</div>,
        },
        {
            accessorKey: "features",
            header: "Features",
            cell: ({ row }) => {
                const features = row.getValue("features") || [];
                return (
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                );
            },
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const car = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <Link href={`/admin-dashboard/products/edit-products/${car.id}`}>
                                <DropdownMenuItem className="flex items-center gap-2">
                                    <Pencil className="w-4 h-4" />
                                    Edit Car
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem
                                onClick={async () => {
                                    try {
                                        await deleteCar(car.id).unwrap();
                                        toast.success("Car deleted successfully");
                                    } catch (error) {
                                        console.error("Failed to delete car:", error);
                                    }
                                }}
                                className="flex items-center gap-2 text-red-600 focus:text-red-600"
                            >
                                <Trash2 className="w-4 h-4" />
                                Delete Car
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ]

    const table = useReactTable({
        data: data?.data || [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    if (isLoading) return <>Loading...</>;

    return (
        <div className="w-full p-5">
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-bold">Cars</h1>
                <Link href="/admin-dashboard/products/add-products">
                    <Button>Add Cars</Button>
                </Link>
            </div>

            <div className="flex items-center py-4 gap-4">
                <Input
                    placeholder="Filter by name..."
                    value={(table.getColumn("name")?.getFilterValue()) ?? ""}
                    onChange={(e) =>
                        table.getColumn("name")?.setFilterValue(e.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((col) => col.getCanHide())
                            .map((col) => (
                                <DropdownMenuCheckboxItem
                                    key={col.id}
                                    className="capitalize"
                                    checked={col.getIsVisible()}
                                    onCheckedChange={(value) => col.toggleVisibility(!!value)}
                                >
                                    {col.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-between py-4">
                <div className="text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
