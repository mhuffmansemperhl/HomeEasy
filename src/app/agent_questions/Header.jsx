"use client"
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
const Header = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    function changeIndex(idx) {
        setSelectedIndex(idx);
      }

      
    const size = useWindowSize();

    return (
        <div  className={styles['main-component']}>
            <Navbar />
            <div className={`${styles['main-content-container']} centered-content`}>
                <div className={`${styles['header-content-container']}`}>
                    <div className={styles['header-content-title']}>You&apos;ve got questions, we&apos;ve got the <span>answers.</span></div>
                </div>
            </div>

        </div>
    );
};

export default Header;