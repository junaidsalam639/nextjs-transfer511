import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="mb-4">
              <Image src="/assets/logo/logo.png" alt="Rentol" width={120} height={40} className="object-contain" />
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              There Are Two Main Types: Solar Photovoltaic (PV) Systems For Electricity Generation And
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Youtube size={16} />
              </Link>
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Customer Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-zinc-400 hover:text-primary transition-colors">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-zinc-400">
                <span className="mr-2">📧</span>
                <a href="mailto:info@transfer511.com" className="hover:text-primary transition-colors">
                  info@transfer511.com
                </a>
              </li>
              <li className="flex items-center text-zinc-400">
                <span className="mr-2">📞</span>
                <a href="tel:+4917657844670" className="hover:text-primary transition-colors">
                  +49 1765 7844670
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/terms" className="text-zinc-400 hover:text-primary">Terms and Conditions</Link>
          <Link href="/privacy" className="text-zinc-400 hover:text-primary">Privacy Policy</Link>
          <Link href="/imprint" className="text-zinc-400 hover:text-primary">Imprint</Link>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-zinc-500 text-sm">
          <p>© Copyright Company.Com</p>
        </div>
      </div>
    </footer >
  )
}
