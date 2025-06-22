import HeroSection from "@/components/hero-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Count from "@/components/count"
import AboutText from "@/components/about/about-text"
import Header from "@/components/header"
import SocialSidebar from "@/components/social-sidebar"
import Footer from "@/components/footer"

export const metadata = {
  title: 'About FRA-Transfer - Our Vehicle Transport Services',
  description: 'Learn about our company, mission, and why we are the trusted choice for vehicle transportation services.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <HeroSection title="About Us" subtitle="Book your transfer easily and quickly" />
      <AboutText />
      <Count />
      <FAQSection />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  )
}
