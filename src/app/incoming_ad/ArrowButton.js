"use client";
import { useState } from 'react';
import styles from './ArrowButton.module.scss';

const ArrowButton = ({link_text, callback, large_text, small_text, centered, white_button, ariaLabel = "",}) => {
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
            <div
                onMouseEnter={() => doHover(true)}
                onMouseLeave={() => doHover(false)}
                onClick={() => doCallback()}
                onTouchStart={() => doHover(true)}
                onTouchEnd={() => { doHover(false); doCallback(); }}
                className={`${styles['arrowbutton-container']} ${large_text ? styles['large-text'] : ''} ${small_text ? styles['small-text'] : ''} ${centered ? styles['centered'] : ''}`}
                aria-label={ariaLabel}
                role="button"
            >
                <div className={styles['arrowbutton-link-container']}>{link_text}</div>
                
            </div>
        </div>
    );
};

export default ArrowButton;
