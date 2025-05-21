'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { createCar, updateCar } from '@/lib/api';

const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    image: z.string().url('Invalid URL').min(1, 'Image URL is required'),
    size: z.string().min(1, 'Size is required'),
    gepak: z.number().min(1, 'Gepak must be at least 1'),
    price: z.number().min(0, 'Price must be positive'),
});

export default function CarForm({ car, setModalFalse }) {
    const router = useRouter();
    const queryClient = useQueryClient();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: car || {
            name: '',
            image: '',
            size: '',
            gepak: 0,
            price: 0,
        },
    });

    const mutation = useMutation({
        mutationFn: car ? (data) => updateCar(car._id, data) : createCar,
        onSuccess: () => {
            queryClient.invalidateQueries(['cars']);
            setModalFalse(false);
            router.refresh('/admin/cars');
        },
    });

    const onSubmit = (values) => {
        mutation.mutate(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Car Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Standard Kombi Class" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com/car.jpg" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Size</FormLabel>
                            <FormControl>
                                <Input placeholder="Medium" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="gepak"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gepak Capacity</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="3"
                                    {...field}
                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="715.65"
                                    {...field}
                                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={mutation.isPending}>
                    {mutation.isPending ? 'Saving...' : 'Save Car'}
                </Button>
            </form>
        </Form>
    );
}