import HeroSection from "@/components/hero-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import OurFleet from "@/components/our-fleet"
import Header from "@/components/header"
import SocialSidebar from "@/components/social-sidebar"
import Footer from "@/components/footer"


export const metadata = {
  title: 'Vehicle Transport Options | FRA-Transfer',
  description: 'Explore our range of vehicle transport services for cars, trucks, motorcycles, and more.',
  alternates: {
    canonical: '/vehicles',
  },
}


export default function VehiclesPage() {
  const carData = [
    {
      title: 'Standart class',
      subtitle: 'Standard motor Cars',
      image: '/assets/images/cars/card-one.jpeg',
      passengers: 4,
      luggage: 3,
    },
    {
      title: 'Business class',
      subtitle: 'Fit, Brutale',
      image: '/assets/images/cars/card-two.webp',
      passengers: 4,
      luggage: 4,
    },
    {
      title: 'Economy Van',
      subtitle: 'Standard motor Cars',
      image: '/assets/images/cars/card-three.jpeg',
      passengers: 7,
      luggage: 5,
    },
    {
      title: 'Van class',
      subtitle: 'Fit, Brutale',
      image: '/assets/images/cars/card-four.jpeg',
      passengers: 9,
      luggage: 7,
    },
  ];

  return (
    <>
      <Header />
      <HeroSection title="Vehicle" subtitle="Book your transfer easily and quickly" />
      <OurFleet carData={carData} />
      <FAQSection />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  )
}
