"use client"
import { CookiesProvider } from 'react-cookie'

function CookiesProviders({ children }) {
    return (
        <>
            <CookiesProvider>
                {children}
            </CookiesProvider>
        </>
    )
}

export default CookiesProviders

