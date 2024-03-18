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
                <div className={`${styles['main-component-title']}`}>The HomeEasy advantage.</div>
                <div className={`${styles['main-component-copy']}`}>Your one-stop shop for turning dreams into addresses.</div>
                <div className={`${styles['items']}`}>
                    
                     <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Shop for your rate with confidence.</div>
                        <div className={`${styles['item-copy-container']}`}>Low rates. High savings. We have some of the lowest rates possible, making sure you get the most out of your finances.</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Shop our rates"
                                callback={()=>{
                                    // router.push(`/get_started?flow=instantoffer&step=1`);
                                    gtmPush(["callback", "sell_io", ()=>{router.push(`https://www.gethomeeasy.com/`);}]);

                                }}
                            />
                        </div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Get Pre-Approved in minutes.</div>
                        <div className={`${styles['item-copy-container']}`}>We skip the BS in the application process, getting you pre-approved and ready to make an offer in mins, not days.</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Get pre-approved"
                                callback={()=>{
                                    // router.push(`/get_started?flow=instantoffer&step=1`);
                                    gtmPush(["callback", "sell_io", ()=>{router.push(`https://www.gethomeeasy.com/`);}]);

                                }}
                            />
                        </div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>There for you every step of the way.</div>
                        <div className={`${styles['item-copy-container']}`}>Have questions? We love to give answers! Book a call with one of our Loan Officers to learn more</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Book a call"
                                callback={()=>{
                                    // router.push(`/get_started?flow=sell&step=0&branch=8`);
                                    gtmPush(["callback", "sell_list_one", ()=>{router.push(`/booking`);}]);
                                }}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ThreeByOneBlocks;