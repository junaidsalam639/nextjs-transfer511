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

export const metadata = {
  title: {
    default: 'Transfer511 - Reliable Vehicle Transportation Services',
    template: '%s | Transfer511'
  },
  description: 'Professional vehicle transportation services across the country. Safe, reliable, and affordable car shipping solutions.',
  keywords: [
    'vehicle transport',
    'car shipping',
    'auto transport',
    'car transportation',
    'vehicle shipping',
    'car hauling'
  ],
  authors: [{ name: 'Transfer511 Team' }],
  creator: 'Transfer511',
  publisher: 'Transfer511',
  metadataBase: new URL('https://www.transfer511.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Transfer511 - Vehicle Transportation Services',
    description: 'Professional vehicle transportation services across the country',
    url: 'https://www.transfer511.com',
    siteName: 'Transfer511',
    images: [
      {
        url: '/assets/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Transfer511 Vehicle Transport',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
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

