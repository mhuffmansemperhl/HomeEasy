"use client"
// import { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/fluid/Navbar';
import styles from './Header.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import { useRouter } from "next/navigation";
// import useFlowGetStartedStore from "@/store/store.js"
// import GooglePlacesScript, {getSuggestions, getSuggestionsWidget} from "@/components/GooglePlacesScript";
// import { produce } from "immer";
const Header = () => {

    const router = useRouter();

    // const [selectedIndex, setSelectedIndex] = useState(0);
    // const form_data = useFlowGetStartedStore(state => state.form_data);
    // const setFormData = useFlowGetStartedStore(state => state.setFormData);
    // const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);

    // const new_address = useFlowGetStartedStore(state => state.new_address);
    // const setNewAddress = useFlowGetStartedStore(state => state.setNewAddress);

    const size = useWindowSize();

    // const searchInputRef = useRef();
    // const autoCompleteRef = useRef();

    // function handleKeyup(evt){
      
    // }


    // function processPlaceSelection(){
    //     // false && console.log('processPlaceSelection');
    //     router.push(`/get_started?flow=sell&step=1`);
    // }


    // useEffect(() => {
    //     // false && console.log(selectedChip);
    //     if(google_api_loaded) {
    //         autoCompleteRef.current = getSuggestionsWidget(searchInputRef);
    //         autoCompleteRef.current.addListener("place_changed", async function () {
    //             const place = await autoCompleteRef.current.getPlace();
    //             setFormData(produce(form_data, draft => {
    //                 draft['sell_address'] = place;
    //             }));
    //             setNewAddress(true);
    //             processPlaceSelection();
  
    //             // processPlaceSelection(place);
    //                 // false && console.log(results);
    //                 // getLatLng(results[0])
    //             // })                
    //            });            
    //     }
    // }, [google_api_loaded]);

    return (
        <div  className={styles['main-component']}>
            <Navbar />
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['header-content-container']}`}>
                    <div className={styles['header-content-title']}>See how much money we keep safely in your pocket.</div>
                    <div className={styles['header-content-copy']}>See the difference in savings between HomeEasy Homes and traditional brokers. Find out how much you can save by choosing our innovative approach to buying or selling your home. </div>                        
                </div>
            </div>

        </div>
    );
};

export default Header;