import HeroSection from "@/components/web/hero-section"
import FAQSection from "@/components/web/faq-section"
import CTASection from "@/components/web/cta-section"
import Count from "@/components/web/count"
import AboutText from "@/components/about/about-text"
import Header from "@/components/web/header"
import SocialSidebar from "@/components/web/social-sidebar"
import Footer from "@/components/web/footer"

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
