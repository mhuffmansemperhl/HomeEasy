
"use client";
import { useState, useEffect } from "react";
// import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
import styles from './intouch.module.scss';


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
              We’ll be in touch!
              </div>
              <div className={styles["form_para"]}>
              We will be reaching out shortly to talk to you about opportunities to grow <br />
your real estate business.
              </div>
              <div className={styles.input_box}>
              {/* <div className={styles.input_div}>
                <input type="text" placeholder="Enter Location"/>
                </div> */}
           
              </div>
        
          </div>
          <div className={styles.submit_btn}>
             <button>Back to our homepage</button>
          </div>
          </form>
       
          {/* <div className={`${styles["content-container"]} centered-content`}>
           dsad
     
          </div> */}
    
          {/* <div className={styles["footer-container"]}>dsadas</div> */}
        </div>
      );
}
