"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import IconPopover from "@/components/fluid/IconPopover";
import DuoInput from "@/components/fluid/DuoInput";
import UnitInput from "@/components/fluid/UnitInput";

import useFlowGetStartedStore from "@/store/store.js";
import { produce } from "immer";
import city_codes from "public/data/city_codes.json";

import GooglePlacesScript, {getSuggestions, getSuggestionsWidget} from "@/components/GooglePlacesScript";

import { useDebouncedCallback } from "use-debounce";

import { NumericFormat } from 'react-number-format';

import useGoogleTagManager from "@/hooks/useGoogleTagManager";


import styles from "./Calculator.module.scss";
import { userAgent } from "next/server";

const Calculator = ({}) => {
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

  const window_size = useWindowSize();

  const google_api_loaded = useFlowGetStartedStore(state => state.google_api_loaded);
  const searchInputRef = useRef();
  const autoCompleteRef = useRef();
//   const interestRef = useRef();

//   const purchase_priceRef = useRef();

const form_data = useFlowGetStartedStore(state => state.form_data);
const setFormData = useFlowGetStartedStore(state => state.setFormData);
const new_address = useFlowGetStartedStore(state => state.new_address);
const setNewAddress = useFlowGetStartedStore(state => state.setNewAddress);


    const [principal_and_interest_hovering, setPrincipalAndInterestHovering] = useState(false);
    const [property_tax_hovering, setPropertyTaxHovering] = useState(false);
    const [insurance_hovering, setInsuranceHovering] = useState(false);
    const [hoa_fees_hovering, setHoAFeesHovering] = useState(false);

  const [state_info, setStateInfo] = useState([]);
  const [mortgage_types, setMortgageTypes] = useState([]);
  const [chartStyle, setChartStyle] = useState({});

  const payment_data = useFlowGetStartedStore(state => state.payment_data);

    const[location_idx, setLocationIDX] = useState(0);
    const[purchase_price, setPurchasePrice] = useState(100000);
    const[down_payment_amount, setDownPaymentAmount] = useState(0);
    const[down_payment_percent, setDownPaymentPercent] = useState(20);
    const[mortgage_type_idx, setMortgageTypeIdx] = useState(0);
    const[interest_rate, setInterestRate] = useState(7.09);
    const[property_tax, setPropertyTax] = useState(0); 
    const[insurance, setInsurance] = useState(900);
    const[hoa_fees, setHoAFees] = useState(0);

    const[monthly_payment, setMonthlyPayment] = useState(0);
    const[monthly_principal_and_interest, setMonthlyPrincipalAndInterest] = useState(0);
    const[monthly_property_tax, setMonthlyPropertyTax] = useState(0);
    const[monthly_insurance, setMonthlyInsurance] = useState(0);
    const[monthly_hoa_fees, setMonthlyHoAFees] = useState(0);


    const[purchase_price_field, setPurchasePriceField] = useState("$100,000");
    const[down_payment_percent_field, setDownPaymentPercentField] = useState("20%");
    const[down_payment_amount_field, setDownPaymentAmountField] = useState("$20,000");
    const[interest_rate_field, setInterestRateField] = useState("7.09%");
    const[property_tax_field, setPropertyTaxField] = useState("$0");

    let last_search_type = "";

    function handleKeyup(evt){
      
    }


    function processPlaceSelection(){
      true && console.log("process place selection");
      // true && console.log(flow);
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
      // false && console.log(flow);
      // if(flow === "sell"){
      //   false && console.log("doing sell");
      //   router.push('/get_started?flow=sell&step=2');
      // }
      // if(flow === "instantoffer"){
      //   false && console.log("doing instantoffer");
      //   router.push('/get_started?flow=instantoffer&step=2');
      // }
      // if(flow === "sellbuy"){
      //   false && console.log("doing sellbuy");
      //   router.push('/get_started?flow=sellbuy&step=2');
      // }

      if(true){
        // if(flow === "buy"){
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
      true && console.log("...checking buy_address");

      if(form_data['buy_address'] && Object.keys(form_data['buy_address']).length > 0 && "place_id" in form_data['buy_address']){
        // do process place here
        true && console.log("..... would be going to idx here");
        processPlaceSelection();

      }

    }, [form_data['buy_address']]);


    useEffect(() => {
        true && console.log("...checking form changed_address");
        true && console.log(form_data['changed_address']);

        if(form_data['changed_address']){
          if(Object.keys(form_data['changed_address']).length > 0){

            // if good, switch to buy_address
            if("place_id" in form_data['changed_address']){
              setFormData(produce(form_data, draft => {
                draft['buy_address'] = form_data['changed_address'];
                draft['changed_address'] = {};
              }));
            }else{
              true && console.log("...doing by text");
              if("name" in form_data['changed_address']){
                const name = form_data['changed_address']['name'];
                if(name !== undefined){
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
                        draft['changed_address'] = place;
                    }));


                  })
                  .catch(error => console.error(error));                            
              }
            }

            // if name, do geocoder and reset changed_address
          }
          }else{
            true && console.log("...changed address is empty");
          }
        }else{
          true && console.log("...changed address is undefined");
        }

    }, [form_data['changed_address']]);


    function doGetStarted(){
      const search_text = searchInputRef.current.value;
      setFormData(produce(form_data, draft => {
        // draft['buy_address'] = form_data['changed_address'];
        draft['changed_address'] = {
          name: search_text
        };
      }));
    }

  //   useEffect(() => {
  //     false && console.log("...checking form for address data");

  //     if(new_address) {

  //       if(form_data['buy_address'] && "place_id" in form_data['buy_address']){
  //         // do process place here
  //         console.log("..... would be going to idx here");
  //         setNewAddress(false);
  //       }else if(form_data['buy_address'] && !("place_id" in form_data['buy_address']) && "name" in form_data['buy_address']){
  //         const name = form_data['buy_address']['name'];
  //         if(name !== undefined){
  //           // STARTING NEW GEOCODER
  //           true && console.log("name");
  //           true && console.log(name);
  //           const payload = {};
  //           payload.address = name;


  //           const options = {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(payload)
  //           };          

  //           fetch('https://webhooks.semperhl.com/api/geodecoder', options)
  //           .then(response => response.json())
  //           .then(data => {
  //             console.log(data)
  //             const place = data[0];
              
  //             setFormData(produce(form_data, draft => {
  //                 draft['buy_address'] = place;
  //                 true && console.log("buy address");
  //                 true && console.log(place);
  //                 setTimeout(() => {
  //                   setNewAddress(true);
  //                 }
  //                 , 1000);
  //             }));


  //           })
  //           .catch(error => console.error(error));            
  //         }
  //         // get from server and reprocess
  //         // setNewAddress(false);
  //       }

  //         // setNewAddress(false);
  //         // processPlaceSelection();
  //     }else{
  //       false && console.log("...no address data found");
  //     }
  // }, [new_address]);


    useEffect(() => {
        // false && // console.log(selectedChip);
        if(google_api_loaded) {
            autoCompleteRef.current = getSuggestionsWidget(searchInputRef);
            autoCompleteRef.current.addListener("place_changed", async function () {
                // console.log("place changed");
                const place = await autoCompleteRef.current.getPlace();
                setFormData(produce(form_data, draft => {
                  draft['changed_address'] = place;
              }));
              setNewAddress(true);

                // setFormData(produce(form_data, draft => {
                //     draft['sell_address'] = place;
                // }));
                // setNewAddress(true);
                // processPlaceSelection();
  
                // processPlaceSelection(place);
                    // false && // console.log(results);
                    // getLatLng(results[0])
                // })                
               });            
        }
    }, [google_api_loaded]);

  useEffect(() => {
    // // console.log("useEffect");
    setMortgageTypes([["30-year fixed", "30-year fixed"],]);
    setStateInfo([["Select State", "XX", "0.00"],
    ["Alabama", "AL", "0.41"],
    ["Alaska", "AK", "1.22"],
    ["Arizona", "AZ", "0.62"],
    ["Arkansas", "AR", "0.62"],
    ["California", "CA", "0.75"],
    ["Colorado", "CO", "0.51"],
    ["Connecticut", "CT", "2.15"],
    ["Delaware", "DE", "0.58"],
    ["District of Columbia", "DC", "0.57"],
    ["Florida", "FL", "0.86"],
    ["Georgia", "GA", "0.90"],
    ["Hawaii", "HI", "0.29"],
    ["Idaho", "ID", "0.63"],
    ["Illinois", "IL", "2.23"],
    ["Indiana", "IN", "0.83"],
    ["Iowa", "IA", "1.57"],
    ["Kansas", "KS", "1.43"],
    ["Kentucky", "KY", "0.85"],
    ["Louisiana", "LA", "0.56"],
    ["Maine", "ME", "1.28"],
    ["Maryland", "MD", "1.07"],
    ["Massachusetts", "MA", "1.20"],
    ["Michigan", "MI", "1.48"],
    ["Minnesota", "MN", "1.11"],
    ["Mississippi", "MS", "0.79"],
    ["Missouri", "MO", "0.98"],
    ["Montana", "MT", "0.83"],
    ["Nebraska", "NE", "1.67"],
    ["Nevada", "NV", "0.55"],
    ["New Hampshire", "NH", "2.09"],
    ["New Jersey", "NJ", "2.47"],
    ["New Mexico", "NM", "0.80"],
    ["New York", "NY", "1.73"],
    ["North Carolina", "NC", "0.80"],
    ["North Dakota", "ND", "1.00"],
    ["Ohio", "OH", "1.53"],
    ["Oklahoma", "OK", "0.90"],
    ["Oregon", "OR", "0.93"],
    ["Pennsylvania", "PA", "1.53"],
    ["Rhode Island", "RI", "1.53"],
    ["South Carolina", "SC", "0.56"],
    ["South Dakota", "SD", "1.24"],
    ["Tennessee", "TN", "0.66"],
    ["Texas", "TX", "1.74"],
    ["Utah", "UT", "0.58"],
    ["Vermont", "VT", "1.90"],
    ["Virginia", "VA", "0.82"],
    ["Washington", "WA", "0.94"],
    ["West Virginia", "WV", "0.59"],
    ["Wisconsin", "WI", "1.73"],
    ["Wyoming", "WY", "0.61"]]);


    setLocationIDX(0);
    setPurchasePrice(100000);
    setDownPaymentAmount(20000);
    setDownPaymentPercent(20);
    setMortgageTypeIdx(0);
    setInterestRate(7.09);
    setPropertyTax(0);
    setInsurance(900);
    setHoAFees(0);

  }, []);

