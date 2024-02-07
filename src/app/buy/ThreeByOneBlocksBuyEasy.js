"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './ThreeByOneBlocksBuyEasy.module.scss';
// import ArrowButton from './ArrowButton';

const ThreeByOneBlocksBuyEasy = ({}) => {

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-component-title']}`}>Buy easy.  Buy fast.</div>
                <div className={`${styles['main-component-copy']}`}>Become a HomeEasy buyer and save big!</div>
                <div className={`${styles['items']}`}>
                    
                     <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>We’re your wallet’s new BFF.</div>
                        <div className={`${styles['item-copy-container']}`}>Our buyer’s rebate cuts your interest rate, lowering the monthly payment for your entire mortgage, which means you may be pre-approved for more! </div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>With us, our friends are your friends.</div>
                        <div className={`${styles['item-copy-container']}`}>Make the most of our tight-knit group of local agents, loan experts, title companies and more to maximize your savings! </div>
                        {/* <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                link_text="Get your InstantOffer"
                                callback={()=>{console.log("clicked")}}
                            />
                        </div> */}
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Receive a 1% lender paid credit.</div>
                        <div className={`${styles['item-copy-container']}`}>Our affiliated lender will provide 1% of your financed loan amount to go towards  your closing costs or buying down your interest rate.</div>
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

export default ThreeByOneBlocksBuyEasy;