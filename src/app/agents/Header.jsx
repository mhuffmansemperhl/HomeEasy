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

    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    // const [selectedIndex, setSelectedIndex] = useState(0);
    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);

    const new_address = useFlowGetStartedStore(state => state.new_address);
    const setNewAddress = useFlowGetStartedStore(state => state.setNewAddress);

    const size = useWindowSize();

    const searchInputRef = useRef();
    const autoCompleteRef = useRef();

     


    function processPlaceSelection(){
       router.push(`/get_started?flow=partner&step=1`);
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
            <div className={`${styles["header-content-container"]}`}>
          <div className={styles["header-content-title"]}>
          Instantly connected with motivated buyers,<span> just for you.</span>
          </div>
          <div className={styles["header-content-copy"]}>
          Become a Preferred Agent. 
          </div>
          
          <div className={styles["header-content-ul"]}>
            <div className={styles["header-content-inner"]}>
                <div className={styles["header-content-round"]} >
                    <div className={styles["header-content-round-box"]}>
                        1
                    </div>
                  <div className={styles["before_round"]}></div>
                </div>
                <div className={styles["header-content-text"]}>
                Connect with motivated buyers
                </div>

            </div>
            <div className={styles["header-content-inner"]}>
            <div className={styles["header-content-round"]} >
                    <div className={styles["header-content-round-box"]}>
                        2
                    </div>
                  <div className={styles["before_round"]}></div>
                </div>
                <div className={styles["header-content-text"]}>
                 No payment required upfront—just settle a fee at closing.
                </div>

            </div>
            <div className={styles["header-content-inner"]}>
            <div className={styles["header-content-round"]} >
                    <div className={styles["header-content-round-box"]}>
                        3
                    </div>
                </div>
                <div className={styles["header-content-text"]}>
                Full transparency on your client’s loan status.
                </div>

            </div>
          </div>
          <div className={`${styles['main-copy-footer']} arrow`}>
                        <ArrowButton
                            link_text="Join today!"
                            callback={()=>{
                                // router.push(`/get_started?flow=sell&step=0&branch=9`);
                                gtmPush(["callback", "sell_list_one", ()=>{router.push(`https://homeeasyhomes.com/get_started?flow=partner&step=1`);}]);
                            }}
                        />
          </div>
 
        </div>
            </div>

        </div>
    );
};

export default Header;