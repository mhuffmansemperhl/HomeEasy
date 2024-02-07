"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './ThreeByOneBlocksSellEasy.module.scss';
import ArrowButton from '@/components/fluid/ArrowButton';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const ThreeByOneBlocks = ({}) => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-component-title']}`}>Sell fast.  Buy easy.</div>
                <div className={`${styles['main-component-copy']}`}>We are de-stressing the entire real estate process.</div>
                <div className={`${styles['items']}`}>
                    
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Get an InstantOffer and avoid listing.</div>
                        <div className={`${styles['item-copy-container']}`}>No staging, no photos, no open house, no inspections, no negotiating, no time wasted. Done in 15 days.</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Get your InstantOffer"
                                callback={()=>{
                                    gtmPush(["callback", "buysell_io", ()=>{router.push(`/get_started?flow=instantoffer&step=1`);}]);
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Save thousands, list for only 1%.</div>
                        <div className={`${styles['item-copy-container']}`}>Why pay the 6% listing fee to a realtor? List your home for only 1%, keeping thousands in your pocket.</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Listing for One"
                                callback={()=>{
                                    gtmPush(["callback", "buysell_listing_one", ()=>{router.push(`/get_started?flow=sell&step=0&branch=8`);}]);
                                    // 
                                }}
                            />
                        </div>
                    </div>

                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Receive a 1% lender paid credit.</div>
                        <div className={`${styles['item-copy-container']}`}>Our affiliated lender will provide 1% of your financed loan amount to go towards  your closing costs or buying down your interest rate.</div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ThreeByOneBlocks;