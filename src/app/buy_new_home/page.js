
"use client";
import { useState, useEffect } from "react";
// import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
import styles from './new_home.module.scss';


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
              Do you also need to buy a new home after <br /> you sell?
              </div>

              <div className={styles.button_box}>
    <div className={styles.btn_div}>
        <button className={activeTab === 0 ? styles.tab_active : ''} onClick={() => handleTabClick(0)}>Yes</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 1 ? styles.tab_active : ''} onClick={() => handleTabClick(1)}>No</button>
    </div>

    {console.log(activeTab)}
</div>

          </div>
          {/* <div className={`${styles["content-container"]} centered-content`}>
           dsad
     
          </div> */}
    
          {/* <div className={styles["footer-container"]}>dsadas</div> */}
        </div>
      );
}
