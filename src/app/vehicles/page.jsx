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

  return (
    <>
      <Header />
      <HeroSection title="Vehicle" subtitle="Book your transfer easily and quickly" />
      <OurFleet />
      <FAQSection />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  )
}
