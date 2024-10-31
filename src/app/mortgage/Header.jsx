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
          <div className={styles["header-content-title"]}>
            Finance your new home the <span>easy way.</span>
          </div>
          <div className={styles["header-content-copy"]}>
            Receive up to $10,000<sup>1</sup> towards your closing costs - we&apos;ve got your back!
          </div>
          
          <div className={`${styles['main-copy-footer']} arrow`}>
            <ArrowButton
              link_text="Get Pre Approved"
              callback={()=>{
                // router.push(`/get_started?flow=sell&step=0&branch=9`);
                gtmPush(["callback", "sell_list_one", ()=>{ window.open('https://www.gethomeeasy.com/', '_blank')}]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
