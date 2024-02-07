
"use client";
import { useState, useEffect } from "react";
// import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
import styles from './address_sellinghome.module.scss';


export default function Home() {
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
    return (
        <div className={styles["main"]}>
          <FlowHeader />
          <form action="">
          <div className={`${styles["progress-container"]} centered-content`}>
              <div className={styles["form_heading"]}>
              Where do you want to buy?
              </div>
              <div className={styles["form_para"]}>
              Enter a city, neighborhood, or address.
              </div>
              <div className={styles.input_box}>
              <div className={styles.input_div}>
                <input type="text" placeholder="Enter Location"/>
                </div>
           
              </div>
        
          </div>
          <div className={styles.submit_btn}>
             <button>Next</button>
          </div>
          </form>
       
          {/* <div className={`${styles["content-container"]} centered-content`}>
           dsad
     
          </div> */}
    
          {/* <div className={styles["footer-container"]}>dsadas</div> */}
        </div>
      );
}
