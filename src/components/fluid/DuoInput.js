"use client"
import { useState, useEffect } from 'react';
import styles from './DuoInput.module.scss';
import { NumericFormat } from 'react-number-format';

const DuoInput = ({left_value, right_value, callback, left_validate, right_validate}) => {

    const[left_value_state, setLeftValueState] = useState(left_value);
    const[right_value_state, setRightValueState] = useState(right_value);
    // const[last_change_element, setLastChangeElement] = useState(undefined);

    useEffect(()=>{
        callback({
            left_value: left_value_state,
            right_value: right_value_state,
            last_change_element: "left"
        });
    },[left_value_state]);

    useEffect(()=>{
        callback({
            left_value: left_value_state,
            right_value: right_value_state,
            last_change_element: "right"
        });
    },[right_value_state]);

    function handleFocus(e){
        e.target.select();
        e.target.selectionStart = 0;
        e.target.selectionEnd = e.target.value.length;
        e.target.setSelectionRange(0, 9999);
    }

    // useEffect(()=>{
    //     setRightValueState(right_value);
    // }, [right_value]);

    // useEffect(()=>{
    //     if(callback !== undefined){
    //         callback({
    //             left_value: left_value_state,
    //             right_value: right_value_state,
    //             last_change_element: last_change_element
    //         });
    //     }
    // },[left_value_state, right_value_state]);

    // function doChangeLeft(e){
    //     setLeftValueState(e.target.value);
    //     setLastChangeElement('left');
    // }

    // function doChangeRight(e){
    //     setRightValueState(e.target.value);
    //     setLastChangeElement('right');
    // }

    return (
        <div className={styles['main-component']}>
            <div className={styles['duo-input-container']}>
                <div className={styles['duo-input-left-container']}>
                <NumericFormat 
                        value={left_value} 
                        suffix="%"
                        allowNegative={false}
                        decimalScale={1}
                        onFocus={(e)=>{handleFocus(e)}}
                        onValueChange={
                            (values, sourceInfo) => {
                                setLeftValueState(values);
                                // setPurchasePrice(values.floatValue);
                                // updatePurchasePrice(values, sourceInfo);
                                // console.log(values, sourceInfo);
                            }
                        }
                        isAllowed={(values) => {
                            return left_validate(values);
                          }}  
                    />
                    {/* <input onChange={(e)=> {doChangeLeft(e);}} type="text" value={left_value_state ? left_value_state : ""} /> */}
                </div>
                <div className={styles['duo-input-right-container']}>
                <NumericFormat 
                        value={right_value} 
                        prefix="$"
                        thousandSeparator
                        allowNegative={false}
                        decimalScale={2}
                        onValueChange={
                            (values, sourceInfo) => {
                                setRightValueState(values);
                                // setPurchasePrice(values.floatValue);
                                // updatePurchasePrice(values, sourceInfo);
                                // console.log(values, sourceInfo);
                            }
                        }
                        isAllowed={(values) => {
                            return right_validate(values);
                          }}  
                    />

                    {/* <input onChange={(e)=> {doChangeRight(e);}} type="text" value={right_value_state ? right_value_state : ""} /> */}
                </div>
            </div>
        </div>
    )
};

export default DuoInput;