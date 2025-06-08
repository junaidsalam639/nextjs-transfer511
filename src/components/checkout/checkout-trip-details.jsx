import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

const CheckoutTripDetails = ({ booking }) => {
    return (
        <>
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Trip Details</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Start:</span>
                        <span className="font-medium">{booking?.from}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Goal:</span>
                        <span className="font-medium">{booking?.to}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Distance:</span>
                        <span>{booking?.distance_km} km</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Transfer Time:</span>
                        <span>{booking?.estimated_travel_time}</span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default CheckoutTripDetails



