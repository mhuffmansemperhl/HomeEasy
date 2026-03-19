import Image from 'next/image'
import React from 'react'
import styles from './GetPreApproved.module.css'
import useScreenSize from '@/hooks/useScreenSize';

const addLineBreaks = (text) => {
  if (!text || typeof text !== "string") return "";
  return text.replace(/\n\n/g, "<br><br>");
};

const GetPreApproved = ({
  // Dummy data defaults
  bio = "Our lending partner makes buying a home easier—and your wallet happier. Eligible buyers can get up to $10,0001 toward closing costs and access low rates instantly, helping you save thousands while making your next move more affordable.<br><br>They also offer same-day pre-approvals, so you can act fast in today’s competitive market and feel confident every step of the way. Working with our trusted partner is a smart, stress-free way to get home, easy.",
  handleTeamIcon = () => "/team_semper.svg",
  
}) => {
  const { isTablet } = useScreenSize();

  return (
    <div className={styles.container}>
      <div className={styles.teamIconContainer}>
        <Image 
          src={"/getPreapproved.png"} 
          alt="team icon" 
          width={isTablet ? 216 : 372} 
          height={isTablet ? 216 : 388} 
        />
      </div>
      
      <div className={styles.bioContainer}>
        <p 
          className={styles.bioText}
          dangerouslySetInnerHTML={{ __html: addLineBreaks(bio) }} 
        />
        
        <button 
                        className={styles.getStartedButton}
                        onClick={() => {
                            // windowInstance.open(applicationURL, '_blank');
                        }}
                    >
                        Get Pre-Approved
                    </button>
      </div>
    </div>
  )
}

export default GetPreApproved