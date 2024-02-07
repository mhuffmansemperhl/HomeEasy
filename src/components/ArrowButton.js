"use client"
import { useState } from 'react';
import styles from './styles/ArrowButton.module.scss';

const ArrowButton = ({link_text, callback, large_text}) => {
    const [hovering, setHovering] = useState(false);

    function doCallback(){
        if(callback !== undefined){
            callback();
        }
    }
    function doHover(thovering){
        setHovering(thovering);
    }
    return (
        <div className={styles['main-component']}>
            <div onMouseEnter={()=>{doHover(true);}} onMouseLeave={()=>{doHover(false);}} onClick={()=>{doCallback();}} className={`${styles['arrowbutton-container']} ${large_text ? styles['large-text'] : ''}`}>
            <div className={styles['arrowbutton-link-container']}>{link_text}</div>
            <div className={styles['arrowbutton-arrow-container']}>
                <img className={hovering ? styles['arrow-hover'] : ''} src="/img/right_arrow.svg" alt="arrow" />
            </div>

            </div>
        </div>
    )
};

export default ArrowButton;