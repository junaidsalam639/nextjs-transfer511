import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SocialSidebar from '@/components/social-sidebar';
import { cn } from '@/lib/utils';

const TermsPage = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Terms and Conditions"
                subtitle="Ihre Transferübersicht"
            />
            <div className={cn("max-w-4xl mx-auto px-4 py-8 space-y-8")}>
                <h1 className="text-3xl font-bold mb-6">General Terms and Conditions of Business</h1>

                <p className='text-sm'>
                    Welcome to <strong>Transfer511</strong>! These terms and conditions outline the rules and regulations for the use of Transfer511's Website, located at
                    <a href="https://transfer511.com" className="text-blue-600 underline ml-1" target="_blank" rel="noopener noreferrer">
                        https://transfer511.com
                    </a>
                </p>

                <p className='text-sm'>
                    By accessing this website, we assume you accept the Terms and Conditions. Please do not continue to use Transfer511 if you do not agree to accept all of the terms and conditions stated on this page.
                </p>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">1. Scope</h2>
                    <p className='text-sm'>
                        These Terms and Conditions govern all legal relationships between Transfer511 and its customers. They supersede all previous Terms and Conditions and apply exclusively to these customers. Any other Terms and Conditions are expressly rejected.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">2. Conclusion of Contract</h2>
                    <p className='text-sm'>
                        The contract is only concluded upon sending a confirmation email from Transfer511. There is no obligation to conclude a contract under any circumstances.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">3. Booking Requests</h2>
                    <p className='text-sm'>
                        Transfer511 accepts booking requests only through its website. Requesters must provide their full name, the number of passengers, and the number, size, weight, and type of luggage when making their request. Transfer511 reserves the right to reject booking requests due to the number of passengers or the size, weight, or type of luggage.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">4. Reasons for Termination by Transfer511</h2>
                    <p className='text-sm'>
                        Transfer511 reserves the right to cancel the order even after confirmation if the number of passengers and/or luggage is significantly higher than agreed.
                        This includes situations where child seats were not pre-informed, passengers/luggage are late at pickup (15 mins), or in airport pickups with delays exceeding 60 minutes.
                        Cancellation is also possible in cases of intoxication, drug use, contagious diseases, aggression, or offensive behavior.
                        In such cases, Transfer511 may still charge the agreed fee unless the customer proves lesser damage.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">5. Cancellation by the Customer / Costs</h2>
                    <p className='text-sm'>
                        Hourly rentals and one-way transfers can be canceled up to 4 hours before pickup. Late cancellations are fully chargeable unless the customer proves less damage.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">6. Customer and Passenger Obligations</h2>
                    <p className='text-sm'>
                        Customers/passengers must follow driver instructions, avoid unsafe or unclean behavior, and truthfully declare luggage contents.
                        Pickup times should consider delays or traffic to avoid rushed journeys.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">7. Payment</h2>
                    <p className='text-sm'>
                        Payment methods include PayPal, cash, credit card, or invoice (for verified customers). Payments are accepted in euros only.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">8. Routes / Surcharges</h2>
                    <p className='text-sm'>
                        Transfer511 selects the fastest route depending on traffic. Extra charges apply for stopovers, route deviations, or delays.
                        Delay surcharge: €15 per 15 minutes after standard waiting times.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">9. Limitation of Liability</h2>
                    <p className='text-sm'>
                        Transfer511 is liable only for essential contractual obligations or damage due to intent/gross negligence.
                        No liability for traffic-related delays. Product liability rights remain unaffected.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-2 font-semibold">10. Applicable Law / Place of Jurisdiction</h2>
                    <p className='text-sm'>
                        German law applies. For EU consumers, mandatory local consumer rights remain valid.
                        For merchants, the place of jurisdiction is the registered office of Transfer511. Contract language: German.
                    </p>
                </section>
            </div>
            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default TermsPage;

