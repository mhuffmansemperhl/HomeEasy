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
import BetaIcon from '@/compositions/BetaIcon';


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
    // const places_suggestions = useFlowGetStartedStore(state => state.places_suggestions);
    // const setPlacesSuggestions = useFlowGetStartedStore(state => state.setPlacesSuggestions);
    const searchInputRef = useRef();
    const autoCompleteRef = useRef();



    // useEffect(() => {

    //   console.log("testing hubspot api");
    //   const payload = {
    //       "property_address": "123 Test St.",
    //       "property_city": "Providence",
    //       "property_state": "RI",
    //       "property_zip_code": "02860",
    //       "phone": "800-555-1212",
    //       "email": "test1@semperhl.com",
    //       "firstname": "TestFirst",
    //       "lastname": "TestLast",
    //       "milestone_stage": ""
    //   };
    //   // if("contact" in form_data){
    //   //   if("first_name" in form_data.contact){
    //   //     payload.firstName = form_data.contact.first_name;
    //   //   }
    //   //   if("last_name" in form_data.contact){
    //   //     payload.lastName = form_data.contact.last_name;
    //   //   }
    //   //   if("email" in form_data.contact){
    //   //     payload.email = form_data.contact.email;
    //   //   }
    //   //   if("mobile_phone_number" in form_data.contact){
    //   //     payload.phone = form_data.contact.mobile_phone_number;
    //   //   }
  
    //     fetch('/api/hubspot_api', {
    //       method: 'POST',
    //       headers: { 
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer pat-na1-33cf6163-5250-4aa6-bb18-77804d1a2bc2'
    //       },
    //       // body: JSON.stringify({
    //       //   params: payload
    //       // })
    //       body: JSON.stringify({
    //         properties: payload
    //       })
    //     })
    //     .then(response => {
    //       console.log(response.status);
    //       console.log(response);
    //       // setIsBusy(false);
    //       return response.json();
    //     });
    //   //   }).then(data => {
    //   //     const jdata = data.body;
    //   //     if(jdata.status){
    //   //       setAccountCreated(true);
    //   //       // nextStep(pathname, router, searchParams);
    //   //     }else{
    //   //       doAccountCreationError("Error creating account. Please try again or contact us for assistance. Code: 102");
  
    //   //       // console.log(jdata.message); //error
    //   //     }
    //   //     });
    // }, []);
    


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
                true && console.log("buy address");
                true && console.log(place);
              }
            }));



          })
          .catch(error => console.error(error));
  
          // try {

            // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
            // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
          //   const response = await fetch(turl, {
          //           method: 'POST',
          //           headers: {'Content-Type': 'application/json' },
          //           body: JSON.stringify(jdata)
          //       });
          //   const data = await response.text();
                
          //   console.log(data);
          //   console.log(response.status);
        
          //       if(response.status > 200){
          //           res.status = false;
          //           res.message = "Error geocoding. Please try again or contact us for assistance.";
          //           return await getResponse(request, res);
          //       }else{
          //           res.status = true;
          //           res.message = "geocoded successfully.";
          //           return await getResponse(request, res);
          //       }
          // } catch (err) {
          //   console.log(err);
          //       return await getResponse(request, res);
          // }
        
            // fetch('/api/gedecoder_api', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({
            //     params: payload
            //   })
            // })
            // .then(response => {
            //   console.log(response.status);
            //   console.log(response);
            //   // setIsBusy(false);
            //   return response.json();
            // }).then(data => {
            //   const jdata = data.body;
            //   true && console.log(jdata);
            //   // if(jdata.status){
            //   //   setAccountCreated(true);
            //   //   // return true;
            //   //   nextStep(pathname, router, searchParams);
            //   //   createNewHubspotAccount();
  
            //   // }else{
            //   //   doAccountCreationError("Error creating account. Please try again or contact us for assistance. Code: 102");
            //   //   return false;
            //   //   // console.log(jdata.message); //error
            //   // }


            //   });
  
  
          // ENDING NEW GEOCODER          
          // getSuggestions(name, (results) => {
          //   true && console.log("---suggestions---")
          //   true && console.log(results);
          //   true && console.log("---suggestions---")
  
          //   const place = results[0];
            
          //   setFormData(produce(form_data, draft => {
          //     if(flow === "instantoffer") {
          //       draft['sell_address'] = place;
          //     }
          //     if(flow === "sell") {
          //       draft['sell_address'] = place;
          //     }
          //     if(flow === "sellbuy") {
          //       draft['sell_address'] = place;
          //     }
          //     if(flow === "buy") {
          //       draft['buy_address'] = place;
          //       true && console.log("buy address");
          //       true && console.log(place);
          //     }
          //   }));
            
          // });  

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
        // if(size.width < 1024){
        //   router.push(`/get_started?flow=${flow}`);
        // }else{


        // }
        // else{
        //   if(flow === "instantoffer"){
        //     router.push(`/get_started?flow=instantoffer&step=1`);
        //   }else{
        //     router.push(`/get_started?flow=${flow}`);
        //   }
        // }
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
          window.location.href = turl;
            // window.open(turl, '_blank');
        }
      }
      
      

    }

    function handleKeyup(evt){
      false && console.log(evt.keyCode);
      false && console.log(evt.target.value);
      
      // if(evt.keyCode === 13) {
      //   // doAddressSearch();
      //   getSuggestions(evt.target.value, (results) => {
      //     true && console.log(results);

      //     const place = results[0];
      //     setFormData(produce(form_data, draft => {
      //       if(flow === "instantoffer") {
      //         draft['sell_address'] = place;
      //       }
      //       if(flow === "sell") {
      //         draft['sell_address'] = place;
      //       }
      //       if(flow === "sellbuy") {
      //         draft['sell_address'] = place;
      //       }
      //       if(flow === "buy") {
      //         draft['buy_address'] = place;
      //         true && console.log("buy address");
      //         true && console.log(place);
      //       }
      //     }));
          
      //   });
      //   // alert("hey");

      // }

      // return false;
    }
    // function updateAddress(elem) {
    //     if(elem.keyCode === 13) {
    //         doAddressSearch();
    //     }else{
    //         setAddress(elem.target.value);
    //     }
    //     // false && console.log(elem.keyCode);
    //     // false && console.log(elem.target.value);
    // }
      
    const size = useWindowSize();

    // constructor(props) {
    //     super(props);
    //     this.state = { address: '' };
    //   }
    
      // function handleChange(address) {
      //   setAddress(address);
      //   // this.setState({ address });
      // };
    
      // function handleSelect(address) {

      //   geocodeByAddress(address)
      //   .then(results => {
      //       if(results.length > 0) {
      //           const gadd = results[0]['address_components'];
      //           const add_obj = {};
      //           const items = gadd.map((item) => {
      //               return `${item.types[0]}:${item.long_name}`;
      //           }).forEach((item) => {
      //               const key = item.split(':')[0];
      //               const val = item.split(':')[1];
      //               add_obj[key] = val;
      //           });
      //           false && console.log(add_obj);

      //           if(add_obj['route'] !== undefined) {
      //               const tadd = `${add_obj['street_number']} ${add_obj['route']}`;
      //               last_search_type = "street";
      //               doAddressSearch("street", tadd);
      //               setAddress(tadd);
      //           }else if(add_obj['postal_code'] !== undefined){
      //               const tadd = `${add_obj['postal_code']}`;
      //               last_search_type = "zipcode";
      //               doAddressSearch("zipcode", tadd);
      //               setAddress(tadd);
      //           }else if(add_obj['locality'] !== undefined && add_obj['administrative_area_level_1'] !== undefined) {
      //               const tadd = `${add_obj['locality']}, ${add_obj['administrative_area_level_1']}`;
      //               last_search_type = "town";
      //               doAddressSearch("town", tadd);
      //               // setAddress(tadd);
      //           }
        
      //       }
    
      //       // false && console.log(results);
      //       // getLatLng(results[0])
      //   })
      //   //   .then(results => getLatLng(results[0]))
      //   //   .then(latLng => false && console.log('Success', latLng))
      //   //   .catch(error => console.error('Error', error));
      // };

      // useEffect(() => {
      //   true && console.log("...checking flow");
      //   // if(!flow) {
      //   //   setFlow("buy");
      //   // }
      // }, [flow]);

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
                  // if(flow === "instantoffer") {
                  //   draft['sell_address'] = place;
                  // }
                  // if(flow === "sell") {
                  //   draft['sell_address'] = place;
                  // }
                  // if(flow === "sellbuy") {
                  //   draft['sell_address'] = place;
                  // }
                  // if(flow === "buy") {
                  //   draft['buy_address'] = place;
                  //   true && console.log("buy address");
                  //   true && console.log(place);
                  // }
                  draft['changed_address'] = place;
                }));
                // setNewAddress(true);
  
                // processPlaceSelection(place);
                    // false && console.log(results);
                    // getLatLng(results[0])
                // })                
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
            {console.log(flow)}
            <div className={`${styles['main-content-container']} centered-content`}>
                <div className={`${styles['header-content-container']}`}>
                    {flow === "sell" && 
                    <div className={styles['header-content-title']}>Maximize Your<br/>Profit. Minimize <br /> the fees.</div>
                    }
                    {flow === "buy" &&
                    <>
                      <div className={styles['header-content-title']}>Buy a home the <br /> easy way and <br /> save thousands.</div>
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
                          // gtmPush(["callback", "home_hero_buy", ()=>{changeIndex("buy");}]);
                          changeIndex("buy");
                        }} className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "buy" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}>
                        Buy
                    </div>
                    <div
                        style={{display: "flex", opacity: "1", marginRight: "74px"}}
                        onClick={()=>{
                        // gtmPush(["callback", "home_hero_sell", ()=>{changeIndex("sell");}]);
                        changeIndex("sell");                          
                      }} 
                      className={`${styles["transparentprocess-content-tabs-tab"]} ${flow === "sell" ? styles["transparentprocess-content-tabs-tab-selected"] : ''}`}
                    >
                      <span style={{opacity: flow === "sell" ? 1 : 0.5 }} >Sell</span>
                      <BetaIcon 
                        containerSx={{
                          position: "absolute",
                          left: "34px",
                          zIndex: "100",
                        }}
                        popupSx={{
                          position: "absolute",
                          left: "-20px",
                        }}
                      />
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
 {/* {googleApiLoaded &&  <PlacesAutocomplete
        value={address}
        onChange={(e)=>{handleChange(e)}}
        onSelect={(e)=>{handleSelect(e)}}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={styles['autocomplete-holder']}>
            <input
              {...getInputProps({
                placeholder: selectedIndex === 0 && "Enter your home address" || selectedIndex === 1 && "Enter a city, state, or zip code" || selectedIndex === 2 && "Enter your home address",
                // placeholder: 'Enter Home Address',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div key={index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>} */}

                            {/* <div className={styles["transparentprocess-content-tabs-content-item-button-holder"]}>
                                <button onClick={()=>{
              
                                  gtmPush(["callback", "home_hero_get_started", ()=>{processPlaceSelection();}]);

                                }} className='darken-on-hover'>{size.width < 1280 || flow === "buy"  ? "" : "Get Started"} {flow !== "buy" ? <img src="/img/button_arrow.svg" alt="button arrow" /> : <img className={styles['search-image']} src="/img/search-solid.png" alt="button search" />} </button>
                            </div> */}
                        </div>
                    </div>

                    {/* <div className={styles["transparentprocess-content-tabs-content"]}>
                    {selectedIndex === 1 && 
                            <div className={styles["transparentprocess-content-tabs-content-item"]}> 
                            </div>                
                        }
                        {selectedIndex === 0 && 
                            <div className={styles["transparentprocess-content-tabs-content-item"]}> 
                                <div className={styles["transparentprocess-content-tabs-content-item-title"]}>1. My house is worth what?!</div>
                                <div className={styles["transparentprocess-content-tabs-content-item-copy"]}>Use our free home value calculator to instantly see your home’s current value.</div>
                            </div>
                        }
                        {selectedIndex === 2 && 
                            <div className={styles["transparentprocess-content-tabs-content-item"]}> 
                                <div className={styles["transparentprocess-content-tabs-content-item-title"]}>1. Get matched with the best Agent.</div>
                                <div className={styles["transparentprocess-content-tabs-content-item-copy"]}>Gone are the days of resorting to work with your mom’s cousin’s realtor friend.</div>
                            </div>
                        }
                    </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;