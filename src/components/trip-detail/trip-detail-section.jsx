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
    router.push(`/checkout/${car?.id}`);
  }

  if (isLoading) return <> loading... </>

  return (
    <div className="space-y-8 py-20">
      <div className="container max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {carData?.map((car, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow pt-0 pb-5">
              <CardContent className="p-0">
                <img
                  src={`https://transfer511.webedevs.com/public/storage/${car?.image}`}
                  alt={car?.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <CardTitle className="text-xl mb-3">{car?.name}</CardTitle>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    {car?.features?.map((fea, idx) => (
                      <li className="flex items-center gap-2" key={idx}>
                        <span>✓</span> {fea}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between text-sm">
                    <Badge variant="secondary">🧑‍🤝‍🧑 {car?.passenger_capacity} Passenger</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <p className="text-xl font-bold text-orange-500 w-full text-right">€{booking[car?.category]?.price}</p>
                <Button
                  onClick={() => handlerFurther({ ...car, price: booking[car?.category]?.price })}
                  className="w-full bg-orange-500 hover:bg-orange-600">
                  Further
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
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

