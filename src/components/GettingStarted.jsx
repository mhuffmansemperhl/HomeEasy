"use client"
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from './styles/GettingStarted.module.scss';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const GettingStarted = () => {
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    const [show, setShow] = useState("");
    const [scrollY, setScrollY] = useState(0);

    function showGetStarted() {
        setShow(styles['show']);
    }

    const onScroll = useCallback(event => {
        // const { pageYOffset, scrollY } = window;
        // console.log("yOffset", pageYOffset, "scrollY", scrollY);
        // setScrollY(window.pageYOffset);
        showGetStarted();
    }, []);


    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
        window.removeEventListener("scroll", onScroll, { passive: true });
        }        
    }, []);

    return (
        <div>
            <div className={styles['main-component']}>
                <div className={`${styles['main-component-content-container']} centered-content`}>
                    <div className={styles['main-component-title']}>Getting started is easy and obligation free.</div>
                    <div className={styles['main-component-copy']}>The whole real estate process may seem intimidating, but we’re here to help!</div>
                    <div className={`${styles['main-component-button-container']} ${show}`}>
                        <button onClick={() => {
                            // router.push("/get_started");
                            gtmPush(["callback", "home_gs_get_started", ()=>{router.push(`/get_started`);}]);
                        }} className='darken-on-hover'>Get Started <img src="/img/button_right_arrow.svg" alt="arrow" /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GettingStarted;