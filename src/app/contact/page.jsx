import HeroSection from "@/components/web/hero-section";
import CTASection from "@/components/web/cta-section";
import ContactForm from "@/components/contact/contact-form";
import Header from "@/components/web/header";
import SocialSidebar from "@/components/web/social-sidebar";
import Footer from "@/components/web/footer";

export const metadata = {
  title: "Contact FRA-Transfer - Get a Free Quote",
  description:
    "Contact our team for vehicle transport inquiries and get a free, no-obligation quote.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <HeroSection
        title="Contact"
        subtitle="Book your transfer easily and quickly"
      />
      <ContactForm />
      <CTASection />
      <SocialSidebar />
      <Footer />
    </>
  );
}
