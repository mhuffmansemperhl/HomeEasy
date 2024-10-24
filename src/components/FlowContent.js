"use client"
import { useRouter } from "next/navigation";

import styles from './styles/FlowContent.module.scss';

const FlowContent = ({title, copy, subcopytitle, content, infobox, iframe}) => {
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
                {iframe && (
                    <div style={{width: "100%", height: "785px"}}>
                        <iframe
                            src={iframe}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Booking Widget"
                        >
                        </iframe>
                    </div>
                )}
            </div>
        </div>
    )
};

export default FlowContent;
