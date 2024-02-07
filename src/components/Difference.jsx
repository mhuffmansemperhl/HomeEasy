"use client"

import styles from './styles/Difference.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { motion } from "framer-motion";

const Difference = () => {
    const windowSize = useWindowSize();
    return (
        <div>
            <div className={styles['main-component']}>
                <div className={`${styles['difference-content-container']} centered-content`}>
                    <div className={styles['main-component-title']}>It’s not too good to be true, it’s just how things should be.</div>
                    <div className={styles['main-component-copy']}>See the HomeEasy difference.</div>
                    <motion.div 
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2, delay: 0 }}            
            viewport={{ once: true }}
                    
                    className={styles['difference-content-table-image-container']}>

                    {windowSize.width <  1024 && 
                        <img src="/img/table_mobile.png" alt="table" />
                    }
                    {windowSize.width >  1023 && windowSize.width < 1280 && 
                        <img src="/img/table_1024.png" alt="table" />
                    }
                    {windowSize.width >  1279 && windowSize.width < 1920 && 
                        <img src="/img/table_1280_2.png" alt="table" />
                    }
                    {windowSize.width >  1919 &&  
                        <img src="/img/table2.png" alt="table" />
                    }
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Difference;