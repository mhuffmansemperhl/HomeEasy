"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './Buy.module.scss';

const Buy = ({}) => {
    const router = useRouter();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`}>
                <div className={`${styles['main-title-container']}`}>Need to buy a home as well?  Well we make that easy too.</div>
                <div className={`${styles['main-copy-container']}`}>Buying is easy too easy too with our seamless and headache-free process.</div>
                <div className={`${styles['main-button-container']}`}>
                    <button onClick={()=>{ router.push(`/get_started?flow=sell&step=0&branch=11`); }} className='darken-on-hover'>Learn More &rarr;</button>
                </div>

            </div>
        </div>
    );
};

export default Buy;