import BookingSuccessCard from '@/components/booking-sccess/booking-success-card';
import Footer from '@/components/web/footer';
import Header from '@/components/web/header';
import HeroSection from '@/components/web/hero-section';
import SocialSidebar from '@/components/web/social-sidebar';

const SuccessPage = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Booking Success"
                subtitle="Book your transfer easily and quickly"
            />
            <BookingSuccessCard />
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default SuccessPage;

