"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from './HomeEasyAgents.module.scss';
import ArrowButton from '../../components/fluid/ArrowButton';

const HomeEasyAgents = ({}) => {
    const size = useWindowSize();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-copy-container']}`}>

                    <div className={`${styles['main-copy-supertitle']}`}>HomeEasy Homes Agents</div>

                    <div className={`${styles['main-copy-title']}`}>More clients, more products, and more support.</div>

                    {/* <div className={`${styles['main-copy-copy']}`}>Say goodbye to the complexities of traditional real estate - our hassle-free InstantOffer ensures a seamless and stress-free experience for homeowners like you.</div> */}


                    <div className={`${styles['main-copy-copy-title']}`}>Motivated, pre-approved buyers.</div>
                    <div className={`${styles['main-copy-copy']}`}>We’re a step ahead of our competition – our leads are pre-approved and excited to get the keys to their dream home.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Your success, our joy - only a 35% commission.</div>
                    <div className={`${styles['main-copy-copy']}`}>Keep more of your hard-earned money with only 35% commission.  An extra perk, we take that 35% and give it back to your client to put towards closing costs or buying down their interest rates.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Who you work with matters.</div>
                    <div className={`${styles['main-copy-copy']}`}>By partnering up with our mortgage experts, you can ensure your client not only scores a fantastic deal but also breeze through the mortgage process effortlessly.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Look like a hero.</div>
                    <div className={`${styles['main-copy-copy']}`}>When your clients save thousands, you’ll be the one they high-five with gratitude!</div>


                </div>
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/agents_phone.png" alt="partner with homeeasy" />
                </div>

            </div>
        </div>
    );
};

export default HomeEasyAgents;