//   useEffect(() => {
//     if(down_payment_amount !== down_payment_amount_field) {
//         setDownPaymentAmountField(down_payment_amount);
//     }
//     if(down_payment_percent !== down_payment_percent_field) {
//         setDownPaymentPercentField(down_payment_percent);
//     }
//   }, [down_payment_amount]);  

//   useEffect(() => {
//     // console.log("update payment data");
//   }, [payment_data]);

//   useEffect(() => {
//     interestRef.current.value = interest_rate;
//   }, [interest_rate]);


  function adjustPropertyTax(){
    const state_tax_info_item = state_info[location_idx];
    if(state_tax_info_item && state_tax_info_item.length > 0){
        // console.log("update location tax amount");
        const state_tax_rate = parseFloat(state_info[location_idx][2]);
        // console.log(`state_tax_rate: ${state_tax_rate}`);

        // const purchase_price_amount = parseFloat(purchase_price.replace(/[^0-9.]/g, ''));
        // console.log(`purchase_price_amount: ${purchase_price}`);
        
        const property_tax_amount = purchase_price * (state_tax_rate / 100);
        // console.log(`property_tax_amount: ${property_tax_amount}`);
        
        // setPropertyTax(`$${property_tax_field.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
        setPropertyTaxField(property_tax_amount);
    }
  }

  useEffect(() => {
    // console.log("update location tax amount");
    adjustPropertyTax();
  }, [location_idx]);


