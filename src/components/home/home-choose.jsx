import Image from "next/image";

function HomeChoose() {
    return (
        <>
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Warum Sie Transfer511 wählen sollten</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className=" text-white p-1 rounded-full mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">Zuverlässigkeit</h3>
                                        <p className="text-gray-300">Über 10 Jahre Erfahrung im Flughafentransfer</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className=" text-white p-1 rounded-full mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">Faire Preise</h3>
                                        <p className="text-gray-300">Keine versteckten Kosten</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className=" text-white p-1 rounded-full mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">Komfortable Fahrzeuge</h3>
                                        <p className="text-gray-300">Moderne und gepflegte Fahrzeuge</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className=" text-white p-1 rounded-full mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">24/7 Erreichbar</h3>
                                        <p className="text-gray-300">Rund um die Uhr für Sie verfügbar</p>
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
                                <p className="font-bold">100% Kundenzufriedenheit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeChoose;