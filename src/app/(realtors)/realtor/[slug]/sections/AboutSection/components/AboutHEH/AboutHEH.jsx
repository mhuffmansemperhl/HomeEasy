import Image from 'next/image'
import React from 'react'
import styles from './AboutHeh.module.css'
import useScreenSize from '../../../../../../../../hooks/useScreenSize';

const addLineBreaks = (text) => {
  if (!text || typeof text !== "string") return "";
  return text.replace(/\n\n/g, "<br><br>");
};

const AboutHEH = ({
  // Dummy data defaults
  bio = "The traditional way of buying or selling a home is outdated, so we built a better way. Lower fees, lower stress, and smarter agents mean you save money and still get full-service guidance. We connect you with top local agents and trusted partners—mortgage lenders, attorneys, title companies—so the process is smoother and more affordable. Think of us as your real estate matchmakers: friendly, down-to-earth, and here to make finding your next home simple, enjoyable, and rewarding.",
  handleTeamIcon = () => "/team_semper.svg",
  
}) => {
  const { isTablet } = useScreenSize();

  return (
    <div className={styles.container}>
      <div className={styles.teamIconContainer}>
        <Image 
          src={"/aboutHEH.png"} 
          alt="team icon" 
          width={isTablet ? 216 : 433} 
          height={isTablet ? 216 : 352} 
        />
      </div>
      
      <div className={styles.bioContainer}>
        <p 
          className={styles.bioText}
          dangerouslySetInnerHTML={{ __html: addLineBreaks(bio) }} 
        />
        
        
      </div>
    </div>
  )
}

export default AboutHEH