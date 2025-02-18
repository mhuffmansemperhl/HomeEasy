"use client"
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from './HowItWorks.module.scss';
import ArrowButton from '@/components/ArrowButton';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import { FORM_TAGS } from "@/helpers/formTags";

const HowItWorks = ({}) => {
    const size = useWindowSize();
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content2`}>

            <div className={`${styles['title-container']}`}>Our easy process.</div>
            <div className={`${styles['copy-container']}`}>It’s not too good to be true, it’s just the way things should be.</div>

            <div className={`${styles['content-container']}`}>


                {/* {size.width > 1919 && */}
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/how_it_works.gif" alt="How It Works" />
                </div>
                {/* }
                {size.width < 1920 && size.width > 1279 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1280.png" alt="listing for one percent" />
                </div>
                }
                {size.width < 1280 && size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1024.png" alt="listing for one percent" />
                </div>
                }
                {size.width < 1024 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/listingforone_house.png" alt="listing for one percent" />
                </div>
                } */}


                <div className={`${styles['main-copy-container']}`}>



                    <div className={`${styles['main-copy-copy-title']}`}>Step 1</div>
                    <div className={`${styles['main-copy-copy']}`}>Use our <a target="_blank" href="https://homeeasyhomes.areahomevalues.net/">free home value calculator</a> to instantly see your home’s current value.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Step 2</div>
                    <div className={`${styles['main-copy-copy']}`}>Simplifying your life is our priority. Choose between an InstantOffer or list with us for just 1%<sup>2</sup> – whatever suits you best, we’ll make it happen!</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Step 3</div>
                    <div className={`${styles['main-copy-copy']}`}>Talk to us! Just take a few mins to fill us in on your home’s details and your Preferred Agent will be there every step of the way, from contract to close.</div>

                    <div className={`${styles['main-copy-copy-title']}`}>Step 4</div>
                    <div className={`${styles['main-copy-copy']}`}>Sold! Save thousands, pop the champagne and get packing!</div>

                    <div className={`${styles['main-copy-footer']}`}>
                        <ArrowButton
                            link_text="Get started"
                            callback={()=>{
                                // router.push(`/get_started?flow=sell&step=0&branch=9`);
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

export default HowItWorks;