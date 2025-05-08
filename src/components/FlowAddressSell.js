"use client"
import { useRouter,  useSearchParams} from "next/navigation";
import { useRef, useEffect, useState } from "react";
import GooglePlacesScript, {getSuggestions, getSuggestionsWidget, getSuggestionsWidgetAddressOnly, getSuggestionsWidgetCityStateOnly} from "@/components/GooglePlacesScript";
import useFlowGetStartedStore from "@/store/store.js"
import { produce } from "immer";
// import { useDebouncedCallback } from 'use-debounce';

// import Script from "next/script"
// import {useGooglePlacesScript, getSuggestions} from "@/hooks/useGooglePlacesScript";
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
//   } from 'react-places-autocomplete';

import styles from './styles/FlowAddressSell.module.scss';

const FlowAddressSell = ({callback, store_key, search_type}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    // const [googleApiLoaded, setGoogleApiLoaded] = useState(false);
    const [address, setAddress] = useState("");

    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);
    // const places_suggestions = useFlowGetStartedStore(state => state.places_suggestions);
    // const setPlacesSuggestions = useFlowGetStartedStore(state => state.setPlacesSuggestions);
    const searchInputRef = useRef();
    const autoCompleteRef = useRef();

    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
    const addressErrMsg = useFlowGetStartedStore(state => state.addressFromDropDownErr);
    const setAddressFrommDropDownErr = useFlowGetStartedStore(state => state.setAddressFrommDropDownErr);

    const [searchType, setSearchType] = useState("all");

    // const placesScript = useGooglePlacesScript();

    const handleChange = (evt) => {
        false && console.log("...handling change");
        setAddress(evt.target.value);
        setFormData(produce(form_data, (draft) => {
            draft[store_key] = "";
        }));
    };


    const handleKeyUp = (evt) => {
   
    };
    useEffect(() => {

        if(search_type !== undefined){
            setSearchType("all");
        }else if(search_type === "address"){
            setSearchType("address");
        }else if(search_type === "city_state"){
            setSearchType("city_state");
        }else{
            setSearchType("all");
        }

        if(!form_data || (form_data && form_data[store_key] == null)){
            setFormData(produce(form_data, draft => {
                draft[store_key] = {};
            }));
        }else{
            setAddress(form_data[store_key].formatted_address);
        }
    }, [store_key]);



    useEffect(() => {
        false && console.log("...back on flow address sell");
        // getSuggestions();
        // false && console.log(window.google.maps.places);
        // false && console.log(googleApiLoaded);
    }, [searchParams]);

    // useEffect(() => {
    //     false && console.log("got suggestions");
    //     false && console.log(places_suggestions);
    // }, [places_suggestions]);

    useEffect(() => {
         
        if(google_api_loaded) {
            if(searchType === "address"){
                autoCompleteRef.current = getSuggestionsWidgetAddressOnly(searchInputRef);
            }else if(searchType === "city_state"){
                autoCompleteRef.current = getSuggestionsWidgetCityStateOnly(searchInputRef);
            }else{
                autoCompleteRef.current = getSuggestionsWidget(searchInputRef);
            }
            // autoCompleteRef.current = getSuggestionsWidgetCityStateOnly(searchInputRef);
            autoCompleteRef.current.addListener("place_changed", async function () {
                const place = await autoCompleteRef.current.getPlace();

                false && console.log(place );
                setAddressFrommDropDownErr("");
                setFormData(produce(form_data, draft => {
                    draft[store_key] = place;
                }));
                setAddress(place.formatted_address);
                
               });            
        }
    }, [google_api_loaded, store_key]);


    return (
        <div className={`${styles['main-component']}`}>
            { !google_api_loaded && <GooglePlacesScript />}
            <div className={`${styles['main-content-container']}  centered-content`} >

            <div  className={`${styles['address-input-container']}`}>
                <input ref={searchInputRef} onChange={(evt) => {handleChange(evt);}} onKeyUp={(evt) => {handleKeyUp(evt);}} value={address} type="text" placeholder="Enter location" />
            </div>

            </div>
                {addressErrMsg && <div className={`${styles['err-msg']}`}>{addressErrMsg}</div>}
        </div>
    )
};

export default FlowAddressSell;
