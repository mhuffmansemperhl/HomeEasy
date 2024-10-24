"use client"
import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';

const Header = () => {


    return (
        <div  className={styles['main-component']}>
            <Navbar />
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['header-content-container']}`}>
                    <div className={styles['header-content-title']}>So how much can I make selling my house?</div>
                    <div className={styles['header-content-copy']}>Remember, before you celebrate your profit, it’s crucial to consider certain costs involved in the process. Let us help you figure it all out!</div>                        
                </div>
            </div>

        </div>
    );
};

export default Header;