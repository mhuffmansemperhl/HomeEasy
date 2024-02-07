"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './Testimonials.module.scss';
// import ArrowButton from './ArrowButton';

const Testimonials = ({}) => {

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                {/* <div className={`${styles['main-component-title']}`}>Sell easy.  Sell fast.</div> */}
                <div className={`${styles['main-component-copy']}`}>Don’t just take our word for it, take theirs!</div>
                <div className={`${styles['items']}`}>
                    
                     <div className={`${styles['item']}`}>
                        <div className={`${styles['item-copy-container']}`}>“I saved over $10,000 in Real Estate commissions when selling through HomeEasy Homes . These savings allowed me to buy down my interest rate when purchasing my new home which will save me more than $300/mo for the next 30 years!”</div>
                        <div className={`${styles['item-foot-container']}`}>Carla J. | North Kingstown, RI</div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-copy-container']}`}>“HomeEasy Homes saved me $12,375 in commissions when selling my multi-family home. My realtor Melissa was local, experienced and was way better than my previous real estate agent who was charging me way more for the same work. Great experience.”</div>
                        <div className={`${styles['item-foot-container']}`}>Sean M. | Warwick, RI</div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-copy-container']}`}>“HomeEasy Homes was a total lifesaver! They made selling my home super simple and fast, and the cash in hand was exactly what I needed. Highly recommend their services if you want a stress-free home selling experience!”</div>
                        <div className={`${styles['item-foot-container']}`}>Joe K. | Worcester, MA</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Testimonials;