"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

import styles from './Buy.module.scss';

const Buy = ({}) => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-title-container']}`}>Let’s get started!</div>
                <div className={`${styles['main-copy-container']}`}>Getting pre-approved is easy with our seamless and headache-free process.</div>
                <div className={`${styles['main-button-container']}`}>
                    <button onClick={()=>{ 
                        // router.push(`/get_started?flow=sell&step=0&branch=11`); 
                        gtmPush(["callback", "sell_learn_more", ()=>{ window.open('https://www.gethomeeasy.com/', '_blank')}]);
                    }} className='darken-on-hover'>Get Started &rarr;</button>
                </div>

            </div>
        </div>
    );
};

export default Buy;