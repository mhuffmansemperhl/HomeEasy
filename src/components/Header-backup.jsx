"use client"
import { useRef, useState, useEffect } from 'react';

import { useRouter } from "next/navigation";
import Navbar from './Navbar';
import styles from './styles/Header.module.scss';
import useWindowSize from '../hooks/useWindowSize';
import GooglePlacesScript, {getSuggestionsWidget} from "@/components/GooglePlacesScript";
import useFlowGetStartedStore from "@/store/store.js"
import { produce } from "immer";
import city_codes from "public/data/city_codes.json";

import useGoogleTagManager from "@/hooks/useGoogleTagManager";


const Header = () => {
    const router = useRouter();
   
    const [placeholder_text, setPlaceholderText] = useState("Enter Address or City, State");
    
    const flow = useFlowGetStartedStore(state => state.flow);
    const setFlow = useFlowGetStartedStore(state => state.setFlow);

    let last_search_type = "street";

    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
    const new_address = useFlowGetStartedStore(state => state.new_address);
    const setNewAddress = useFlowGetStartedStore(state => state.setNewAddress);

    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);
    
    const searchInputRef = useRef();
    const autoCompleteRef = useRef();



   


    useEffect(() => {if(new_address) {
        setNewAddress(false);
        processPlaceSelection();
      }
  }, [new_address]);

    useEffect(() => {
   
      if((form_data['sell_address'] || form_data['buy_address']) && ((form_data['sell_address'] && "place_id" in form_data['sell_address']) || (form_data['buy_address'] && "place_id" in form_data['buy_address']))) {
        
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
                
                
              }
            }));



          })
          .catch(error => console.error(error));
  
          
        }

      }
  }, [form_data['sell_address'], form_data['buy_address']]);

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

    function processPlaceSelection() {
      let store_key_prefix = "sell";
      if(flow === "buy") {
        store_key_prefix = "buy";
      }
      const place = form_data[`${store_key_prefix}_address`];
      

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
  
      }

    }

    function doAddressSearch(search_type, the_address) {
      
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
    
        let turl = undefined;
        if(the_address === undefined){
            the_address = form_data['address'];
        }
        if(search_type === undefined){
            search_type = last_search_type;
        }
        if(search_type === 'street'){
            turl = `https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&ccz=city&aw_address=${the_address}&a_statusCategory%5B%5D=active&srt=newest`;
        }

        if(search_type === 'zipcode'){
            turl = `https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&ccz=zipcode&a_statusCategory[]=active&zipcode[]=${the_address}&srt=newest`;
        }
        
        if(search_type === 'town'){
            
            let matches = [];
            const add_match = the_address.toLowerCase().split(',')[0].trim();
            
            for(let i = 0; i < city_codes.length; i++){
                let next_city = city_codes[i][1].toLowerCase().trim();
                if(next_city === add_match){
                    matches.push(city_codes[i][0]);
                }else if(next_city > add_match){
                    break;
                }
            }
            if(matches.length > 0){
                const tcities = `&city[]=${matches.join('&city[]=')}`;
               
                turl = `https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&ccz=city&a_statusCategory[]=active${tcities}&srt=newest`;
            }
            }


        if(turl !== undefined) {
          window.location.href = turl;
        }
      }

    }

   
      
    const size = useWindowSize();

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
                // setNewAddress(true);
  
                          
               });            
        }
    }, [google_api_loaded]);


    return (
        <div  className={styles['main-component']}>
            {/* <Head> */}
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEAax0e2MX0H37S9EK9K18GpHhOYOrFSk&libraries=places"></script> */}
            {/* </Head> */}
            {/* <GoogleJS  */}
                {/* ga_id={'AIzaSyDEAax0e2MX0H37S9EK9K18GpHhOYOrFSk'} */}
            {/* /> */}
            { !google_api_loaded && <GooglePlacesScript />}

            {/* <Script
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEAax0e2MX0H37S9EK9K18GpHhOYOrFSk&libraries=places"
              onLoad={() => setGoogleApiLoaded(true)}
            ></Script> */}
            <Navbar />
           
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