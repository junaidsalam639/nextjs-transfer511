"use client";
import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Loader, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAddMileageBookingMutation } from '@/service/bookingApi';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setBookingData } from '@/redux/bookingSlice';
import { useRouter } from 'next/navigation';

const MileageBooking = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [addMileageBooking, { isLoading }] = useAddMileageBookingMutation();
    const [startAutocomplete, setStartAutocomplete] = useState(null);
    const [endAutocomplete, setEndAutocomplete] = useState(null);
    const [startCoords, setStartCoords] = useState(null);
    const [endCoords, setEndCoords] = useState(null);

    const initialValues = {
        startAddress: '',
        endAddress: '',
        pickupDate: '',
        pickupTime: '',
        tripType: 'one-way',
        dropoff_date: '',
        dropoff_time: ''
    };

    const validationSchema = Yup.object().shape({
        startAddress: Yup.string().required('Pickup address is required'),
        endAddress: Yup.string().required('Destination address is required'),
        pickupDate: Yup.string().required('Pickup date is required'),
        pickupTime: Yup.string().required('Pickup time is required'),
        tripType: Yup.string().required(),
        dropoff_date: Yup.string().when('tripType', (tripType, schema) =>
            tripType === 'return'
                ? schema.required('Dropoff date is required')
                : schema
        ),
        dropoff_time: Yup.string().when('tripType', (tripType, schema) =>
            tripType === 'return'
                ? schema.required('Dropoff time is required')
                : schema
        ),
    });

    const handleStartPlaceSelected = () => {
        const place = startAutocomplete?.getPlace();
        if (place?.formatted_address && place.geometry?.location) {
            formikRef.current.setFieldValue("startAddress", place.formatted_address);
            setStartCoords({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            });
        }
    };

    const handleEndPlaceSelected = () => {
        const place = endAutocomplete?.getPlace();
        if (place?.formatted_address && place.geometry?.location) {
            formikRef.current.setFieldValue("endAddress", place.formatted_address);
            setEndCoords({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            });
        }
    };

    const formikRef = React.useRef();

    const handleSubmit = async (values) => {
        const formData = {
            ...values,
            startCoords,
            endCoords,
        };
        try {
            const response = await addMileageBooking(formData).unwrap();
            if (response?.status) {
                toast.success(response?.message);
                dispatch(setBookingData({
                    ...response?.data,
                    startCoords,
                    endCoords
                }));
                router.push("/trip-details");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Formik
            innerRef={formikRef}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, errors, touched }) => (
                <Form className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
                    <Autocomplete className="md:col-span-3" onLoad={setStartAutocomplete} onPlaceChanged={handleStartPlaceSelected}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Pickup Address</label>
                            <div className="relative">
                                <Input
                                    name="startAddress"
                                    placeholder="Enter pickup address"
                                    value={values.startAddress}
                                    onChange={handleChange}
                                    className="pl-10"
                                />
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                            {touched.startAddress && errors.startAddress && (
                                <p className="text-red-500 text-sm mt-1">{errors.startAddress}</p>
                            )}
                        </div>
                    </Autocomplete>

                    <Autocomplete className="md:col-span-3" onLoad={setEndAutocomplete} onPlaceChanged={handleEndPlaceSelected}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Destination Address</label>
                            <div className="relative">
                                <Input
                                    name="endAddress"
                                    placeholder="Enter destination address"
                                    value={values.endAddress}
                                    onChange={handleChange}
                                    className="pl-10"
                                />
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                            {touched.endAddress && errors.endAddress && (
                                <p className="text-red-500 text-sm mt-1">{errors.endAddress}</p>
                            )}
                        </div>
                    </Autocomplete>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Pickup Date</label>
                        <div className="relative">
                            <Input
                                name="pickupDate"
                                type="date"
                                value={values.pickupDate}
                                onChange={handleChange}
                                className="pl-10"
                            />
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        {touched.pickupDate && errors.pickupDate && (
                            <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Pickup Time</label>
                        <div className="relative">
                            <Input
                                name="pickupTime"
                                type="time"
                                value={values.pickupTime}
                                onChange={handleChange}
                                className="pl-10"
                            />
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        {touched.pickupTime && errors.pickupTime && (
                            <p className="text-red-500 text-sm mt-1">{errors.pickupTime}</p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Trip Type</label>
                        <Select value={values.tripType} onValueChange={(value) => formikRef.current.setFieldValue("tripType", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select trip type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="oneway">One Way</SelectItem>
                                <SelectItem value="return">Return</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {values.tripType === 'return' && (
                        <>
                            <div className="md:col-span-3">
                                <label className="block text-sm font-medium mb-1">Dropoff Date</label>
                                <div className="relative">
                                    <Input
                                        name="dropoff_date"
                                        type="date"
                                        value={values.dropoff_date}
                                        onChange={handleChange}
                                        className="pl-10"
                                    />
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                                {touched.dropoff_date && errors.dropoff_date && (
                                    <p className="text-red-500 text-sm mt-1">{errors.dropoff_date}</p>
                                )}
                            </div>

                            <div className="md:col-span-3">
                                <label className="block text-sm font-medium mb-1">Dropoff Time</label>
                                <div className="relative">
                                    <Input
                                        name="dropoff_time"
                                        type="time"
                                        value={values.dropoff_time}
                                        onChange={handleChange}
                                        className="pl-10"
                                    />
                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                                {touched.dropoff_time && errors.dropoff_time && (
                                    <p className="text-red-500 text-sm mt-1">{errors.dropoff_time}</p>
                                )}
                            </div>
                        </>
                    )}

                    <div className="md:col-span-6 flex justify-end">
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
                </Form>

            )}
        </Formik>
    );
};

export default MileageBooking;
