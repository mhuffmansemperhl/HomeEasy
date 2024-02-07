"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useFlowGetStartedStore from "@/store/store.js"
import { produce } from "immer";

import styles from './styles/FlowProfessionalDetailsForm.module.scss';

const FlowProfessionalDetailsForm = ({callback, store_key}) => {
    const router = useRouter();
    const [brokerage_name_error, setBrokerageNameError] = useState("");
    const [license_number_error, setLicenseNumberError] = useState("");
    const [license_state_error, setLicenseStateError] = useState("");

    const [state_info, setStateInfo] = useState([]);


    const form_needs_validation = useFlowGetStartedStore(state => state.form_needs_validation);
    const form_validation_function = useFlowGetStartedStore(state => state.form_validation_function);
    const setFormValidated = useFlowGetStartedStore(state => state.setFormValidated);

    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);

    useEffect(() => {
        if(store_key in form_data === false){
            setFormData(produce(form_data, draft => {
                draft[store_key] = {};
            }));
        }

        setStateInfo([["Select primary license state", "XX", "0.00"],
        ["Alabama", "AL", "0.41"],
        ["Alaska", "AK", "1.22"],
        ["Arizona", "AZ", "0.62"],
        ["Arkansas", "AR", "0.62"],
        ["California", "CA", "0.75"],
        ["Colorado", "CO", "0.51"],
        ["Connecticut", "CT", "2.15"],
        ["Delaware", "DE", "0.58"],
        ["District of Columbia", "DC", "0.57"],
        ["Florida", "FL", "0.86"],
        ["Georgia", "GA", "0.90"],
        ["Hawaii", "HI", "0.29"],
        ["Idaho", "ID", "0.63"],
        ["Illinois", "IL", "2.23"],
        ["Indiana", "IN", "0.83"],
        ["Iowa", "IA", "1.57"],
        ["Kansas", "KS", "1.43"],
        ["Kentucky", "KY", "0.85"],
        ["Louisiana", "LA", "0.56"],
        ["Maine", "ME", "1.28"],
        ["Maryland", "MD", "1.07"],
        ["Massachusetts", "MA", "1.20"],
        ["Michigan", "MI", "1.48"],
        ["Minnesota", "MN", "1.11"],
        ["Mississippi", "MS", "0.79"],
        ["Missouri", "MO", "0.98"],
        ["Montana", "MT", "0.83"],
        ["Nebraska", "NE", "1.67"],
        ["Nevada", "NV", "0.55"],
        ["New Hampshire", "NH", "2.09"],
        ["New Jersey", "NJ", "2.47"],
        ["New Mexico", "NM", "0.80"],
        ["New York", "NY", "1.73"],
        ["North Carolina", "NC", "0.80"],
        ["North Dakota", "ND", "1.00"],
        ["Ohio", "OH", "1.53"],
        ["Oklahoma", "OK", "0.90"],
        ["Oregon", "OR", "0.93"],
        ["Pennsylvania", "PA", "1.53"],
        ["Rhode Island", "RI", "1.53"],
        ["South Carolina", "SC", "0.56"],
        ["South Dakota", "SD", "1.24"],
        ["Tennessee", "TN", "0.66"],
        ["Texas", "TX", "1.74"],
        ["Utah", "UT", "0.58"],
        ["Vermont", "VT", "1.90"],
        ["Virginia", "VA", "0.82"],
        ["Washington", "WA", "0.94"],
        ["West Virginia", "WV", "0.59"],
        ["Wisconsin", "WI", "1.73"],
        ["Wyoming", "WY", "0.61"]]);    
        
        // clearErrors();
        false && console.log("...back on flow contact form")
        // false && console.log(list_items);
        // false && console.log(callback);
    }, []);

    useEffect(() => {
        false && console.log("...checking for form validation");
        if(form_needs_validation){
            setFormValidated(validateForm());
            form_validation_function(callback).then(()=>{
            }).catch(e => {
                false && console.log(e);
            });
        }
    }, [form_needs_validation]);

    function handleBrokerageNameChange(evt){
        const tval = evt.target.value;
        setFormData(produce(form_data, draft => {
            draft[store_key]["brokerage_name"] = tval;
        }));
    }

    function handleLicenseNumberChange(evt){
        const tval = evt.target.value;
        setFormData(produce(form_data, draft => {
            draft[store_key]["license_number"] = tval;
        }));
    }

    function handleLicenseStateChange(evt){
        const tval = evt.target.value;
        setFormData(produce(form_data, draft => {
            draft[store_key]["license_state"] = tval;
        }));
    }

    function validateBrokerageName(evt) {
        let tval = form_data[store_key]?.brokerage_name || "";
        if(evt){
            tval = evt.target.value;
        }
        // const tval = evt.target.value;
        let valid = true;
        setBrokerageNameError("");
        if(tval.trim() === ""){
            setBrokerageNameError("Brokerage Name is required");
            valid = false;
        }
        if(tval && tval.trim() && tval.trim().length > 100){
            setBrokerageNameError("Brokerage Name must be less than 100 characters");
            // setBrokerageName(tval.trim().substring(0, 100));
            setFormData(produce(form_data, draft => {
                draft[store_key]["brokerage_name"] = tval.trim().substring(0, 100);
            }));

            valid = false;
        }

        return valid;
    }

    function validateLicenseNumber(evt) {
        let tval = form_data[store_key]?.license_number || "";
        if(evt){
            tval = evt.target.value;
        }
        // const tval = evt.target.value;
        let valid = true;
        setLicenseNumberError("");
        if(tval.trim() === ""){
            setLicenseNumberError("License Number is required");
            valid = false;
        }
        if(tval && tval.trim() && tval.trim().length > 10){
            setLicenseNumberError("License Number must be less than 10 characters");
            // setLicenseNumber(tval.trim().substring(0, 100));
            setFormData(produce(form_data, draft => {
                draft[store_key]["license_number"] = tval.trim().substring(0, 10);
            }));

            valid = false;
        }
        // javascript regex to test is string contains only alpha numberic characters
        // /^[a-z0-9]+$/i.test('string');
        if(tval && tval.trim() && /^[a-z0-9]+$/i.test(tval.trim()) === false){
            setLicenseNumberError("License Number must contain only letters or numbers");

            valid = false;
        }

        return valid;
    }

    function updateLocation(e){
        // console.log("updating location");
        // console.log(e.target.value);
        const state_abbrev = e.target.value;
        const state_info_idx = state_info.findIndex((state) => {
            return state[1] === state_abbrev;
        }
        );
        // console.log(state_info_idx);
        // setLocationIDX(state_info_idx);
            setFormData(produce(form_data, draft => {
                draft[store_key]["license_state"] = state_abbrev;
            }));

    }


    function validateLicenseState(evt) {
        let tval = form_data[store_key]?.license_state || "";
        if(evt){
            tval = evt.target.value;
        }
        // const tval = evt.target.value;
        let valid = true;
        setLicenseStateError("");
        if(tval.trim() === "XX"){
            setLicenseStateError("Primary license state is required");
            valid = false;
        }
        // if(tval && tval.trim() && tval.trim().length > 2 && /^[a-zA-Z]+$/.test(tval.trim()) === false){
        //     setLicenseStateError("License State must be less than 2 characters and letters only");
        //     // setLicenseState(tval.trim().substring(0, 100));
        //     setFormData(produce(form_data, draft => {
        //         draft[store_key]["license_state"] = tval.trim().substring(0, 2);
        //     }));

        //     valid = false;
        // }

        return valid;
    }

    function validateForm() {
        const valid_brokerage_name = validateBrokerageName();
        const valid_license_number = validateLicenseNumber();
        const valid_license_state = validateLicenseState();
        return valid_brokerage_name && valid_license_number && valid_license_state;
        // return validateFirstName() && validateLastName() && validateEmail() && validateMobilePhoneNumber();
    }


    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`} >
                <div className={`${styles['contact-form-container']}`}>
                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleBrokerageNameChange(e);}} value={form_data[store_key]?.brokerage_name || ""} onKeyUp={(e) => {validateBrokerageName(e);}} type="text" placeholder="Brokerage Name" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{brokerage_name_error}</div>
                    </div>                        
                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleLicenseNumberChange(e)}} value={form_data[store_key]?.license_number || ""} onKeyUp={(e) => {validateLicenseNumber(e);}} type="text" placeholder="Primary License Number" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{license_number_error}</div>
                    </div>
                    <div className={`${styles['contact-form-text-input']}`}>
                        {/* <input onChange={(e)=>{handleLicenseStateChange(e)}} value={form_data[store_key]?.license_state || ""} onKeyUp={(e) => {validateLicenseState(e);}} type="text" placeholder="Primary License State" /> */}
                        <select value={form_data[store_key]?.license_state || 'XX'} onChange={(e)=>{updateLocation(e);}} >
                            {state_info.map((state, index) => {
                                return (
                                    <option key={index} value={state[1]}>{state[0]}</option>
                                )
                            })} 
                        </select>

                        <div className={`${styles['contact-form-text-input-error']}`}>{license_state_error}</div>
                    </div>

                    {/* <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleMobilePhoneNumberChange(e)}} value={form_data[store_key]?.mobile_phone_number || ""} onKeyUp={(e) => {validateMobilePhoneNumber(e);}} type="text" placeholder="Mobile Phone Number (include area code)" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{mobile_phone_number_error}</div>
                    </div> */}

                </div>
                {/* <div className={`${styles['contact-form-disclaimer-container']}`}>By clicking Continue, I agree to HomeEasy Home’s Terms of Use, Privacy Policy, and the Affiliated Business Disclosure and Privacy Notice and I agree that HomeEasy Homes and its affiliated companies may contact me via phone or text, including by automated means. I understand that standard message/data rates may apply. HomeEasy Homes does not sell customer data.</div> */}
            </div>
        </div>
    )
};

export default FlowProfessionalDetailsForm;