"use client";
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import DistanceCalculator from '../distance-calculator';
import { GOOGLE_MAPS_API_KEY } from '@/lib/google-api-key';
import { Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

function HomeHero() {
    const distanceRef = useRef();
    const router = useRouter();

    const handleSearchClick = () => {
        if (distanceRef.current) {
            distanceRef.current.triggerSearch();
        }
    };

    const handleTripSearch = (tripDetails) => {
        router.push(`/trip-details?data=${JSON.stringify(tripDetails)}`);
    };

    return (
        <>
            <section className="hero-section relative py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Ihr Zuverlässiger Flughafentransfer In Frankfurt - Pünktlich, Komfortabel Und Sicher.
                        </h1>
                        <p className="text-white/90 mb-8">Buchen Sie Ihren Transfer einfach und schnell</p>
                    </div>

                    <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <DistanceCalculator
                                ref={distanceRef}
                                GOOGLE_MAPS_API_KEY={GOOGLE_MAPS_API_KEY}
                                onSearch={handleTripSearch}
                            />

                            <div className="md:col-span-4 col-span-1">
                                <label className="block text-sm font-medium mb-1">Wann?</label>
                                <div className="relative">
                                    <Input
                                        type="date"
                                        placeholder="Datum"
                                        className="pl-10" />
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="md:col-span-4 col-span-1">
                                <label className="block text-sm font-medium mb-1">Wann?</label>
                                <div className="relative">
                                    <Input
                                        type="time"
                                        placeholder="Uhrzeit"
                                        className="pl-10" />
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="md:col-span-4 col-span-1">
                                <label className="block text-sm font-medium mb-1">Suchen</label>
                                <Button
                                    onClick={handleSearchClick}
                                    className="bg-zinc-900 hover:bg-orange-500 text-white w-full">
                                    Suchen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeHero;