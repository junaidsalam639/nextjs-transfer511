import Image from "next/image";
import { Button } from "../ui/button";

function HomeTestimonial() {
    return (
        <>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">What People Say About Rentol</h2>
                    <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src="/assets/images/avatar.jpg"
                                        alt="Customer"
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="font-semibold">Jennifer Smith</h3>
                                <div className="flex text-yellow-400">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Ive used Transfer511 multiple times and they have never let me down. The drivers are always professional
                            and the cars are clean and comfortable. I highly recommend their service!
                        </p>
                        <div className="text-right">
                            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                                WEITERE ANSEHEN
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeTestimonial;