"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

// Hook
// export default function useGooglePlacesScript() {
//     const GOOGLE_MAPS_API_KEY = "AIzaSyDEAax0e2MX0H37S9EK9K18GpHhOYOrFSk";
//     const source = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
//     false && console.log("...loading google places script");
//     return (
//         <Script type="text/javascript" src={source} strategy="beforeInteractive" />
//       );
// }

export function getSuggestions(query){
    false && console.log("...getting suggestions");
    false && console.log(query);
}