"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import IconPopover from "@/components/fluid/IconPopover";
import DuoInput from "@/components/fluid/DuoInput";
// import UnitInput from "@/components/fluid/UnitInput";
import ArrowButton from '@/components/fluid/ArrowButton';

import useFlowGetStartedStore from "@/store/store.js";
import { produce } from "immer";

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



  const payment_data = useFlowGetStartedStore(state => state.payment_data);


    const[expected_home_sale_price, setExpectedHomeSalePrice] = useState(100000);
    const[remaining_mortgage_owed, setRemainingMortgageOwed] = useState(70000);
    const[agent_fees_percent, setAgentFeesPercent] = useState(3);
    const[agent_fees_amount, setAgentFeesAmount] = useState(3000);
    const[seller_concessions, setSellerConcessions] = useState(0);
    const[repair_costs, setRepairCosts] = useState(0);
    const[moving_costs, setMovingCosts] = useState(0);

    const[expected_home_sale_price_field, setExpectedHomeSalePriceField] = useState("$100,000");
    const[remaining_mortgage_owed_field, setRemainingMortgageOwedField] = useState("$80,000");
    const[agent_fees_percent_field, setAgentFeesPercentField] = useState("3%");
    const[agent_fees_amount_field, setAgentFeesAmountField] = useState("$3,000");
    const[seller_concessions_field, setSellerConcessionsField] = useState("$0");
    const[repair_costs_field, setRepairCostsField] = useState("$0");
    const[moving_costs_field, setMovingCostsField] = useState("$0");

    const[net_proceeds, setNetProceeds] = useState("$0");
    const[expected_home_sale_price_formatted, setExpectedHomeSalePriceFormatted] = useState("$100,000");
    const[total_cost_to_sell, setTotalCostToSell] = useState("$0");



  useEffect(() => {

    setExpectedHomeSalePrice(100000);
    setRemainingMortgageOwed(70000);
    setAgentFeesPercent(3);
    setAgentFeesAmount(3000);
    setSellerConcessions(0);
    setRepairCosts(0);
    setMovingCosts(0);

  }, []);



  // function adjustPropertyTax(){
  //   const state_tax_info_item = state_info[location_idx];
  //   if(state_tax_info_item && state_tax_info_item.length > 0){
  //       // console.log("update location tax amount");
  //       const state_tax_rate = parseFloat(state_info[location_idx][2]);
  //       // console.log(`state_tax_rate: ${state_tax_rate}`);

  //       // const purchase_price_amount = parseFloat(purchase_price.replace(/[^0-9.]/g, ''));
  //       // console.log(`purchase_price_amount: ${purchase_price}`);
        
  //       const property_tax_amount = purchase_price * (state_tax_rate / 100);
  //       // console.log(`property_tax_amount: ${property_tax_amount}`);
        
  //       // setPropertyTax(`$${property_tax_field.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  //       setPropertyTaxField(property_tax_amount);
  //   }
  // }

  // useEffect(() => {
  //   // console.log("update location tax amount");
  //   adjustPropertyTax();
  // }, [location_idx]);



// function updateChart(){
//     // console.log("update monthly payment and chart");

//     // first set up the monthly payment fields
//     const mpt = property_tax / 12;
//     const mi = insurance / 12;
//     const mhf = hoa_fees / 1;
    
//     setMonthlyPropertyTax(`$${mpt.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
//     setMonthlyInsurance(`$${mi.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
//     setMonthlyHoAFees(`$${mhf.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);


//     // set up principal and interest
//     const a = purchase_price - down_payment_amount;
//     const r = interest_rate / 100 / 12;
//     const n = 360; // number of payments months

//     // console.log(`a: ${a}`);
//     // console.log(`r: ${r}`);
//     // console.log(`n: ${n}`);

//     const payment = a / ((((1 + r) ** n) - 1) / (r * (1 + r) ** n));
//     // console.log(payment);
//     setMonthlyPrincipalAndInterest(`$${payment.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

//     const  mp = payment + mpt + mi + mhf;
//     setMonthlyPayment(`$${mp.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

//     // set up chart
//     setChartStyle({gridTemplateColumns: `${payment}fr ${mpt}fr ${mi}fr ${mhf}fr`});

// }


// useEffect(() => {
//     updateChart();
// }, [down_payment_amount, interest_rate, property_tax, insurance, hoa_fees]);

