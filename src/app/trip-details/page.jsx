"use client";
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SocialSidebar from '@/components/social-sidebar';
import TripDetailSection from '@/components/trip-detail/trip-detail-section';
import { useGetCarQuery } from '@/service/carApi';
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';

const TripDetailsPage = () => {
    const { data } = useGetCarQuery();
    const { booking } = useSelector((state) => state);
    console.log({ booking, data: data?.data }, 'booking_data')

    const searchParams = useSearchParams();
    const search = JSON.parse(searchParams.get('data'));


    return (
        <div>
            <Header />
            <HeroSection
                title="Trip Details"
                subtitle="Ihre Transferübersicht"
            />
            <TripDetailSection carData={data?.data} bookingData={booking} />
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default TripDetailsPage;