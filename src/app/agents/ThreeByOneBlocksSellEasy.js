"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './ThreeByOneBlocksSellEasy.module.scss';
import ArrowButton from '@/components/fluid/ArrowButton';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const ThreeByOneBlocks = ({}) => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-component-title']}`}>The HomeEasy advantage.</div>
                <div className={`${styles['main-component-copy']}`}>Stay at your brokerage. Get motivated leads.</div>
                <div className={`${styles['items']}`}>
                    
                     <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Instantly receive motivated referrals.</div>
                        <div className={`${styles['item-copy-container']}`}>Easily manage incoming leads with our user-friendly CRM, providing quick access at no cost.</div>
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Who you work with matters.</div>
                        <div className={`${styles['item-copy-container']}`}>By partnering up with our Preferred Lender, you can ensure your client not only receives a closing credit, but also breezes through the mortgage process effortlessly and with low rates.</div>
                     
                    </div>
                    
                    <div className={`${styles['item']}`}>
                        <div className={`${styles['item-title-container']}`}>Experience the perks of a Preferred Agent.</div>
                        <div className={`${styles['item-copy-container']}`}>We have innovative training sessions that go beyond traditional methods. From CE credit classes to trivia nights, we optimize your real estate knowledge and skills for business success.</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ThreeByOneBlocks;