"use client"
import {
    Calendar,
    CalendarCurrentDate,
    CalendarMonthView,
    CalendarNextTrigger,
    CalendarPrevTrigger,
    CalendarTodayTrigger,
    CalendarViewTrigger,
} from "./full-calendar"
import { useGetBookingQuery } from "@/service/bookingApi"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import BookingList from "../booking-list"

export function ShowBookingCalendar() {
    const { data, isLoading } = useGetBookingQuery();
    const bookingData = data?.data || []
    const [selectedBooking, setSelectedBooking] = useState([])

    const bookingEvents = bookingData?.map((booking) => ({
        id: booking?.id.toString(),
        title: `${booking?.first_name || "Booking"} - ${booking?.to_location || ""}`,
        start: new Date(booking?.pickup_date),
        end: new Date(booking?.pickup_date),
        color: "blue",
    }));

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-lg">Loading bookings...</div>
            </div>
        )
    }

    const handleDateClick = (date) => {
        const bookingsForDate = bookingData?.filter((booking) => new Date(booking?.pickup_date).toDateString() === date?.toDateString());
        setSelectedBooking(bookingsForDate)
    }

    return (
        <>
            <Calendar events={bookingEvents}>
                <div className="h-dvh p-14 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                        <CalendarViewTrigger view="month" className="aria-[current=true]:bg-accent">
                            Month
                        </CalendarViewTrigger>

                        <span className="flex-1" />

                        <CalendarCurrentDate />

                        <CalendarPrevTrigger>
                            <ChevronLeft size={20} />
                            <span className="sr-only">Previous</span>
                        </CalendarPrevTrigger>

                        <CalendarTodayTrigger>Today</CalendarTodayTrigger>

                        <CalendarNextTrigger>
                            <ChevronRight size={20} />
                            <span className="sr-only">Next</span>
                        </CalendarNextTrigger>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <CalendarMonthView onDateClick={handleDateClick} />
                    </div>
                </div>
            </Calendar>

            <BookingList selectedBooking={selectedBooking} />
        </>
    )
}


