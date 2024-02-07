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
                <div className={`${styles['main-component-title']}`}>Sell more.  Sell easy.</div>
                <div className={`${styles['main-component-copy']}`}>Unlock new opportunities for your business by teaming up with HomeEasy Homes.</div>
                <div className={`${styles['items']}`}>
                    
                     <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>A steady flow of motivated customers.</div>
                        <div className={`${styles['item-copy-container']}`}>HomeEasy Homes is the top choice for more and more buyers and sellers who are really serious. Your leads are all pre-approved and ready to shop, giving you great earning potential.</div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Special products and cool perks.</div>
                        <div className={`${styles['item-copy-container']}`}>Your clients get unique perks like a chance to receive an instant cash offer from us!</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Get your InstantOffer"
                                callback={()=>{
                                    // router.push(`/get_started?flow=instantoffer&step=1`);
                                    gtmPush(["callback", "agents_sell_more_io", ()=>{router.push(`/get_started?flow=instantoffer&step=1`);}]);
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>A commission rate that your wallet loves.</div>
                        <div className={`${styles['item-copy-container']}`}>We’re not like the others – our commission is just 35%, leaving you with more of your hard-earned money.  Because we believe as a team, your success is our success.</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ThreeByOneBlocks;