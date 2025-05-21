"use client";
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

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
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
                    <CardContent className="p-3 flex items-center">
                        <Checkbox id="coupon" className="mr-2" />
                        <Label htmlFor="coupon" className="text-sm">
                            Have a coupon code?{" "}
                            <Button variant="link" className="text-primary p-0 h-auto">
                                Click here to enter your code
                            </Button>
                        </Label>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Billing Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input placeholder="First Name *" />
                        <Input placeholder="Last Name *" />
                        <Input placeholder="Phone Number" />
                        <Input placeholder="Email Address *" type="email" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input placeholder="Flight number (optional)" />
                        <Input placeholder="Passengers (optional)" />
                        <Input placeholder="Luggage (optional)" />
                        <Textarea placeholder="Order notes (optional)" rows={5} />
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
                                <TableCell className="py-2 text-right font-semibold">
                                    Subtotal
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-t">
                                <TableCell className="py-2">Transfer</TableCell>
                                <TableCell className="py-2 text-right">€112.84</TableCell>
                            </TableRow>
                            <TableRow className="border-t font-medium">
                                <TableCell className="py-2">Total</TableCell>
                                <TableCell className="py-2 text-right font-bold">
                                    €112.84{" "}
                                    <span className="text-xs text-muted-foreground">
                                        (incl. €18.02 VAT)
                                    </span>
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
                <CardContent>
                    <RadioGroup defaultValue="cash">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash">Cash Payment</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal">
                                PayPal{" "}
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="credit" id="credit" />
                            <Label htmlFor="credit">Credit Card (Stripe)</Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>

            <div className="flex items-start space-x-2 mb-6">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                    I have read and agree to the{" "}
                    <Button variant="link" className="text-primary p-0 h-auto">
                        Terms and Conditions
                    </Button>
                </Label>
            </div>

            <Button className="w-full bg-zinc-900 hover:bg-orange-500 text-white">
                Place Order 
            </Button>
        </div>
    );
}

export default CheckoutForm;