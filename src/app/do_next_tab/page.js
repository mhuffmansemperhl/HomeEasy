
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
              What would you like to do next?
              </div>
              <div className={styles["form_para"]}>
              By understanding your specific needs, we can assist you better
              </div>
              <div className={styles.button_box}>
    <div className={styles.btn_div}>
        <button className={activeTab === 0 ? styles.tab_active : ''} onClick={() => handleTabClick(0)}>Search & browse homes</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 1 ? styles.tab_active : ''} onClick={() => handleTabClick(1)}>Learn more about homebuying</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 2 ? styles.tab_active : ''} onClick={() => handleTabClick(2)}>Learn about HomeEasy Homes</button>
    </div>
    <div className={styles.btn_div}>
        <button className={activeTab === 3 ? styles.tab_active : ''} onClick={() => handleTabClick(3)}>Get advice on the market</button>
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
