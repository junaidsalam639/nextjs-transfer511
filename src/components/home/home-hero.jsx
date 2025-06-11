"use client";
import React, { useState } from 'react';
import MileageBooking from './booking/mileage-booking';

function HomeHero() {
    const [tabs, setTabs] = useState("mileage");

    return (
        <section className="hero-section relative py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Your Reliable Airport Transfer in Frankfurt – Punctual, Comfortable, and Safe.
                    </h1>
                    <p className="text-white/90 mb-8">Easily and quickly book your transfer.</p>
                </div>
                <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg">
                    <div className='flex justify-between w-80 gap-2'>
                        <button
                            className={`${tabs === "mileage" ? "bg-orange-500" : "bg-black"} text-sm py-3 px-4 w-40 cursor-pointer rounded text-white`}
                            onClick={() => setTabs("mileage")}>Mileage Booking</button>
                        <button
                            className={`${tabs === "return" ? "bg-orange-500" : "bg-black"} text-sm py-3 px-4 w-40 cursor-pointer rounded text-white`}
                            onClick={() => setTabs("return")}>Return Booking</button>
                    </div>

                    <MileageBooking tabs={tabs} />
                </div>

            </div>
        </section>
    );
}

export default HomeHero;

