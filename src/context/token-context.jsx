"use client"
import React, { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export function TokenProvider({ children }) {
    const [token, setToken] = useState("");
    return (
        <>
            <TokenContext.Provider value={{ token, setToken }}>
                {children}
            </TokenContext.Provider>
        </>
    )
}

export const useToken = () => useContext(TokenContext);

    