//   useEffect(() => {
//     setMonthlyInsurance(`$${(parseFloat(insurance.replace(/[^0-9.]/g, '')) / 12).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
//   }, [insurance]);

//   useEffect(() => {
//     setMonthlyPropertyTax(`$${(parseFloat(property_tax.replace(/[^0-9.]/g, '')) / 12).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
//   }, [property_tax]);


//   useEffect(() => {
//     setMonthlyHoAFees(`$${(parseFloat(hoa_fees.replace(/[^0-9.]/g, '')) / 1).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
//   }, [hoa_fees]);

//   useEffect(() => {
//     // console.log("update monthly payment");
//     const mpai = parseFloat(monthly_principal_and_interest.replace(/[^0-9.]/g, ''));
//     const mi = parseFloat(monthly_insurance.replace(/[^0-9.]/g, ''));
//     const mpt = parseFloat(monthly_property_tax.replace(/[^0-9.]/g, ''));
//     const mhf = parseFloat(monthly_hoa_fees.replace(/[^0-9.]/g, ''));
//     const monthly_payment_amount = mpai + mi + mpt + mhf;
//     setMonthlyPayment(`$${monthly_payment_amount.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
//     setChartStyle({gridTemplateColumns: `${mpai}fr ${mpt}fr ${mi}fr ${mhf}fr`});
//   }, [monthly_principal_and_interest, monthly_insurance, monthly_property_tax, monthly_hoa_fees]);

