import HomeChoose from "@/components/home/home-choose";
import HomeHero from "@/components/home/home-hero";
import HomeHowItsWork from "@/components/home/home-how-its-work";
import HomeTestimonial from "@/components/home/home-testimonial";
import HomeYourAdvantages from "@/components/home/home-your-advantages";
import Count from "@/components/web/count";
import CTASection from "@/components/web/cta-section";
import FAQSection from "@/components/web/faq-section";
import Header from "@/components/web/header";
import OurFleet from "@/components/web/our-fleet";
import SocialSidebar from "@/components/web/social-sidebar";
import { CalendarCheck, ThumbsUp, Bike } from "lucide-react"
import { Footer } from "react-day-picker";

export const metadata = {
  title: 'Vehicle Transport Services | FRA-Transfer',
  description: 'Nationwide vehicle transportation services. Get a free quote for your car shipping needs today!',
  alternates: {
    canonical: '/',
  },
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

  return (
    <>
      <Header />
      <HomeHero />
      <HomeYourAdvantages />
      <Count />
      <HomeHowItsWork steps={steps} />
      <OurFleet />
      <HomeChoose />
      <FAQSection />
      <HomeTestimonial />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  )
}
