"use client";
import { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";
import ArrowButton from './ArrowButton';
import useFlowGetStartedStore from "@/store/store.js";
import GooglePlacesScript, {
  getSuggestionsWidgetAddressOnly,
} from "@/components/GooglePlacesScript";
import { produce } from "immer";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import BetaIcon from "@/compositions/BetaIcon";
import useScreenSize from "@/hooks/useScreenSize";
import { FORM_TAGS } from "@/helpers/formTags";
import Image from "next/image";
import Footer from "@/components/fluid/Footer";

const Header = () => {
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
  const form_data = useFlowGetStartedStore((state) => state.form_data);
  const setFormData = useFlowGetStartedStore((state) => state.setFormData);
  const google_api_loaded = useFlowGetStartedStore(
    (state) => state.google_api_loaded
  );

  const {isTablet, isMobile, isLaptop} = useScreenSize()
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
      <div className={`${styles["main-content-container"]}`}>
        <div className={`${styles["header-content-container"]}`}>
         
          <div className={styles["header-content-title"]}>
         
           Selling? Buying? Either way, you save thousands.
          </div>
          <div className={styles["header-content-copy"]}>
            Keep more money in your pocket!
          </div>
          
          <div className={styles["header-content-ul"]}>
            <ul className={styles["u-list"]}>

            <li >
                
                <div className={styles["header-content-text"]}>
                 Lower commissions + up to $10K toward closing!
                </div>

            </li>
            <li >
                
                <div className={styles["header-content-text"]}>
                 List for less or skip the stress with a cash offer.
                </div>

            </li>
            <li >
                
                <div className={styles["header-content-text"]}>
                Buy or sell without the headache—we keep it easy.
                </div>

            </li>
            </ul>
            We save you money and your sanity. Simple as that.
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "14px",
            width: isLaptop ? "100%" : "312px",
            gridColumn: "1/8"
          }}>

          <div className={styles['arrow']}>
            <ArrowButton
                link_text="I Want To Buy & Sell"
                callback={()=>{
                  // router.push(`/get_started?flow=sell&step=0&branch=9`);
                  gtmPush(["callback", "lets_sell", ()=>{router.push(`/get_started?flow=sellbuy&step=1`);}]);
              }}
            />
          </div>
          <div className={styles['arrow']}>
            <ArrowButton
                link_text="I Want To Buy"
                callback={()=>{
                  // router.push(`/get_started?flow=sell&step=0&branch=9`);
                  gtmPush(["callback", "lets_sell", ()=>{router.push(`/get_started?flow=buy&step=1`);}]);
              }}
            />
          </div>
          <div className={styles['arrow']}>
            <ArrowButton
                link_text="I Want To Sell"
                callback={()=>{
                  // router.push(`/get_started?flow=sell&step=0&branch=9`);
                  gtmPush(["callback", "lets_sell", ()=>{router.push(`/get_started?flow=sell&step=0&branch=9`);}]);
              }}
            />
          </div>
    
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            width: isMobile ? "90%" : "100%",
            margin: isMobile ? "10px auto 0" :"10px auto 80px",
            gridColumn: "9/13",
            gridRow: "1/8",
            paddingBottom: isMobile ? "30px" : "0",
          }}>
            <Image src={"/img/house.jpg"} alt="House" sizes="100vw"
            width={0} height={0}
  style={{ width: isTablet?'100%' : 618, height: 'auto' }} />
          </div>
 
        </div>
      </div>
      
    </div>
  );
};

export default Header;