const debouncedSendUpdateEvent = useDebouncedCallback(
  // function
  () => {
      console.log("sending calc_proceeds_conv event")
      dataLayer.push({
        event: "calc_proceeds_conv",
        "expected_home_sale_price": expected_home_sale_price,
        "remaining_mortgage_owed": remaining_mortgage_owed,
        "agent_fees_percent": agent_fees_percent,
        "agent_fees_amount": agent_fees_amount,
        "seller_concessions": seller_concessions,
        "repair_costs": repair_costs,
        "moving_costs": moving_costs,
        "net_proceeds": net_proceeds,
        "total_cost_to_sell": total_cost_to_sell,
      });
  },
  // delay in ms
  5000
);

useEffect(() => {
  const new_net_proceeds = expected_home_sale_price - remaining_mortgage_owed - agent_fees_amount - seller_concessions - repair_costs - moving_costs;
  const total_cost_to_sell = agent_fees_amount + seller_concessions + repair_costs + moving_costs;
  setNetProceeds(`$${new_net_proceeds.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setTotalCostToSell(`$${total_cost_to_sell.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  debouncedSendUpdateEvent();
}, [expected_home_sale_price, remaining_mortgage_owed, agent_fees_amount, seller_concessions, repair_costs, moving_costs]);

// useEffect(() => {
//     const new_down_payment_amount = (down_payment_percent / 100) * purchase_price;
//     // console.log(`new_down_payment_amount: ${new_down_payment_amount}`);
//     setDownPaymentAmountField(new_down_payment_amount);

//     // const new_property_tax = purchase_price * (property_tax / 100);
//     // setPropertyTaxField(new_property_tax);
//     adjustPropertyTax();
// }, [purchase_price]);

useEffect(() => {
  const new_agent_fees_amount = (agent_fees_percent / 100) * expected_home_sale_price;
  setAgentFeesAmountField(new_agent_fees_amount);
}, [expected_home_sale_price]);


    const debouncedupdateExpectedHomeSalePrice = useDebouncedCallback(
        // function
        (value) => {
            setExpectedHomeSalePrice(value);
            setExpectedHomeSalePriceFormatted(`$${value.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
        },
        // delay in ms
        1000
      );

    function updateExpectedHomeSalePrice(values, sourceInfo){
        console.log("=----------------------updating expected home sale price");
        console.log(values, sourceInfo);
        debouncedupdateExpectedHomeSalePrice(values.floatValue);
    }        

    function updateRemainingMortgageOwed(values, sourceInfo){
        // console.log("=----------------------updating remaining mortgage owed");
        // console.log(values, sourceInfo);
        setRemainingMortgageOwed(values.floatValue);
    }

    const debouncedUpdateAgentFees = useDebouncedCallback(
        // function
        () => {
          if(agent_fees_amount !== agent_fees_amount_field){
            setAgentFeesAmountField(agent_fees_amount);
          }
          if(agent_fees_percent !== agent_fees_percent_field){
            setAgentFeesPercentField(agent_fees_percent);
          }
        },
        // delay in ms
        1000
      );

    function updateAgentFees(data){
      if(data.last_change_element === 'left' || data.last_change_element === undefined){
        if(data?.left_value?.floatValue !== undefined){
          const afp = data.left_value.floatValue;
          const ehs = expected_home_sale_price;
          const af_amount = (afp / 100) * ehs;
          setAgentFeesPercent(afp);
          setAgentFeesAmount(af_amount);
          debouncedUpdateAgentFees();
        }
      }else{
        if(data?.right_value?.floatValue !== undefined){
          const afa = data.right_value.floatValue;
          const ehs = expected_home_sale_price;
          const af_percent = (afa / ehs) * 100;
          setAgentFeesPercent(af_percent);
          setAgentFeesAmount(afa);
          debouncedUpdateAgentFees();
        }
      }
    }

    // function updateDownPayment(data){
    //     // console.log("updating down payment");
    //     // console.log(data);

    //     // left_value - percent
    //     // right_value - amount
    //     // last_change_element - left or right

    //     if(data.last_change_element === 'left' || data.last_change_element === undefined){
    //         if(data?.left_value?.floatValue !== undefined){
    //             const dper = data.left_value.floatValue;
    //             const dpp = purchase_price;
    //             const dp_amount = (dper / 100) * dpp;
    //             // console.log(`dper: ${dper}`);
    //             // console.log(`dpp: ${dpp}`);
    //             // console.log(`dp_amount: ${dp_amount}`);
    //             // setDownPaymentAmountField(dp_amount);
    //             setDownPaymentPercent(dper);
    //             setDownPaymentAmount(dp_amount);
    //             debouncedupdateDownPayment();
    //             // if(dp_amount !== down_payment_amount_field) {
    //             //     setDownPaymentAmountField(dp_amount);
    //             // }
    //             // if(dper !== down_payment_percent_field) {
    //             //     setDownPaymentPercentField(dper);
    //             // }

    //         }
    //     }else{
    //         if(data?.right_value?.floatValue !== undefined){
    //             const dpa = data.right_value.floatValue;
    //             const dpp = purchase_price;
    //             const dp_percent = (dpa / dpp) * 100;
    //             // console.log(`dp_percent: ${dp_percent}`);
    //             // setDownPaymentPercentField(dp_percent);
    //             setDownPaymentPercent(dp_percent);
    //             setDownPaymentAmount(dpa);
    //             debouncedupdateDownPayment();
    //             // if(dpa !== down_payment_amount_field) {
    //             //     setDownPaymentAmountField(dpa);
    //             // }
    //             // if(dp_percent !== down_payment_percent_field) {
    //             //     setDownPaymentPercentField(dp_percent);
    //             // }

    //         }
    //     }

    // }


    function updateSellerConcessions(data){
        // console.log("updating seller concessions");
        // console.log(data);
        setSellerConcessions(data?.floatValue || 0);
    }

    function updateRepairCosts(data){
        // console.log("updating repair costs");
        // console.log(data);
        setRepairCosts(data?.floatValue || 0);
    }

    function updateMovingCosts(data){
        // console.log("updating moving costs");
        // console.log(data);
        setMovingCosts(data?.floatValue || 0);
    }




  return (
    <div className={`${styles["main-component"]}`}>

      <div className={`${styles["main-content-container"]}  centered-content2`}>
        <div className={`${styles["main-calculator-container"]}`}>
          <div className={`${styles["main-calculator-form-container"]}`}>
            <div className={`${styles["main-calculator-form"]}`}>


            <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Expected home sale price <IconPopover
                 text="Your expected home sale price is the value you believe a buyer would be willing to pay for your house."
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
                              updateExpectedHomeSalePrice(values, sourceInfo);
                            }
                        }
                    />
                </div>
              </div>



              <div className={`${styles["main-calculator-form-sub-item"]}`}>
                {/* <div className={`${styles["main-calculator-form-sub-item"]}`}> */}
                  <div className={`${styles["main-calculator-form-sub-item-line"]}`}>Not sure what you could get for your home?
                  </div>
                  <div className={`${styles["main-calculator-form-sub-item-line"]}`}>
                  <a target="_blank" href="https://401homevalues.areahomevalues.net/">Get a Free Estimate from us</a>
                  </div>
                {/* </div> */}
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                  &nbsp;
                </div>
              </div>



              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Remaining mortgage owed <IconPopover
                 text="The outstanding balance on a mortgage that the homeowner must repay to the lender."
                 cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                   />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                    <NumericFormat 
                        value={70000} 
                        prefix="$"
                        thousandSeparator
                        decimalScale={2}
                        allowNegative={false}
                        isAllowed={(values) => {
                          const { formattedValue, floatValue } = values;
                          return floatValue <= expected_home_sale_price * 0.8;
                        }}                        
                        onValueChange={
                            (values, sourceInfo) => {
                              updateRemainingMortgageOwed(values, sourceInfo);
                            }
                        }
                    />
                </div>
              </div>


              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Agent fees <IconPopover 
                text="The commissions paid to real estate agents for their services in buying or selling. While the standard rate is usually 6% of the final sale price, our agents charge only 1% for listing, and the buyer's agent takes 2%, resulting in a total of 3%." 
                cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                  {/* <input type="text"  /> */}
                    <DuoInput
                        left_value={agent_fees_percent_field}
                        right_value={agent_fees_amount_field}
                        callback={(e) => {
                            updateAgentFees(e);
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
                          return floatValue < expected_home_sale_price * 0.06;
                        }}
                    />
                </div>
              </div>




              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Seller concessions <IconPopover
                 text="Buyers may request sellers to cover expenses like closing costs or repairs."
                 cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                   />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                    <NumericFormat 
                        value={seller_concessions_field} 
                        prefix="$"
                        thousandSeparator
                        decimalScale={2}
                        allowNegative={false}
                        isAllowed={(values) => {
                          const { formattedValue, floatValue } = values;
                          return floatValue <= expected_home_sale_price * 0.1;
                        }}                        
                        onValueChange={
                            (values, sourceInfo) => {
                              updateSellerConcessions(values, sourceInfo);
                            }
                        }
                    />
                </div>
              </div>




              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Home prep & repairs <IconPopover
                 text="In order to maximize profit, many sellers will conduct some basic home repairs or opt for a staging service."
                 cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                   />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                    <NumericFormat 
                        value={repair_costs_field}
                        prefix="$"
                        thousandSeparator
                        decimalScale={2}
                        allowNegative={false}
                        isAllowed={(values) => {
                          const { formattedValue, floatValue } = values;
                          return floatValue <= expected_home_sale_price * 0.1;
                        }}                        
                        onValueChange={
                            (values, sourceInfo) => {
                              updateRepairCosts(values, sourceInfo);
                            }
                        }
                    />
                </div>
              </div>




              <div className={`${styles["main-calculator-form-item"]}`}>
                <div className={`${styles["main-calculator-form-item-title"]}`}>
                Moving costs <IconPopover
                 text="Consider costs for moving your belongings, storage, or temporary housing."
                 cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                   />
                </div>
                <div className={`${styles["main-calculator-form-item-input"]}`}>
                    <NumericFormat 
                        value={moving_costs_field}
                        prefix="$"
                        thousandSeparator
                        decimalScale={2}
                        allowNegative={false}
                        isAllowed={(values) => {
                          const { formattedValue, floatValue } = values;
                          return floatValue <= 20000;
                        }}                        
                        onValueChange={
                            (values, sourceInfo) => {
                              updateMovingCosts(values, sourceInfo);
                            }
                        }
                    />
                </div>
              </div>


 

            </div>

            {window_size.width >= 1024 &&
            <div className={`${styles["main-calculator-form-disclaimer"]}`}>This calculator is offered for educational purposes only. All costs are estimates and no guarantee is made that all possible costs have been included. This calculator does not replace a professional estimate.</div>
            }

          </div>
          <div className={`${styles["main-calculator-display-container"]}`}>
            <div className={`${styles["main-calculator-display-chart"]}`}>
              <div className={`${styles["main-calculator-display-chart-top"]}`}>
                <div className={`${styles["main-calculator-display-chart-top-label"]}`}>Est. net proceeds</div>
                <div className={`${styles["main-calculator-display-chart-top-value"]}`}>{net_proceeds}</div>
                
              </div>
                <div className={`${styles["main-calculator-display-chart-bottom"]}`}>

                <div  className={`${styles["main-calculator-display-chart-bottom-item"]}`}>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-title"]}`}>Home sale price</div>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-value"]}`}>{expected_home_sale_price_formatted}</div>
                    </div>



                    <div  className={`${styles["main-calculator-display-chart-bottom-item"]}`}>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-title"]}`}>Total costs to sell</div>
                        <div className={`${styles["main-calculator-display-chart-bottom-item-value"]}`}>{total_cost_to_sell}</div>
                    </div>





                </div>
            </div>
            <div className={`${styles["main-calculator-display-get-started"]}`}>
                <div className={`${styles["main-calculator-display-get-started-title"]}`}>See how your InstantOffer compares.</div>
                <div className={`${styles["main-calculator-display-get-started-copy"]}`}>Expedite the process significantly with an instant cash offer. Simple, stress-free, and quick – we’ll have it all wrapped up in just 15 days. </div>

                <div className={`${styles["main-calculator-display-get-started-button-container"]}`}>
                <ArrowButton
                    small_text={true}
                    link_text="Get your InstantOffer"
                    callback={()=>{
                        // router.push(`/get_started?flow=instantoffer&step=1`);
                        gtmPush(["callback", "calc_proceeds_gs", ()=>{router.push(`/get_started?flow=instantoffer&step=1`);}]);

                      }}
                />

                </div>
{/* 
                <div className={`${styles["main-calculator-display-get-started-field-container"]}`}>
                <input  ref={searchInputRef} onKeyUp={(e)=>{handleKeyup(e);}} type="text" placeholder="Enter city, state" />
                    {window_size.width < 1024 && 
                    <button className="darken-on-hover">Get Started </button>
                    }
                    {window_size.width > 1023 && 
                    <button className="darken-on-hover">Get Started &rarr; </button>
                    }
                </div>
               */}
            </div>


            {window_size.width < 1024 &&
            <div className={`${styles["main-calculator-form-disclaimer"]}`}>This calculator is offered for educational purposes only. All costs are estimates and no guarantee is made that all possible costs have been included. This calculator does not replace a professional estimate.</div>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
