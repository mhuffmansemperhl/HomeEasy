
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
              What’s motivating you to buy?
              </div>
              {/* <div className={styles["form_para"]}>
              Your timeline helps us
            understand how we can help you
            get ready to sell your home
              </div> */}
              <div className={styles.button_box}>
    <div className={styles.btn_div}>
        <button className={activeTab === 0 ? styles.tab_active : ''} onClick={() => handleTabClick(0)}>First-time homebuyer</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 1 ? styles.tab_active : ''} onClick={() => handleTabClick(1)}>Relocating due to job</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 2 ? styles.tab_active : ''} onClick={() => handleTabClick(2)}>Want to upgrade from my current home</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 3 ? styles.tab_active : ''} onClick={() => handleTabClick(3)}>Investment/second home</button>
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
