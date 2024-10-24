"use client"
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import styles from './InstantOffer.module.scss';
import ArrowButton from '@/components/ArrowButton';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const InstantOffer = ({}) => {
 const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    const size = useWindowSize();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-copy-container']}`}>

                    <div className={`${styles['main-copy-supertitle']}`}>How it works: HomeEasy Mortgage</div>

                    <div className={`${styles['main-copy-title']}`}>We offer up to $10,000<sub>1</sub> towards closing costs, making us your wallet’s new BFF.</div>

                    <div className={`${styles['main-copy-copy']}`}>See just how low our rates really are. Get instant access to our low rates. Lock in. Save thousands. Get home, easy.</div>

                    <div className={`${styles['main-copy-copy']}`}>Same day pre-approval. Ready to buy a home in today’s market? Speed is key, and we offer same-day pre-approvals for eligible buyers.</div>

                    <div className={`${styles['main-copy-copy']}`}>We’ve got up to 10,000 reasons to work with us. Get 1.50% of your financed loan up to $10,000 towards your closing costs1.</div>
                  

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
      <div class="modal-body">
        <h3 className="text-bold text-center">Calculate your closing credits</h3>
        <div style={{background:'#F5F7F9',width:'90%',margin: 'auto',padding:'18px 0'}} >
           <div className="text-center" style={{fontSize:'16px',fontWeight:'700',color:'#1D1D1D'}}>YOUR ESTIMATED CLOSING CREDIT</div>
            <div className="text-center" style={{fontWeight:'900',fontSize:'26px'}}>$6,000*</div>
        </div>
        <div className="calculator" style={{paddingTop:'35px',width:'90%',margin:'auto'}}>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Home Purchase Price</label>
    <input type="text" style={{border:'none',borderBottom:'2px solid gray',borderRadius:'0',fontSize:'20px',fontWeight:'900',padding:'0.375rem 0.75rem',width:'100%'}} value="$500,000"  id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
 <div className="row">
    <div className="col-lg-5 col-12">
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Down Payemnt %</label>
    <input type="text" style={{border:'none',borderBottom:'2px solid gray',borderRadius:'0',fontSize:'20px',fontWeight:'900',padding:'0.375rem 0.75rem',width:'100%'}} value="$20"  id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div style={{position:'absolute',right:'0',bottom:'8px'}}>%</div>
  </div>
    </div>
    <div className="col-lg-7 col-12">
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Down Payemnt</label>
    <input type="text" style={{border:'none',borderBottom:'2px solid gray',borderRadius:'0',fontSize:'20px',fontWeight:'900',padding:'0.375rem 0.75rem',width:'100%',paddingLeft:'35px'}} value="$100,000"  id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div style={{position:'absolute',left:'4px',bottom:'8px'}}>$</div>
  </div>
    </div>
 </div>

</form>
        </div>
        {/* Modal body.. */}

      </div>

      {/* <!-- Modal footer --> */}
      <div class="modal-footer border-0 justify-content-center">
        <button type="button" style={{backgroundColor:'#D30200',padding:' 0.520833333vw 1.145833333vw',fontSize:' 0.833333333vw;',border:'none',color:'white',borderRadius:'5px'}} data-bs-dismiss="modal">Get pre-approved &rarr;</button>
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