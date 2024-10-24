"use client"
import { useState } from 'react';
import styles from './ArrowButton.module.scss';

const ArrowButton = ({link_text, callback, large_text, small_text, centered, white_button}) => {
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
            <div onMouseEnter={()=>{doHover(true);}} onMouseLeave={()=>{doHover(false);}} onClick={()=>{doCallback();}} className={`${styles['arrowbutton-container']} ${large_text ? styles['large-text'] : ''} ${small_text ? styles['small-text'] : ''} ${centered ? styles['centered'] : ''}`}>
            <div className={styles['arrowbutton-link-container']}>{link_text}</div>
            <div className={styles['arrowbutton-arrow-container-container']}>
                <div className={styles['arrowbutton-arrow-container']}>
                    {white_button &&   
                    <img className={hovering ? styles['arrow-hover'] : ''} src="/img/right_arrow_white.svg" alt="arrow" />
                    }
                    {!white_button &&   
                    <img className={hovering ? styles['arrow-hover'] : ''} src="/img/right_arrow.svg" alt="arrow" />
                    }
                </div>
            </div>

            </div>
        </div>
    )
};

export default ArrowButton;