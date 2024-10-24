"use client";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import styles from "./Header.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { useRouter } from "next/navigation";
import ArrowButton from '@/components/fluid/ArrowButton';
import useFlowGetStartedStore from "@/store/store.js";
import GooglePlacesScript, {
  getSuggestionsAddressOnly,
  getSuggestionsWidgetAddressOnly,
} from "@/components/GooglePlacesScript";
import { produce } from "immer";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import BetaIcon from "@/compositions/BetaIcon";

const Header = () => {
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

  // const [selectedIndex, setSelectedIndex] = useState(0);
  const form_data = useFlowGetStartedStore((state) => state.form_data);
  const setFormData = useFlowGetStartedStore((state) => state.setFormData);
  const google_api_loaded = useFlowGetStartedStore(
    (state) => state.google_api_loaded
  );

  const new_address = useFlowGetStartedStore((state) => state.new_address);
  const setNewAddress = useFlowGetStartedStore((state) => state.setNewAddress);

  const size = useWindowSize();

  const searchInputRef = useRef();
  const autoCompleteRef = useRef();

  function handleKeyup(evt) {}

  function processPlaceSelection() {
     
    router.push(`/get_started?flow=sell&step=1`);
  }

  useEffect(() => {
     
    if (google_api_loaded) {
      autoCompleteRef.current = getSuggestionsWidgetAddressOnly(searchInputRef);
      autoCompleteRef.current.addListener("place_changed", async function () {
        const place = await autoCompleteRef.current.getPlace();
        setFormData(
          produce(form_data, (draft) => {
            draft["sell_address"] = place;
          })
        );
        setNewAddress(true);
        // setTimeout(() => {

        processPlaceSelection();
        // }, 1000);
        // processPlaceSelection(place);
        // false && console.log(results);
        // getLatLng(results[0])
        // })
      });
    }
  }, [google_api_loaded]);

  return (
    <div className={styles["main-component"]}>
      {!google_api_loaded && <GooglePlacesScript />}
      <Navbar />
      <div className={`${styles["main-content-container"]} centered-content2`}>
        <div className={`${styles["header-content-container"]}`}>
          <BetaIcon containerSx={{ marginBottom: 32}} imgSx={{ width: 54 }} />
          <div className={styles["header-content-title"]}>
            How to sell & save, the <span>easy way.</span>
          </div>
          <div className={styles["header-content-copy"]}>
            We save you time, money & stress.
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
                 Get matched with a HomeEasy Preferred Agent
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
                 Sell your home instantly for cash or list for 1%
                </div>

            </div>
            <div className={styles["header-content-inner"]}>
                <div className={styles["header-content-round"]}>
                <div className={styles["header-content-round-box"]}>
                        3
                    </div>
                </div>
                <div className={styles["header-content-text"]}>
                 Save thousands, pop the champaign & start packing
                </div>

            </div>
          </div>
          <div className={`${styles['main-copy-footer']} arrow`}>
                        <ArrowButton
                            link_text="Let’s sell your home!"
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
