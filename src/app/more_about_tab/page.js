
"use client";
import { useState, useEffect } from "react";
// import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
import styles from './selltabs.module.scss';


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
              What would you like to learn more about?
              </div>
              <div className={styles["form_para"]}>
              We have a whole team of experts ready to help!
              </div>
              <div className={styles.button_box}>
    <div className={styles.btn_div}>
        <button className={activeTab === 0 ? styles.tab_active : ''} onClick={() => handleTabClick(0)}>Instant cash offers</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 1 ? styles.tab_active : ''} onClick={() => handleTabClick(1)}>List for 1%</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 2 ? styles.tab_active : ''} onClick={() => handleTabClick(2)}>Selling & buying your home</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 3 ? styles.tab_active : ''} onClick={() => handleTabClick(3)}>HomeEasy Homes process</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 3 ? styles.tab_active : ''} onClick={() => handleTabClick(3)}>Other</button>
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
