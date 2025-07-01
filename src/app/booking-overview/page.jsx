import BookingOverviewForm from '@/components/booking-overview/booking-overview-form';
import Footer from '@/components/web/footer';
import Header from '@/components/web/header';
import HeroSection from '@/components/web/hero-section';
import SocialSidebar from '@/components/web/social-sidebar';

export const metadata = {
    title: 'Booking | FRA-Transfer',
    description: 'FRA-Transfer is a family-run airport transfer service in Frankfurt, Germany. We offer reliable and comfortable transfers to and from the airport, with over 10 years of experience.',
};

const BookingOverviewPage = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Booking Overview"
                subtitle="Book your transfer easily and quickly"
            />
            <BookingOverviewForm />
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default BookingOverviewPage;

