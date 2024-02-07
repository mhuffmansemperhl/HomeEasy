"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './ThreeByOneBlocksHassleFree.module.scss';
// import ArrowButton from './ArrowButton';

const ThreeByOneBlocks = ({}) => {

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-component-title']}`}>Hassle-free.  Stress-free.</div>
                <div className={`${styles['main-component-copy']}`}>Say goodbye to the complexities of traditional real estate.</div>
                <div className={`${styles['items']}`}>
                    
                     <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Save time.</div>
                        <div className={`${styles['item-copy-container']}`}>Expedite the process significantly with an instant cash offer. Simple, stress-free, and quick – we’ll have it all wrapped up in just 15 days. </div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Save money.</div>
                        <div className={`${styles['item-copy-container']}`}>Keep thousands in your pocket! Pay no realtor fees.  Pay no closing costs.  Make no repairs.  Get fast cash.  Keep thousands in your pocket. </div>
                        {/* <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                link_text="Get your InstantOffer"
                                callback={()=>{console.log("clicked")}}
                            />
                        </div> */}
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Get a fair offer.</div>
                        <div className={`${styles['item-copy-container']}`}>Let our market specialists handle it all! Your home value is carefully evaluated by our real estate team specializing in your local market.</div>
                        {/* <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                link_text="Listing for One"
                                callback={()=>{console.log("clicked")}}
                            />
                        </div> */}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ThreeByOneBlocks;