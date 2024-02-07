"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from './ListingForOne.module.scss';
import ArrowButton from '@/components/ArrowButton';

const ListingForOne = ({}) => {
    const size = useWindowSize();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>

                {size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/listingforone_room.png" alt="listing for one percent" />
                </div>
                }
                {/* {size.width < 1920 && size.width > 1279 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/listingforone_house_1280.png" alt="listing for one percent" />
                </div>
                }
                {size.width < 1280 && size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/listingforone_house_1024.png" alt="listing for one percent" />
                </div>
                } */}
                {size.width < 1024 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/listingforone_room.png" alt="listing for one percent" />
                </div>
                }


                <div className={`${styles['main-copy-container']}`}>

                    <div className={`${styles['main-copy-supertitle']}`}>Listing for One</div>

                    <div className={`${styles['main-copy-title']}`}>Work with a full-service local agent for only 1% listing fee.</div>

                    <div className={`${styles['main-copy-copy']}`}>The way people sell homes has completely evolved, so why hasn’t the commission structure change as well? That’s because no one has disrupted the market, until now. </div>


                    <div className={`${styles['main-copy-copy-title']}`}>You save money.</div>
                    <div className={`${styles['main-copy-copy']}`}>Our average seller saves 50% on commissions and fees when listing with us.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>You get the same service.</div>
                    <div className={`${styles['main-copy-copy']}`}>From listing to closing, you can count on us for a hands-on, stress-free experience!</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Did we mention you save?</div>
                    <div className={`${styles['main-copy-copy']}`}>Our listing fee is only 1% compared to the national average of 6%. That’s literally putting thousands back in your pocket!</div>


                </div>


            </div>
        </div>
    );
};

export default ListingForOne;