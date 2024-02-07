"use client"

import styles from './Plan.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const Plan = () => {
    const windowSize = useWindowSize();
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={styles['main-component']}>

            <motion.div
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2, delay: 0 }}            
            viewport={{ once: true }}
            className={`${styles['main-content-container']} centered-content2`}>
            <div className={styles['main-title-container']}>Plan with confidence.</div>
            <div className={styles['main-copy-container']}>Unlock our unmatched expertise with our free tools and calculators to empower your real estate journey.</div>
                {/* <div className={styles['copy-holder']}>
                    <div className={styles['copy-title-holder']}>Plan with confidence.</div>
                    <div className={styles['copy-copy-holder']}>Unlock our unmatched expertise with our free tools and calculators to empower your real estate journey.</div>
                </div> */}
                <div className={styles['images-holder']}>
                <div className={styles['image-holder']}> <a onClick={()=>{gtmPush(["callback", "plan_card_1", ()=>{router.push(`/calculator_proceeds`);}]);}} ><img src="/img/card1.png" alt="how much can I make selling my house" /></a></div>
                <div className={styles['image-holder']}> <a onClick={()=>{gtmPush(["callback", "plan_card_2", ()=>{router.push(`/calculator_savings`);}]);}} ><img src="/img/card2.png" alt="savings calculator" /></a></div>
                <div className={styles['image-holder']}> <a onClick={()=>{gtmPush(["callback", "plan_card_3", ()=>{router.push(`/calculator_monthly_payments`);}]);}} ><img src="/img/card3.png" alt="estimated payments" /></a></div>
                </div>
            </motion.div>
        </div>
            
    );
};

export default Plan;