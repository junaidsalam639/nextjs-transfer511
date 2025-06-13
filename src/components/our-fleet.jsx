import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Luggage, Users } from "lucide-react";
import { Button } from "./ui/button";

function OurFleet({ carData }) {
    return (
        <>
            <section className="py-16 bg-gray-50 dark:bg-zinc-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Fleet</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {carData.map((car, index) => (
                            <Card key={index} className="overflow-hidden py-0 cursor-pointer">
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={car.image} alt={car.title} fill className="object-cover hover:scale-125 transition-all duration-300" />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold text-primary mb-1">{car.title}</h3>
                                    <p className="text-sm text-orange-500 mb-3">{car.subtitle}</p>
                                    <div className="flex justify-between items-center mb-4 text-orange-500">
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4" />
                                            <span className="ml-1 text-sm">{car.passengers}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Luggage className="w-4 h-4" />
                                            <span className="ml-1 text-sm">{car.luggage}</span>
                                        </div>
                                    </div>
                                    <Button className="w-full hover:bg-zinc-900 bg-orange-500 text-white">
                                        BOOK NOW <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
export default OurFleet;