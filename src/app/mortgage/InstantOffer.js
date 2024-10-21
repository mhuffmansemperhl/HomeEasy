"use client"
// import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import IconPopover from "@/components/fluid/IconPopover";
import styles from './InstantOffer.module.scss';
import ArrowButton from '@/components/ArrowButton';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const InstantOffer = ({}) => {
// calculation
const [price, setPrice] = useState("500,000");
const [downPercent, setDownPercent] = useState("20");
const [downPrice, setDownPrice] = useState("100,000");
const [remainingAmount, setRemainingAmount] = useState("0");
const [onePointFivePercent, setOnePointFivePercent] = useState("6,000");
const handlePriceChange = (e) => {
  const newPrice = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
  setPrice(formatNumber(newPrice));
  const newDownPercent = Math.min(((downPrice / newPrice) * 100).toFixed(2), 100); // Ensure downPercent does not exceed 100
  setDownPrice("0"); // Reset downPrice to 0
  setDownPercent("0"); // Reset downPercent to 0
  calculateRemainingAmount(newPrice);
};

const handleDownPriceChange = (e) => {
  const newDownPrice = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
  const parsedPrice = parseFloat(price.replace(/\D/g, '')); // Remove non-numeric characters from price before parsing
  const limitedDownPrice = Math.min(newDownPrice, parsedPrice); // Ensure downPrice does not exceed price
  setDownPrice(formatNumber(limitedDownPrice));
  const newDownPercent = Math.min(((limitedDownPrice / parsedPrice) * 100).toFixed(2), 100); // Recalculate downPercent based on the updated downPrice
  setDownPercent(newDownPercent);
  calculateRemainingAmount(parsedPrice - limitedDownPrice);
};

const handleDownPercentChange = (e) => {
  const newDownPercent = Math.min(e.target.value.replace(/\D/g, ''), 100); // Ensure downPercent does not exceed 100 and remove non-numeric characters
  setDownPercent(newDownPercent);
  const parsedPrice = parseFloat(price.replace(/\D/g, '')); // Remove non-numeric characters from price before parsing
  const newDownPrice = Math.min(((newDownPercent / 100) * parsedPrice).toFixed(0), parsedPrice); // Ensure downPrice does not exceed price
  setDownPrice(formatNumber(newDownPrice));
  calculateRemainingAmount(parsedPrice - newDownPrice);
};
const calculateRemainingAmount = (amount) => {
  setRemainingAmount(formatNumber(amount));
  const onePointFivePercentValue = (amount * 0.015).toFixed(0);
  if(onePointFivePercentValue>=10000){
    setOnePointFivePercent("10,000")
  }
  else{
    setOnePointFivePercent(formatNumber(onePointFivePercentValue));
  }
 
};

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

 const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    const size = useWindowSize();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-copy-container']}`}>

                    <div className={`${styles['main-copy-supertitle']}`}>How it works: HomeEasy Mortgage</div>

                    <div className={`${styles['main-copy-title']}`}>We offer up to $10,000<sup className={`${styles['one-sup']}`} >1</sup> towards closing costs, making us your wallet’s new BFF.</div>

                    <div className={`${styles['main-copy-copy']}`}>See just how low our rates really are. Get instant access to our low rates. Lock in. Save thousands. Get home, easy.</div>

                    <div className={`${styles['main-copy-copy']}`}>Same day pre-approval. Ready to buy a home in today’s market? Speed is key, and we offer same-day pre-approvals for eligible buyers.</div>

                    <div className={`${styles['main-copy-copy']}`}>We’ve got up to 10,000 reasons to work with us. Get 1.50% of your financed loan up to $10,000 towards your closing costs<sup>1</sup>.</div>
                  

                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button> */}
                    <div className={`${styles['main-copy-footer']}`} data-bs-toggle="modal" data-bs-target="#myModal">
                        <ArrowButton
                            link_text="Calculate my savings"
                            // callback={()=>{
                            //     // router.push(`/get_started?flow=sell&step=0&branch=9`);
                            //     gtmPush(["callback", "sell_list_one", ()=>{router.push(`/get_started?flow=sell&step=0&branch=9`);}]);
                            // }}
                            
                        />
                    </div>
                    <div class="modal fade" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      {/* <!-- Modal Header --> */}
      <div class="modal-header border-0">
        {/* <h4 class="modal-title ">Modal Heading</h4> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      <h3 className="text-bold text-center">Calculate your closing credits</h3>
      <div style={{ background: '#F5F7F9', width: '90%', margin: 'auto', padding: '18px 0' }}>
        <div className="text-center" style={{ fontSize: '16px', fontWeight: '700', color: '#1D1D1D' }}>YOUR ESTIMATED CLOSING CREDIT</div>
        <div className="text-center" style={{ fontWeight: '900', fontSize: '26px' }}>$<span>{onePointFivePercent}</span>*</div>
      </div>
      <div className="calculator" style={{ paddingTop: '35px', width: '90%', margin: 'auto' }}>
        <form>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Home Purchase Price</label>
            <input type="text" name="price" style={{ border: 'none', borderBottom: '2px solid gray', borderRadius: '0', fontSize: '20px', fontWeight: '900', padding: '0.375rem 1.75rem', width: '100%' }} value={price} onChange={handlePriceChange} id="price" aria-describedby="emailHelp" />
            <div style={{ position: 'absolute', left: '4px', bottom: '10px' }}>$</div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="mb-3">
                <label htmlFor="downPercent" className="form-label">Down Payment %</label>
                <input type="text" name="down_percent" style={{ border: 'none', borderBottom: '2px solid gray', borderRadius: '0', fontSize: '20px', fontWeight: '900', padding: '0.375rem 0.5rem', width: '100%' }} value={downPercent} onChange={handleDownPercentChange} id="downPercent" aria-describedby="emailHelp" />
                <div style={{ position: 'absolute', right: '0', bottom: '10px' }}>%</div>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="mb-3">
                <label htmlFor="downPrice" className="form-label">Down Payment</label>
                <input type="text" name="down_price" style={{ border: 'none', borderBottom: '2px solid gray', borderRadius: '0', fontSize: '20px', fontWeight: '900', padding: '0.375rem 1.75rem', width: '100%' }} value={downPrice} onChange={handleDownPriceChange} id="downPrice" aria-describedby="emailHelp" />
                <div style={{ position: 'absolute', left: '4px', bottom: '10px' }}>$</div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <span className="me-2 mt-1">*1.5% of your loan amount up to $10,000.</span>
              </div> 
              <div className='loan'>

              </div>
              <div className='estimated'>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

      {/* <!-- Modal footer --> */}
      <div class="modal-footer border-0 justify-content-center">
        <a 
        href="https://www.gethomeeasy.com"
        style={{backgroundColor:'#D30200',padding:' 0.520833333vw 1.145833333vw',fontSize:' 0.833333333vw;',border:'none',color:'white',borderRadius:'5px',textDecoration:'none'}} >Get pre-approved &rarr;</a>
      </div>

    </div>
  </div>
</div>
                </div>
                {size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/mortage_offer.png" alt="instantoffer" />
                </div>
                }
                {/* {size.width < 1920 && size.width > 1279 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1280.webp" alt="instantoffer" />
                </div>
                }
                {size.width < 1280 && size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1024.webp" alt="instantoffer" />
                </div>
                } */}
                {size.width < 1024 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance.webp" alt="instantoffer" />
                </div>
                }
                    {/* <!-- The Modal --> */}

            </div>
        </div>
    );
};

export default InstantOffer;