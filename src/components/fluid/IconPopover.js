"use client"
import { useState } from 'react';
import styles from './IconPopover.module.scss';

const IconPopover = ({icon, cssStyles, callback, text, white}) => {
    const [hovering, setHovering] = useState(true);

    function doCallback(){
        if(callback !== undefined){
            callback();
        }
    }
    function doHover(thovering){
        setHovering(thovering);
    }
    // const position = "bottom";
    // const childRect = { width: number, height: number, top: number, left: number, right: number, bottom: number };
    return (
        <div style={cssStyles ? cssStyles : {marginLeft: "0.78125vw", width: "1.09375vw", height: "1.197916667vw"}} className={styles['main-component']}>

            <div onMouseEnter={()=>{doHover(true);}} onMouseLeave={()=>{doHover(false);}} onClick={()=>{doCallback();}} className={`${styles['icon-container']}`}>
                {white && 
                <img src={icon ? icon : "/img/question_circle_white.svg"} alt="icon" />
                }
                {!white &&
                <img src={icon ? icon : "/img/question_circle.svg"} alt="icon" />
                }   
                <div className={styles['icon-popover']}>{text}</div>
            </div>
            {/* {!icon && 
            <div onMouseEnter={()=>{doHover(true);}} onMouseLeave={()=>{doHover(false);}} onClick={()=>{doCallback();}} className={`${styles['icon-container']}`}>
                <img src="/img/question_circle.png" alt="icon" />
                <div className={styles['icon-popover']}>{text}</div>
            </div>
            }
            {/* <div onMouseEnter={()=>{doHover(true);}} onMouseLeave={()=>{doHover(false);}} onClick={()=>{doCallback();}} className={`${styles['arrowbutton-container']} ${large_text ? styles['large-text'] : ''} ${small_text ? styles['small-text'] : ''}`}> */}

            {/* </div> */}
        </div>
    )
};

export default IconPopover;