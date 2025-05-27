import { CalendarCheck, ThumbsUp, Bike } from "lucide-react"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import HomeHero from "@/components/home/home-hero"
import HomeYourAdvantages from "@/components/home/home-your-advantages"
import HomeHowItsWork from "@/components/home/home-how-its-work"
import OurFleet from "@/components/our-fleet"
import HomeChoose from "@/components/home/home-choose"
import HomeTestimonial from "@/components/home/home-testimonial"
import Count from "@/components/count"
import Header from "@/components/header"
import SocialSidebar from "@/components/social-sidebar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Home | Transfer511",
  description: "Transfer511 ist Ihr zuverlässiger Partner für Flughafentransfers in Deutschland. Genießen Sie einen stressfreien und komfortablen Transfer zu Ihrem Zielort.",
}

export default function Home() {

  const steps = [
    {
      number: "01",
      icon: <Bike className="w-12 h-12 text-primary" />,
      title: "Send Request",
      description: "(Online, Phone, WhatsApp)",
    },
    {
      number: "02",
      icon: <CalendarCheck className="w-12 h-12 text-primary" />,
      title: "Booking Confirmation",
      description: "(Quick response guaranteed)",
    },
    {
      number: "03",
      icon: <ThumbsUp className="w-12 h-12 text-primary" />,
      title: "Travel Comfortably",
      description: "(We handle everything)",
    },
  ];

  const carData = [
    {
      title: 'Limousine',
      subtitle: 'Standard motor Cars',
      image: '/assets/images/cars/card-one.jpeg',
      passengers: 4,
      luggage: 3,
    },
    {
      title: 'Station Wagon',
      subtitle: 'Fit, Brutale',
      image: '/assets/images/cars/card-two.webp',
      passengers: 4,
      luggage: 4,
    },
    {
      title: '7-Seater',
      subtitle: 'Standard motor Cars',
      image: '/assets/images/cars/card-three.jpeg',
      passengers: 7,
      luggage: 5,
    },
    {
      title: '9-Seater',
      subtitle: 'Fit, Brutale',
      image: '/assets/images/cars/card-four.jpeg',
      passengers: 9,
      luggage: 7,
    },
  ];

  return (
    <>
      <Header />
      <HomeHero />
      <HomeYourAdvantages />
      <Count />
      <HomeHowItsWork steps={steps} />
      <OurFleet carData={carData} />
      <HomeChoose />
      <FAQSection />
      <HomeTestimonial />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  )
}
