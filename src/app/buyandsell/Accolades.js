"use client"

import styles from './Accolades.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { motion } from "framer-motion";

const Accolades = () => {
    const windowSize = useWindowSize();
    return (
        <div className={`${styles['main-component']} centered-content2`}>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2, delay: 0 }}            
            viewport={{ once: true }}
            className={styles['testamonials-content-container']}>
                {windowSize.width <  1024 && 
                    <img src="/img/testimonials_mobile2.png" alt="accolades" />
                }
                {/* {windowSize.width >  1023 && windowSize.width < 1280 &&  */}
                {windowSize.width >  1023 && 
                    //     <img src="/img/testimonials_1024.png" alt="accolades" />
                // }
                // {windowSize.width >  1279 && windowSize.width < 1920 && 
                //     <img src="/img/testimonials_1280.png" alt="accolades" />
                // }
                // {windowSize.width >  1919 &&  
                    <img src="/img/accolades.png" alt="accolades" />
                }

            </motion.div>
        </div>
            
    );
};

export default Accolades;