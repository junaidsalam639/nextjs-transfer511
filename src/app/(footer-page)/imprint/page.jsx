import Footer from '@/components/web/footer';
import Header from '@/components/web/header';
import HeroSection from '@/components/web/hero-section';
import SocialSidebar from '@/components/web/social-sidebar';
import { CalendarDays, Mail, Map, Phone, User, Wheat } from 'lucide-react';


const ImprintPage = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Imprint"
                subtitle="Book your transfer easily and quickly"
            />
            <section className="imprint-page p-6 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Imprint</h1>
                <p className="text-sm mb-6">(Information according to § 5 TMG)</p>

                <div className="space-y-4 text-base leading-relaxed">
                    <div className="flex items-start gap-3">
                        <Map className="mt-1" />
                        <div>
                            <strong>FRA-Transfer</strong><br />
                            Zentmarkweg 39<br />
                            60489 Frankfurt am Main<br />
                            Germany
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone />
                        <span>Phone: <a href="tel:+4917657844670">+49 176 57844670</a></span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Wheat />
                        <span>WhatsApp: <a href="https://wa.me/4917657844670" target="_blank" rel="noopener noreferrer">+49 176 57844670</a></span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Mail />
                        <span>Email: <a href="mailto:info@fra-transfer.de">info@fra-transfer.de</a></span>
                    </div>

                    <div className="flex items-center gap-3">
                        <User />
                        <span>Managing Director: Munib Afzal</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <CalendarDays />
                        <span>VAT ID No.: DE298295897</span>
                    </div>
                </div>
            </section>
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default ImprintPage;

