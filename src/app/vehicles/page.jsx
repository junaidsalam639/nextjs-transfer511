import HeroSection from "@/components/web/hero-section"
import FAQSection from "@/components/web/faq-section"
import CTASection from "@/components/web/cta-section"
import OurFleet from "@/components/web/our-fleet"
import Header from "@/components/web/header"
import SocialSidebar from "@/components/web/social-sidebar"
import Footer from "@/components/web/footer"


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
