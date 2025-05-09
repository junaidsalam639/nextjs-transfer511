import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SocialSidebar from "@/components/social-sidebar"
import { LoadedScript } from "./LoadedScipt"
import CookiesProviders from "@/providers/cookies-providers"
import GoogleTranslate from "@/components/language/google-translate"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CookiesProviders>
            <LoadedScript>
              <div className="relative min-h-screen">
                <Header />
                <main>{children}</main>
                <SocialSidebar />
                <Footer />
              </div>
              <GoogleTranslate />
            </LoadedScript>
          </CookiesProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
