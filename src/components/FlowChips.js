"use client"
import { useRouter } from "next/navigation";

import styles from './styles/FlowChips.module.scss';
import { useEffect, useState } from "react";
import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const FlowChips = ({nav_items}) => {
    const size = useWindowSize();
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    const [chipIndex, setChipIndex] = useState(-1);

    // const router = useRouter();
    // const selectedChip = "buy";
    const flow = useFlowGetStartedStore(state => state.flow);
    const setFlow = useFlowGetStartedStore(state => state.setFlow);
    const nextStep = useFlowGetStartedStore(state => state.nextStep);

    // useEffect(() => {
    //     // false && console.log(selectedChip);
    // }, [selectedChip]);

    useEffect(() => {
        true && console.log("doing chip selection");
        if(chipIndex > -1){
            true && console.log("selectChip");
            setFlow(["sell", "buy", "sellbuy", "instantoffer"][chipIndex]);
            nextStep(nav_items.pathname, nav_items.router, nav_items.searchParams);
    //     // setBranch(0);
}
    }, [chipIndex]);

    // function selectChip(chip_index){
    //     true && console.log("selectChip");
    //     setFlow(["sell", "buy", "sellbuy", "instantoffer"][chip_index]);
    //     // nextStep(nav_items.pathname, nav_items.router, nav_items.searchParams);
    //     // setBranch(0);
    //     // false && console.log(index);
  
    //   }
  
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`} >

                <div onClick={()=>{
                    // selectChip(0);
                    gtmPush(["callback", "get_started_sell", ()=>{setChipIndex(0);}]);

                }} className={`${styles['chip-item']} ${flow === "sell" ? styles['selected'] : ""}`}>
                    <div className={`${styles['chip-item-image-container']}`}>
                        <img src="/img/flow_chip_1.png" alt="sell a home" />
                    </div>
                    {/* <div className={`${styles['chip-item-super-title']}`}> */}
                    {/* I want to */}
                    {/* </div> */}
                    <div className={`${styles['chip-item-title']}`}>
                    Sell
                    </div>
                </div>

                <div onClick={()=>{
                    // selectChip(1);
                    gtmPush(["callback", "get_started_buy", ()=>{setChipIndex(1);}]);
                }} className={`${styles['chip-item']} ${flow === "buy" ? styles['selected'] : ""}`}>
                    <div className={`${styles['chip-item-image-container']}`}>
                        <img src="/img/flow_chip_2.png" alt="sell a home" />
                    </div>
                    {/* <div className={`${styles['chip-item-super-title']}`}> */}
                    {/* I want to */}
                    {/* </div> */}
                    <div className={`${styles['chip-item-title']}`}>
                    Buy
                    </div>
                </div>

                <div onClick={()=>{
                    // selectChip(2);
                    gtmPush(["callback", "get_started_buysell", ()=>{setChipIndex(2);}]);
                }} className={`${styles['chip-item']} ${flow === "sellbuy" ? styles['selected'] : ""}`}>
                    <div className={`${styles['chip-item-image-container']}`}>
                        <img src="/img/flow_chip_3.png" alt="sell a home" />
                    </div>
                    {/* <div className={`${styles['chip-item-super-title']}`}> */}
                    {/* I want to */}
                    {/* </div> */}
                    <div className={`${styles['chip-item-title']}`}>
                    Sell &amp; Buy
                    </div>
                </div>
                {size.width < 1024 && 
                <div onClick={()=>{
                    // selectChip(3);
                    gtmPush(["callback", "get_started_io", ()=>{setChipIndex(3);}]);
                }} className={`${styles['chip-item']} ${flow === "sellbuy" ? styles['selected'] : ""}`}>
                    <div className={`${styles['chip-item-image-container']}`}>
                        <img src="/img/flow_chip_4.png" alt="get an InstantOffer" />
                    </div>
                    {/* <div className={`${styles['chip-item-super-title']}`}> */}
                    {/* I want an */}
                    {/* </div> */}
                    <div className={`${styles['chip-item-title']}`}>
                    InstantOffer
                    </div>
                </div>
                }
            </div>
        </div>
    )
};

export default FlowChips;
