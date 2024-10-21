"use client"
import { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import { useRouter } from "next/navigation";
import useFlowGetStartedStore from "@/store/store.js"
import GooglePlacesScript, {getSuggestions, getSuggestionsWidget} from "@/components/GooglePlacesScript";
import { produce } from "immer";
import ArrowButton from '@/components/fluid/ArrowButton';
import city_codes from "public/data/city_codes.json";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const Header = () => {

    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    let last_search_type = "";

    // const [selectedIndex, setSelectedIndex] = useState(0);
    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
    const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);

    const new_address = useFlowGetStartedStore(state => state.new_address);
    const setNewAddress = useFlowGetStartedStore(state => state.setNewAddress);

    const size = useWindowSize();

    const searchInputRef = useRef();
    const autoCompleteRef = useRef();

    const flow = useFlowGetStartedStore(state => state.flow);
    const setFlow = useFlowGetStartedStore(state => state.setFlow);

    function handleKeyup(evt){
      
    }


    function processPlaceSelection(){
        true && console.log("process place selection");
        true && console.log(flow);
        let store_key_prefix = "sell";
        // if(flow === "buy") {
        store_key_prefix = "buy";
        // }
        true && console.log(store_key_prefix);
        true && console.log(form_data);
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
                // last_search_type = "town";
                doAddressSearch("town", tadd);
                // setAddress(tadd);
            }

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
              false && console.log(the_address);
              let matches = [];
              const add_match = the_address.toLowerCase().split(',')[0].trim();
              false && console.log(add_match); 
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
                  // false && console.log(matches);
                  // false && console.log(tcities);
                  turl = `https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&ccz=city&a_statusCategory[]=active${tcities}&srt=newest`;
              }
              // &city[]=50031&city[]=50036
              // &city[]=50036&city[]=50031
              // turl = `https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&ccz=zipcode&a_statusCategory[]=active&a_statusCategory[]=sold&zipcode[]=${the_address}`;
          }
  
  
          // window.location.href = `https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&ccz=city&aw_address=1+Dalton+St&a_statusCategory[]=active&a_statusCategory[]=sold&city[]=5046`;
          if(turl !== undefined) {
              window.open(turl, '_blank');
          }
        }
        
        
  
      }

    useEffect(() => {
        setFlow('buy');
    }, []);

    useEffect(() => {
        false && console.log("...checking form for address data");
        if(new_address) {
          setNewAddress(false);
          processPlaceSelection();
        }else{
          false && console.log("...no address data found");
        }
    }, [new_address]);
  

    useEffect(() => {
        // false && console.log(selectedChip);
        if(google_api_loaded) {
            autoCompleteRef.current = getSuggestionsWidget(searchInputRef);
            autoCompleteRef.current.addListener("place_changed", async function () {
                const place = await autoCompleteRef.current.getPlace();
                setFormData(produce(form_data, draft => {
                    draft['buy_address'] = place;
                }));
                setNewAddress(true);

                // setTimeout(() => {
                //     processPlaceSelection();
 
                // }, 1000);
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
            <div className={`${styles["header-content-container"]}`}>
          <div className={styles["header-content-title"]}>
               How to buy & save, the <span>easy way.</span>
          </div>
          <div className={styles["header-content-copy"]}>
                 Buy and save big!*
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
                 Get pre-approved with our Preferred Lender
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
                 Get matched with a Preferred Agent and find your dream home!
                </div>

            </div>
            <div className={styles["header-content-inner"]}>
            <div className={styles["header-content-round"]} >
                    <div className={styles["header-content-round-box"]}>
                        3
                    </div>
                </div>
                <div className={styles["header-content-text"]}>
                 Get 1.5% of the loan amount back in closing credits, up to $10,000<sup>1</sup>
                </div>

            </div>
          </div>
          <div className={`${styles['main-copy-footer']} arrow`}>
                        <ArrowButton
                            link_text="Let’s find your dream home!"
                            callback={()=>{
                                // router.push(`/get_started?flow=sell&step=0&branch=9`);
                                gtmPush(["callback", "sell_io", ()=>{router.push(`/get_started?flow=buy&step=1`);}]);
                            }}
                        />
          </div>
 
        </div>
            </div>

        </div>
    );
};

export default Header;