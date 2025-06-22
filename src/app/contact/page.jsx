import HeroSection from "@/components/hero-section"
import CTASection from "@/components/cta-section"
import ContactForm from "@/components/contact/contact-form"
import Header from "@/components/header"
import SocialSidebar from "@/components/social-sidebar"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Contact FRA-Transfer - Get a Free Quote',
  description: 'Contact our team for vehicle transport inquiries and get a free, no-obligation quote.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <HeroSection title="Contact" subtitle="Book your transfer easily and quickly" />
      <ContactForm />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  )
}
