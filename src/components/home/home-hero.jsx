"use client";
import React, { useState } from 'react';
import MileageBooking from './booking/mileage-booking';
import HourlyBooking from './booking/hourly-booking';
import { useSelector } from 'react-redux';

function HomeHero() {
    const [tabs, setTabs] = useState("mileage");
    const { booking } = useSelector((state) => state);
    console.log(booking, 'booking')

    return (
        <section className="hero-section relative py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Your Reliable Airport Transfer in Frankfurt – Punctual, Comfortable, and Safe.
                    </h1>
                    <p className="text-white/90 mb-8">Easily and quickly book your transfer.</p>
                </div>
                <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg">
                    <div className='flex justify-between w-80 gap-4'>
                        <button
                            className={`${tabs === "mileage" ? "bg-orange-500" : "bg-black"} text-sm py-2 px-4 w-40 cursor-pointer rounded-2xl`}
                            onClick={() => setTabs("mileage")}>Mileage Booking</button>
                        <button
                            className={`${tabs === "hourly" ? "bg-orange-500" : "bg-black"} text-sm py-2 px-4 w-40 cursor-pointer rounded-2xl`}
                            onClick={() => setTabs("hourly")}>Hourly Booking</button>
                    </div>

                    {tabs === "mileage" && <MileageBooking />}
                    {tabs === "hourly" && <HourlyBooking />}
                </div>

            </div>
        </section>
    );
}

export default HomeHero;

