"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

import styles from './Sell.module.scss';

const Sell = ({}) => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-title-container']}`}>Need to sell a home as well?  Well we make that easy too.</div>
                <div className={`${styles['main-copy-container']}`}>Selling is easy too easy too with our seamless and headache-free process.</div>
                <div className={`${styles['main-button-container']}`}>
                    <button onClick={()=>{ 
                        // router.push(`/get_started?flow=instantoffer&step=1`); 
                        gtmPush(["callback", "buy_learn_more", ()=>{router.push(`/get_started?flow=instantoffer&step=1`);}]);

                    }} className='darken-on-hover'>Learn More &rarr;</button>
                </div>

            </div>
        </div>
    );
};

export default Sell;