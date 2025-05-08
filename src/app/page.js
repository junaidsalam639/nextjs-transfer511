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

export const metadata = {
  title: "Home | Transfer511",
  description: "Transfer511 ist Ihr zuverlässiger Partner für Flughafentransfers in Deutschland. Genießen Sie einen stressfreien und komfortablen Transfer zu Ihrem Zielort.",
}

export default function Home() {

  const steps = [
    {
      number: "01",
      icon: <Bike className="w-12 h-12 text-primary" />,
      title: "Anfrage stellen",
      description: "Online, Telefonisch Oder Per WhatsApp",
    },
    {
      number: "02",
      icon: <CalendarCheck className="w-12 h-12 text-primary" />,
      title: "Buchung bestätigen",
      description: "Wir Garantieren Eine Schnelle Rückmeldung",
    },
    {
      number: "03",
      icon: <ThumbsUp className="w-12 h-12 text-primary" />,
      title: "Entspannt reisen",
      description: "Wir Kümmern Uns Um Den Rest!",
    },
  ];

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
      <HomeHero />
      <HomeYourAdvantages />
      <Count />
      <HomeHowItsWork steps={steps} />
      <OurFleet carData={carData} />
      <HomeChoose />
      <FAQSection />
      <HomeTestimonial />
      <CTASection />
    </>
  )
}
