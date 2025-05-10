function HomeHowItsWork({ steps }) {
    return (
        <>
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/images/maps.png"
                        alt="Map Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#E66431] opacity-90"></div>
                </div>

                <div className="relative container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white text-center mb-12 z-10 relative">
                        So funktioniert es
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative text-center bg-white rounded-full w-full aspect-square flex flex-col items-center justify-center shadow-lg cursor-pointer"
                            >
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                                    <div className="bg-black border-4 border-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                                        {step.number}
                                    </div>
                                </div>

                                <div className="relative h-full w-full rounded-full overflow-hidden">
                                    <div className="absolute inset-0 bg-[#E87447] transform -translate-y-full transition-transform duration-500 ease-in-out z-0 group-hover:translate-y-0"></div>

                                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                                        <div className="mb-4 text-orange-500 group-hover:text-white transition-colors duration-500 transform group-hover:scale-110">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </>
    );
}
export default HomeHowItsWork;