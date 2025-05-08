"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"



export default function FAQSection() {
    const faqs = [
        {
            id: "1",
            question: 'Was macht Transfer511 besonders?',
            answer:
                'Bei Transfer511 erleben Sie zuverlässigen Flughafentransfer auf höchstem Niveau. Unsere modernen Fahrzeuge, geschulten Fahrer und unser Fokus auf erstklassigen Service garantieren eine entspannte und pünktliche Ankunft – ob privat oder geschäftlich.',
        },
        {
            id: "2",
            question: 'Wie kann ich eine Reservierung bei Transfer511 vornehmen?',
            answer:
                'Ihre Buchung bei Transfer511 ist ganz einfach: Über unsere benutzerfreundliche Website geben Sie Ihre Abhol- und Rückgabedaten ein, wählen Ihr Wunschfahrzeug aus und bestätigen Datum sowie Uhrzeit. Schon ist Ihr Transfer sicher gebucht!',
        },
        {
            id: "3",
            question: 'Welche Fahrzeugoptionen gibt es bei Transfer511?',
            answer:
                'Unsere vielseitige Flotte bietet Ihnen luxuriöse Limousinen, geräumige SUVs und komfortable Shuttle-Vans. Wählen Sie das passende Fahrzeug je nach Anzahl der Personen und Gepäck – für eine stilvolle und entspannte Fahrt.',
        },
        {
            id: "4",
            question: 'Ist Transfer511 rund um die Uhr erreichbar?',
            answer:
                'Ja, Transfer511 ist 24 Stunden am Tag, 7 Tage die Woche und 365 Tage im Jahr für Sie erreichbar. Wir wissen, dass Reisepläne flexibel sein müssen – deshalb sind wir jederzeit für Sie da, wenn Sie uns brauchen.',
        },
        {
            id: "5",
            question: 'Kann ich meine Reservierung ändern, wenn sich meine Pläne ändern?',
            answer:
                'Bei Transfer511 steht Flexibilität an erster Stelle. Sie können Ihre Reservierung problemlos innerhalb eines festgelegten Zeitrahmens vor der Abholung ändern. Melden Sie sich einfach online in Ihrem Kundenkonto an oder kontaktieren Sie unseren Kundenservice.',
        },
        {
            id: "6",
            question: 'Wie finde ich meinen Fahrer am Flughafen?',
            answer:
                'Transfer511 stellt Ihnen klare Anweisungen für den Treffpunkt zur Verfügung. Ihr freundlicher Fahrer erwartet Sie dort mit einem personalisierten Schild, damit Sie ihn schnell und unkompliziert finden.',
        },
        {
            id: "7",
            question: 'Was passiert, wenn mein Flug Verspätung hat?',
            answer:
                'Transfer511 verfolgt Ihren Flug in Echtzeit. Bei Verspätungen passen wir Ihre Abholzeit automatisch an, sodass Ihr Fahrer pünktlich bei Ihrer Ankunft bereitsteht.',
        },
        {
            id: "8",
            question: 'Kann ich Kindersitze für meine Reise anfordern?',
            answer:
                'Ja, bei Transfer511 kümmern wir uns um die Sicherheit Ihrer Familie. Geben Sie einfach während des Buchungsprozesses die Anzahl und Art der benötigten Kindersitze an.',
        },
        {
            id: "9",
            question: 'Wie kann ich den Kundensupport von Transfer511 erreichen?',
            answer:
                'Unser freundliches Kundenserviceteam ist einfach über die auf unserer Website oder in Ihrer Bestätigungs-E-Mail angegebenen Kontaktdaten erreichbar. Wir sind jederzeit für Sie da und helfen Ihnen gerne bei allen Fragen und Anliegen.',
        },
    ];


    return (
        <section className="py-16 bg-gray-50 dark:bg-zinc-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Meist gestellte Fragen</h2>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-700"
                            >
                                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 dark:hover:bg-zinc-700/50 group">
                                    <div className="flex items-center text-left">
                                        <span className="text-primary font-medium mr-3">{faq.id}</span>
                                        <span className="font-medium group-hover:text-primary transition-colors">{faq.question}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 dark:text-gray-300">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
