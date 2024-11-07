"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import IconPopover from "@/components/fluid/IconPopover";
import ArrowButton from '@/components/fluid/ArrowButton';


import { useDebouncedCallback } from "use-debounce";

import { NumericFormat } from 'react-number-format';

import useGoogleTagManager from "@/hooks/useGoogleTagManager";


import styles from "./Calculator.module.scss";
import BetaIcon from "@/compositions/BetaIcon";
import useScreenSize from "@/hooks/useScreenSize";

const Calculator = ({}) => {
  const router = useRouter();
  const {isTablet} = useScreenSize();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

  const window_size = useWindowSize();
  const[expected_home_sale_price, setExpectedHomeSalePrice] = useState(500000);
  const[remaining_mortgage_owed, setRemainingMortgageOwed] = useState(200000);

  const[agent_fees_tb, setAgentFeesTB] = useState("$30,000");
  const[agent_fees_io, setAgentFeesIO] = useState("$0");
  const[agent_fees_lfo, setAgentFeesLFO] = useState("$15,000");

  const[seller_consessions_tb, setSellerConcessionsTB] = useState("$10,000");
  const[seller_consessions_io, setSellerConcessionsIO] = useState("$0");
  const[seller_consessions_lfo, setSellerConcessionsLFO] = useState("$2,500");

  const[closing_costs_tb, setClosingCostsTB] = useState("$15,000");
  const[closing_costs_io, setClosingCostsIO] = useState("$0");
  const[closing_costs_lfo, setClosingCostsLFO] = useState("$2,500"); //vals

  const[avg_home_prep_cost_and_move_tb, setAvgHomePrepCostAndMoveTB] = useState("$5,000");
  const[avg_home_prep_cost_and_move_io, setAvgHomePrepCostAndMoveIO] = useState("$2,500");
  const[avg_home_prep_cost_and_move_lfo, setAvgHomePrepCostAndMoveLFO] = useState("$5,000");

  const[total_tb, setTotalTB] = useState("");
  const[total_io, setTotalIO] = useState("");
  const[total_lfo, setTotalLFO] = useState("");

  useEffect(() => {
    setExpectedHomeSalePrice(500000);
    setRemainingMortgageOwed(200000);
  }, []);



function cleanNumberString(str){
 
  return 0 || parseFloat(str.replace(/[^0-9-]+/g, ""));
}

const debouncedSendUpdateEvent = useDebouncedCallback(
  // function
  () => {dataLayer.push({
        event: "calc_savings_conv",
        "expected_home_sale_price": expected_home_sale_price,
        "remaining_mortgage_owed": remaining_mortgage_owed,
      });
  },
  // delay in ms
  5000
);


useEffect(() => {
  setAgentFeesTB(`$${(expected_home_sale_price * 0.06).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setAgentFeesIO(`$${(expected_home_sale_price * 0.00).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setAgentFeesLFO(`$${(expected_home_sale_price * 0.03).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

  setSellerConcessionsTB(`$${(expected_home_sale_price * 0.02).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setSellerConcessionsIO(`$${(expected_home_sale_price * 0.00).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setSellerConcessionsLFO(`$${(expected_home_sale_price * 0.005).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

  setClosingCostsTB(`$${(expected_home_sale_price * 0.01).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setClosingCostsIO(`$${(expected_home_sale_price * 0.00).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setClosingCostsLFO(`$${(expected_home_sale_price * 0.00).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

  setAvgHomePrepCostAndMoveTB(`$${(expected_home_sale_price * 0.005).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setAvgHomePrepCostAndMoveIO(`$${(expected_home_sale_price * 0.00).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
  setAvgHomePrepCostAndMoveLFO(`$${(expected_home_sale_price * 0.005).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);  

 

    const equity = expected_home_sale_price - remaining_mortgage_owed;
    const costs_tb = cleanNumberString(agent_fees_tb) + cleanNumberString(seller_consessions_tb) + cleanNumberString(closing_costs_tb) + cleanNumberString(avg_home_prep_cost_and_move_tb);
   
    const costs_io = cleanNumberString(agent_fees_io) + cleanNumberString(seller_consessions_io) + cleanNumberString(closing_costs_io) + cleanNumberString(avg_home_prep_cost_and_move_io);
    const costs_lfo = cleanNumberString(agent_fees_lfo) + cleanNumberString(seller_consessions_lfo) + cleanNumberString(closing_costs_lfo) + cleanNumberString(avg_home_prep_cost_and_move_lfo);
    setTotalTB(`$${(equity - costs_tb).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
    setTotalIO(`$${(equity - costs_io).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);
    setTotalLFO(`$${(equity - costs_lfo).toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`);

  debouncedSendUpdateEvent();
}, [expected_home_sale_price, remaining_mortgage_owed]);

    const debouncedupdateExpectedHomeSalePrice = useDebouncedCallback(
        (value) => {
            setExpectedHomeSalePrice(value);
        },
        // delay in ms
        1000
      );

    function updateExpectedHomeSalePrice(values, sourceInfo){
       
        debouncedupdateExpectedHomeSalePrice(values.floatValue);
    }        

    function updateRemainingMortgageOwed(values, sourceInfo){
       setRemainingMortgageOwed(values.floatValue);
    }
  
    return (
    <div className={`${styles["main-component"]}`}>

      <div className={`${styles["main-content-container"]}  centered-content`}>

        <div className={`${styles["main-calculator-container"]}`}>

          <div className={`${styles["main-calculator-top"]}`}>


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
                          value={500000} 
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

                {window_size.width < 1024 && 
                <div className={`${styles["main-calculator-info-link"]}`}>
                  <div className={`${styles["main-calculator-info-link-text"]}`}>
                  Not sure what you could get for your home?
                  </div> 
                  <div className={`${styles["main-calculator-info-link-link"]}`}>
                    <a target="_blank" href="https://homeeasyhomes.areahomevalues.net/">Get a Free Estimate from us</a>
                  </div>     
                </div>
                }


                <div className={`${styles["main-calculator-form-item"]}`}>
                  <div className={`${styles["main-calculator-form-item-title"]}`}>
                  Remaining mortgage owed <IconPopover
                  text="The outstanding balance on a mortgage that the homeowner must repay to the lender."
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                    />
                  </div>
                  <div className={`${styles["main-calculator-form-item-input"]}`}>
                      <NumericFormat 
                          value={200000} 
                          prefix="$"
                          thousandSeparator
                          decimalScale={2}
                          allowNegative={false}
                          isAllowed={(values) => {
                            const { formattedValue, floatValue } = values;
                            return floatValue <= expected_home_sale_price;
                          }}                        
                          onValueChange={
                              (values, sourceInfo) => {
                                updateRemainingMortgageOwed(values, sourceInfo);
                              }
                          }
                      />
                  </div>
                </div>




              </div>

              {window_size.width >= 1024 && 
              <div className={`${styles["main-calculator-info-link"]}`}>
                <div className={`${styles["main-calculator-info-link-text"]}`}>
                Not sure what you could get for your home?
                </div> 
                <div className={`${styles["main-calculator-info-link-link"]}`}>
                  <a target="_blank" href="https://homeeasyhomes.areahomevalues.net/">Get a Free Estimate from us</a>
                </div>     
              </div>
              }

            </div>


          </div>

          <div className={`${styles["main-calculator-bottom-mobile"]}`}>





              <div className={`${styles["main-calculator-bottom-mobile-infoblock"]}`}>
                <div className={`${styles["main-calculator-bottom-mobile-infoblock-title"]}`}>
                TRADITIONAL BROKER
                </div>
                <div className={`${styles["main-calculator-bottom-mobile-infoblock-card"]}`}>
                  <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left"]}`}>
                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left-top"]}`}>

                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Agent fees <IconPopover 
                        text="The commissions paid to real estate agents for their services in buying or selling. While the standard rate is usually 6% of the final sale price, our agents charge only 1% for listing, and the buyer's agent takes 2%, resulting in a total of 3%." 
                        cssStyles={window_size.width < 1024 ? {marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Seller<br/>concessions <IconPopover 
                        text="Buyers may request sellers to cover expenses like closing costs or repairs." 
                        cssStyles={window_size.width < 1024 ? {marginTop: "5.6vw", marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Closing costs <IconPopover 
                        text="In a standard home sale, the seller covers costs such as title and HOA transfer fees.  This can vary based on your location but is generally up to 3% of your home's sale price." 
                        cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Avg. home prep<br/>cost & move <IconPopover 
                        text="Consider costs for moving your belongings, storage, or temporary housing.  Many sellers will also conduct some basic home repairs or opt for a staging service.  This is an estimate only.  Costs may vary." 
                        cssStyles={window_size.width < 1024 ? {marginTop: "5.6vw", marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                    </div>
                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left-bottom"]}`}>
                    Total profit
                    </div>
                  </div>
                  <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right"]}`}>

                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-top"]}`}>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          6%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {agent_fees_tb}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          2%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {seller_consessions_tb}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          1%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {closing_costs_tb}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          0.5% 
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {avg_home_prep_cost_and_move_tb}
                        </div>
                      </div>

                    </div>


                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-bottom"]}`}>
                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-bottom-text"]}`}>
                        {total_tb}
                      </div>
                      {/* <div>button</div> */}
                    </div>

                  </div>
                </div>
              </div>





              <div className={`${styles["main-calculator-bottom-mobile-infoblock"]}`}>
                <div className={`${styles["main-calculator-bottom-mobile-infoblock-title"]}`}>
                <div className={`${styles["main-calculator-bottom-mobile-infoblock-title-image-holder"]}`}>
                <img src="/img/heh_logo_small.svg" alt="arrow" />
                </div>
                InstantOffer
                <IconPopover 
                  white={false}
                  text="Expedite the process significantly with an instant cash offer from us." 
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : {marginLeft: "0.3125vw", width: "1.09375vw", height: "1.197916667vw"}}
                    />
                </div>
                <div className={`${styles["main-calculator-bottom-mobile-infoblock-card"]}`}>
                  <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left"]} ${styles["main-calculator-bottom-mobile-infoblock-card-left-buttoned"]}`}>
                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left-top"]}`}>

                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Agent fees <IconPopover 
                        text="The commissions paid to real estate agents for their services in buying or selling. While the standard rate is usually 6% of the final sale price, our agents charge only 1% for listing, and the buyer's agent takes 2%, resulting in a total of 3%." 
                        cssStyles={window_size.width < 1024 ? {marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Seller<br/>concessions <IconPopover 
                        text="Buyers may request sellers to cover expenses like closing costs or repairs." 
                        cssStyles={window_size.width < 1024 ? {marginTop: "5.6vw", marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Closing costs <IconPopover 
                        text="In a standard home sale, the seller covers costs such as title and HOA transfer fees.  This can vary based on your location but is generally up to 3% of your home's sale price." 
                        cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Avg. home prep<br/>cost & move <IconPopover 
                        text="Consider costs for moving your belongings, storage, or temporary housing.  Many sellers will also conduct some basic home repairs or opt for a staging service.  This is an estimate only.  Costs may vary." 
                        cssStyles={window_size.width < 1024 ? {marginTop: "5.6vw", marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                    </div>
                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left-bottom"]}`}>
                    Total profit
                    </div>
                  </div>
                  <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right"]} ${styles["main-calculator-bottom-mobile-infoblock-card-right-blue"]} ${styles["main-calculator-bottom-mobile-infoblock-card-right-buttoned"]}`}>

                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-top"]}`}>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          0%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {agent_fees_io}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          0%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {seller_consessions_io}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          0%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {closing_costs_io}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          0%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {avg_home_prep_cost_and_move_io}
                        </div>
                      </div>

                    </div>


                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-bottom"]}`}>
                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-bottom-text"]}`}>
                        {total_io}
                      </div>
                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-bottom-button"]}`}>
                        <button>Get Started</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>




              <div className={`${styles["main-calculator-bottom-mobile-infoblock"]}`}>
                <div className={`${styles["main-calculator-bottom-mobile-infoblock-title"]}`}>
                <div className={`${styles["main-calculator-bottom-mobile-infoblock-title-image-holder"]}`}>
                <img src="/img/heh_logo_small.svg" alt="arrow" />
                </div>
                HomeOne
                <IconPopover 
                  white={false}
                  text="Expedite the process significantly with an instant cash offer from us." 
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : {marginLeft: "0.3125vw", width: "1.09375vw", height: "1.197916667vw"}}
                    />
                </div>
                <div style={{position: "relative"}} className={`${styles["main-calculator-bottom-mobile-infoblock-card"]}`}>
                  <BetaIcon containerSx={{position: "absolute", top: "-24px", right: isTablet ? "-58px" : "-120px"}} imgSx={{width: "54px"}} />
                  <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left"]} ${styles["main-calculator-bottom-mobile-infoblock-card-left-buttoned"]}`}>
                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left-top"]}`}>

                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Agent fees <IconPopover 
                        text="The commissions paid to real estate agents for their services in buying or selling. While the standard rate is usually 6% of the final sale price, our agents charge only 1% for listing, and the buyer's agent takes 2%, resulting in a total of 3%." 
                        cssStyles={window_size.width < 1024 ? {marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Seller<br/>concessions <IconPopover 
                        text="Buyers may request sellers to cover expenses like closing costs or repairs." 
                        cssStyles={window_size.width < 1024 ? {marginTop: "5.6vw", marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Closing costs <IconPopover 
                        text="In a standard home sale, the seller covers costs such as title and HOA transfer fees.  This can vary based on your location but is generally up to 3% of your home's sale price." 
                        cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-row-title"]}`}>
                        Avg. home prep<br/>cost & move <IconPopover 
                        text="Consider costs for moving your belongings, storage, or temporary housing.  Many sellers will also conduct some basic home repairs or opt for a staging service.  This is an estimate only.  Costs may vary." 
                        cssStyles={window_size.width < 1024 ? {marginTop: "5.6vw", marginLeft: "1.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                          />
                        </div>
                      </div>

                    </div>
                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-left-bottom"]}`}>
                    Total profit
                    </div>
                  </div>
                  <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right"]} ${styles["main-calculator-bottom-mobile-infoblock-card-right-blue"]} ${styles["main-calculator-bottom-mobile-infoblock-card-right-buttoned"]}`}>

                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-top"]}`}>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          3%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {agent_fees_lfo}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          0.5%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {seller_consessions_lfo}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          0%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {closing_costs_lfo}
                        </div>
                      </div>

                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row"]}`}>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-left"]}`}>
                          0.5%
                        </div>
                        <div className={`${styles["main-calculator-bottom-mobile-infoblock-right-row-right"]}`}>
                          {avg_home_prep_cost_and_move_lfo}
                        </div>
                      </div>

                    </div>


                    <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-bottom"]}`}>
                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-bottom-text"]}`}>
                        {total_lfo}
                      </div>
                      <div className={`${styles["main-calculator-bottom-mobile-infoblock-card-right-bottom-button"]}`}>
                        <button>Get Started</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>




          </div>

          <div className={`${styles["main-calculator-bottom"]}`}>

            <div className={`${styles["main-calculator-bottom-card"]}`}>
            <div className={`${styles["main-calculator-bottom-card-top"]}`}>
                &nbsp;
              </div>
              <div className={`${styles["main-calculator-bottom-card-middle"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  Agent fees <IconPopover 
                  text="The commissions paid to real estate agents for their services in buying or selling. While the standard rate is usually 6% of the final sale price, our agents charge only 1% for listing, and the buyer's agent takes 2%, resulting in a total of 3%." 
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                    />
                  </div>
                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                Seller concessions <IconPopover
                 text="Buyers may request sellers to cover expenses like closing costs or repairs."
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                    />
                  </div>
                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                Closing costs <IconPopover 
                  text="In a standard home sale, the seller covers costs such as title and HOA transfer fees.  This can vary based on your location but is generally up to 3% of your home's sale price." 
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                    />
                  </div>
                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                Avg. home prep cost & move <IconPopover 
                  text="Consider costs for moving your belongings, storage, or temporary housing.  Many sellers will also conduct some basic home repairs or opt for a staging service.  This is an estimate only.  Costs may vary." 
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : undefined}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles["main-calculator-bottom-card-bottom"]}`}>
              &nbsp;
              </div>
              
            </div>

            <div className={`${styles["main-calculator-bottom-card"]} ${styles["main-calculator-bottom-card-white"]}`}>
              <div className={`${styles["main-calculator-bottom-card-top"]}`}>
                <div className={`${styles["main-calculator-bottom-card-top-title"]}`}>
                TRADITIONAL BROKER
                </div>
              </div>
              <div className={`${styles["main-calculator-bottom-card-middle"]}`}>
              <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>

                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    6%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                      {agent_fees_tb}
                    </div>
                  </div>
                </div>

              </div>
 
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    2%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {seller_consessions_tb}
                    </div>
                  </div>
                </div>

                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    1%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {closing_costs_tb}
                    </div>
                  </div>
                </div>

                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    0.5%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {avg_home_prep_cost_and_move_tb}
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <div className={`${styles["main-calculator-bottom-card-bottom"]}`}>
              <div className={`${styles["main-calculator-bottom-card-bottom-title"]}`}>
              Total Profit
              </div>
                
              <div className={`${styles["main-calculator-bottom-card-bottom-total"]}`}>
              {total_tb}
              </div>

              </div>
            </div>

            <div className={`${styles["main-calculator-bottom-card"]} ${styles["main-calculator-bottom-card-blue"]}`}>
            <div className={`${styles["main-calculator-bottom-card-top"]}`}>
            <div className={`${styles["main-calculator-bottom-card-top-title"]}`}>
              <div className={`${styles["main-calculator-bottom-card-top-title-image"]}`}>
              <img src="/img/heh_logo_small.svg" alt="arrow" />
              </div>
            InstantOffer<IconPopover 
                  white={true}
                  text="Expedite the process significantly with an instant cash offer from us." 
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : {marginLeft: "0.3125vw", width: "1.09375vw", height: "1.197916667vw"}}
                    />
            </div>

              </div>
              <div className={`${styles["main-calculator-bottom-card-middle"]}`}>
              <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
              <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    0%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                      {agent_fees_io}
                    </div>
                  </div>
                </div>

                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    0%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {seller_consessions_io}
                    </div>
                  </div>
                </div>

                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    0%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {closing_costs_io}
                    </div>
                  </div>
                </div>

                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    0%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {avg_home_prep_cost_and_move_io}
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <div className={`${styles["main-calculator-bottom-card-bottom"]}`}>
              <div className={`${styles["main-calculator-bottom-card-bottom-title"]}`}>
              Total Profit
              </div>
                
              <div className={`${styles["main-calculator-bottom-card-bottom-total"]}`}>
              {total_io}
              </div>

              <div className={`${styles["main-calculator-bottom-card-bottom-button-container"]}`}>
              <ArrowButton
                  small_text={true}
                  centered={true}
                  white_button={true}
                  link_text="Get your InstantOffer"
                  callback={()=>{
                      router.push(`/instantoffer`);
                  }}
              />
              
              </div>

              </div>
            </div>
            <div className={`${styles["main-calculator-bottom-card"]} ${styles["main-calculator-bottom-card-blue"]}`}>
              <BetaIcon containerSx={{position: "absolute", top: "-24px", right: "-120px"}} imgSx={{width: "54px"}} />
              <div className={`${styles["main-calculator-bottom-card-top"]}`}>
                <div className={`${styles["main-calculator-bottom-card-top-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-top-title-image"]}`}>
                    <img src="/img/heh_logo_small.svg" alt="arrow" />
                  </div>
                
              HOMEONE<IconPopover 
                  white={true}
                  text="Our listing fee is only 1% compared to the national average of 6%. That’s literally putting thousands back in your pocket!" 
                  cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : {marginLeft: "0.3125vw", width: "1.09375vw", height: "1.197916667vw"}}
                    />
                 
              </div>
            </div>
              <div className={`${styles["main-calculator-bottom-card-middle"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                      <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                        3%
                        <IconPopover 
                          white={true}
                          text="While the standard rate is usually 6% of the final sale price, our agents charge only 1% for listing, and the buyer's agent takes 2%, resulting in a total of 3%." 
                          cssStyles={window_size.width < 1024 ? {marginLeft: "2.933333333vw", width: "5.6vw", height: "6.133333333vw"} : {marginLeft: "0.5vw", width: "0.729166667vw", height: "0.78125vw"}}
                        />
                      </div>
                      <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                        {agent_fees_lfo}
                      </div>
                    </div>
                  </div>

                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    0.5%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {seller_consessions_lfo}
                    </div>
                  </div>
                </div>

                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    0%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {closing_costs_lfo}
                    </div>
                  </div>
                </div>

                </div>
                <div className={`${styles["main-calculator-bottom-card-middle-row"]}`}>
                <div className={`${styles["main-calculator-bottom-card-middle-row-title"]}`}>
                  <div className={`${styles["main-calculator-bottom-card-middle-row-title-container"]}`}>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-left"]}`}>
                    0.5%
                    </div>
                    <div className={`${styles["main-calculator-bottom-card-middle-row-right"]}`}>
                    {avg_home_prep_cost_and_move_lfo}
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <div className={`${styles["main-calculator-bottom-card-bottom"]}`}>
                
              <div className={`${styles["main-calculator-bottom-card-bottom-title"]}`}>
              Total Profit
              </div>
                
              <div className={`${styles["main-calculator-bottom-card-bottom-total"]}`}>
              {total_lfo}
              </div>

              <div className={`${styles["main-calculator-bottom-card-bottom-button-container"]}`}>
              <ArrowButton
                  small_text={true}
                  centered={true}
                  white_button={true}
                  link_text="HOMEONE"
                  callback={()=>{
                      router.push(`/sell`);
                  }}
              />
              
              </div>


              </div>
            </div>
        
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
