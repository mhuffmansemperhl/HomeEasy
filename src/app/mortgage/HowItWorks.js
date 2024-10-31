"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from './HowItWorks.module.scss';
import ArrowButton from '@/components/ArrowButton';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const HowItWorks = ({}) => {
    const size = useWindowSize();
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>

            <div className={`${styles['title-container']}`}>Our easy process.</div>
            <div className={`${styles['copy-container']}`}>It’s not too good to be true, it’s just the way things should be.</div>

            <div className={`${styles['content-container']}`}>


                {/* {size.width > 1919 && */}
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/animated-phone.gif" alt="How It Works" />
                </div>
                {/* }
                {size.width < 1920 && size.width > 1279 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1280.png" alt="listing for one percent" />
                </div>
                }
                {size.width < 1280 && size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1024.png" alt="listing for one percent" />
                </div>
                }
                {size.width < 1024 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/listingforone_house.png" alt="listing for one percent" />
                </div>
                } */}


                <div className={`${styles['main-copy-container']}`}>



                    <div className={`${styles['main-copy-copy-title']}`}>Step 1</div>
                    <div className={`${styles['main-copy-copy']}`}>Answer five simple questions and get instant access to our low rates. No credit pulls. No obligation!</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Step 2</div>
                    <div className={`${styles['main-copy-copy']}`}>Confirm some details and spend one more minute answering a few additional questions and you’re on your way to a pre-approval.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Step 3</div>
                    <div className={`${styles['main-copy-copy']}`}>Found your dream home? With our streamlined process our average time from application to close is currently less than 30 days. Better start packing now!</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Step 4</div>
                    <div className={`${styles['main-copy-copy']}`}>Closing time! We give you 1.50% of your financed loan up to $10,000 towards your closing costs1 making your home purchase more affordable.</div>

                    <div className={`${styles['main-copy-footer']}`}>
                        <ArrowButton
                            link_text="Get started"
                            callback={()=>{
                                // router.push(`/get_started?flow=sell&step=0&branch=9`);
                                gtmPush(["callback", "sell_list_one", ()=>{ window.open('https://www.gethomeeasy.com/', '_blank')}]);
                            }}
                        />
                    </div>


                </div>
            </div>


            </div>
        </div>
    );
};

export default HowItWorks;