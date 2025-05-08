"use client";
import React from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle,  CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';
import { carData } from '@/lib/car-data';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const TripDetailSection = ({ data }) => {
  const router = useRouter();
  const [mapsLoaded, setMapsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      setMapsLoaded(true);
    }
  }, []);

  if (!data) {
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

  const {
    startAddress,
    endAddress,
    startCoords,
    endCoords,
    distance,
    pricePerKm,
    totalPrice,
    directions,
  } = data;



  return (
    <div className="space-y-8 py-20">
      <div className="container max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Fahrtübersicht</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Start:</span>
                <span className="font-medium">{startAddress}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ziel:</span>
                <span className="font-medium">{endAddress}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distanz:</span>
                <span>{distance} km</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Preis pro km:</span>
                <span>€{pricePerKm}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold text-orange-600">
                <span>Gesamtpreis:</span>
                <span>€{totalPrice}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-0 h-80">
              {mapsLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={startCoords}
                  zoom={7}
                >
                  {directions ? (
                    <DirectionsRenderer directions={directions} />
                  ) : (
                    <>
                      <Marker position={startCoords} label="A" />
                      <Marker position={endCoords} label="B" />
                    </>
                  )}
                </GoogleMap>
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {carData?.map((car, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow pt-0 pb-5">
              <CardContent className="p-0">
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <CardTitle className="text-xl mb-3">{car.title}</CardTitle>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <span>✓</span> 60 min Wartezeit (Flughafen)
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span> 15 min für andere Abholungen
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span> Kostenlose Stornierung (24h vorher)
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span> Gratis WLAN & Wasser
                    </li>
                  </ul>
                  <div className="flex justify-between text-sm mb-4">
                    <Badge variant="secondary">🧑‍🤝‍🧑 {car.seats} Sitze</Badge>
                    <Badge variant="secondary">🧳 {car.bags} Gepäck</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <p className="text-xl font-bold text-orange-500 w-full text-right">€{car.price}</p>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href={car.link}>Weiter</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetailSection;