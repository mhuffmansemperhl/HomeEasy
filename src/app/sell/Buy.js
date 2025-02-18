"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

import styles from './Buy.module.scss';
import { FORM_TAGS } from "@/helpers/formTags";

const Buy = ({}) => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-title-container']}`}>Need to buy a home as well?  Well we make that easy too.</div>
                <div className={`${styles['main-copy-container']}`}>Buying is easy too with our seamless and headache-free process.</div>
                <div className={`${styles['main-button-container']}`}>
                    <button onClick={()=>{ 
                        // router.push(`/get_started?flow=sell&step=0&branch=11`); 
                        gtmPush(["callback", FORM_TAGS.get_started_buy, ()=>{router.push(`/get_started?flow=buy&step=1`);}]);
                    }} className='darken-on-hover'>Get Started &rarr;</button>
                </div>

            </div>
        </div>
    );
};

export default Buy;