"use client"
import { useState, useEffect } from 'react';
import styles from './UnitInput.module.scss';
import { NumericFormat } from 'react-number-format';

const UnitInput = ({value, value_styles, unit_text, callback, validate}) => {

    const[value_state, setValueState] = useState(value);

    useEffect(()=>{
        callback(value_state);
    },[value_state]);

    // useEffect(()=>{
    //     if(callback !== undefined){
    //         callback({
    //             value: value_state
    //         });
    //     }
    // },[value_state]);

    // function doChange(e){
    //     setValueState(e.target.value);
    // }

    return (
        <div className={styles['main-component']}>
            <div className={styles['unit-input-container']}>
                    {/* <input onChange={(e)=>{doChange(e);}} style={value_styles ? value_styles : ""} type="text" value={value_state ? value_state : ""} /> */}
                    <NumericFormat 
                        style={value_styles ? value_styles : ""}
                        value={value} 
                        prefix="$"
                        thousandSeparator
                        decimalScale={2}
                        allowNegative={false}
                        onValueChange={
                            (values, sourceInfo) => {
                                setValueState(values);
                                // setPurchasePrice(values.floatValue);
                                // updatePurchasePrice(values, sourceInfo);
                                // console.log(values, sourceInfo);
                            }
                        }
                        isAllowed={(values) => {
                            return validate(values);
                          }}                        
  
                    />

                    <div className={styles['unit-input-unit']}>{unit_text}</div>
            </div>
        </div>
    )
};

export default UnitInput;