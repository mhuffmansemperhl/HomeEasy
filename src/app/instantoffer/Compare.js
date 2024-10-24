"use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";
import IconPopover from "@/components/fluid/IconPopover";
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
                    <div className={`${styles['hover_icon1']}`}>
                    <IconPopover
                 text="The national average listing fee is 5.46%. This would be $21,840 on a $400,000 home."
                 
                   />
                    </div>             
                    <div className={`${styles['hover_icon2']}`}>
                    <IconPopover
                 text="Buyers typically request a 3-6% seller paid closing concession which is $12,000-$24,000 on a $400,000 home."
                 
                   />
                    </div>             
                </div>

            </div>
        </div>
    );
};

export default Compare;