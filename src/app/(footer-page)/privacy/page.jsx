import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SocialSidebar from '@/components/social-sidebar';
import { cn } from '@/lib/utils';

const PrivacyPolicyPage = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Privacy Policy"
                subtitle="Book your transfer easily and quickly"
            />

            <div className={cn("max-w-4xl mx-auto px-4 py-8 space-y-8")}>
                <h1 className="text-3xl font-bold mb-6 border-b pb-2">Privacy Policy</h1>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">1. Preamble</h2>
                    <p className="mb-4 text-sm">
                        With the following privacy policy, we would like to inform you about which types of your personal data (hereinafter also referred to as "data") we process, for what purposes, and to what extent. This privacy policy applies to all processing of personal data carried out by us, both in the context of providing our services and in particular on our websites, in mobile applications, and within external online presences, such as our social media profiles (hereinafter collectively referred to as the "online offering").
                    </p>
                    <p className='text-sm'>
                        The terms used are not gender-specific. As of: January 9, 2024
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">2. Person Responsible</h2>
                    <div>
                        <p className='text-sm'>
                            <strong>Muhammad Afzal</strong><br />
                            Zentmarkweg 39<br />
                            60489 Frankfurt am Main<br />
                            Email: <a href="mailto:info@transfer511.com" className="text-blue-600 hover:underline">info@transfer511.com</a><br />
                            Telephone: <a href="tel:+4917657844670" className="text-blue-600 hover:underline">+4917657844670</a>
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">3. Overview of Processing</h2>

                    <div className="mb-6">
                        <h3 className="font-medium mb-2">Types of data processed:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li className='text-sm'>Inventory data (e.g., names, addresses)</li>
                            <li className='text-sm'>Payment details</li>
                            <li className='text-sm'>Location data</li>
                            <li className='text-sm'>Contact details (e.g., email, phone numbers)</li>
                            <li className='text-sm'>Content data (e.g., text entries, photographs, videos)</li>
                            <li className='text-sm'>Contract data (e.g., contract object, duration, customer category)</li>
                            <li className='text-sm'>Usage data (e.g., websites visited, interest in content, access times)</li>
                            <li className='text-sm'>Meta/communication data (e.g., device information, IP addresses)</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-medium mb-2">Categories of data subjects:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li className='text-sm'>Customers</li>
                            <li className='text-sm'>Interested parties</li>
                            <li className='text-sm'>Communication partners</li>
                            <li className='text-sm'>Users (e.g., website visitors, users of online services)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Purposes of processing:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li className='text-sm'>Provision of contractual services and fulfillment of contractual obligations</li>
                            <li className='text-sm'>Contact requests and communication</li>
                            <li className='text-sm'>Security measures</li>
                            <li className='text-sm'>Direct marketing</li>
                            <li className='text-sm'>Reach measurement</li>
                            <li className='text-sm'>Tracking</li>
                            <li className='text-sm'>Conversion measurement</li>
                            <li className='text-sm'>Managing and responding to inquiries</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">4. Relevant Legal Bases</h2>
                    <p className="mb-4 text-sm">
                        Under the General Data Protection Regulation (GDPR), we process personal data in accordance with the following legal bases:
                    </p>
                    <div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className='text-sm'>
                                <strong>Consent (Article 6 (1) (a) GDPR)</strong> - The data subject has given consent to the processing of their personal data for one or more specific purposes.
                            </li>
                            <li className='text-sm'>
                                <strong>Contractual performance (Article 6 (1) (b) GDPR)</strong> - Processing is necessary for the performance of a contract to which the data subject is party or to take steps at the request of the data subject prior to entering into a contract.
                            </li>
                            <li className='text-sm'>
                                <strong>Legal obligation (Article 6 (1) (c) GDPR)</strong> - Processing is necessary for compliance with a legal obligation to which we are subject.
                            </li>
                            <li className='text-sm'>
                                <strong>Legitimate interests (Article 6 (1) (f) GDPR)</strong> - Processing is necessary for the purposes of our legitimate interests or those of a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">5. Security Measures</h2>
                    <p className="mb-4 text-sm">
                        We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
                    </p>
                    <div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className='text-sm'>Pseudonymization and encryption of personal data</li>
                            <li className='text-sm'>Measures to ensure confidentiality, integrity, availability and resilience of systems</li>
                            <li className='text-sm'>Procedures for regular testing and evaluation of effectiveness</li>
                            <li className='text-sm'>TLS/SSL encryption for data transmission</li>
                            <li className='text-sm'>Access controls and authentication mechanisms</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">6. Data Subject Rights</h2>
                    <p className="mb-4 text-sm">
                        Under GDPR, you have the following rights regarding your personal data:
                    </p>
                    <div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className='text-sm'><strong>Right of access</strong> - You may request copies of your personal data</li>
                            <li className='text-sm'><strong>Right to rectification</strong> - You may request correction of inaccurate data</li>
                            <li className='text-sm'><strong>Right to erasure</strong> - You may request deletion under certain circumstances</li>
                            <li className='text-sm'><strong>Right to restriction of processing</strong> - You may request limited processing under certain conditions</li>
                            <li className='text-sm'><strong>Right to data portability</strong> - You may request transfer of your data to another organization</li>
                            <li className='text-sm'><strong>Right to object</strong> - You may object to certain processing activities</li>
                            <li className='text-sm'><strong>Right to withdraw consent</strong> - Where processing is based on consent</li>
                            <li className='text-sm'><strong>Right to lodge a complaint</strong> - With a supervisory authority</li>
                        </ul>
                    </div>
                    <p className="mt-4">
                        To exercise these rights, please contact us using the details provided in section 2.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">7. Use of Cookies</h2>
                    <p className="mb-4 text-sm">
                        We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
                    </p>
                    <div>
                        <h3 className="font-medium mb-2">Types of cookies we use:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className='text-sm'><strong>Essential cookies</strong> - Necessary for the website to function</li>
                            <li className='text-sm'><strong>Preference cookies</strong> - Remember your preferences</li>
                            <li className='text-sm'><strong>Analytics cookies</strong> - Help us understand how visitors interact</li>
                            <li className='text-sm'><strong>Marketing cookies</strong> - Used to track visitors across websites</li>
                        </ul>
                    </div>
                    <p className="mt-4">
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">8. Data Transfers</h2>
                    <p className="mb-4 text-sm">
                        Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                    </p>
                    <p className="mb-4 text-sm">
                        We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy. This includes:
                    </p>
                    <div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className='text-sm'>Transferring data only to countries with adequate data protection levels</li>
                            <li className='text-sm'>Using standard contractual clauses where required</li>
                            <li className='text-sm'>Implementing additional safeguards where necessary</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">9. Payment Processing</h2>
                    <p className="mb-4 text-sm">
                        We use third-party services for payment processing (e.g., payment processors). We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their privacy policy.
                    </p>
                    <div>
                        <h3 className="font-medium mb-2">Payment processors we work with:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className='text-sm'>
                                <strong>PayPal</strong> - Their privacy policy can be viewed at <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.paypal.com/privacy</a>
                            </li>
                            <li className='text-sm'>
                                <strong>Stripe</strong> - Their privacy policy can be viewed at <a href="https://stripe.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">10. Analytics</h2>
                    <p className="mb-4 text-sm">
                        We may use third-party service providers to monitor and analyze the use of our service.
                    </p>
                    <div>
                        <h3 className="font-medium mb-2">Google Analytics</h3>
                        <p className="mb-2">
                            Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our service.
                        </p>
                        <p className='text-sm'>
                            You can opt-out of having your activity on the service made available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript from sharing information with Google Analytics about visits activity.
                        </p>
                        <p className="mt-2">
                            For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg mb-3 font-semibold">11. Changes to This Privacy Policy</h2>
                    <p className='text-sm'>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg mb-3 font-semibold">12. Contact Us</h2>
                    <p className='text-sm'>
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="mt-2">
                        <p className='text-sm'>
                            By email: <a href="mailto:info@transfer511.com" className="text-blue-600 hover:underline">info@transfer511.com</a><br />
                            By phone: <a href="tel:+4917657844670" className="text-blue-600 hover:underline">+49 176 57844670</a><br />
                            By mail: Muhammad Afzal, Zentmarkweg 39, 60489 Frankfurt am Main, Germany
                        </p>
                    </div>
                </section>
            </div>

            <SocialSidebar />
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;

