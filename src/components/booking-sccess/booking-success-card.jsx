"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, MapPin, Phone, Mail, User, 
  DollarSign, Clock, Car, Info, Navigation, Luggage,
  CreditCard, BadgeCheck, CalendarDays
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import BookingSteps from "../web/booking-steps";
import { Badge } from "@/components/ui/badge";

const BookingSuccessCard = () => {
    const { successBooking } = useSelector((state) => state);

    if (!successBooking) return null;

    return (
        <div className="max-w-4xl mx-auto my-10 px-4 space-y-6">
            <BookingSteps activeStep={4} completedSteps={[0, 1, 2, 3]} />
            <Card className="shadow-sm dark:shadow-none">
                <CardHeader className="text-center space-y-4 pb-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                        <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">
                        Booking Confirmed!
                    </CardTitle>
                    <p className="text-muted-foreground">
                        Booking ID: <span className="font-mono font-medium">{successBooking.booking_id || "N/A"}</span>
                    </p>
                </CardHeader>

                <CardContent className="space-y-6">
                    <Section 
                        title="Customer Information" 
                        icon={<User className="h-4 w-4" />}
                    >
                        <DetailGrid>
                            <Detail icon={<User className="h-4 w-4" />} 
                                   label="Name" 
                                   value={`${successBooking.first_name} ${successBooking.last_name}`} />
                            <Detail icon={<Phone className="h-4 w-4" />} 
                                   label="Phone" 
                                   value={successBooking.phone} />
                            <Detail icon={<Mail className="h-4 w-4" />} 
                                   label="Email" 
                                   value={successBooking.email} />
                        </DetailGrid>
                    </Section>

                    <Separator />

                    <Section 
                        title="Trip Details" 
                        icon={<Navigation className="h-4 w-4" />}
                    >
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Pickup Location</p>
                                    <p className="font-medium">{successBooking.from_location}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Dropoff Location</p>
                                    <p className="font-medium">{successBooking.to_location}</p>
                                </div>
                            </div>
                            
                            <DetailGrid>
                                <Detail icon={<CalendarDays className="h-4 w-4" />} 
                                       label="Pickup Date & Time" 
                                       value={`${successBooking.pickup_date} at ${successBooking.pickup_time}`} />
                                
                                {successBooking.trip_type === "return" && (
                                    <Detail icon={<CalendarDays className="h-4 w-4" />} 
                                           label="Return Date & Time" 
                                           value={`${successBooking.dropoff_date} at ${successBooking.dropoff_time}`} />
                                )}
                                
                                <Detail icon={<Clock className="h-4 w-4" />} 
                                       label="Estimated Duration" 
                                       value={successBooking.estimated_travel_time} />
                                
                                <Detail icon={<Car className="h-4 w-4" />} 
                                       label="Vehicle Category" 
                                       value={successBooking.category} />
                                
                                <Detail icon={<Luggage className="h-4 w-4" />} 
                                       label="Trip Type" 
                                       value={successBooking.trip_type} />
                                
                                <Detail icon={<Info className="h-4 w-4" />} 
                                       label="Distance" 
                                       value={`${successBooking.distance_km} km`} />
                            </DetailGrid>
                        </div>
                    </Section>

                    <Separator />

                    <Section 
                        title="Payment Summary" 
                        icon={<DollarSign className="h-4 w-4" />}
                    >
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <DetailGrid>
                                <Detail label="Base Fare" value={`€ ${successBooking.price}`} />
                                <Detail label="Rate per KM" value={`€ ${successBooking.rate_per_km}/km`} />
                                {successBooking.coupon_id && (
                                    <Detail label="Coupon Applied" value={successBooking.coupon_id} />
                                )}
                                <Detail label="Discount" 
                                       value={successBooking.coupon_id ? `-€ ${successBooking.price - successBooking.price_after_coupon}` : "€ 0"} />
                            </DetailGrid>
                            
                            <div className="mt-4 pt-4 border-t flex justify-between items-center">
                                <span className="font-semibold">Total Amount</span>
                                <span className="text-2xl font-bold">
                                    € {successBooking.price_after_coupon}
                                </span>
                            </div>
                            
                            <Detail icon={<CreditCard className="h-4 w-4" />} 
                                   label="Payment Method" 
                                   value={successBooking.payment_method || "Cash"} 
                                   className="mt-4" />
                        </div>
                    </Section>

                    <Separator />

                    <Section 
                        title="Booking Status" 
                        icon={<BadgeCheck className="h-4 w-4" />}
                    >
                        <Badge 
                            variant={successBooking.status === 0 ? "secondary" : "default"}
                            className={`gap-2 text-sm font-normal ${
                                successBooking.status === 0 
                                    ? "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200" 
                                    : "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200"
                            }`}
                        >
                            {successBooking.status === 0 ? (
                                <>
                                    <Clock className="h-4 w-4" />
                                    Pending Confirmation
                                </>
                            ) : (
                                <>
                                    <CheckCircle2 className="h-4 w-4" />
                                    Confirmed
                                </>
                            )}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                            {successBooking.status === 0 
                                ? "Your booking is being processed" 
                                : "Your booking is confirmed"}
                        </p>
                    </Section>
                </CardContent>
            </Card>
        </div>
    );
};

const Section = ({ title, children, icon }) => (
    <div>
        <div className="flex items-center gap-2 mb-3">
            {icon}
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        {children}
    </div>
);

const DetailGrid = ({ children }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
    </div>
);

const Detail = ({ label, value, icon, className = "" }) => (
    <div className={`flex items-start gap-3 ${className}`}>
        {icon && <div className="mt-0.5 text-muted-foreground">{icon}</div>}
        <div className="flex-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    </div>
);

export default BookingSuccessCard;

