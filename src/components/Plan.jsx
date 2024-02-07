"use client"

import styles from './styles/Plan.module.scss';
import {motion, stagger } from "framer-motion";
import { useRouter } from "next/navigation";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const Plan = () => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div>
            <div className={styles['main-component']}>
                <div className={`${styles['main-component-content-container']} centered-content`}>
                    <div className={styles['main-component-title']}>Plan with confidence.</div>
                    <div className={styles['main-component-copy']}>Unlock our unmatched expertise with our free tools and calculators to empower your real estate journey.</div>
                    <div className={styles['main-component-card-container']}>
                        <motion.div 
                        initial={{opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0 }}            
                        viewport={{ once: true }}
                        className={styles['main-component-card']}> <a onClick={()=>{gtmPush(["callback", "home_plan_card_1", ()=>{router.push(`/calculator_proceeds`);}]);}} > <img src="/img/card1.png" alt="How much can I make" /> </a></motion.div>
                        <motion.div 
                        initial={{opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}            
                        viewport={{ once: true }}
                        className={styles['main-component-card']}> <a onClick={()=>{gtmPush(["callback", "home_plan_card_2", ()=>{router.push(`/calculator_savings`);}]);}} > <img src="/img/card2.png" alt="Savings calculator" /> </a></motion.div>
                        <motion.div
                        initial={{opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.8 }}            
                        viewport={{ once: true }}
                        className={styles['main-component-card']}> <a onClick={()=>{gtmPush(["callback", "home_plan_card_3", ()=>{router.push(`/calculator_monthly_payments`);}]);}} > <img src="/img/card3.png" alt="Payments calculator" /> </a></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;