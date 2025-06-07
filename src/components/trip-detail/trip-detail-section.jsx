"use client";
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const TripDetailSection = ({ carData, bookingData }) => {
  const router = useRouter();
  const [mapsLoaded, setMapsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      setMapsLoaded(true);
    }
  }, []);

  if (!carData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-red-600">Kein Fahrtdaten gefunden</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Es wurden keine Fahrtdaten gefunden.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => router.push('/')} className="bg-orange-500 hover:bg-orange-600">
              Zurück zur Startseite
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }


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
                  <CardTitle className="text-xl mb-3">{car?.category}</CardTitle>
                  <CardTitle className="text-md mb-3">{car?.name}</CardTitle>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    {car?.features?.map((fea) => (
                      <li className="flex items-center gap-2">
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
                <p className="text-xl font-bold text-orange-500 w-full text-right">€{bookingData[car?.category]?.price}</p>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href={`/checkout/${car?.id}`}>Further</Link>
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
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Start:</span>
                <span className="font-medium">{bookingData?.from}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Goal:</span>
                <span className="font-medium">{bookingData?.to}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distance:</span>
                <span>{bookingData?.distance_km} km</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transfer Time:</span>
                <span>{bookingData?.estimated_travel_time}</span>
              </div>
              <Separator />
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-0 h-80">
              {mapsLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={bookingData?.startCoords}
                  zoom={7}
                >
                  <>
                    <Marker position={bookingData?.startCoords} label="A" />
                    <Marker position={bookingData?.endCoords} label="B" />
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