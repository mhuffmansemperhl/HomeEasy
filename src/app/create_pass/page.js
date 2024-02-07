
"use client";
import { useState, useEffect } from "react";
// import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
import styles from './createpass.module.scss';


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
              Create a password to
              </div>
              <div className={styles["form_tick"]}>
              <div className={styles["form_tick_box"]}>
              Save your favorite homes
              </div>
              <div className={styles["form_tick_box"]}>
              Get notified of new homes
              </div>
              <div className={styles["form_tick_box"]}>
              Book a home tour now
              </div>
              <div className={styles["form_tick_box"]}>
              Set a custom search
              </div>
              </div>
              <div className={styles.input_box}>
              <div className={styles.input_div}>
                <input type="text" placeholder="Email"/>
                </div>
              <div className={styles.input_div}>
                <input type="text" placeholder="Create a PAssword"/>
                </div>
              </div>


              {/* <div className={styles.terms}>
          By clicking Continue, I agree to HomeEasy Home’s <a href="">Terms of Use, Privacy Policy</a>
, and the <a href=""> Affiliated Business Disclosure
and Privacy Notice</a> and I agree that HomeEasy Homes and its
affiliated companies may contact me via phone or text,
including by automated means. I understand that standard
message/data rates may apply. HomeEasy Homes does not
sell customer data.
          </div> */}
        
          </div>
          <div className={styles.submit_btn_main}>
          <div className={styles.submit_btn}>
             <button>Skip</button>
          </div>
          <div className={styles.submit_btn}>
             <button>Submit</button>
          </div>
          </div>
          </form>
       
          {/* <div className={`${styles["content-container"]} centered-content`}>
           dsad
     
          </div> */}
    
          {/* <div className={styles["footer-container"]}>dsadas</div> */}
        </div>
      );
}
