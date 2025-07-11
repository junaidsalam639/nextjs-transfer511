"use client";
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';
import { useGetUserCarQuery } from '@/service/carApi';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectCarData } from '@/redux/selectCarSlice';
import { Skeleton } from '@/components/ui/skeleton';
import BookingSteps from '../web/booking-steps';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const TripDetailSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [mapsLoaded, setMapsLoaded] = React.useState(false);
  const { data, isLoading } = useGetUserCarQuery();
  const { booking } = useSelector((state) => state);
  const carData = data?.data;

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      setMapsLoaded(true);
    }
  }, []);

  const handlerFurther = (car) => {
    dispatch(setSelectCarData(car));
    router.push(`/contact-details`);
  }

  if (isLoading) return (
    <div className="space-y-8 py-4">
      <div className="container max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {[...Array(3)].map((_, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow py-0">
              <CardContent className="p-0">
                <Skeleton className="w-full h-48 rounded-t-lg" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-8 w-full mt-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/3" />
            </CardHeader>
            <Separator />
            <CardContent className="space-y-4">
              {[...Array(6)].map((_, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                  <Separator />
                </React.Fragment>
              ))}
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-0 h-80">
              <Skeleton className="h-full w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 py-4">
      <div className="container max-w-7xl mx-auto px-4 space-y-8">
        <BookingSteps activeStep={1} completedSteps={[0]} />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {carData?.map((car, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow py-0">
              <CardContent className="p-0">
                <img
                  src={`https://j46.e0c.mytemp.website/storage/${car?.image}`}
                  alt={car?.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <CardTitle className="text-xl mb-3">{car?.name}</CardTitle>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    {car?.features?.map((fea, idx) => (
                      <li className="flex items-start gap-2 text-black dark:text-white" key={idx}>
                        <span>✓</span> {fea}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between text-sm">
                    <Badge variant="secondary">🧑‍🤝‍🧑 {car?.passenger_capacity} Passenger</Badge>
                  </div>
                  <p className="text-xl font-bold text-orange-500 w-full text-right">€{booking[car?.category]?.price}</p>
                  <Button
                    onClick={() => handlerFurther({ ...car, price: booking[car?.category]?.price })}
                    className="w-full bg-orange-500 hover:bg-orange-600">
                    Further
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Trip Details</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-4 px-4">
              <div className="flex justify-between">
                <span>Pickup Address:</span>
                <span className="font-medium">{booking?.from}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Destination Address:</span>
                <span className="font-medium">{booking?.to}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Distance:</span>
                <span>{booking?.distance_km} km</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Distance Time:</span>
                <span>{booking?.estimated_travel_time}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Pickup Date:</span>
                <span>{booking?.pickup_date}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Pickup Time:</span>
                <span>{booking?.pickup_time}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-0 h-80">
              {mapsLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={booking?.startCoords}
                  zoom={7}
                >
                  <>
                    <Marker position={booking?.startCoords} label="A" />
                    <Marker position={booking?.endCoords} label="B" />
                  </>
                </GoogleMap>
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TripDetailSection;

