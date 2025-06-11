"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Textarea } from "../ui/textarea";
import CheckoutCarCard from "./checkout-car-card";
import CheckoutCoupon from "./checkout-coupon";
import { useDispatch, useSelector } from "react-redux";
import CheckoutTripDetails from "./checkout-trip-details";
import { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { setSuccessBookingData } from "@/redux/successBookingSlice";

const baseUrl = "https://transfer511.webedevs.com/public/api";

function CheckoutForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { selectCar } = useSelector((state) => state);
    const { booking } = useSelector((state) => state);
    const [btnLoader, setBtnLoader] = useState(false);
    const [couponData, setCouponData] = useState({
        id: "",
        price: selectCar?.price
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            flight: "",
            passengers: "",
            luggage: "",
            notes: "",
            agreeTerms: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            phone: Yup.string().required("Phone is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            flight: Yup.string().required("Flight number is required"),
            passengers: Yup.string().required("Number of passengers is required"),
            luggage: Yup.string().required("Luggage info is required"),
            notes: Yup.string().required("Order notes are required"),
            agreeTerms: Yup.boolean().oneOf([true], "You must accept terms"),
        }),
        onSubmit: async (values) => {
            setBtnLoader(true);
            const formData = new FormData();
            formData.append("from_location", booking?.from);
            formData.append("to_location", booking?.to);
            formData.append("pickup_date", booking?.pickup_date);
            formData.append("pickup_time", booking?.pickup_time);
            formData.append("trip_type", booking?.trip_type);
            formData.append("booking_type", booking?.booking_type);
            formData.append("estimated_travel_time", booking?.estimated_travel_time);
            formData.append("distance_km", booking?.distance_km);
            formData.append("rate_per_km", booking[selectCar?.category]?.rate_per_km);

            if (booking?.trip_type === "return") {
                formData.append("dropoff_date", booking?.dropoff_date);
                formData.append("dropoff_time", booking?.dropoff_time);
            }

            formData.append("first_name", values?.firstName);
            formData.append("last_name", values?.lastName);
            formData.append("phone", values?.phone);
            formData.append("email", values?.email);

            formData.append("product_category_id", selectCar?.id);
            formData.append("category", selectCar?.category);
            formData.append("price", selectCar?.price);

            if (couponData?.id) {
                formData.append("coupon_id", couponData?.id);
                formData.append("price_after_coupon", couponData?.price);
            }

            try {
                const response = await fetch(`${baseUrl}/user/bookings`, {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json',
                    }
                });
                const result = await response.json();
                if (response.ok) {
                    dispatch(setSuccessBookingData(result?.data));
                    toast.success(result?.message || "Booking successful");
                    setBtnLoader(false);
                    router.push("/booking-succes");
                } else {
                    toast.error(result?.errors || "Something went wrong");
                    setBtnLoader(false);
                }
            } catch (err) {
                toast.error("Network error or server not responding");
                setBtnLoader(false);
            }
        },
    });

    const renderError = (field) =>
        formik.touched[field] && formik.errors[field] ? (
            <p className="text-sm text-red-500">{formik.errors[field]}</p>
        ) : null;

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-primary">Search</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-semibold text-primary">Cars</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-semibold text-primary">Payment Details</span>
                </div>
            </div>

            <CheckoutCarCard selectCar={selectCar} />
            <CheckoutTripDetails booking={booking} />
            <CheckoutCoupon
                price={selectCar?.price}
                setCouponData={setCouponData}
            />


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Billing Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Input
                                name="firstName"
                                placeholder="First Name *"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {renderError("firstName")}
                        </div>
                        <div>
                            <Input
                                name="lastName"
                                placeholder="Last Name *"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {renderError("lastName")}
                        </div>
                        <div>
                            <Input
                                name="phone"
                                placeholder="Phone Number *"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {renderError("phone")}
                        </div>
                        <div>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email Address *"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {renderError("email")}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Input
                                name="flight"
                                placeholder="Flight number *"
                                value={formik.values.flight}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {renderError("flight")}
                        </div>
                        <div>
                            <Input
                                name="passengers"
                                placeholder="Passengers *"
                                value={formik.values.passengers}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {renderError("passengers")}
                        </div>
                        <div>
                            <Input
                                name="luggage"
                                placeholder="Luggage *"
                                value={formik.values.luggage}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {renderError("luggage")}
                        </div>
                        <div>
                            <Textarea
                                name="notes"
                                placeholder="Order notes *"
                                rows={5}
                                value={formik.values.notes}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {renderError("notes")}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-lg">Your Order</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="py-2">Product</TableCell>
                                <TableCell className="py-2 text-right font-semibold">Subtotal</TableCell>
                            </TableRow>
                            <TableRow className="border-t font-medium">
                                <TableCell className="py-2">Total</TableCell>
                                <TableCell className="py-2 text-right font-bold">
                                    € {couponData?.price}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div className="flex items-start space-x-2 mb-4">
                <Checkbox
                    id="terms"
                    checked={formik.values.agreeTerms}
                    onCheckedChange={(val) => formik.setFieldValue("agreeTerms", val)}
                />
                <Label htmlFor="terms" className="text-sm">
                    I have read and agree to the{" "}
                    <Button variant="link" className="text-primary p-0 h-auto">
                        Terms and Conditions
                    </Button>
                </Label>
            </div>
            {renderError("agreeTerms")}

            <Button disabled={btnLoader} type="submit" className="w-full bg-zinc-900 hover:bg-orange-500 text-white">
                {btnLoader ? (
                    <div className="animate-spin">
                        <Loader />
                    </div>
                ) : (
                    "Place Order"
                )}
            </Button>
        </form>
    );
}

export default CheckoutForm;
