"use client"
import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';

const Header = () => {

    

    return (
        <div  className={styles['main-component']}>
            <Navbar />
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['header-content-container']}`}>
                    <div className={styles['header-content-title']}>HomeEasy listing fees.</div>
                    <div className={styles['header-content-copy']}>Listing fee subject to market-based minimums, as outlined below. Buyer’s agent fee not included. For example, if the buyer’s agent fee is 2.5%, a
seller who pays a 1% listing fee will pay a total fee of 3.5%. Listing fee increased by 1% of sale price if buyer is unrepresented. Listing fee and
minimums subject to change.</div>                        
                    <div className={styles['header-content-copy']}>Partner Agent transactions do not qualify for HomeEasy Homes listing fees</div>                        
                </div>
            </div>

        </div>
    );
};

export default Header;