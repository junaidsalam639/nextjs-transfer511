import Footer from '@/components/web/footer';
import Header from '@/components/web/header';
import HeroSection from '@/components/web/hero-section';
import SocialSidebar from '@/components/web/social-sidebar';
import TripDetailSection from '@/components/trip-detail/trip-detail-section';

const TripDetailsPage = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Trip Details"
                subtitle="Book your transfer easily and quickly"
            />
            <TripDetailSection />
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default TripDetailsPage;

