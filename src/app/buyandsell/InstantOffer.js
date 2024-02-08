"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from './InstantOffer.module.scss';
import ArrowButton from '@/components/ArrowButton';

const InstantOffer = ({}) => {
    const size = useWindowSize();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-copy-container']}`}>

                    <div className={`${styles['main-copy-supertitle']}`}>How it works: InstantOffer</div>

                    <div className={`${styles['main-copy-title']}`}>We buy your home in cash, you reap the benefits.</div>

                    <div className={`${styles['main-copy-copy']}`}>Say goodbye to the complexities of traditional real estate - our hassle-free InstantOffer ensures a seamless and stress-free experience for homeowners like you.</div>


                    <div className={`${styles['main-copy-copy-title']}`}>Receive a competitive offer in 24 hours</div>
                    <div className={`${styles['main-copy-copy']}`}>Tell us about your home and receive an offer carefully evaluated by
our real estate partners specializing in your local market</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Pay no closing costs or realtor fees.</div>
                    <div className={`${styles['main-copy-copy']}`}>You literally save thousands by avoiding the listing fee & closing
costs. That’s an extra 4%* kept safely in your pockets.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Close in just 15 days**.</div>
                    <div className={`${styles['main-copy-copy']}`}>We expedite the process significantly.</div>
                    <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Get started"
                                callback={()=>{
                                    gtmPush(["callback", "buysell_listing_one", ()=>{router.push(`/get_started?flow=sell&step=0&branch=8`);}]);
                                    // 
                                }}
                            />
                        </div>

                </div>
                {size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_house.png" alt="instantoffer" />
                </div>
                }
                {/* {size.width < 1920 && size.width > 1279 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1280.png" alt="instantoffer" />
                </div>
                }
                {size.width < 1280 && size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1024.png" alt="instantoffer" />
                </div>
                } */}
                {size.width < 1024 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_house.png" alt="instantoffer" />
                </div>
                }

            </div>
        </div>
    );
};

export default InstantOffer;