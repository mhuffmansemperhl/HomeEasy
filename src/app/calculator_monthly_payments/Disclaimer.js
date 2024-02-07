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
                Interest rate is estimated based on the US Weekly Average from the Freddie Mac Primary Mortgage Market Survey®. Your actual rate will vary based on a number of factors including your down payment, credit score, and the length of the loan.
                <br/><br/>
                Property tax is estimated based on the Mean Effective Property Tax by State from the Census Bureau Survey. Annual homeowner’s insurance is estimated based on the 2011 Federal Reserve Bureau Report. Your actual costs may vary from these estimates.
                <br/><br/>
                Conventional loans may also require private mortgage insurance (PMI) if your down payment is less than 20%.
                <br/><br/>
                This monthly payment estimate is offered for educational purposes only. HomeEasy Homes is not a lender and this estimate does not constitute a loan offer. Be sure to consult an official loan estimate before choosing a loan.
                </div>
                {/* <div className={`${styles['main-button-container']}`}>
                    <button onClick={()=>{ router.push(`/get_started?flow=sell&step=0&branch=11`); }} className='darken-on-hover'>Learn More &rarr;</button>
                </div> */}

            </div>
        </div>
    );
};

export default Disclaimer;