import HeroSection from "@/components/hero-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Count from "@/components/count"
import AboutText from "@/components/about/about-text"
import Header from "@/components/header"
import SocialSidebar from "@/components/social-sidebar"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Us | Transfer511",
  description: "Transfer511 is a family-run airport transfer service in Frankfurt, Germany. We offer reliable and comfortable transfers to and from the airport, with over 10 years of experience.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <HeroSection title="About" subtitle="Buchen Sie Ihren Transfer einfach und schnell" />
      <AboutText />
      <Count />
      <FAQSection />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  )
}
