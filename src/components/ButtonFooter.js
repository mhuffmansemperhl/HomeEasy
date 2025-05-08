"use client"

import styles from './styles/ButtonFooter.module.scss';
import useFlowGetStartedStore from "@/store/store.js";

const ButtonFooter = ({label, callback, skipCallback, store_key, name}) => {
    const form_data = useFlowGetStartedStore(state => state.form_data);
    const fieldValue = form_data ? form_data[name] || {} : {};
    const setAddressErrMsg = useFlowGetStartedStore(state => state.setAddressFrommDropDownErr);
    if (name) {
        console.log("fieldValue", fieldValue, name);
        callback = JSON.stringify(fieldValue) === "{}" ? null : callback ;
    }

    const handleOnClick = () => {
        if(name && callback == null){
            setAddressErrMsg("Please select an option from the dropdown");
            return;
        }
        if(callback !== undefined){ 
            setAddressErrMsg("");
            callback(form_data);
        };
    }

    return (
        <>
        {/* {(store_key && form_data[store_key] === undefined) ? <></> : */}
            <div className={styles['main-component']}>
                <div className={styles['button-container']}>
                    {skipCallback && 
                    <button onClick={() => {if(callback !== undefined) skipCallback();}}>Skip</button>
            }
                    <button onClick={handleOnClick}>
                        {label}
                    </button>
                </div>
                    
            </div>
        {/* } */}
        </>
    )
};

export default ButtonFooter;