"use client"
import { useRouter } from "next/navigation";

import styles from './styles/FlowHeader.module.scss';

const FlowHeader = ({button_info}) => {
    const router = useRouter();
    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['header-logo-container']}  centered-content`}  onClick={(e) => {
                
                e.preventDefault();                
                e.stopPropagation();
                // router.push('/');
                window.location.href = "/";
                
                }}>
                <img src="/img/flow_header_logo.png" alt="logo" />             
            </div>
            <div className={`${styles['header-arrow-container']}  centered-content`}  onClick={() => router.push('/')}>
            {/* <img onClick={()=>{window.history.back();}} src="/img/flow_header_back_arrow.png" alt="back" />              */}
            {/* <img onClick={(e)=>{e.preventDefault(); window.history.go(-1);}} src="/img/flow_header_back_arrow.png" alt="back" />              */}
            
            <img onClick={(e)=>{
                console.log(e);
                e.preventDefault();                
                e.stopPropagation();
            true && console.log("############ GOING BACK NOW ############");
                // setTimeout(() => {                     
                    // router.back();
                    console.log(window.history);
                    window.history.go(-1); return false;
                // }, 100);
                    
            }} src="/img/flow_header_back_arrow.png" alt="back" />             
            </div>
        </div>
    )
};

export default FlowHeader;