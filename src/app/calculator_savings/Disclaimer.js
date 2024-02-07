"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './Disclaimer.module.scss';

const Disclaimer = ({}) => {
    const router = useRouter();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                {/* <div className={`${styles['main-title-container']}`}>Need to buy a home as well?  Well we make that easy too.</div> */}
                <div className={`${styles['main-copy-container']}`}>
                This calculator is offered for educational purposes only. All costs are estimates and no guarantee is made that all possible costs have been included. This calculator does not replace a professional estimate.
                </div>
                {/* <div className={`${styles['main-button-container']}`}>
                    <button onClick={()=>{ router.push(`/get_started?flow=sell&step=0&branch=11`); }} className='darken-on-hover'>Learn More &rarr;</button>
                </div> */}

            </div>
        </div>
    );
};

export default Disclaimer;