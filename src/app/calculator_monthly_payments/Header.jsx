"use client"

import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';


const Header = () => {

  
    return (
        <div  className={styles['main-component']}>
            <Navbar />
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['header-content-container']}`}>
                    <div className={styles['header-content-title']}>How much house can I comfortably call home?</div>
                    <div className={styles['header-content-copy']}>Let’s find the perfect balance between your dream house and your ideal budget.</div>                        
                </div>
            </div>

        </div>
    );
};

export default Header;