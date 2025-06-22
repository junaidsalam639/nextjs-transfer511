/* eslint-disable @next/next/next-script-for-ga */
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
    default: 'FRA-Transfer - Reliable Vehicle Transportation Services in Germany',
    template: '%s | FRA-Transfer'
  },
  description: 'Professional vehicle transportation services across Germany. Safe, reliable, and affordable car shipping solutions.',
  keywords: [
    'vehicle transport Germany',
    'car shipping Frankfurt',
    'auto transport Europe',
    'car transportation service',
    'vehicle shipping Germany',
    'car hauling Frankfurt'
  ],
  authors: [{ name: 'FRA-Transfer Team' }],
  creator: 'FRA-Transfer',
  publisher: 'FRA-Transfer',
  metadataBase: new URL('https://www.fra-transfer.de'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'FRA-Transfer - Vehicle Transportation Services in Germany',
    description: 'Professional vehicle transportation services across Germany',
    url: 'https://www.fra-transfer.de',
    siteName: 'FRA-Transfer',
    images: [
      {
        url: '/assets/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'FRA-Transfer Vehicle Transport',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WN97JHH7');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={roboto.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WN97JHH7"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}>
          </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
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
