'use client';

import { useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from '@/components/ui/table';
import { getCars, deleteCar } from '@/lib/api';
import CarForm from '@/components/admin/CarForm';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import {
    SidebarInset, SidebarProvider,
} from '@/components/ui/sidebar';
import { useState } from 'react';

export default function Dashboard() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const [modalTrue, setModalFalse] = useState(false);
    const [carSingle, setSingleCar] = useState({});

    const { data: cars, isLoading, error } = useQuery({
        queryKey: ['cars'],
        queryFn: getCars,
    });

    const deleteMutation = useMutation({
        mutationFn: deleteCar,
        onSuccess: () => {
            queryClient.invalidateQueries(['cars']);
        },
    });

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this car?')) {
            deleteMutation.mutate(id);
        }
    };

    return (
        <SidebarProvider
            style={{
                '--sidebar-width': 'calc(var(--spacing) * 72)',
                '--header-height': 'calc(var(--spacing) * 12)',
            }}
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-col flex-1 p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">Car Management</h1>
                        <Dialog open={modalTrue} onOpenChange={setModalFalse}>
                            <DialogTrigger asChild>
                                <Button>Add New Car</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg">
                                <DialogHeader>
                                    <DialogTitle>Add New Car</DialogTitle>
                                </DialogHeader>
                                <CarForm car={carSingle} setModalFalse={setModalFalse} />
                            </DialogContent>
                        </Dialog>
                    </div>

                    {isLoading ? (
                        <div className="text-center py-10 text-muted-foreground">Loading cars...</div>
                    ) : error ? (
                        <div className="text-center py-10 text-red-500">Error: {error.message}</div>
                    ) : cars?.data?.length === 0 ? (
                        <div className="text-center py-10 text-muted-foreground">No cars found.</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Size</TableHead>
                                    <TableHead>Gepak</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cars.data.map((car) => (
                                    <TableRow key={car._id}>
                                        <TableCell>
                                            <img
                                                src={car.image}
                                                alt={car.name}
                                                className="w-16 h-16 object-cover rounded-md border"
                                            />
                                        </TableCell>
                                        <TableCell>{car.name}</TableCell>
                                        <TableCell>{car.size}</TableCell>
                                        <TableCell>{car.gepak}</TableCell>
                                        <TableCell>Rs. {car.price}</TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button
                                                variant="outline"
                                                onClick={() => {
                                                    setSingleCar(car);
                                                    setModalFalse(true);
                                                }}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                onClick={() => handleDelete(car._id)}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
