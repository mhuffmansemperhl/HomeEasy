import Image from 'next/image'
import React from 'react'
import styles from './AboutAgent.module.css'
import useScreenSize from '../../../../../../../../hooks/useScreenSize';

const addLineBreaks = (text) => {
  if (!text || typeof text !== "string") return "";
  return text.replace(/\n\n/g, "<br><br>");
};

const AbountAgent = ({
  bio,
}) => {
  const { isTablet } = useScreenSize();

  return (
    <div className={styles.container}>
      <div className={styles.teamIconContainer}>
        <Image 
          src={"/aboutAgent.png"} 
          alt="team icon" 
          width={isTablet ? 216 : 304} 
          height={isTablet ? 216 : 304} 
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

export default AbountAgent