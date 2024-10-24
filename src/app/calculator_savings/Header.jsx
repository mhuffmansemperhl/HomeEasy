"use client"

import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <div  className={styles['main-component']}>
            <Navbar />
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['header-content-container']}`}>
                    <div className={styles['header-content-title']}>See how much money we keep safely in your pocket.</div>
                    <div className={styles['header-content-copy']}>See the difference in savings between HomeEasy Homes and traditional brokers. Find out how much you can save by choosing our innovative approach to buying or selling your home. </div>                        
                </div>
            </div>

        </div>
    );
};

export default Header;