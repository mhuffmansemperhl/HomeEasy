"use client"
import { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import { useRouter } from "next/navigation";
import useFlowGetStartedStore from "@/store/store.js"
import GooglePlacesScript, {getSuggestions, getSuggestionsWidget} from "@/components/GooglePlacesScript";
import { produce } from "immer";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import ArrowButton from '@/components/fluid/ArrowButton';
const Header = () => {
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    const router = useRouter();

    // const [selectedIndex, setSelectedIndex] = useState(0);
    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);

    const new_address = useFlowGetStartedStore(state => state.new_address);
    const setNewAddress = useFlowGetStartedStore(state => state.setNewAddress);

    const size = useWindowSize();

    const searchInputRef = useRef();
    const autoCompleteRef = useRef();

    function handleKeyup(evt){
      
    }

    function processPlaceSelection(){
        // false && console.log('processPlaceSelection');
        // router.push(`/get_started?flow=instantoffer&step=1`);
        router.push(`/get_started?flow=instantoffer&step=2`);
    }

    useEffect(() => {
        // false && console.log(selectedChip);
        if(google_api_loaded) {
            autoCompleteRef.current = getSuggestionsWidget(searchInputRef);
            autoCompleteRef.current.addListener("place_changed", async function () {
                const place = await autoCompleteRef.current.getPlace();
                setFormData(produce(form_data, draft => {
                    draft['sell_address'] = place;
                }));
                setNewAddress(true);
                processPlaceSelection();
  
                // processPlaceSelection(place);
                    // false && console.log(results);
                    // getLatLng(results[0])
                // })                
               });            
        }
    }, [google_api_loaded]);

    return (
        <div  className={styles['main-component']}>
         { !google_api_loaded && <GooglePlacesScript />}
            <Navbar />
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['header-content-container']}`}>
                <div className={styles["header-content-title"]}>
                How to get your Instant Offer.
                {/* <span>easy way.</span> */}
                </div>
                    <div className={styles['header-content-copy']}>Avoid the stress & cost of listing.</div>
                    <div className={styles["header-content-ul"]}>
            <div className={styles["header-content-inner"]}>
                <div className={styles["header-content-round"]} >
                <div className={styles["header-content-round-box"]}>
                        1
                    </div>
                  <div className={styles["before_round"]}></div>
                </div>
                <div className={styles["header-content-text"]}>
                Avoid the stress & cost of listing.
                </div>

            </div>
            <div className={styles["header-content-inner"]}>
                <div className={styles["header-content-round"]}>
                <div className={styles["header-content-round-box"]}>
                        2
                    </div>
                  <div className={styles["before_round"]}></div>
                </div>
                <div className={styles["header-content-text"]}>
                Pay no closing costs or realtor fees
                </div>

            </div>
            <div className={styles["header-content-inner"]}>
                <div className={styles["header-content-round"]}>
                <div className={styles["header-content-round-box"]}>
                        2
                    </div>
                </div>
                <div className={styles["header-content-text"]}>
                Close in just 15 days<span>**</span>
                </div>

            </div>
          </div>
          <div className={`${styles['main-copy-footer']} arrow`}>
                        <ArrowButton
                            link_text="Let’s get your InstantOffer!"
                            callback={()=>{
                                // router.push(`/get_started?flow=sell&step=0&branch=9`);
                                gtmPush(["callback", "sell_list_one", ()=>{router.push(`/get_started?flow=sell&step=0&branch=9`);}]);
                            }}
                        />
          </div>
                        
                </div>
            </div>

        </div>
    );
};

export default Header;