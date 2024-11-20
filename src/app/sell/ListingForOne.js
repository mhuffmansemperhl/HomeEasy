"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from './ListingForOne.module.scss';
import ArrowButton from '@/components/ArrowButton';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import BetaIcon from "@/compositions/BetaIcon";
import useScreenSize from "@/hooks/useScreenSize";
import { FORM_TAGS } from "@/helpers/formTags";

const ListingForOne = ({}) => {
    const size = useWindowSize();
    const {isTablet} = useScreenSize()
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    return (
        <div id="listings">
        <div className={`${styles['main-component']}`} >
            <div className={`${styles['main-content-container']}  centered-content2`}>

                {size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/listingforone_house.webp" alt="listing for one percent" />
                </div>
                }
                
                {size.width < 1024 &&
                <div className={`${styles['main-image-container']}`} >
                    <img src="/img/listingforone_house.webp" alt="listing for one percent" />
                </div>
                }


                <div className={`${styles['main-copy-container']}`} >

                    <div style={{display: "flex"}} className={`${styles['main-copy-supertitle']}`}>
                        <BetaIcon popupSx={{position: "absolute"}}/>
                        <span style={{marginLeft: !isTablet && "-24px"}}>How it works: HomeOne</span>
                    </div>

                    <div className={`${styles['main-copy-title']}`}>Work with a full-service Preferred Agent for only 1%.</div>

                    <div className={`${styles['main-copy-copy']}`}> Prefer to list? No problem! Our listing fee is just 1%<sup>2</sup> helping our
average seller cuts costs by 50% on commissions and fees. We’ve
got your back from listing to closing, ensuring a stress-free
experience.</div>


                    <div className={`${styles['main-copy-copy-title']}`}>Tell us about your home.</div>
                    <div className={`${styles['main-copy-copy']}`}>Answer a few quick questions about your home and one of our Preferred Agents will be in touch.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Sign a listing agreement.</div>
                    <div className={`${styles['main-copy-copy']}`}>Hit the ground running with one of our Preferred Agents committed
to getting you home faster, smarter, and easier.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Close on your home with more money in your pocket!</div>
                    <div className={`${styles['main-copy-copy']}`}>Get the same full-service experience for thousands less!</div>

                    <div className={`${styles['main-copy-footer']}`}>
                        <ArrowButton
                            link_text="Get started"
                            callback={()=>{
                                gtmPush(["callback", FORM_TAGS.get_started_sell, ()=>{router.push(`/get_started?flow=sell&step=0&branch=9`);}]);
                            }}
                        />
                    </div>
                </div>


            </div>
        </div>
        </div>
    );
};

export default ListingForOne;