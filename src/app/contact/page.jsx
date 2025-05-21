import HeroSection from "@/components/hero-section"
import CTASection from "@/components/cta-section"
import ContactForm from "@/components/contact/contact-form"
import Header from "@/components/header"
import SocialSidebar from "@/components/social-sidebar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contact Us | Transfer511",
  description: "Transfer511 is a family-run airport transfer service in Frankfurt, Germany. We offer reliable and comfortable transfers to and from the airport, with over 10 years of experience.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <HeroSection title="Contact" subtitle="Buchen Sie Ihren Transfer einfach und schnell" />
      <ContactForm />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  )
}
