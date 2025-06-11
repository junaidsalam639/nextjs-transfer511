"use client";
import React from "react";
import { useSelector } from "react-redux";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    CheckCircle,
    MapPin,
    Calendar,
    Phone,
    BadgeCheck,
    User,
    DollarSign,
} from "lucide-react";

const BookingSuccessCard = () => {
    const { successBooking } = useSelector((state) => state);

    if (!successBooking) return null;

    return (
        <div className="max-w-4xl mx-auto my-10 px-4">
            <Card className="shadow-2xl border-green-600 border-[1.5px] rounded-2xl overflow-hidden py-0">
                <CardHeader className="text-center bg-green-50 py-6 border-b">
                    <div className="flex flex-col items-center gap-2">
                        <CheckCircle className="text-green-600 w-10 h-10" />
                        <CardTitle className="text-2xl font-bold text-green-700">
                            Thank You for Your Order!
                        </CardTitle>
                        <p className="text-gray-600 text-sm">
                            Your booking has been successfully placed.
                        </p>
                    </div>
                </CardHeader>

                <CardContent className="p-6 space-y-8">
                    <Section title="Customer Info">
                        <Detail icon={<User />} label="Name" value={`${successBooking.first_name} ${successBooking.last_name}`} />
                        <Detail icon={<Phone />} label="Phone" value={successBooking.phone} />
                        <Detail icon={<BadgeCheck />} label="Email" value={successBooking.email} />
                    </Section>

                    <Divider />

                    <Section title="Trip Details">
                        <Detail icon={<MapPin />} label="From" value={successBooking.from_location} />
                        <Detail icon={<MapPin />} label="To" value={successBooking.to_location} />
                        <Detail icon={<Calendar />} label="Pickup Date" value={successBooking.pickup_date} />
                        <Detail icon={<Calendar />} label="Pickup Time" value={successBooking.pickup_time} />
                        {successBooking.trip_type === "return" && (
                            <>
                                <Detail icon={<Calendar />} label="Dropoff Date" value={successBooking.dropoff_date} />
                                <Detail icon={<Calendar />} label="Dropoff Time" value={successBooking.dropoff_time} />
                            </>
                        )}
                        <Detail label="Trip Type" value={successBooking.trip_type} />
                        <Detail label="Distance (KM)" value={successBooking.distance_km} />
                        <Detail label="Estimated Travel Time" value={successBooking.estimated_travel_time} />
                    </Section>

                    <Divider />

                    <Section title="Pricing">
                        <Detail icon={<DollarSign />} label="Rate per KM" value={`Rs. ${successBooking.rate_per_km}`} />
                        <Detail label="Base Price" value={`Rs. ${successBooking.price}`} />
                        <Detail label="Coupon ID" value={successBooking.coupon_id || "N/A"} />
                        <Detail label="Final Price" value={`Rs. ${successBooking.price_after_coupon}`} />
                    </Section>

                    <Divider />

                    <Section title="Other Info">
                        <Detail label="Booking Type" value={successBooking.booking_type} />
                        <Detail label="Category" value={successBooking.category} />
                        <Detail
                            label="Status"
                            value={
                                successBooking.status === 0 ? (
                                    <span className="text-orange-500 font-semibold">Pending</span>
                                ) : (
                                    <span className="text-green-600 font-semibold">Confirmed</span>
                                )
                            }
                        />
                    </Section>
                </CardContent>
            </Card>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </div>
);

const Detail = ({ label, value, icon }) => (
    <div className="flex items-start gap-2">
        {icon && <div className="mt-1 text-muted-foreground">{icon}</div>}
        <div className="flex flex-col">
            <span className="text-xs">{label}</span>
            <span className="font-medium">{value}</span>
        </div>
    </div>
);

const Divider = () => (
    <div className="border-t border-dashed border-gray-200 my-4" />
);

export default BookingSuccessCard;
