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
                        <div className={`${styles['item-copy-container']}`}>“As a first time buyer the process appeared to be very intimidating however Daniel provided great support and communication throughout the process. This made me feel confident about my ability to own a home. Thank you Daniel.”</div>
                        <div className={`${styles['item-foot-container']}`}>Pauline T. | Woonsocket, RI</div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-copy-container']}`}>“First time buying a home and it was an easy and smooth experience. The team was fast and efficient. Closed in three weeks and they took great care of everything with amazing communication whenever I had a question. Would recommend 100 percent”</div>
                        <div className={`${styles['item-foot-container']}`}>Shelby H. | Coventry, RI</div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-copy-container']}`}>“Everyone made the entire process seamless and stress-free. I can’t express how thankful I was to have this team by my side. If you want a stress-free experience and to work with someone who genuinely cares about your financial well-being, look no further.”</div>
                        <div className={`${styles['item-foot-container']}`}>LC | Rhode Island</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Testimonials;