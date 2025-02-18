"use client";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from "./HowItWorks.module.scss";
import ArrowButton from "@/components/ArrowButton";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const HowItWorks = ({}) => {
    const size = useWindowSize();
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles["main-component"]}`}>
            <div className={`${styles["main-content-container"]}  centered-content2`}>
                <div className={`${styles["title-container"]}`}>Our easy process.</div>
                <div className={`${styles["copy-container"]}`}>It’s not too good to be true, it’s just the way things should be.</div>

                <div className={`${styles["content-container"]}`}>
             
                    <div className={`${styles["main-image-container"]}`}>
                        <img src="/img/how_it_works2.gif" alt="How It Works" />
                    </div>
                   

                    <div className={`${styles["main-copy-container"]}`}>
                        <div className={`${styles["main-copy-copy-title"]}`}>Step 1</div>
                        <div className={`${styles["main-copy-copy"]}`}>Get matched with a top local agent with connections, the know-how, and negotiation skills to get you home faster and easier.</div>

                        <div className={`${styles["main-copy-copy-title"]}`}>Step 2</div>
                        <div className={`${styles["main-copy-copy"]}`}>Get a same day pre-approval with our Preferred Lender for low interest rates and same day pre-approval.</div>

                        <div className={`${styles["main-copy-copy-title"]}`}>Step 3</div>
                        <div className={`${styles["main-copy-copy"]}`}>Discover a home you love, make an offer, negotiate, inspect, and appraise – all with your agent right by your side.</div>

                        <div className={`${styles["main-copy-copy-title"]}`}>Step 4</div>
                        <div className={`${styles["main-copy-copy"]}`}>Receive a lender paid credit of 1.50% of your financed loan amount up to $10,000 to put towards your closing costs<sup>1</sup>.</div>

                        <div className={`${styles["main-copy-footer"]}`}>
                            <ArrowButton
                                link_text="Get started"
                                callback={()=>{
                                    // router.push(`/get_started?flow=instantoffer&step=1`);
                                    gtmPush(["callback", "sell_io", ()=>{router.push(`/get_started?flow=buy&step=1`);}]);

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
