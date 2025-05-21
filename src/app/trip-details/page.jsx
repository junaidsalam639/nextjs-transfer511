"use client";
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SocialSidebar from '@/components/social-sidebar';
import TripDetailSection from '@/components/trip-detail/trip-detail-section';
import { useSearchParams } from 'next/navigation';

const TripDetailsPage = () => {
    const searchParams = useSearchParams();
    const search = JSON.parse(searchParams.get('data'));


    return (
        <div>
            <Header />
            <HeroSection
                title="Fahrtdetails"
                subtitle="Ihre Transferübersicht"
            />
            <TripDetailSection data={search} />
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default TripDetailsPage;