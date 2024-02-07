"use client"
import { useRouter } from "next/navigation";

import styles from './styles/FlowContent.module.scss';

const FlowContent = ({title, copy, subcopytitle, content, infobox}) => {
    const router = useRouter();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`} >
            {title && title.trim().length > 0 &&
                <div className={`${styles['main-title']}`}>{title}</div>
                }
                {copy && copy.trim().length > 0 &&
                <div className={`${styles['main-copy']}`}>{copy}</div>
                }
                {subcopytitle && subcopytitle.trim().length > 0 &&
                <div className={`${styles['main-subcopytitle']}`}>{subcopytitle}</div>
                }
                <div className={`${styles['main-content']}`}>{content}</div>
                {infobox && 
                <div className={`${styles['main-infobox']}`} dangerouslySetInnerHTML={{ __html: infobox }}></div>
                }
            </div>
        </div>
    )
};

export default FlowContent;
