"use client";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";
import ArrowButton from "@/components/fluid/ArrowButton";
import styles from "./ThreeByOneBlocksBuyEasy.module.scss";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
// import ArrowButton from './ArrowButton';

const ThreeByOneBlocksBuyEasy = ({}) => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    return (
        <div className={`${styles["main-component"]}`}>
            <div className={`${styles["main-content-container"]}  centered-content2`}>
                <div className={`${styles["main-component-title"]}`}>The HomeEasy advantage.</div>
                <div className={`${styles["main-component-copy"]}`}>Become a HomeEasy Buyer and save big!</div>
                <div className={`${styles["items"]}`}>
                    <div className={`${styles["item"]}`}>
                        <div className={`${styles["item-title-container"]}`}>With us, our friends are your friends.</div>
                        <div className={`${styles["item-copy-container"]}`}>Make the most of our tight-knit group of Preferred Agents and Preferred Lender to maximize your savings!</div>
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
                                            router.push(`/get_started?flow=buy&step=1`);
                                        },
                                    ]);
                                }}
                            />
                        </div>
                    </div>

                    <div className={`${styles["item"]}`}>
                        <div className={`${styles["item-title-container"]}`}>
                            Receive a 1.50% lender paid credit<sup>1</sup>.
                        </div>
                        <div className={`${styles["item-copy-container"]}`}>Our Preferred Lender will provide 1.50% of your financed loan amount, up to $10,000 to go towards closing costs. </div>
                        {/* <div className={`${styles['item-foot-container']}`}>
                            <ArrowButton
                                link_text="Get your InstantOffer"
                                callback={()=>{console.log("clicked")}}
                            />
                        </div> */}
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
                                            router.push(`/mortgage`);
                                        },
                                    ]);
                                }}
                            />
                        </div>
                    </div>

                    <div className={`${styles["item"]}`}>
                        <div className={`${styles["item-title-container"]}`}>We’re your wallet’s new BFF.</div>
                        <div className={`${styles["item-copy-container"]}`}>Our Preferred Lender cuts your interest rate, lowering the monthly payment for your entire mortgage!</div>
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
                                            router.push(`/mortgage`);
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

export default ThreeByOneBlocksBuyEasy;
