"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from './Compare.module.scss';
import ArrowButton from '@/components/ArrowButton';

const Compare = ({}) => {
    const size = useWindowSize();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>
                <div className={`${styles['main-title-container']}`}>It’s not too good to be true, it’s just how things should be.</div>
                <div className={`${styles['main-copy-container']}`}>Compare InstantOffer vs the traditional  way to list.</div>
                <div className={`${styles['main-image-container']}`}>
                    {size.width > 1023 &&
                    <img src="/img/compare_instantoffer2.png" alt="compare instantoffer" />
                    }
                    {/* {size.width < 1920 && size.width > 1279 &&
                    <img src="/img/compare_instantoffer_1280.png" alt="compare instantoffer" />
                    }
                    {size.width < 1280 && size.width > 1023 &&
                    <img src="/img/compare_instantoffer_1024.png" alt="compare instantoffer" />
                    } */}
                    {size.width < 1024 && 
                    <img src="/img/compare_instantoffer_mobile.png" alt="compare instantoffer" />
                    }
                </div>

            </div>
        </div>
    );
};

export default Compare;