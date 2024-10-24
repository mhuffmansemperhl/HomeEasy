"use client"
import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';
import { useRouter } from "next/navigation";
import useFlowGetStartedStore from "@/store/store.js"
import GooglePlacesScript, { getSuggestionsWidget} from "@/components/GooglePlacesScript";
import { produce } from "immer";
const Header = () => {

    const router = useRouter();

    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);

    const setNewAddress = useFlowGetStartedStore(state => state.setNewAddress);


    const searchInputRef = useRef();
    const autoCompleteRef = useRef();


    function processPlaceSelection(){
        router.push(`/get_started?flow=sell&step=1`);
    }


    useEffect(() => {
        if(google_api_loaded) {
            autoCompleteRef.current = getSuggestionsWidget(searchInputRef);
            autoCompleteRef.current.addListener("place_changed", async function () {
                const place = await autoCompleteRef.current.getPlace();
                setFormData(produce(form_data, draft => {
                    draft['sell_address'] = place;
                }));
                setNewAddress(true);
                processPlaceSelection();
                         
               });            
        }
    }, [google_api_loaded]);

    return (
        <div  className={styles['main-component']}>
         { !google_api_loaded && <GooglePlacesScript />}
            <Navbar />
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['header-content-container']}`}>
                    <div className={styles['header-content-title']}>How can we help you?</div>
                    <div className={styles['header-content-copy']}>Been dreaming of a new home, selling an old one, or maybe even both? We’re here for you seven days a week, to get things rolling.</div>
                 
                        
                </div>
            </div>

        </div>
    );
};

export default Header;