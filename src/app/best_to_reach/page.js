
"use client";
import { useState, useEffect } from "react";
// import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
import styles from './best_reach.module.scss';


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
              What’s the best way to reach you?
              </div>
              <div className={styles["form_para"]}>
              Our advice and instant cash offers are always free.
              </div>
              <div className={styles.input_box}>
              <div className={styles.input_div}>
                <input type="text" placeholder="First Name"/>
                </div>
              <div className={styles.input_div}>
                <input type="text" placeholder="Last Name"/>
                </div>
              <div className={styles.input_div}>
                <input type="text" placeholder="Email"/>
                </div>
              <div className={styles.input_div}>
                <input type="text" placeholder="Mobile Phone Number"/>
                </div>
              </div>


              <div className={styles.terms}>
          By clicking Continue, I agree to HomeEasy Home’s <a href="">Terms of Use, Privacy Policy</a>
, and the <a href=""> Affiliated Business Disclosure
and Privacy Notice</a> and I agree that HomeEasy Homes and its
affiliated companies may contact me via phone or text,
including by automated means. I understand that standard
message/data rates may apply. HomeEasy Homes does not
sell customer data.
          </div>
        
          </div>
          <div className={styles.submit_btn}>
             <button>Submit</button>
          </div>
          </form>
       
          {/* <div className={`${styles["content-container"]} centered-content`}>
           dsad
     
          </div> */}
    
          {/* <div className={styles["footer-container"]}>dsadas</div> */}
        </div>
      );
}
