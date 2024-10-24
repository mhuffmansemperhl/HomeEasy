"use client";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";
import ArrowButton from "@/components/fluid/ArrowButton";
import styles from "./ThreeByOneBlocksHassleFree.module.scss";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
// import ArrowButton from './ArrowButton';

const ThreeByOneBlocks = ({}) => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    return (
        <div className={`${styles["main-component"]}`}>
            <div className={`${styles["main-content-container"]}  centered-content2`}>
                <div className={`${styles["main-component-title"]}`}>The HomeEasy advantage.</div>
                <div className={`${styles["main-component-copy"]}`}>Choose our InstantOffer for a fee-free, hassle-free, stress-free sale.</div>
                <div className={`${styles["items"]}`}>
                    <div className={`${styles["item"]}`}>
                        <div className={`${styles["item-title-container"]}`}>Get a fair offer.</div>
                        <div className={`${styles["item-copy-container"]}`}>Let our market specialists handle it all! Your home value is carefully evaluated by our expert real estate partners who specialize in your local market.</div>
                    </div>

                    <div className={`${styles["item"]}`}>
                        <div className={`${styles["item-title-container"]}`}>Save money.</div>
                        <div className={`${styles["item-copy-container"]}`}>
                            Keep thousands in your pocket! Pay no realtor fees. Pay no closing costs. Make no repairs. Get fast cash. Don’t like our offer? No worries, you can still <a href="/sell/#listings"> list for less </a>
                        </div>
                        {/* <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                link_text="Get your InstantOffer"
                                callback={()=>{console.log("clicked")}}
                            />
                        </div> */}
                    </div>

                    <div className={`${styles["item"]}`}>
                        <div className={`${styles["item-title-container"]}`}>Save time.</div>
                        <div className={`${styles["item-copy-container"]}`}>Expedite the process significantly with an instant cash offer. Simple, stress-free, and quick – we’ll have it all wrapped up in just 15 days**</div>
                        <div className={`${styles["item-foot-container"]}`}>
                            <ArrowButton
                                small_text={true}
                                link_text="Get started"
                                callback={() => {
                                    // router.push(`/get_started?flow=instantoffer&step=1`);
                                    gtmPush([
                                        "callback",
                                        "sell_io",
                                        () => {
                                            router.push(`/get_started?flow=sell&step=0&branch=9`);
                                        },
                                    ]);
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
