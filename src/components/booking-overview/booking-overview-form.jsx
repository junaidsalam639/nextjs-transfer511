"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import BookingSteps from "../web/booking-steps";
import CarSmallCard from "../ui/car-small-card";
import BookingCoupon from "./booking-coupon";
import BookingTripDetails from "./booking-trip-details";
import { setSuccessBookingData } from "@/redux/successBookingSlice";

const baseUrl = "https://j46.e0c.mytemp.website/api";

function BookingOverviewForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { selectCar } = useSelector((state) => state);
    const { booking } = useSelector((state) => state);
    const { contactDetails } = useSelector((state) => state);
    const [btnLoader, setBtnLoader] = useState(false);
    const [couponData, setCouponData] = useState({
        id: "",
        price: selectCar?.price
    });

    const formik = useFormik({
        initialValues: {
            agreeTerms: false,
            paymentMethod: "",
        },
        validationSchema: Yup.object({
            agreeTerms: Yup.boolean().oneOf([true], "You must accept terms"),
            paymentMethod: Yup.string().required("Payment method is required"),
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

            formData.append("first_name", contactDetails?.firstName);
            formData.append("last_name", contactDetails?.lastName);
            formData.append("phone", contactDetails?.phone);
            formData.append("email", contactDetails?.email);

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
                const newFormData = new FormData();
                newFormData.append("name", result?.data?.first_name + " " + result?.data?.last_name);
                newFormData.append("email", result?.data?.email);
                newFormData.append("booking_id", result?.data?.id);
                newFormData.append("amount", result?.data?.price);

                if (values?.paymentMethod === "credit-card") {
                    const responsePayment = await fetch(`${baseUrl}/checkout`, {
                        method: "POST",
                        body: newFormData,
                        headers: {
                            'Accept': 'application/json',
                        }
                    });
                    const resultPayment = await responsePayment.json();
                    window.location.href = resultPayment?.checkout_url;
                }
                if (values?.paymentMethod === "paypal") {
                    const responsePayment = await fetch(`${baseUrl}/checkout/paypal`, {
                        method: "POST",
                        body: newFormData,
                        headers: {
                            'Accept': 'application/json',
                        }
                    });
                    const resultPayment = await responsePayment.json();
                    window.location.href = resultPayment?.link;
                }
                if (response.ok && values?.paymentMethod === "cash") {
                    dispatch(setSuccessBookingData(result?.data));
                    toast.success(result?.message || "Booking successful");
                    setBtnLoader(false);
                    router.push("/booking-succes");
                } else {
                    toast.error(result?.message || "Something went wrong");
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

    const cost = (couponData?.price / 119 * 19);

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-4xl mx-auto px-4 py-8">
            <BookingSteps activeStep={3} completedSteps={[0, 1, 2]} />
            <CarSmallCard selectCar={selectCar} />
            <BookingTripDetails booking={booking} />
            <BookingCoupon
                price={selectCar?.price}
                setCouponData={setCouponData}
            />

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-lg">Your Order</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="py-2">Product</TableCell>
                                <TableCell className="py-2 text-right font-semibold">Zwischensumme</TableCell>
                            </TableRow>
                            <TableRow className="border-t font-medium">
                                <TableCell className="py-2">Transfer</TableCell>
                                <TableCell className="py-2 text-right font-bold">
                                    € {couponData?.price}
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-t font-medium">
                                <TableCell className="py-2">Zwischensumme</TableCell>
                                <TableCell className="py-2 text-right font-bold">
                                    € {couponData?.price}
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-t font-medium">
                                <TableCell className="py-2">Gesamtsumme</TableCell>
                                <TableCell className="py-2 text-right font-bold">
                                    € {couponData?.price} {" "}
                                    (inkl. € {cost.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Umsatzsteuer)
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className="p-6 space-y-4">
                <RadioGroup
                    value={formik.values.paymentMethod}
                    onValueChange={(value) => formik.setFieldValue("paymentMethod", value)}
                >
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="cash" id="cash" className="cursor-pointer" />
                        <Label className="cursor-pointer" htmlFor="cash">Barzahlung (Cash Payment)</Label>
                    </div>

                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="paypal" id="paypal" className="cursor-pointer" />
                        <Label className="cursor-pointer" htmlFor="paypal">PayPal</Label>
                    </div>

                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="credit-card" id="credit-card" className="cursor-pointer" />
                        <Label className="cursor-pointer" htmlFor="credit-card">Credit Card (Stripe)</Label>
                    </div>
                    {renderError("paymentMethod")}
                </RadioGroup>
            </Card>

            <div className="flex items-start space-x-2 my-4">
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

            <Button
                disabled={btnLoader}
                type="submit" className="w-full bg-zinc-900 hover:bg-orange-500 text-white">
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

export default BookingOverviewForm;

