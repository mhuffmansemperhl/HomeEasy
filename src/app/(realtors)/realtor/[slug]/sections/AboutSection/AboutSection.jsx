'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './AboutSection.module.css'
import AbountAgent from './components/AboutAgent/AboutAgent';
import AboutHEH from './components/AboutHEH/AboutHEH';
import GetPreApproved from './components/GetPreApproved/GetPreApproved';
import { extractPlainText } from './helper/extractBiography';

// import AbountAgent from '../_compositions/AboutAgent/AbountAgent'
// import AboutSemper from '../_compositions/AboutSemper/AboutSemper'
// import OurProcess from '../_compositions/OurProcess/OurProcess'

export const getFirstName = (str) => {
    if (!str || typeof str !== "string") return "";
    const words = str.trim().split(/\s+/);
    return words[0] || "";
};

const AboutSection = ({ 
    agent,
    reviews = [] 
}) => {
    const [selectedSection, setSelectedSection] = useState('agent');
    const { firstName, biography } = agent;
    const bio = extractPlainText(biography?.root);
    const handleMainText = () => {
        switch (selectedSection) {
            case 'agent':
                return `${firstName} knows real estate.`
            case 'semper':
                return 'Not too good to be true,<br> it’s just the way real<br> estate should be.'
            case 'process':
                return 'We know mortgages.'
            default:
                return '';
        }
    }

    const heightValue = () => {
        return selectedSection === 'agent' ? '618px' : '544px';
    }

    const capitalizeFirstLetter = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <section 
            className={styles.aboutContainer}
            style={{ minHeight: heightValue() }} // Dynamic height handled via inline style
        >
            <div className={styles.textAndTabContainer}>
                <h3 
                    className={styles.mainText} 
                    dangerouslySetInnerHTML={{ __html: handleMainText() }} 
                />

                <div className={styles.tabsContainer}>
                    <button 
                        className={`${styles.tabButton} ${selectedSection === 'agent' ? styles.tabButtonSelected : ''}`}
                        onClick={() => setSelectedSection('agent')}
                    >
                        About{<br />} {firstName}
                    </button>

                   
                    <button 
                        className={`${styles.tabButton} ${selectedSection === 'semper' ? styles.tabButtonSelected : ''}`}
                        onClick={() => setSelectedSection('semper')}
                    >
                        About{<br />} HomeEasy Homes
                    </button>
                    
                    <button 
                        className={`${styles.tabButton} ${selectedSection === 'process' ? styles.tabButtonSelected : ''}`}
                        onClick={() => setSelectedSection('process')}
                    >
                        Get Pre-{ <br />} Approved
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedSection}
                    className={styles.animatedContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    {selectedSection === 'agent' && <AbountAgent bio={bio} />}
                    {selectedSection === 'semper' && <AboutHEH />}
                    {selectedSection === 'process' && <GetPreApproved />}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default AboutSection;