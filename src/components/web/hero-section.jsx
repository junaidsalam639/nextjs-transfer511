
export default function HeroSection({ title, subtitle, children }) {
    return (
        <section className="hero-section relative py-12">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">{title}</h1>
                {subtitle && <p className="text-lg text-white/90 mb-8">{subtitle}</p>}
                {children}
            </div>
        </section>
    )
}
