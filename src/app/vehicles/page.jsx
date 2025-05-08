import HeroSection from "@/components/hero-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import OurFleet from "@/components/our-fleet"


export const metadata = {
  title: "Vehicles | Transfer511",
  description: "Transfer511 is a family-run airport transfer service in Frankfurt, Germany. We offer reliable and comfortable transfers to and from the airport, with over 10 years of experience.",
}

export default function VehiclesPage() {
  const carData = [
    {
      title: 'LIMOUSINE',
      subtitle: 'Standard motor Cars',
      image: '/assets/images/cars/card-one.jpeg',
      passengers: 4,
      luggage: 3,
    },
    {
      title: 'KOMBI',
      subtitle: 'Fit, Brutale',
      image: '/assets/images/cars/card-two.webp',
      passengers: 4,
      luggage: 4,
    },
    {
      title: '7-SITZER',
      subtitle: 'Standard motor Cars',
      image: '/assets/images/cars/card-three.jpeg',
      passengers: 7,
      luggage: 5,
    },
    {
      title: '9-SITZER',
      subtitle: 'Fit, Brutale',
      image: '/assets/images/cars/card-four.jpeg',
      passengers: 9,
      luggage: 7,
    },
  ];

  return (
    <>
      <HeroSection title="Vehicle" subtitle="Buchen Sie Ihren Transfer einfach und schnell" />
      <OurFleet carData={carData} />
      <FAQSection />
      <CTASection />
    </>
  )
}
