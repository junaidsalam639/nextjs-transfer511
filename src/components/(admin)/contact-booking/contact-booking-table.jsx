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
import { toast } from "sonner"
import { useDeleteCouponsMutation, useGetCouponsQuery } from "@/service/couponsApi"


export function ContactBookingTable() {
    const { data, isLoading } = useGetCouponsQuery();
    const [deleteCoupons] = useDeleteCouponsMutation();
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
            accessorKey: "code",
            header: "Code",
            cell: ({ row }) => <div>{row.getValue("code")}</div>,
        },
        {
            accessorKey: "discount_amount",
            header: "Discount Amount",
            cell: ({ row }) => <div>{row.getValue("discount_amount")}</div>,
        },
        {
            accessorKey: "discount_type",
            header: "Discount Type",
            cell: ({ row }) => <div>{row.getValue("discount_type")}</div>,
        },
        {
            accessorKey: "expiry_date",
            header: "Expiry Date",
            cell: ({ row }) => <div>{row.getValue("expiry_date")?.split("T")[0]}</div>,
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
                            <Link href={`/admin-dashboard/coupons/edit-coupons/${car.id}`}>
                                <DropdownMenuItem className="flex items-center gap-2">
                                    <Pencil className="w-4 h-4" />
                                    Edit Coupons
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem
                                onClick={async () => {
                                    try {
                                        await deleteCoupons(car.id).unwrap();
                                        toast.success("Coupons deleted successfully");
                                    } catch (error) {
                                        console.error("Failed to delete car:", error);
                                    }
                                }}
                                className="flex items-center gap-2 text-red-600 focus:text-red-600"
                            >
                                <Trash2 className="w-4 h-4" />
                                Delete Coupons
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
                <h1 className="text-2xl font-bold">Coupons</h1>
                <Link href="/admin-dashboard/coupons/add-coupons">
                    <Button>Add Coupons</Button>
                </Link>
            </div>

            <div className="flex items-center py-4 gap-4">
                <Input
                    placeholder="Filter by code..."
                    value={(table.getColumn("code")?.getFilterValue()) ?? ""}
                    onChange={(e) =>
                        table.getColumn("code")?.setFilterValue(e.target.value)
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
