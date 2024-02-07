
"use client";
import { useState, useEffect } from "react";
// import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
import styles from './can_help.module.scss';


export default function Home() {
    const [activeTab, setActiveTab] = useState();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
    return (
        <div className={styles["main"]}>
          <FlowHeader />
          <div className={`${styles["progress-container"]} centered-content`}>
              <div className={styles["form_heading"]}>
              Got it. How can we help you?
              </div>

              <div className={styles.button_box}>
    <div className={styles.btn_div}>
        <button className={activeTab === 0 ? styles.tab_active : ''} onClick={() => handleTabClick(0)}>I would like an Instant Offer</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 1 ? styles.tab_active : ''} onClick={() => handleTabClick(1)}>My listing agreement is about to expire</button>
    </div>

    {console.log(activeTab)}
</div>

<div className={styles.instant_offer}>
           <div className={styles.instant_uper}>
           *Instant Offer
           </div>
           <div className={styles.instant_down}>
           Get an instant, cash offer to buy your home. The fastest way and most trouble-free way to selling your home.
           </div>
</div>
          </div>
          {/* <div className={`${styles["content-container"]} centered-content`}>
           dsad
     
          </div> */}
    
          {/* <div className={styles["footer-container"]}>dsadas</div> */}
        </div>
      );
}
