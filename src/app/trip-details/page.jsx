"use client";
import HeroSection from '@/components/hero-section';
import TripDetailSection from '@/components/trip-detail/trip-detail-section';
import { useSearchParams } from 'next/navigation';

const TripDetailsPage = () => {
    const searchParams = useSearchParams();
    const search = JSON.parse(searchParams.get('data'));


    return (
        <div>
            <HeroSection
                title="Fahrtdetails"
                subtitle="Ihre Transferübersicht"
            />
            <TripDetailSection data={search} />
        </div>
    );
};

export default TripDetailsPage;