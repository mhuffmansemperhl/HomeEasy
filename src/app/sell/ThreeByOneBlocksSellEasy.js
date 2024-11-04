"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
                <div className={`${styles['main-component-title']}`}>The HomeEasy advantage</div>
                <div className={`${styles['main-component-copy']}`}>We give you two options. Get paid now or list for less - either way it’s a win-win.</div>
                <div className={`${styles['items']}`}>
                    
                     <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>With us, you have listing options.</div>
                        <div className={`${styles['item-copy-container']}`}>The traditional way of real estate is
outdated. We’ve built something entirely
new with lower fees, and lower stress,
putting thousands in your pocket.</div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Get an InstantOffer
and avoid listing.</div>
                        <div className={`${styles['item-copy-container']}`}>No staging, no photos, no open house, no
inspections, no negotiating, no time
wasted. Done in 15 days**.</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Get your InstantOffer"
                                callback={()=>{
                                    // router.push(`/get_started?flow=instantoffer&step=1`);
                                    gtmPush(["callback", "sell_io", ()=>{router.push(`/instantoffer`);}]);

                                }}
                            />
                        </div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Or save thousands, list for only 1%.</div>
                        <div className={`${styles['item-copy-container']}`}>Why pay the avg. 5.46%* listing fee to a
realtor? List your home for only 1%<sup>2</sup>,
keeping thousands in your pocket.</div>
                        <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Get your HomeOne Listing"
                                callback={()=>{
                                    // router.push(`/get_started?flow=sell&step=0&branch=8`);
                                    gtmPush(["callback", "sell_list_one", ()=>{router.push(`/get_started?flow=sell&step=0&branch=9`);}]);
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
