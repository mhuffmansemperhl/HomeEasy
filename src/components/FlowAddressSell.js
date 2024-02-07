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

    const [searchType, setSearchType] = useState("all");

    // const placesScript = useGooglePlacesScript();

    const handleChange = (evt) => {
        false && console.log("...handling change");
        setAddress(evt.target.value);
    };

    // const debounced = useDebouncedCallback(
    //     // function
    //     (value) => {
    //         getSuggestions(value, (results) => {
    //             setPlacesSuggestions(results);
    //         });
    //     },
    //     // delay in ms
    //     300
    //   );

    const handleKeyUp = (evt) => {
        // false && console.log("...handling keyup");
        // false && console.log(evt.keyCode);
        // false && console.log(google.maps.places);
        // debounced(evt.target.value);
        // if(evt.keyCode === 13){
        //     false && console.log("need to do next here");
        //     // validateForm();
        // }
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

        if(store_key in form_data === false){
            setFormData(produce(form_data, draft => {
                draft[store_key] = {};
            }));
        }else{
            setAddress(form_data[store_key].formatted_address);
        }
    }, []);



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
        // false && console.log(selectedChip);
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
                setFormData(produce(form_data, draft => {
                    draft[store_key] = place;
                }));
                setAddress(place.formatted_address);
               });            
        }
    }, [google_api_loaded]);

    // function handleSelect(address) {
    //     geocodeByAddress(address)
    //     .then(results => {
    //         if(results.length > 0) {
    //             const gadd = results[0]['address_components'];
    //             const add_obj = {};
    //             const items = gadd.map((item) => {
    //                 return `${item.types[0]}:${item.long_name}`;
    //             }).forEach((item) => {
    //                 const key = item.split(':')[0];
    //                 const val = item.split(':')[1];
    //                 add_obj[key] = val;
    //             });
    //             // false && console.log(add_obj);

    //             if(add_obj['route'] !== undefined) {
    //                 const tadd = `${add_obj['street_number']} ${add_obj['route']}, ${add_obj['locality']}, ${add_obj['administrative_area_level_1']}, ${add_obj['postal_code']}`;
    //                 setAddress(tadd);
    //                 callback({...add_obj, address: tadd});
    //             }

    //             // if(add_obj['route'] !== undefined) {
    //             //     const tadd = `${add_obj['street_number']} ${add_obj['route']}`;
    //             //     last_search_type = "street";
    //             //     doAddressSearch("street", tadd);
    //             //     setAddress(tadd);
    //             // }else if(add_obj['postal_code'] !== undefined){
    //             //     const tadd = `${add_obj['postal_code']}`;
    //             //     last_search_type = "zipcode";
    //             //     doAddressSearch("zipcode", tadd);
    //             //     setAddress(tadd);
    //             // }else if(add_obj['locality'] !== undefined && add_obj['administrative_area_level_1'] !== undefined) {
    //             //     const tadd = `${add_obj['locality']}, ${add_obj['administrative_area_level_1']}`;
    //             //     last_search_type = "town";
    //             //     doAddressSearch("town", tadd);
    //             //     // setAddress(tadd);
    //             // }
        
    //         }
    
    //         // false && console.log(results);
    //         // getLatLng(results[0])
    //     })

    // };

    return (
        <div className={`${styles['main-component']}`}>
            { !google_api_loaded && <GooglePlacesScript />}
            <div className={`${styles['main-content-container']}  centered-content`} >

            <div  className={`${styles['address-input-container']}`}>
                <input ref={searchInputRef} onChange={(evt) => {handleChange(evt);}} onKeyUp={(evt) => {handleKeyUp(evt);}} value={address} type="text" placeholder="Enter location" />

            </div>

            </div>
        </div>
    )
};

export default FlowAddressSell;
