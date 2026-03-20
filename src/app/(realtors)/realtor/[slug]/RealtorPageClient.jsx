'use client';
import { useState } from 'react';
import Image from 'next/image';
import useScreenSize from '../../../../hooks/useScreenSize';
import HamburguerButton from './components/HamburguerButton/HamburguerButton';
import ProfileSection from './components/ProfileSection/ProfileSection';
import AboutSection from './sections/AboutSection/AboutSection';
import HowToBuySection from './sections/HowToBuySection/HowToBuySection';
import HowToSellSection from './sections/HowToSellSection/HowToSellSection';
import RealtorCalculator from './sections/RealtorCalculator/RealtorCalculator';
import RealtorFooter from './sections/RealtorFooter/RealtorFooter';
import styles from './styles/page.module.css';


export default function RealtorPageClient({ realtorData }) {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isopened, setisopened] = useState(false);
  const { isLaptop } = useScreenSize();
  const profileImageURL = realtorData?.profileImage?.url
 
  return (
    <div className={styles.container}>
      <div 
        className={styles.heroSection} 
        style={{ 
          backgroundImage: `url(/hero_realtor.png)`,
          backgroundPosition: `90% 0` 
        }}
      >
        <header className={`${styles.styledHeader} ${isScrolled ? styles.headerScrolled : ''}`}>
          <Image src={'/home_logo.svg'} alt="logo" width={196} height={60} />
          {isLaptop && <HamburguerButton isopened={isopened} setisopened={setisopened} />}
        </header>

        <ProfileSection 
          name={realtorData?.name}
          profileImage={`https://realtor-admin-panel.vercel.app${profileImageURL}`}
          isopened={isopened}
          facebookURL={realtorData?.facebookLink}
          instagramURL={realtorData?.igLink}
          linkedinURL={realtorData?.linkedinLink}
          email={realtorData?.email}
          startPreApprovalUrl={realtorData?.startPreApprovalUrl}
          phone={realtorData?.phone}
          bookACall={realtorData?.bookACallLink}
          licenseNumber={realtorData?.licenseNumber}
        />

        <div className={styles.styledContainer}>
          <div className={styles.mainTextContainer}>
            <h1 className={styles.mainText}>
              Hi, I&apos;m {realtorData?.firstName}, your <span style={{color: "#D22730" }}>Realtor</span> at HomeEasy Homes. 
            </h1>
          </div>

          <button 
            className={styles.getStartedButton}
            onClick={() => {
              if (realtorData?.getStartedLink) {
                window.open(realtorData.getStartedLink, '_blank');
              }
            }}
          >
            Get Started
          </button>
          
          <div className={styles.bioSection}>
            <p>{"Buying or selling a home can feel overwhelming, but I've got you. I'll help you find the right place, get the best deal, and make the whole thing way less stressful."}</p>
          </div>
        </div>
      </div>
      <AboutSection agent={realtorData} />
      <HowToBuySection />
      <HowToSellSection />
      <RealtorCalculator />
      <RealtorFooter />
    </div>
  );
}