function updateChart(){
    // console.log("update monthly payment and chart");

    // first set up the monthly payment fields
    const mpt = property_tax / 12;
    const mi = insurance / 12;
    const mhf = hoa_fees / 1;
    
    setMonthlyPropertyTax(`$${mpt.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
    setMonthlyInsurance(`$${mi.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
    setMonthlyHoAFees(`$${mhf.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);


    // set up principal and interest
    const a = purchase_price - down_payment_amount;
    const r = interest_rate / 100 / 12;
    const n = 360; // number of payments months

    // console.log(`a: ${a}`);
    // console.log(`r: ${r}`);
    // console.log(`n: ${n}`);

    const payment = a / ((((1 + r) ** n) - 1) / (r * (1 + r) ** n));
    // console.log(payment);
    setMonthlyPrincipalAndInterest(`$${payment.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

    const  mp = payment + mpt + mi + mhf;
    setMonthlyPayment(`$${mp.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

    // set up chart
    setChartStyle({gridTemplateColumns: `${payment}fr ${mpt}fr ${mi}fr ${mhf}fr`});

}


const debouncedSendUpdateEvent = useDebouncedCallback(
  // function
  () => {
    if(location_idx !== 0){
      console.log("sending calc_pmts_conv event")
      dataLayer.push({
        event: "calc_pmts_conv",
        "purchase_price": purchase_price,
        "down_payment_amount": down_payment_amount,
        "interest_rate": interest_rate,
        "monthly_payment": monthly_payment,
        "monthly_principal_and_interest": monthly_principal_and_interest,
        "monthly_property_tax": monthly_property_tax,
        "monthly_insurance": monthly_insurance,
        "monthly_hoa_fees": monthly_hoa_fees,
      });
    }
  },
  // delay in ms
  4000
);

useEffect(() => {

    debouncedSendUpdateEvent();
    updateChart();
}, [down_payment_amount, interest_rate, property_tax, insurance, hoa_fees]);


useEffect(() => {
    const new_down_payment_amount = (down_payment_percent / 100) * purchase_price;
    // console.log(`new_down_payment_amount: ${new_down_payment_amount}`);
    setDownPaymentAmountField(new_down_payment_amount);

    // const new_property_tax = purchase_price * (property_tax / 100);
    // setPropertyTaxField(new_property_tax);
    adjustPropertyTax();
}, [purchase_price]);


//   useEffect(() => {
//     // console.log("update monthly principal and interest payment");

//     const a = parseFloat(purchase_price.replace(/[^0-9.]/g, '')) - parseFloat(down_payment_amount.replace(/[^0-9.]/g, ''));
//     const r = parseFloat(interest_rate.replace(/[^0-9.]/g, '')) / 100 / 12;
//     const n = 360; // number of payments months

//     const payment = a / ((((1 + r) ** n) - 1) / (r * (1 + r) ** n));
//     // console.log(payment);
//     setMonthlyPrincipalAndInterest(`$${payment.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

//   }, [purchase_price, down_payment_amount, interest_rate]);

//   function getLoanPayment(){
//     const a = 100000; // loan amount
//     const r = 0.06 / 12; // interest rate
//     const n = 360; // number of payments months

//     const payment = a / ((((1 + r) ** n) - 1) / (r * (1 + r) ** n));
//     // console.log(payment);
//     // console.log(payment.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 }));
    
//     setMonthlyPayment(`$${payment.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
// }


    // useEffect(() => {
    //     // // console.log("useEffect");
    //     setTimeout(() => {
    //         setChartStyle({gridTemplateColumns: "1fr 1fr 1fr 1fr"});
    //     }, 1000);

    //     setTimeout(() => {
    //         setChartStyle({gridTemplateColumns: "874fr 210fr 75fr 0fr"});
    //     }, 5000);
        
    // }, []);



    function updateLocation(e){
        // console.log("updating location");
        // console.log(e.target.value);
        const state_abbrev = e.target.value;
        const state_info_idx = state_info.findIndex((state) => {
            return state[1] === state_abbrev;
        }
        );
        // console.log(state_info_idx);
        setLocationIDX(state_info_idx);

    }


    const debouncedupdatePurchasePrice = useDebouncedCallback(
        // function
        (value) => {
            setPurchasePrice(value);
        },
        // delay in ms
        1000
      );

    function updatePurchasePrice(values, sourceInfo){
        // console.log("=----------------------updating purchase price");
        // console.log(values, sourceInfo);

        // update purchase_price?
        // console.log(purchase_price);
        // setPurchasePrice(values.floatValue);
        debouncedupdatePurchasePrice(values.floatValue);

        // // console.log(e.target.value);
        // const payment = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
        // setPurchasePrice(`$${payment.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

        // // down payment
        // const dpa = parseFloat(down_payment_percent.replace(/[^0-9.]/g, ''));
        // const dpp = parseFloat(purchase_price.replace(/[^0-9.]/g, ''));
        // const dp_percent = (dpa / dpp) * 100;
        // // setDownPaymentPercent(`${dp_percent.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}%`);
        // setDownPaymentAmount(`$${dp_percent.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);    

        // // property tax
        // setTimeout(() => {
        //     adjustPropertyTax();
        // }, 1000);

    }

        
        // const debouncedupdatePurchasePrice = useDebouncedCallback(
    //     // function
    //     (value) => {
    //         updatePurchasePrice(value);
    //     },
    //     // delay in ms
    //     500
    //   );

    const debouncedupdateDownPayment = useDebouncedCallback(
        // function
        () => {
            // console.log(`down_payment_amount: ${down_payment_amount}`);
            // console.log(`down_payment_percent: ${down_payment_percent}`);
            // console.log(`down_payment_amount_field: ${down_payment_amount_field}`);
            // console.log(`down_payment_percent_field: ${down_payment_percent_field}`);

            if(down_payment_amount !== down_payment_amount_field) {
                setDownPaymentAmountField(down_payment_amount);
            }
            if(down_payment_percent !== down_payment_percent_field) {
                setDownPaymentPercentField(down_payment_percent);
            }

            },
        // delay in ms
        1000
    );

    function updateDownPayment(data){
        // console.log("updating down payment");
        // console.log(data);

        // left_value - percent
        // right_value - amount
        // last_change_element - left or right

        if(data.last_change_element === 'left' || data.last_change_element === undefined){
            if(data?.left_value?.floatValue !== undefined){
                const dper = data.left_value.floatValue;
                const dpp = purchase_price;
                const dp_amount = (dper / 100) * dpp;
                // console.log(`dper: ${dper}`);
                // console.log(`dpp: ${dpp}`);
                // console.log(`dp_amount: ${dp_amount}`);
                // setDownPaymentAmountField(dp_amount);
                setDownPaymentPercent(dper);
                setDownPaymentAmount(dp_amount);
                debouncedupdateDownPayment();
                // if(dp_amount !== down_payment_amount_field) {
                //     setDownPaymentAmountField(dp_amount);
                // }
                // if(dper !== down_payment_percent_field) {
                //     setDownPaymentPercentField(dper);
                // }

            }
        }else{
            if(data?.right_value?.floatValue !== undefined){
                const dpa = data.right_value.floatValue;
                const dpp = purchase_price;
                const dp_percent = (dpa / dpp) * 100;
                // console.log(`dp_percent: ${dp_percent}`);
                // setDownPaymentPercentField(dp_percent);
                setDownPaymentPercent(dp_percent);
                setDownPaymentAmount(dpa);
                debouncedupdateDownPayment();
                // if(dpa !== down_payment_amount_field) {
                //     setDownPaymentAmountField(dpa);
                // }
                // if(dp_percent !== down_payment_percent_field) {
                //     setDownPaymentPercentField(dp_percent);
                // }

            }
        }

    }

    function updateMortgageType(e){
        // console.log("updating mortgage type");
        // console.log(e.target.value);
        const mortgage_selection = e.target.value;
        const mortgage_type_idx = mortgage_types.findIndex((mortgage_selection) => {
            return mortgage_selection[1] === mortgage_selection;
        }
        );
        // console.log(mortgage_type_idx);
        setMortgageTypeIdx(mortgage_type_idx);
        
    }

    // const debouncedInterestRate = useDebouncedCallback(
    //     // function
    //     (value) => {
    //         setInterestRate(value);
    //     },
    //     // delay in ms
    //     1000
    //   );


    function updateInterestRate(values, sourceInfo){
        // console.log("updating interest rate");
        // console.log(values, sourceInfo);
        setInterestRate(values.floatValue);
        // // console.log(e.target.value);
        // // console.log(e.target.selectionStart);
        // const tmp_irate = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
        // debouncedInterestRate(`${tmp_irate.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}%`);
        // // const ss = e.target.selectionStart;
        // // setTimeout(() => {
        // //     e.target.selectionStart = ss;
        // // }, 100);
        // // // console.log(e.target.value);
        // // setInterestRate(e.target.value);
    }

    function updatePropertyTax(data){
        // console.log("updating property tax");
        // console.log(data);
        setPropertyTax(data?.floatValue || 0);
        // setPropertyTax(data.value.floatValue);
        // const tmp_ptax = parseFloat(data.value.replace(/[^0-9.]/g, ''));
        // setPropertyTax(`$${tmp_ptax.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
    }

    function updateInsurance(data){
        // console.log("updating insurance");
        // console.log(data);
        setInsurance(data?.floatValue || 0);
        // const tmp_ins = parseFloat(data.value.replace(/[^0-9.]/g, ''));
        // setInsurance(`$${tmp_ins.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
    }

    function updateHOAFees(data){
        // console.log("updating HOA fees");
        // console.log(data);
        setHoAFees(data?.floatValue || 0);
        // const tmp_hoa = parseFloat(data.value.replace(/[^0-9.]/g, ''));
        // setHoAFees(`$${tmp_hoa.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
    }


  return (
    <div className={`${styles["main-component"]}`}>
         { !google_api_loaded && <GooglePlacesScript />}

      <div className={`${styles["main-content-container"]}  centered-content2`}>
        <div className={`${styles["main-calculator-container"]}`}>
          <div className={`${styles["main-calculator-form-container"]}`}>
            <div className={`${styles["main-calculator-form"]}`}>


            <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                  Location <IconPopover 
                  text="Property taxes and interest rates can differ based on your state and location." 
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                  />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                  <select onChange={(e)=>{updateLocation(e);}} >
                    {state_info.map((state, index) => {
                        return (
                            <option key={index} value={state[1]}>{state[0]}</option>
                        )
                    })} 
                  </select>
                </div>
              </div>


              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                New home purchase price <IconPopover
                 text="Enter the purchase price of the home you want to buy or the amount you plan to offer."
                 cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                   />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                    <NumericFormat 
                        value={100000} 
                        prefix="$"
                        thousandSeparator
                        decimalScale={2}
                        allowNegative={false}
                        isAllowed={(values) => {
                          const { formattedValue, floatValue } = values;
                          return floatValue <= 10000000;
                        }}                        
                        onValueChange={
                            (values, sourceInfo) => {
                                // setPurchasePrice(values.floatValue);
                                updatePurchasePrice(values, sourceInfo);
                                // // console.log(values, sourceInfo);
                            }
                        }
                    />
                </div>
              </div>


              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Down payment <IconPopover 
                text="The upfront payment made by a homebuyer when purchasing a property" 
                cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                  {/* <input type="text"  /> */}
                    <DuoInput
                        left_value={down_payment_percent_field}
                        right_value={down_payment_amount_field}
                        callback={(e) => {
                            updateDownPayment(e);
                        }}
                        left_validate={(values) => {
                          const { formattedValue, floatValue } = values;
                          return formattedValue === "" ||  floatValue <= 100;
                        }}
                        right_validate={(values) => {
                          const { formattedValue, floatValue } = values;
                          // console.log(purchase_price);
                          // console.log(floatValue);
                          // console.log(floatValue < purchase_price);
                          return floatValue < purchase_price;
                        }}
                    />
                </div>
              </div>


              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Mortgage type <IconPopover 
                text="The type of loan program you choose can impact both your interest rate and monthly payments.
                Mortgage type options someone can select: 30-year fixed, 20-year fixed, 15-year fixed" 
                cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                <select onChange={((e)=>{updateMortgageType(e);})}>
                    {mortgage_types.map((mt, index) => {
                        return (
                            <option key={index} value={mt[1]}>{mt[0]}</option>
                        )
                    })} 
                  </select>

                </div>
              </div>


              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Interest rate <IconPopover 
                text="The percentage of the loan amount that a lender charges the borrower for borrowing the money to purchase the property." 
                cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                <NumericFormat 
                        value={interest_rate_field} 
                        suffix="%"
                        allowNegative={false}
                        decimalScale={2}
                        onValueChange={
                            (values, sourceInfo) => {
                                updateInterestRate(values, sourceInfo);
                            }
                        }
                        isAllowed={(values) => {
                          const { formattedValue, floatValue } = values;
                          return floatValue <= 10;
                        }}                        

                />

                  {/* <input  onChange={(e)=>{updateInterestRate(e);}} type="text"  /> */}
                </div>
              </div>


              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Annual property taxes <IconPopover 
                text="Please provide the property tax rate if you know it. Otherwise, the rate will default to the Mean Effective Property Tax for your state. Your actual property tax may vary depending on the location and purchase price of your home." 
                cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                  <UnitInput
                    value={property_tax_field}
                    value_styles={{paddingRight: "3.229166667vw"}}
                    unit_text="/year"
                    callback={(e) => {updatePropertyTax(e);}}
                    validate={(values) => {
                      const { formattedValue, floatValue } = values;
                      return floatValue <= 10000;
                    }}                        

                  />
                </div>
              </div>


              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Annual home insurance <IconPopover 
                text="Input your homeowner's insurance rate if known, otherwise, it will default to the US average. Costs may vary based on location and coverage." 
                cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                    <UnitInput
                        value={900}
                        value_styles={{paddingRight: "3.229166667vw"}}
                        unit_text="/year"
                        callback={(e) => {updateInsurance(e);}}
                        validate={(values) => {
                          const { formattedValue, floatValue } = values;
                          return floatValue <= 10000;
                        }}                        
                      />

                </div>
              </div>


              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Monthly HOA fees <IconPopover 
                text="Homeowners may need to pay monthly Homeowner's Association (HOA) fees to cover communal amenities and maintenance." 
                cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                <UnitInput
                    value={0}
                    value_styles={{paddingRight: "4.170833333vw"}}
                    unit_text="/month"
                    callback={(e) => {updateHOAFees(e);}}
                  />
                  
                </div>
              </div>


            </div>
          </div>
          <div className={`${styles["main-calculator-display-container"]}`}>
            <div className={`${styles["main-calculator-display-chart"]}`}>
              <div className={`${styles["main-calculator-display-chart-top"]}`}>
                <div className={`${styles["main-calculator-display-chart-top-label"]}`}>Est. monthly payment</div>
                <div className={`${styles["main-calculator-display-chart-top-value"]}`}>{monthly_payment}</div>
                <div className={`${styles["main-calculator-display-chart-top-graph-container"]}`}>
                    <div style={chartStyle} className={styles['main-calculator-display-chart-top-graph']}>
                        <div onMouseEnter={()=>{setPrincipalAndInterestHovering(true);}} onMouseLeave={()=>{setPrincipalAndInterestHovering(false);}} className={`${styles["main-calculator-display-chart-top-graph-section-white"]} ${principal_and_interest_hovering ? "hovering" : ""}`}></div>
                        <div onMouseEnter={()=>{setPropertyTaxHovering(true);}} onMouseLeave={()=>{setPropertyTaxHovering(false);}} className={`${styles["main-calculator-display-chart-top-graph-section-blue"]} ${property_tax_hovering ? "hovering" : ""}`}></div>
                        <div onMouseEnter={()=>{setInsuranceHovering(true);}} onMouseLeave={()=>{setInsuranceHovering(false);}} className={`${styles["main-calculator-display-chart-top-graph-section-red"]} ${insurance_hovering ? "hovering" : ""}`}></div>
                        <div onMouseEnter={()=>{setHoAFeesHovering(true);}} onMouseLeave={()=>{setHoAFeesHovering(false);}}  className={`${styles["main-calculator-display-chart-top-graph-section-gray"]} ${hoa_fees_hovering ? "hovering" : ""}`}></div>
                    </div>
                </div>
              </div>
                <div className={`${styles["main-calculator-display-chart-bottom"]}`}>

                <div onMouseEnter={()=>{setPrincipalAndInterestHovering(true);}} onMouseLeave={()=>{setPrincipalAndInterestHovering(false);}} className={`${styles["main-calculator-display-chart-bottom-item"]} ${principal_and_interest_hovering ? "hovering" : ""}`}>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-title"]}`}><div className={styles['chart-color']}><img src="/img/dot_white.svg" alt="chart" /></div>Principal & interest</div>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-value"]}`}>{monthly_principal_and_interest}</div>
                    </div>



                    <div onMouseEnter={()=>{setInsuranceHovering(true);}} onMouseLeave={()=>{setInsuranceHovering(false);}}  className={`${styles["main-calculator-display-chart-bottom-item"]} ${insurance_hovering ? "hovering" : ""}`}>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-title"]}`}><div className={styles['chart-color']}><img src="/img/dot_red.svg" alt="chart" /></div>Home Insurance</div>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-value"]}`}>{ monthly_insurance }</div>
                    </div>



                    <div onMouseEnter={()=>{setPropertyTaxHovering(true);}} onMouseLeave={()=>{setPropertyTaxHovering(false);}}  className={`${styles["main-calculator-display-chart-bottom-item"]} ${property_tax_hovering ? "hovering" : ""}`}>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-title"]}`}><div className={styles['chart-color']}><img src="/img/dot_blue.svg" alt="chart" /></div>Property tax</div>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-value"]}`}>{monthly_property_tax}</div>
                    </div>



                    <div onMouseEnter={()=>{setHoAFeesHovering(true);}} onMouseLeave={()=>{setHoAFeesHovering(false);}}   className={`${styles["main-calculator-display-chart-bottom-item"]} ${hoa_fees_hovering ? "hovering" : ""}`}>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-title"]}`}><div className={styles['chart-color']}><img src="/img/dot_gray.svg" alt="chart" /></div>HoA Fees</div>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-value"]}`}>{monthly_hoa_fees}</div>
                    </div>


                </div>
            </div>
            <div className={`${styles["main-calculator-display-get-started"]}`}>
                <div className={`${styles["main-calculator-display-get-started-title"]}`}>Find your next home the easy way.</div>
                <div className={`${styles["main-calculator-display-get-started-copy"]}`}>Finding your dream home doesn’t have to be complicated. Start your search the easy way.</div>
                <div className={`${styles["main-calculator-display-get-started-field-container"]}`}>
                <input  ref={searchInputRef} onKeyUp={(e)=>{handleKeyup(e);}} type="text" placeholder="Enter city, state" />
                    {window_size.width < 1024 && 
                    <button onClick={()=>{
                      
                      // gtmPush(["callback", "calc_pmts_gs", ()=>{router.push(`/buy`);}]);
                      doGetStarted();
                    }} className="darken-on-hover">Get Started </button>
                    }
                    {window_size.width > 1023 && 
                    <button onClick={()=>{
                      
                      // gtmPush(["callback", "calc_pmts_gs", ()=>{router.push(`/buy`);}]);
                      doGetStarted();

                    }} className="darken-on-hover">Get Started &rarr; </button>
                    }
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
