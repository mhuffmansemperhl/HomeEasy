"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from './HomeEasyBuyers.module.scss';
import ArrowButton from '../../components/fluid/ArrowButton';

const HomeEasyBuyers = ({}) => {
    const size = useWindowSize();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-copy-container']}`}>

                    <div className={`${styles['main-copy-supertitle']}`}>HomeEasy Buyers</div>

                    <div className={`${styles['main-copy-title']}`}>We strengthen your buying power.</div>

                    {/* <div className={`${styles['main-copy-copy']}`}>Say goodbye to the complexities of traditional real estate - our hassle-free InstantOffer ensures a seamless and stress-free experience for homeowners like you.</div> */}


                    <div className={`${styles['main-copy-copy-title']}`}>Lower rates and lower monthly payments.</div>
                    <div className={`${styles['main-copy-copy']}`}>Our buyer’s rebate reduces your interest rate, resulting in lower monthly payments for the duration of your mortgage.  Not only do you enjoy more manageable payments but you also increase your buying power, by giving a lift to your pre-approval amount.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Same day pre-approval.</div>
                    <div className={`${styles['main-copy-copy']}`}>Ready to buy a home in today’s market? Speed is key, and we’re here for you, offering same-day pre-approvals for eligible buyers.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Instant access to listings.</div>
                    <div className={`${styles['main-copy-copy']}`}>Get the latest listings sent directly to your phone or email, keeping the real estate market at your fingertips</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Who you work with matters.</div>
                    <div className={`${styles['main-copy-copy']}`}>Tap into our close-knit network of local agents, loan specialists, title companies, and more to make the most of your savings!</div>


                </div>
                {size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/buy_house.png" alt="buy from homeeasy" />
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
                    <img src="/img/buy_house.png" alt="buy from homeeasy" />
                </div>
                }

            </div>
        </div>
    );
};

export default HomeEasyBuyers;