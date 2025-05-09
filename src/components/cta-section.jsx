import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/images/maps.png"
          alt="Map Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#E66431] opacity-90"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 z-10">
            <div className="relative h-48 w-full md:h-64 md:w-64">
              <Image src="/assets/images/land-card.avif" alt="Luxury car" fill className="object-contain" />
            </div>
          </div>
          <div className="md:w-1/2 cta-content">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Are You Looking For An Affordable Bikes And Scooters Rental Service?
            </h2>
            <Link href="/contact">
              <Button className="bg-zinc-900 hover:bg-orange-500 text-white">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
