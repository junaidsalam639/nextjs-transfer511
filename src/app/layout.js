import { Roboto } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadedScript } from "./LoadedScipt"
import CookiesProviders from "@/providers/cookies-providers"
import GoogleTranslate from "@/components/language/google-translate"
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ReactQueryProvider>
            <CookiesProviders>
              <LoadedScript>
                <div className="relative min-h-screen">
                  <main>{children}</main>
                </div>
                <GoogleTranslate />
              </LoadedScript>
            </CookiesProviders>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
