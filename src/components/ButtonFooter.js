"use client"

import styles from './styles/ButtonFooter.module.scss';
import useFlowGetStartedStore from "@/store/store.js";

const ButtonFooter = ({label, callback, skipCallback, store_key}) => {
    const form_data = useFlowGetStartedStore(state => state.form_data);

    return (
        <>
        {/* {(store_key && form_data[store_key] === undefined) ? <></> : */}
            <div className={styles['main-component']}>
                <div className={styles['button-container']}>
                    {skipCallback && 
                    <button onClick={() => {if(callback !== undefined) skipCallback();}}>Skip</button>
            }
                    <button onClick={() => {if(callback !== undefined) callback(form_data);}}>{label}</button>
                </div>
                    
            </div>
        {/* } */}
        </>
    )
};

export default ButtonFooter;