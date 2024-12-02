"use client"

import styles from './styles/Plan.module.scss';
import {motion, stagger } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import ArrowButton from "./ArrowButton";
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
                        className={styles['main-component-card']}> <Link href="/calculator-1" >
                             <img src="/img/card1.png" alt="How much can I make" />
                               
                        
                         </Link> <div className={styles["advantage-content-item-get-started-link"]}>
              <ArrowButton
                link_text="Get started"
                callback={() => {
                    gtmPush(["callback", "net_proceeds_calc", ()=>{router.push(`/calculator-1`);}]);
                }}
                large_text={true}
              />
            </div></motion.div>
                        <motion.div 
                        initial={{opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}            
                        viewport={{ once: true }}
                        className={styles['main-component-card']}> <Link href="/calculator-2" > <img src="/img/card2.png" alt="Savings calculator" /> </Link>
                        <div className={styles["advantage-content-item-get-started-link"]}>
              <ArrowButton
                link_text="Get started"
                callback={() => {
                    gtmPush(["callback", "home_savings_calc", ()=>{router.push(`/calculator-2`);}]);
                }}
                large_text={true}
              />
            </div>
                        </motion.div>
                        <motion.div
                        initial={{opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.8 }}            
                        viewport={{ once: true }}
                        className={styles['main-component-card']}> <Link href="/calculator-3" > <img src="/img/card3.png" alt="Payments calculator" /> </Link>
                        <div className={styles["advantage-content-item-get-started-link"]}>
              <ArrowButton
                link_text="Get started"
                callback={() => {
                    gtmPush(["callback", "est_payments_calc", ()=>{router.push(`/calculator-3`);}]);
                }}
                large_text={true}
              />
            </div>
                        </motion.div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Plan;