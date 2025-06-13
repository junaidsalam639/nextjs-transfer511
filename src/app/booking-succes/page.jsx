import BookingSuccessCard from '@/components/booking-sccess/booking-success-card';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SocialSidebar from '@/components/social-sidebar';

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

