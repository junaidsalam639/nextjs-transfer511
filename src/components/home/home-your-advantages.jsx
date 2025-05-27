import { Clock3, CreditCard, ShieldCheck, XCircle } from "lucide-react";
import Image from "next/image";

function HomeYourAdvantages() {
    return (
        <>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Your Benefits with Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="w-full h-full relative">
                            <Image
                                src="/assets/images/about-two.webp"
                                alt="Pünktliche Abholung"
                                fill
                                className="object-contain rounded-2xl"
                            />
                        </div>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: <CreditCard className="w-8 h-8" />,
                                    title: "Card Payments",
                                    desc: "All major payment methods accepted with no extra fees.",
                                },
                                {
                                    icon: <Clock3 className="w-8 h-8" />,
                                    title: "Free Waiting Time",
                                    desc: "60 minutes at airports, 15 minutes elsewhere.",
                                },
                                {
                                    icon: <ShieldCheck className="w-8 h-8" />,
                                    title: "Fixed Price Guarantee",
                                    desc: "Transparent pricing without hidden fees.",
                                },
                                {
                                    icon: <XCircle className="w-8 h-8" />,
                                    title: "Free Cancellation",
                                    desc: "Cancel for free up to 4 hours before pickup.",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="shrink-0 w-16 h-16 rounded-full bg-[#E66431] text-white flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeYourAdvantages;