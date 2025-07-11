"use client";
import React, { useState } from 'react';
import MileageBooking from './booking/mileage-booking';
import { Button } from '../ui/button';
import Link from 'next/link';

function HomeHero() {
    const [tabs, setTabs] = useState("mileage");

    return (
        <section className="hero-section relative py-12 md:py-20" id='home'>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">
                        Your Reliable Airport FRA-Transfer in Frankfurt – Punctual, Comfortable, and Safe.
                    </h1>
                    <p className="text-white/90 my-4">Easily and quickly book your transfer.</p>
                    <Link
                        href="tel:+4917657844670"
                        target="_blank"
                        className="hover:bg-zinc-900 bg-orange-500 text-white py-3 px-6 rounded-lg transition-colors duration-300">
                        +49 176 57844670
                    </Link>
                </div>
                <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg mt-6">
                    <div className='flex md:flex-row flex-col justify-between md:w-80 w-full gap-2'>
                        <button
                            className={`${tabs === "mileage" ? "bg-orange-500" : "bg-black"} text-sm py-3 px-4 md:w-40 w-full cursor-pointer rounded text-white`}
                            onClick={() => setTabs("mileage")}>Mileage Booking</button>
                        <button
                            className={`${tabs === "return" ? "bg-orange-500" : "bg-black"} text-sm py-3 px-4 md:w-40 w-full cursor-pointer rounded text-white`}
                            onClick={() => setTabs("return")}>Return Booking</button>
                    </div>
                    <MileageBooking tabs={tabs} />
                </div>

            </div>
        </section>
    );
}

export default HomeHero;

