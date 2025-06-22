import Link from "next/link"
import { Phone, Mail, MessageSquare } from "lucide-react"

export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col">
        <Link
          href="https://wa.me/4917657844670"
          className="bg-green-500 p-3 text-white hover:bg-green-600 transition-colors"
        >
          <MessageSquare size={20} />
        </Link>
        <Link href="tel:+4917657844670" className="bg-orange-500 p-3 text-white hover:bg-orange-600 transition-colors">
          <Phone size={20} />
        </Link>
        <Link
          href="mailto:info@fra-transfer.de"
          className="bg-red-500 p-3 text-white hover:bg-red-600 transition-colors"
        >
          <Mail size={20} />
        </Link>
      </div>
    </div>
  )
}
