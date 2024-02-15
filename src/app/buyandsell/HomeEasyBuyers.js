"use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from "./HomeEasyBuyers.module.scss";
import ArrowButton from '@/components/ArrowButton';

const HomeEasyBuyers = ({}) => {
    const size = useWindowSize();
    return (
        <div className={`${styles["main-component"]}`}>
            <div className={`${styles["main-content-container"]}  centered-content2`}>
                <div className={`${styles["main-copy-container"]}`}>
                    <div className={`${styles["main-copy-supertitle"]}`}>How it works: HomeEasy Buyers</div>

                    <div className={`${styles["main-copy-title"]}`}>How we strengthen your buying power.</div>

                    {/* <div className={`${styles['main-copy-copy']}`}>Say goodbye to the complexities of traditional real estate - our hassle-free InstantOffer ensures a seamless and stress-free experience for homeowners like you.</div> */}

                    <div className={`${styles["main-copy-copy-title"]}`}>Lower rates and lower monthly payments</div>
                    <div className={`${styles["main-copy-copy"]}`}>
                        They are our Preferred Lender for a reason - their low rates are hard to beat! So, not only do you enjoy more manageable payments but you also benefit from their streamlined, stress-free process.
                    </div>

                    <div className={`${styles["main-copy-copy-title"]}`}>Same day pre-approval.</div>
                    <div className={`${styles["main-copy-copy"]}`}>Ready to buy a home in today’s market? Speed is key, and our Preferred Lender, offers same-day pre-approvals for eligible buyers.</div>

                    <div className={`${styles["main-copy-copy-title"]}`}>Instant access to listings.</div>
                    <div className={`${styles["main-copy-copy"]}`}>Get the latest listings sent directly to your phone or email, keeping the real estate market at your fingertips.</div>

                    <div className={`${styles["main-copy-copy-title"]}`}>Who you work with matters.</div>
                    <div className={`${styles["main-copy-copy"]}`}>
                        Tap into our close-knit network of Preferred Agents and Lenders, and get 1.50% of your financed loan up to $10,000 towards your closing costs<sup>1</sup>.
                    </div>

                    <ArrowButton
                        link_text="Get started"
                        callback={() => {
                            // router.push(`/get_started?flow=sell&step=0&branch=9`);
                            gtmPush([
                                "callback",
                                "buysell_how_it_works_gs",
                                () => {
                                    router.push(`/get_started?flow=sell&step=0&branch=9`);
                                },
                            ]);
                        }}
                    />
                </div>
                {size.width > 1023 && (
                    <div className={`${styles["main-image-container"]}`}>
                        <img src="/img/buy_house2.png" alt="buy from homeeasy" />
                    </div>
                )}
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
                {size.width < 1024 && (
                    <div className={`${styles["main-image-container"]}`}>
                        <img src="/img/buy_house2.png" alt="buy from homeeasy" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeEasyBuyers;
