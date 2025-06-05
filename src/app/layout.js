import { Roboto } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadedScript } from "./LoadedScipt"
import CookiesProviders from "@/providers/cookies-providers"
import GoogleTranslate from "@/components/language/google-translate"
import ReduxProvider from '@/providers/redux-provider'
import { Toaster } from 'sonner'
import { TokenProvider } from '@/context/token-context'

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
          <ReduxProvider>
            <CookiesProviders>
              <LoadedScript>
                <TokenProvider>
                  <div className="relative min-h-screen">
                    <main>{children}</main>
                  </div>
                </TokenProvider>
                <Toaster />
                <GoogleTranslate />
              </LoadedScript>
            </CookiesProviders>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
