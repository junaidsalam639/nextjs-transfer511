"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

function ContactForm() {
    return (
        <>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1 space-y-6">
                            <div className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg flex items-start">
                                <div className="bg-gray-200 dark:bg-zinc-700 p-3 rounded-full mr-4">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Mailing Address</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Munib Afzal, Zentmarkweg 39,
                                        <br />
                                        60489 Frankfurt am Main
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg flex items-start">
                                <div className="bg-gray-200 dark:bg-zinc-700 p-3 rounded-full mr-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Quick Contact</h3>
                                    <p className="text-gray-600 dark:text-gray-300">+49 1765 7844670</p>
                                </div>
                            </div>

                            <div className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg flex items-start">
                                <div className="bg-gray-200 dark:bg-zinc-700 p-3 rounded-full mr-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Support Email</h3>
                                    <p className="text-gray-600 dark:text-gray-300">info@fra-transfer.de</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                                <div className="relative h-full w-full">
                                    <Image
                                        src="/assets/images/contact.jpg"
                                        alt="Contact person"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2 bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg">
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <Input placeholder="Name" required />
                                    </div>
                                    <div>
                                        <Input type="email" placeholder="Email Address" required />
                                    </div>
                                    <div>
                                        <Select required>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Subject" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="booking">Booking Inquiry</SelectItem>
                                                <SelectItem value="support">Customer Support</SelectItem>
                                                <SelectItem value="feedback">Feedback</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Textarea placeholder="Write A Message" rows={5} required />
                                    </div>
                                    <Button className="w-full hover:bg-zinc-900 bg-orange-500 text-white">
                                        Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ContactForm;