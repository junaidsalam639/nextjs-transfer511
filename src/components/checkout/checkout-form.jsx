"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";

function CheckoutForm({ data }) {
    const [showCouponField, setShowCouponField] = useState(false);

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
            couponCode: "",
            agreeTerms: false,
            paymentMethod: "cash",
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
            paymentMethod: Yup.string().required("Select a payment method"),
            agreeTerms: Yup.boolean().oneOf([true], "You must accept terms"),
        }),
        onSubmit: (values) => {
            console.log("Form Submitted:", values);
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

            <Card className="mb-6">
                <CardContent className="px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Image
                            src={data?.image}
                            alt="car"
                            width={100}
                            height={100}
                            className="w-28 h-24 object-cover rounded"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">{data?.title}</h2>
                            <div className="text-sm text-muted-foreground flex items-center gap-3">
                                <Badge variant="secondary">🧑‍🤝‍🧑 {data?.seats} Seats</Badge>
                                <Badge variant="secondary">🧳 {data?.bags} Bags</Badge>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <h2 className="text-xl font-bold">€ {data?.price}</h2>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-4 mb-6">
                <Card className="bg-secondary">
                    <CardContent className="p-3">
                        <div className="flex items-center mb-3">
                            <Checkbox
                                id="coupon"
                                className="mr-2 cursor-pointer"
                                checked={showCouponField}
                                onCheckedChange={() => setShowCouponField(!showCouponField)}
                            />
                            <Label htmlFor="coupon" className="text-sm">
                                Have a coupon code?
                            </Label>
                        </div>
                        {showCouponField && (
                            <>
                                <Input
                                    name="couponCode"
                                    placeholder="Enter coupon code"
                                    value={formik.values.couponCode}
                                    onChange={formik.handleChange}
                                />
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>

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
                            <TableRow className="border-t">
                                <TableCell className="py-2">Transfer</TableCell>
                                <TableCell className="py-2 text-right">€112.84</TableCell>
                            </TableRow>
                            <TableRow className="border-t font-medium">
                                <TableCell className="py-2">Total</TableCell>
                                <TableCell className="py-2 text-right font-bold">
                                    €112.84 <span className="text-xs text-muted-foreground">(incl. €18.02 VAT)</span>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-lg">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <RadioGroup
                        defaultValue="cash"
                        onValueChange={(value) => formik.setFieldValue("paymentMethod", value)}
                        onBlur={() => formik.setTouched({ ...formik.touched, paymentMethod: true })}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash">Cash Payment</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="credit" id="credit" />
                            <Label htmlFor="credit">Credit Card (Stripe)</Label>
                        </div>
                    </RadioGroup>
                    {renderError("paymentMethod")}
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

            <Button type="submit" className="w-full bg-zinc-900 hover:bg-orange-500 text-white">
                Place Order
            </Button>
        </form>
    );
}

export default CheckoutForm;
