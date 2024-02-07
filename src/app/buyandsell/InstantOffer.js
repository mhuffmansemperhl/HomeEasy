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

                    <div className={`${styles['main-copy-supertitle']}`}>InstantOffer</div>

                    <div className={`${styles['main-copy-title']}`}>We buy your home in cash, you reap the benefits.</div>

                    <div className={`${styles['main-copy-copy']}`}>Say goodbye to the complexities of traditional real estate - our hassle-free InstantOffer ensures a seamless and stress-free experience for homeowners like you.</div>


                    <div className={`${styles['main-copy-copy-title']}`}>You save time.</div>
                    <div className={`${styles['main-copy-copy']}`}>Forget snapping photos and the chaos of an Open House, we’ve got it covered and can wrap it up in 15 days.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>You save money.</div>
                    <div className={`${styles['main-copy-copy']}`}>You literally save thousands by avoiding the listing fee.  That’s 6% kept safely in your pockets.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>You get a fair offer.</div>
                    <div className={`${styles['main-copy-copy']}`}>Work directly with professionals who are at the top of their game and have a clear understanding of the local market.</div>


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