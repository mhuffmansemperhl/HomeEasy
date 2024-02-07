"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './styles/ThreeByOneBlocksSellEasy.module.scss';
import ArrowButton from './ArrowButton';

const ThreeByOneBlocks = ({}) => {
    const router = useRouter();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`}>
                <div className={`${styles['main-component-title']}`}>Sell easy.  Sell fast.</div>
                <div className={`${styles['main-component-copy']}`}>Get paid now or save big - either way it’s a win-win.</div>
                <div className={`${styles['items']}`}>
                    
                     <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>You’re in control of your home sale.</div>
                        <div className={`${styles['item-copy-container']}`}>The traditional way of real estate is outdated.  We’ve built something entirely new with lower fees, and lower stress, putting thousands in your pocket.</div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Get an InstantOffer and avoid listing.</div>
                        <div className={`${styles['item-copy-container']}`}>No staging, no photos, no open house, no inspections, no negotiating, no time wasted. Done in 15 days.</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                link_text="Get your InstantOffer"
                                callback={()=>{
                                    router.push(`/get_started?flow=instantoffer&step=1`);
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Save thousands, list for only 1%.</div>
                        <div className={`${styles['item-copy-container']}`}>Why pay the 6% listing fee to a realtor? List your home for only 1%, keeping thousands in your pocket.</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                link_text="Listing for One"
                                callback={()=>{
                                    router.push(`/get_started?flow=sell&step=0&branch=8`);
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