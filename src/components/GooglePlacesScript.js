"use client"
import React, { useEffect } from "react";
import Script from "next/script";
import useFlowGetStartedStore from "@/store/store.js"

const GOOGLE_MAPS_API_KEY = "AIzaSyDEAax0e2MX0H37S9EK9K18GpHhOYOrFSk";
const source = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=Function.prototype`;

export function getSuggestionsWidget(the_ref) {
    const searchOptions = {
        // input: address,
        // types: ["address"],
        types: ["geocode"],
        // locality', 'political', 'geocode', 'postal_code', 'route', 'address'
        // "postal_code", "premise", "address", "locality", "political"
        componentRestrictions: { country: "us" },
    };

    return new window.google.maps.places.Autocomplete(
        the_ref.current,
        searchOptions
       );
}

export function getSuggestionsWidgetAddressOnly(the_ref) {
    const searchOptions = {
        // input: address,
        // types: ["address"],
        types: ["premise"],
        // locality', 'political', 'geocode', 'postal_code', 'route', 'address'
        // "postal_code", "premise", "address", "locality", "political"
        componentRestrictions: { country: "us" },
    };

    return new window.google.maps.places.Autocomplete(
        the_ref.current,
        searchOptions
       );
}

export function getSuggestionsWidgetCityStateOnly(the_ref) {
    const searchOptions = {
        // input: address,
        // types: ["address"],
        types: ["locality"],
        // locality', 'political', 'geocode', 'postal_code', 'route', 'address'
        // "postal_code", "premise", "address", "locality", "political"
        componentRestrictions: { country: "us" },
    };

    return new window.google.maps.places.Autocomplete(
        the_ref.current,
        searchOptions
       );
}

export function getSuggestions(address, callback) {
    false && console.log("...getting suggestions");

    // let return_value = [];
    const autocompleteService = new google.maps.places.AutocompleteService();
    const searchOptions = {
        input: address,
        // types: ["address"],
        types: ["geocode"],
        // locality', 'political', 'geocode', 'postal_code', 'route', 'address'
        // "postal_code", "premise", "address", "locality", "political"
        componentRestrictions: { country: "us" },
    };
        autocompleteService.getPlacePredictions(searchOptions, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            callback(results);
        }
        // false && console.log(results);
        false && console.log(status);
    });
    // return return_value;
}




export function getSuggestionsAddressOnly(address, callback) {
    false && console.log("...getting suggestions address only");

    // let return_value = [];
    const autocompleteService = new google.maps.places.AutocompleteService();
    const searchOptions = {
        input: address,
        // types: ["address"],
        types: ["street_address", "premise", "address", "route"],
        // locality', 'political', 'geocode', 'postal_code', 'route', 'address'
        // "postal_code", "premise", "address", "locality", "political"
        componentRestrictions: { country: "us" },
    };
    autocompleteService.getPlacePredictions(searchOptions, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            callback(results);
        }
        // false && console.log(results);
        false && console.log(status);
    });
    // return return_value;
}

const GooglePlacesScript = () => {
    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);
    const setGoogleApiLoaded = useFlowGetStartedStore(state => state.setGoogleApiLoaded);

    useEffect(() => {
        setGoogleApiLoaded(false);
        const intervalToken = setInterval(() => {
            false && console.log("...checking for google maps");
            if(window.google !== undefined){
                false && console.log("...google maps loaded");
                setGoogleApiLoaded(true);
                clearInterval(intervalToken);
            }
        }, 1000);
        false && console.log("...back on google places script");
    }, []);
  return (
    <>
    <Script 
    as="script" 
    onLoad={()=>{false && console.log("loaded script");}} 
    type="text/javascript" 
    src={source} 
    strategy="afterInteractive" />
    </>
  );
};

export default GooglePlacesScript;