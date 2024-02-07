"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
// import useWindowSize from "@/hooks/useWindowSize";

import styles from './Destress.module.scss';

const Destress = ({}) => {
    const router = useRouter();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-title-container']}`}>De-stressing the real estate process.</div>
                <div className={`${styles['main-copy-container']}`}>Connecting you with local experts, savings, and ease.</div>
                <div className={`${styles['main-text-container']}`}>
                The traditional way of real estate is outdated, and we’ve built something entirely new to bring you lower commissions, lower fees, and lower stress. By automating parts of the home buying process, our agents work more efficiently, passing on the benefits to you.
                <br/><br/>
                Our mission is simple: we’re here to make your buying or selling experience as smooth as possible by introducing you to the best local expert agents while putting thousands of dollars back in your pocket for a home that you actually want.
                <br/><br/>
                But we don’t stop at just lower costs. We’ve cultivated long-lasting relationships with local attorneys, title companies, escrow companies, and mortgage lenders – our preferred partners. This means that when you work with us, you can save thousands more through our network of trusted professionals.
                <br/><br/>
                And trust us, we get it – real estate can feel overwhelming. That’s why we’ve taken the guesswork out of the equation. Our friendly team is dedicated to understanding your needs and finding an agent who speaks your language. No more complicated jargon or confusing processes – just clear, straightforward guidance.
                <br/><br/>
                Think of us as your real estate matchmakers, money-savers, and efficiency enthusiasts. We’re all about finding that perfect fit between you and an agent who knows the local scene like the back of their hand. Our approach is friendly, down-to-earth, and all about helping you feel confident at every step.
                <br/><br/>
                Join us on your journey to a new home – because with HomeEasy Homes, real estate is approachable, enjoyable, and all about putting money back in your pocket while finding a home that truly suits you.
                </div>

            </div>
        </div>
    );
};

export default Destress;