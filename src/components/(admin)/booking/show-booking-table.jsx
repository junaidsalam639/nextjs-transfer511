"use client";

import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useChangeBookingStatusMutation, useGetBookingQuery } from "@/service/bookingApi";
import { toast } from "sonner";

export function ShowBookingTable() {
  const { data, isLoading } = useGetBookingQuery();
  const [changeStatus] = useChangeBookingStatusMutation();
  const bookingData = data?.data || [];

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => row.original.id ?? "N/A",
    },
    {
      accessorKey: "from_location",
      header: "From Location",
      cell: ({ row }) => row.original.from_location || "N/A",
    },
    {
      accessorKey: "to_location",
      header: "To Location",
      cell: ({ row }) => row.original.to_location || "N/A",
    },
    {
      accessorKey: "pickup_date",
      header: "Pickup Date",
      cell: ({ row }) => row.original.pickup_date || "N/A",
    },
    {
      accessorKey: "pickup_time",
      header: "Pickup Time",
      cell: ({ row }) => row.original.pickup_time || "N/A",
    },
    {
      accessorKey: "dropoff_date",
      header: "Dropoff Date",
      cell: ({ row }) => row.original.dropoff_date || "N/A",
    },
    {
      accessorKey: "dropoff_time",
      header: "Dropoff Time",
      cell: ({ row }) => row.original.dropoff_time || "N/A",
    },
    {
      accessorKey: "first_name",
      header: "First Name",
      cell: ({ row }) => row.original.first_name || "N/A",
    },
    {
      accessorKey: "last_name",
      header: "Last Name",
      cell: ({ row }) => row.original.last_name || "N/A",
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => row.original.email || "N/A",
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => row.original.phone || "N/A",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const bookingId = row.original.id;
        const currentStatus = String(row.original.status);

        const statusOptions = [
          { label: "Pending", value: "0" },
          { label: "Confirmed", value: "1" },
          { label: "Completed", value: "2" },
        ];

        return (
          <Select
            defaultValue={currentStatus}
            onValueChange={async (value) => {
              try {
                const response = await changeStatus({ status: value, id: bookingId }).unwrap();
                toast.success(response?.message || "Booking updated successfully");
              } catch (err) {
                toast.error(err?.data?.message || "Some thing went wrong");
              }
            }}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      },
    },
    {
      accessorKey: "trip_type",
      header: "Trip Type",
      cell: ({ row }) => row.original.trip_type || "N/A",
    },
    {
      accessorKey: "booking_type",
      header: "Booking Type",
      cell: ({ row }) => row.original.booking_type || "N/A",
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => row.original.category || "N/A",
    },
    {
      accessorKey: "price_after_coupon",
      header: "Price After Coupon",
      cell: ({ row }) => row.original.price_after_coupon ?? "N/A",
    },
    {
      accessorKey: "distance_km",
      header: "Distance (km)",
      cell: ({ row }) => `${row.original.distance_km?.toFixed(2)}` || "N/A",
    },
    {
      accessorKey: "estimated_travel_time",
      header: "Estimated Travel Time",
      cell: ({ row }) => row.original.estimated_travel_time || "N/A",
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => row.original.price || "N/A",
    },
    {
      accessorKey: "rate_per_km",
      header: "Rate per KM",
      cell: ({ row }) => row.original.rate_per_km || "N/A",
    },
  ];

  const table = useReactTable({
    data: bookingData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading) return <>Loading...</>;

  return (
    <div className="w-full p-5">
      <h1 className="text-2xl font-bold mb-4">All Bookings (Full Data)</h1>

      <div className="overflow-x-auto rounded-md border w-[1140px]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
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
                <TableCell colSpan={columns.length} className="text-center">
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="w-full px-4 py-4 flex justify-between items-center flex-wrap gap-2 overflow-x-auto">
        <Button
          className="flex-shrink-0"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className="flex-shrink-0"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>

    </div>
  );
}
