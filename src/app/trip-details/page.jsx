import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SocialSidebar from '@/components/social-sidebar';
import TripDetailSection from '@/components/trip-detail/trip-detail-section';

const TripDetailsPage = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Trip Details"
                subtitle="Ihre Transferübersicht"
            />
            <TripDetailSection />
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default TripDetailsPage;

