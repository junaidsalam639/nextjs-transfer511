import CheckoutForm from '@/components/checkout/checkout-form';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SocialSidebar from '@/components/social-sidebar';
import { carData } from '@/lib/car-data';


const metadata = {
    title: 'Checkout | Transfer511',
    description: 'Transfer511 is a family-run airport transfer service in Frankfurt, Germany. We offer reliable and comfortable transfers to and from the airport, with over 10 years of experience.',
};

const CheckoutPage = ({ params }) => {
    const { id } = params;
    const filterCar = carData?.find((car) => car.id === Number(id));
    return (
        <div>
            <Header />
            <HeroSection
                title="Checkout"
                subtitle="Buchen Sie Ihren Transfer einfach und schnell"
            />
            <CheckoutForm data={filterCar} />
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default CheckoutPage;