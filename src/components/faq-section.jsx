"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"



export default function FAQSection() {
    const faqs = [
        {
            id: "1",
            question: 'What makes Transfer511 special?',
            answer:
                'Transfer511 offers premium airport transfer services with a focus on reliability and comfort. Our modern fleet, professional drivers, and commitment to top-tier service ensure you arrive relaxed and on time—whether you\'re traveling for business or leisure.',
        },
        {
            id: "2",
            question: 'How can I make a reservation?',
            answer:
                'Booking with Transfer511 is quick and easy. Simply visit our user-friendly website, enter your pickup and drop-off details, choose your preferred vehicle, and confirm the date and time. Your transfer will be booked in just a few steps!',
        },
        {
            id: "3",
            question: 'What vehicle options are available?',
            answer:
                'Our diverse fleet includes luxurious sedans, spacious SUVs, and comfortable shuttle vans. Whether you\'re traveling alone or in a group, we have the perfect vehicle to match your passenger and luggage needs for a stylish and relaxed journey.',
        },
        {
            id: "4",
            question: 'Is Transfer511 available 24/7?',
            answer:
                'Yes, Transfer511 operates 24 hours a day, 7 days a week, all year round. We understand that travel schedules can vary, which is why we’re always available whenever you need us.',
        },
        {
            id: "5",
            question: 'Can I change my reservation?',
            answer:
                'At Transfer511, flexibility is a priority. You can easily modify your booking within a specified time frame before your scheduled pickup. Just log in to your customer account online or contact our support team for assistance.',
        },
        {
            id: "6",
            question: 'How do I find my driver at the airport?',
            answer:
                'Transfer511 provides clear instructions for your meeting point. Your friendly driver will be waiting there with a personalized sign, making it easy for you to spot them right away.',
        },
        {
            id: "7",
            question: 'What happens if my flight is delayed?',
            answer:
                'We track your flight in real time. If there’s a delay, we automatically adjust your pickup time so your driver is there right when you land—no extra steps needed.',
        },
        {
            id: "8",
            question: 'Can I request child seats?',
            answer:
                'Absolutely. Your family’s safety is important to us. Just specify the number and type of child seats you need during the booking process, and we’ll take care of the rest.',
        },
        {
            id: "9",
            question: 'How can I contact Transfer511 customer support?',
            answer:
                'Our friendly support team is easily reachable through the contact details provided on our website or in your confirmation email. We’re always here to help with any questions or concerns you may have.',
        },
    ];


    return (
        <section className="py-16 bg-gray-50 dark:bg-zinc-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
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
