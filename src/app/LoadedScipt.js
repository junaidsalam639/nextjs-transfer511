"use client";
const { GOOGLE_MAPS_API_KEY } = require("@/lib/google-api-key");
const { LoadScript } = require("@react-google-maps/api");

export function LoadedScript({ children }) {
    return <LoadScript
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
    >
        {children}
    </LoadScript>
}