import { Clock3, CreditCard, ShieldCheck, XCircle } from "lucide-react";
import Image from "next/image";

function HomeYourAdvantages() {
    return (
        <>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Ihre Vorteile bei uns</h2>
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
                                    title: "Kartenakzeptanz",
                                    desc: "Wir akzeptieren alle gängigen Zahlungsmethoden ohne zusätzliche Gebühren.",
                                },
                                {
                                    icon: <Clock3 className="w-8 h-8" />,
                                    title: "Kostenlose Wartezeit",
                                    desc: "Wir versichern Ihnen eine kostenlose Wartezeit von 60 Minuten an allen Flughäfen. Alle anderen Standorte beinhalten eine Wartezeit von 15 Minuten.",
                                },
                                {
                                    icon: <ShieldCheck className="w-8 h-8" />,
                                    title: "Festpreis-Garantie",
                                    desc: "Starten Sie entspannt – mit transparenten Festpreisen, ohne versteckte Kosten und Bestpreisgarantie.",
                                },
                                {
                                    icon: <XCircle className="w-8 h-8" />,
                                    title: "Kostenfreie Stornierung",
                                    desc: "Planänderung? Kein Problem! Bei Transfer511 stornieren Sie kostenfrei – ganz ohne Buchungs- oder Kreditkartengebühren, wenn Sie uns mindestens 4 Stunden vor der Fahrt informieren.",
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