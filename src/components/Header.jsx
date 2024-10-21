"use client"
import { useRef, useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
// import Head from 'next/head';
import Script from "next/script"
// import GoogleJS from './GoogleJS';
import { useRouter } from "next/navigation";
import Navbar from './Navbar';
import styles from './styles/Header.module.scss';
import useWindowSize from '../hooks/useWindowSize';
import GooglePlacesScript, {getSuggestions, getSuggestionsAddressOnly, getSuggestionsWidget} from "@/components/GooglePlacesScript";
import useFlowGetStartedStore from "@/store/store.js"
import { produce } from "immer";
import city_codes from "public/data/city_codes.json";
// import { geocodeByAddress } from 'react-places-autocomplete';
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
//   } from 'react-places-autocomplete';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";


const Header = () => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    // AIzaSyDEAax0e2MX0H37S9EK9K18GpHhOYOrFSk
    const [googleApiLoaded, setGoogleApiLoaded] = useState(false);
    const [placeholder_text, setPlaceholderText] = useState("Enter Address or City, State");
    // const [selectedIndex, setSelectedIndex] = useState(0);
    const flow = useFlowGetStartedStore(state => state.flow);
    const setFlow = useFlowGetStartedStore(state => state.setFlow);

    // const [address, setAddress] = useState("");
    let last_search_type = "street";

    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
    const new_address = useFlowGetStartedStore(state => state.new_address);
    const setNewAddress = useFlowGetStartedStore(state => state.setNewAddress);

    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);

    const searchInputRef = useRef();
    const autoCompleteRef = useRef();

    
    useEffect(() => {
      true && console.log("...checking form for address data");
      true && console.log(new_address);
      if(new_address) {
        true && console.log("...address data found, processing place location");
        setNewAddress(false);
        processPlaceSelection();
      }else{
        true && console.log("...no address data found, not processing place selection");
      }
  }, [new_address]);

    useEffect(() => {
      true && console.log(`...form data addressed changed: flow is ${flow}`);
      true && console.log(form_data);
      // true && console.log(form_data["sell_address"]);
      // true && console.log(form_data["buy_address"]);
      if((form_data['sell_address'] || form_data['buy_address']) && ((form_data['sell_address'] && "place_id" in form_data['sell_address']) || (form_data['buy_address'] && "place_id" in form_data['buy_address']))) {
        true && console.log("...address found");
        setNewAddress(true);
      }else{
        let name = undefined;

        if(form_data['sell_address']){
          name = form_data['sell_address']['name'];
        }
        if(form_data['buy_address']){
          name = form_data['buy_address']['name'];
        }

        if (name !== undefined) {

          // STARTING NEW GEOCODER
          true && console.log("name");
          true && console.log(name);
          const payload = {};
          payload.address = name;


          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
          };          

          fetch('https://webhooks.semperhl.com/api/geodecoder', options)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            const place = data[0];
            
            setFormData(produce(form_data, draft => {
              if(flow === "instantoffer") {
                draft['sell_address'] = place;
              }
              if(flow === "sell") {
                draft['sell_address'] = place;
              }
              if(flow === "sellbuy") {
                draft['sell_address'] = place;
              }
              if(flow === "buy") {
                draft['buy_address'] = place;
                // true && console.log("buy address");
                // true && console.log(place);
              }
            }));



          })
          .catch(error => console.error(error));

        }

      }
  }, [form_data['sell_address'], form_data['buy_address']]);

    function changeIndex(idx) {
      console.log(`changing index to ${idx}`);
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

    function processPlaceSelection() {
      true && console.log("process place selection");
      true && console.log(flow);
      let store_key_prefix = "sell";
      if(flow === "buy") {
        store_key_prefix = "buy";
      }
      const place = form_data[`${store_key_prefix}_address`];
      true && console.log(place);

      if(place && 'address_components' in place && place['address_components'].length > 0) {
          const gadd = place['address_components'];
          const add_obj = {};
          const items = gadd.map((item) => {
              return `${item.types[0]}:${item.long_name}`;
          }).forEach((item) => {
              const key = item.split(':')[0];
              const val = item.split(':')[1];
              add_obj[key] = val;
          });
          false && console.log(add_obj);

          if(add_obj['route'] !== undefined) {
              const tadd = `${add_obj['street_number']} ${add_obj['route']}`;
              last_search_type = "street";
              doAddressSearch("street", tadd);
              // setAddress(tadd);
          }else if(add_obj['postal_code'] !== undefined){
              const tadd = `${add_obj['postal_code']}`;
              last_search_type = "zipcode";
              doAddressSearch("zipcode", tadd);
              // setAddress(tadd);
          }else if(add_obj['locality'] !== undefined && add_obj['administrative_area_level_1'] !== undefined) {
              const tadd = `${add_obj['locality']}, ${add_obj['administrative_area_level_1']}`;
              last_search_type = "town";
              doAddressSearch("town", tadd);
              // setAddress(tadd);
          }
  
      }else{
      }

    }

    function doAddressSearch(search_type, the_address) {
      false && console.log("doing address search");
      false && console.log(search_type);
      false && console.log(the_address);
      false && console.log(flow);
      if(flow === "sell"){
        false && console.log("doing sell");
        router.push('/get_started?flow=sell&step=2');
      }
      if(flow === "instantoffer"){
        false && console.log("doing instantoffer");
        router.push('/get_started?flow=instantoffer&step=2');
      }
      if(flow === "sellbuy"){
        false && console.log("doing sellbuy");
        router.push('/get_started?flow=sellbuy&step=2');
      }
      if(flow === "buy"){
        false && console.log("doing buy");
        router.push('/get_started?flow=buy&step=1');
      }


      

    }

    function handleKeyup(evt){
      false && console.log(evt.keyCode);
      false && console.log(evt.target.value);
      
    }

      
    const size = useWindowSize();
      useEffect(() => {
        true && console.log("...checking flow");
        if(!flow) {
          true && console.log("...setting flow to buy");
          setFlow("buy");
        }else{
          true && console.log("...flow already set");
          true && console.log(flow);
        }
      }, []);


      useEffect(() => {
        true && console.log(`...checking form data for changed address: flow is ${flow}`);
        true && console.log(form_data);
        if(form_data['changed_address']){
          if(Object.keys(form_data['changed_address']).length === 0){
            true && console.log("...no changed address, or changed address is empty");
  
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
                true && console.log("buy address");
                true && console.log(form_data['changed_address']);
              }
              draft['changed_address'] = {};
            }));
  
          }
  
        }

      }, [form_data['changed_address']]);

      

      useEffect(() => {
        // false && console.log(selectedChip);
        if(google_api_loaded) {
            autoCompleteRef.current = getSuggestionsWidget(searchInputRef);
            autoCompleteRef.current.addListener("place_changed", async function () {
              true && console.log("place changed");
              true && console.log(`flow is ${flow}`);
                const place = await autoCompleteRef.current.getPlace();
                setFormData(produce(form_data, draft => {
                
                  draft['changed_address'] = place;
                }));
              
               });            
        }
    }, [google_api_loaded]);


    return (
        <div  className={styles['main-component']}>
     
            { !google_api_loaded && <GooglePlacesScript />}

   
            <Navbar />
            {console.log(flow)}
            <div className={`${styles['main-content-container']} centered-content`}>
                <div className={`${styles['header-content-container']}`}>
                    {flow === "sell" && 
                    <div className={styles['header-content-title']}>Maximize Your<br/>Profit. Minimize <br /> the fees.</div>
                    }
                    {flow === "buy" && 
                    <div className={styles['header-content-title']}>Buy a home the <br /> easy way and <br /> save thousands.</div>
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
                          // gtmPush(["callback", "home_hero_buy", ()=>{changeIndex("buy");}]);
                          changeIndex("buy");
                        }} className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "buy" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}>
                        Buy
                        </div>
                        <div onClick={()=>{
                          // gtmPush(["callback", "home_hero_sell", ()=>{changeIndex("sell");}]);
                          changeIndex("sell");                          
                        }} className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "sell" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}>
                        Sell
                        </div>      
                        <div onClick={()=>{
                          // gtmPush(["callback", "home_hero_buy_sell", ()=>{changeIndex("sellbuy");}]);
                          changeIndex("sellbuy");
                        }} className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "sellbuy" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}>
                        Buy &amp; Sell
                        </div>
                        {size.width >= 1024 &&
                        <div onClick={()=>{
                          // gtmPush(["callback", "home_hero_io", ()=>{changeIndex("instantoffer");}]);
                          changeIndex("instantoffer");
                          }} className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "instantoffer" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}>
                        InstantOffer
                        </div>
                        }
                    </div>

                    <div className={styles["transparentprocess-content-tabs-content"]}>
                        <div className={styles["transparentprocess-content-tabs-content-item"]}>
                            <input ref={searchInputRef} onKeyUp={(e)=>{handleKeyup(e);}} type="text" placeholder={placeholder_text} />
 
                  
                        </div>
                    </div>

                  
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;