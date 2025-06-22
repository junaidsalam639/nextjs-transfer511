import Image from "next/image";

function HomeChoose() {
    return (
        <>
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Choose FRA-Transfer</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className=" text-white p-1 rounded-full mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">Reliable</h3>
                                        <p className="text-gray-300">Over 10 years of experience</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className=" text-white p-1 rounded-full mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">Fair Prices</h3>
                                        <p className="text-gray-300">No hidden fees</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className=" text-white p-1 rounded-full mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">Comfortable Vehicles</h3>
                                        <p className="text-gray-300">Modern and clean</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className=" text-white p-1 rounded-full mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">24/7 Availability</h3>
                                        <p className="text-gray-300">Always here for you</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative w-full h-96">
                            <Image
                                src="/assets/images/choose-one.avif"
                                alt="Luxury car"
                                fill
                                className="rounded-lg object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6  text-white p-4 rounded-lg">
                                <p className="font-bold">100% Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeChoose;