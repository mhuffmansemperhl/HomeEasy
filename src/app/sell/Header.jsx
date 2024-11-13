"use client";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";
import ArrowButton from '@/components/fluid/ArrowButton';
import useFlowGetStartedStore from "@/store/store.js";
import GooglePlacesScript, {
  getSuggestionsWidgetAddressOnly,
} from "@/components/GooglePlacesScript";
import { produce } from "immer";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import BetaIcon from "@/compositions/BetaIcon";
import useScreenSize from "@/hooks/useScreenSize";

const Header = () => {
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
  const form_data = useFlowGetStartedStore((state) => state.form_data);
  const setFormData = useFlowGetStartedStore((state) => state.setFormData);
  const google_api_loaded = useFlowGetStartedStore(
    (state) => state.google_api_loaded
  );

  const {isTablet, isMobile} = useScreenSize()
  const setNewAddress = useFlowGetStartedStore((state) => state.setNewAddress);

  const searchInputRef = useRef();
  const autoCompleteRef = useRef();

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
        processPlaceSelection();
     
      });
    }
  }, [google_api_loaded]);

  return (
    <div className={styles["main-component"]}>
      {!google_api_loaded && <GooglePlacesScript />}
      <Navbar />
      <div className={`${styles["main-content-container"]} centered-content2`}>
        <div className={`${styles["header-content-container"]}`}>
         
          <div className={styles["header-content-title"]}>
          <BetaIcon 
            containerSx={{ 
              position: !isTablet && "absolute", 
              top: isTablet ? "-30px" : "-62px",
              // left: !isTablet ? "4px" : isMobile && "31px",
              width: isTablet && "100%",
              display: isTablet && "flex",
              flexDirection: isTablet && "column",
              alignItems: (isTablet && !isMobile) && "center",
            }} 
            imgSx={{ width: 54 }} 
          />
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
                 Save thousands, pop the champagne & start packing
                </div>

            </div>
          </div>
          <div className={`${styles['main-copy-footer']} arrow`}>
                        <ArrowButton
                            link_text="Let’s sell your home!"
                            callback={()=>{
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
