import ContactDetailsForm from '@/components/contact-details/contact-details-form';
import Footer from '@/components/web/footer';
import Header from '@/components/web/header';
import HeroSection from '@/components/web/hero-section';
import SocialSidebar from '@/components/web/social-sidebar';

export const metadata = {
    title: 'Contact | FRA-Transfer',
    description: 'FRA-Transfer is a family-run airport transfer service in Frankfurt, Germany. We offer reliable and comfortable transfers to and from the airport, with over 10 years of experience.',
};

const ContactDetailsPage = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Contact Details"
                subtitle="Book your transfer easily and quickly"
            />
            <ContactDetailsForm />
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default ContactDetailsPage;

