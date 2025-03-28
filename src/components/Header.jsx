"use client"
import { useRef, useState, useEffect } from 'react';

import { useRouter } from "next/navigation";
import Navbar from './Navbar';
import styles from './styles/Header.module.scss';
import useWindowSize from '../hooks/useWindowSize';
import GooglePlacesScript, {getLatLongFromIP, getSuggestionsWidget, getZipCodeFromLatLng} from "@/components/GooglePlacesScript";
import useFlowGetStartedStore from "@/store/store.js"
import { produce } from "immer";

import BetaIcon from '@/compositions/BetaIcon';
import useScreenSize from '@/hooks/useScreenSize';


const Header = () => {
    const router = useRouter();
    const {isMobile, isLaptop, isTablet} = useScreenSize();
    const [placeholder_text, setPlaceholderText] = useState("Enter Address or City, State");
    const flow = useFlowGetStartedStore(state => state.flow);
    const setFlow = useFlowGetStartedStore(state => state.setFlow);

   
    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
   

    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);

    const searchInputRef = useRef();
    const autoCompleteRef = useRef();
    
    

    useEffect(() => {
       
      if(!flow) {
        
        setFlow("buy");
      }
    }, []);


    useEffect(() => {
      if(form_data['changed_address']){
        if(Object.keys(form_data['changed_address']).length === 0){
          

        }else{
          setFormData(produce(form_data, draft => {
            if(flow === "instantoffer") {
              draft['sell_address'] = form_data['changed_address'];
            }
            if(flow === "sell") {
              draft['sell_address'] = form_data['changed_address'];
            }
            if(flow === "sellbuy") {
              draft['sell_address'] = form_data['changed_address'];
            }
            if(flow === "buy") {
              draft['buy_address'] = form_data['changed_address'];
              
            }
            draft['changed_address'] = {};
          }));
          doAddressSearch()

        }

      }

    }, [form_data['changed_address']]);

    useEffect(() => {
       
      if(google_api_loaded) {
        
          autoCompleteRef.current = getSuggestionsWidget(searchInputRef);
          autoCompleteRef.current.addListener("place_changed", async function () {
           
              const place = await autoCompleteRef.current.getPlace();
              setFormData(produce(form_data, draft => {
              
                draft['changed_address'] = place;
              }));
            
             }); 
             (async () => {
              const location = await getLatLongFromIP();
              if (location) {
                const zipCode = await getZipCodeFromLatLng(location.lat, location.lng);
                console.log(`ZIP Code: ${zipCode}`);
              } else {
                console.log('Failed to determine location.');
              }
            })()           
      }
    }, [google_api_loaded]);

    
    function changeIndex(idx) {
      
        setFlow(idx);
        if(idx === "sell") {
          setPlaceholderText("Enter Home Address");
        }
        if(idx === "buy") {
          setPlaceholderText("Enter Address or City, State");
        }
        if(idx === "sellbuy") {
          setPlaceholderText("Enter Home Address");
        }
        if(idx === "instantoffer") {
          setPlaceholderText("Enter Home Address");
        }
    }

    function doAddressSearch() {
      
      if(flow === "sell"){
        
        router.push('/get_started?flow=sell&step=2');
      }
      if(flow === "instantoffer"){
        
        router.push('/get_started?flow=instantoffer&step=2');
      }
      if(flow === "sellbuy"){
       
        router.push('/get_started?flow=sellbuy&step=2');
      }
      if(flow === "buy"){
    
        router.push('/get_started?flow=buy&step=2');
      }


      

    }

    const size = useWindowSize();
 
    return (
        <div  className={styles['main-component']}>
     
            { !google_api_loaded && <GooglePlacesScript />}

   
            <Navbar />
           
            <div className={`${styles['main-content-container']} centered-content`}>
                <div className={`${styles['header-content-container']}`}>
                    {flow === "sell" && 
                    <div className={styles['header-content-title']}>Maximize Your<br/>Profit. Minimize <br /> the fees.</div>
                    }
                    {flow === "buy" &&
                    <>
                      <div className={styles['header-content-title']}>Buy a home the <br /> easy way and {!isMobile && <br />} save thousands.</div>
                    </>
                    }
                    {flow === "sellbuy" && 
                    <div className={styles['header-content-title']}>Sell, buy & <br /> pocket thousands <br /> in savings.</div>
                    }
                    {flow === "instantoffer" && 
                    <div className={styles['header-content-title']}>Avoid the <br /> stress, time & <br /> cost of listing.</div>
                    }
                    
                    {flow === "sell" && 
                    <div className={styles['header-content-copy']}>List for only 1%<sup>2</sup> and save thousands in fees, it’s that easy.</div>
                    }
                    {flow === "buy" && 
                    <div className={styles['header-content-copy']}>Become a HomeEasy Buyer & get money back with your new home.</div>
                    }
                    {flow === "sellbuy" && 
                    <div className={styles['header-content-copy']}>Sell, buy, and save - it’s that easy.</div>
                    }
                    {flow === "instantoffer" && 
                    <div className={styles['header-content-copy']}>A quick and secure sale that
                    instantly puts cash in your hands.</div>
                    }

                    <div className={styles['header-content']}>
                    <div className={styles["transparentprocess-content-tabs-tabs"]}>

                    <div onClick={()=>{
                          changeIndex("buy");
                        }} className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "buy" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}>
                        Buy
                    </div>
                    <div
                        style={{display: "flex", opacity: "1", marginRight: (isLaptop && !isTablet) ? "46px" : "74px"}}
                        onClick={()=>{
                          changeIndex("sell");                          
                        }} 
                      className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "sell" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}
                    >
                      <span style={{opacity: flow === "sell" ? 1 : 0.5 }} >Sell</span>
                      <BetaIcon 
                        containerSx={{
                          position: "absolute",
                          left: isTablet ? "38px" : "34px",
                          zIndex: "100",
                        }}
                        popupSx={{
                          position: "absolute",
                          left: isTablet ? "0" : "-20px",
                        }}
                      />
                    </div>      
                    <div onClick={()=>{
                        changeIndex("sellbuy");
                      }} className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "sellbuy" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}>
                      Buy &amp; Sell
                    </div>
                      {size.width >= 1024 &&
                    <div onClick={()=>{
                        changeIndex("instantoffer");
                        }} className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "instantoffer" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}>
                      InstantOffer
                    </div>
                        }
                  </div>

                    <div className={styles["transparentprocess-content-tabs-content"]}>
                        <div className={styles["transparentprocess-content-tabs-content-item"]}>
                            <input ref={searchInputRef} type="text" placeholder={placeholder_text} />
                         </div>
                    </div>

                  
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;