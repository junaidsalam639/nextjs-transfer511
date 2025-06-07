"use client";
import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Loader, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAddHourlyBookingMutation } from '@/service/bookingApi';
import { setBookingData } from '@/redux/bookingSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object().shape({
    startAddress: Yup.string().required("Pickup address is required"),
    pickupDate: Yup.string().required("Pickup date is required"),
    pickupTime: Yup.string().required("Pickup time is required"),
    hours: Yup.string().required("Number of hours is required"),
});

const HourlyBooking = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [addHourlyBooking, { isLoading }] = useAddHourlyBookingMutation();
    const [startAutocomplete, setStartAutocomplete] = useState(null);
    const [startCoords, setStartCoords] = useState(null);

    const formik = useFormik({
        initialValues: {
            startAddress: '',
            pickupDate: '',
            pickupTime: '',
            hours: '1',
        },
        validationSchema,
        onSubmit: async (values) => {
            const formData = {
                ...values,
                startCoords
            };
            try {
                const response = await addHourlyBooking(formData).unwrap();
                console.log(response)
                if (response?.status) {
                    toast.success(response?.message || "Success");
                    dispatch(setBookingData({
                        ...response?.data,
                        startCoords,
                    }));
                    router.push("/trip-details");
                }
            } catch (err) {
                console.error(err);
            }
        }
    });

    const handleStartPlaceSelected = () => {
        const place = startAutocomplete?.getPlace();
        if (place?.formatted_address && place.geometry?.location) {
            formik.setFieldValue('startAddress', place.formatted_address);
            setStartCoords({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            });
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
            <Autocomplete
                className="md:col-span-4 col-span-1"
                onLoad={setStartAutocomplete}
                onPlaceChanged={handleStartPlaceSelected}
            >
                <div>
                    <label className="block text-sm font-medium mb-1">Pickup Address</label>
                    <div className="relative">
                        <Input
                            name="startAddress"
                            placeholder="Enter pickup address"
                            value={formik.values.startAddress}
                            onChange={formik.handleChange}
                            className="pl-10"
                        />
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                    {formik.touched.startAddress && formik.errors.startAddress && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.startAddress}</p>
                    )}
                </div>
            </Autocomplete>

            <div className="md:col-span-4 col-span-1">
                <label className="block text-sm font-medium mb-1">Pickup Date</label>
                <div className="relative">
                    <Input
                        type="date"
                        name="pickupDate"
                        value={formik.values.pickupDate}
                        onChange={formik.handleChange}
                        className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                {formik.touched.pickupDate && formik.errors.pickupDate && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.pickupDate}</p>
                )}
            </div>

            <div className="md:col-span-4 col-span-1">
                <label className="block text-sm font-medium mb-1">Pickup Time</label>
                <div className="relative">
                    <Input
                        type="time"
                        name="pickupTime"
                        value={formik.values.pickupTime}
                        onChange={formik.handleChange}
                        className="pl-10"
                    />
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                {formik.touched.pickupTime && formik.errors.pickupTime && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.pickupTime}</p>
                )}
            </div>

            <div className="md:col-span-4 col-span-1">
                <label className="block text-sm font-medium mb-1">Hours</label>
                <Select
                    name="hours"
                    value={formik.values.hours}
                    onValueChange={(value) => formik.setFieldValue("hours", value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select hours" />
                    </SelectTrigger>
                    <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                            <SelectItem key={hour} value={hour + " Hour"}>
                                {hour} hours
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {formik.touched.hours && formik.errors.hours && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.hours}</p>
                )}
            </div>

            <div className="md:col-span-4 col-span-1 flex items-end">
                <Button type="submit" className="bg-zinc-900 hover:bg-orange-500 text-white w-full" disabled={isLoading}>
                    {isLoading ? (
                        <div className="animate-spin">
                            <Loader />
                        </div>
                    ) : (
                        "Search"
                    )}
                </Button>
            </div>
        </form>
    );
};

export default HourlyBooking;
