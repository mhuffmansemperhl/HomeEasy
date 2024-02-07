"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './Contact.module.scss';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const Contact = ({}) => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-content']}`}>
                    
                    <div className={`${styles['contact-item']}`}>
                        <div className={`${styles['contact-item-icon']}`}>
                            <img src="/img/contact1.png" alt="real estate questions" />
                        </div>
                        <div className={`${styles['contact-item-text']}`}>Real Estate Questions?</div>
                        <div className={`${styles['contact-item-link']}`}><a onClick={()=>{doEventClick({"event_name": "contact_re_quest", "event_location": "mailto:info@homeeasyhomes.com"});}} >info@homeeasyhomes.com</a></div>
                    </div>
                    
                    <div className={`${styles['contact-item']}`}>
                        <div className={`${styles['contact-item-icon']}`}>
                            <img src="/img/contact2.png" alt="Mortgage questions" />
                        </div>
                        <div className={`${styles['contact-item-text']}`}>Mortgage Questions?</div>
                        <div className={`${styles['contact-item-link']}`}><a onClick={()=>{doEventClick({"event_name": "contact_mort_quest", "event_location": "mailto:asksemper@semperhl.com"});}} >asksemper@semperhl.com</a></div>
                    </div>
                    
                    <div className={`${styles['contact-item']}`}>
                        <div className={`${styles['contact-item-icon']}`}>
                            <img src="/img/contact3.png" alt="Want to Partner Up?" />
                        </div>
                        <div className={`${styles['contact-item-text']}`}>Want to Partner Up?</div>
                        <div className={`${styles['contact-item-link']}`}><a onClick={()=>{doEventClick({"event_name": "contact_part_quest", "event_location": "mailto:partner@homeeasyhomes.com"});}} >partner@homeeasyhomes.com</a></div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Contact;