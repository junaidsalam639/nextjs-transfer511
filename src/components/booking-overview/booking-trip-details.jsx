import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

const BookingTripDetails = ({ booking }) => {
    return (
        <>
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Trip Details</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Pickup Address:</span>
                        <span className="font-medium">{booking?.from}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Destination Address:</span>
                        <span className="font-medium">{booking?.to}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Distance:</span>
                        <span>{booking?.distance_km} km</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Distance Time:</span>
                        <span>{booking?.estimated_travel_time}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Pickup Date:</span>
                        <span>{booking?.pickup_date}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Pickup Time:</span>
                        <span>{booking?.pickup_time}</span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default BookingTripDetails



