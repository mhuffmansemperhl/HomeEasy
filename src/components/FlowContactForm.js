"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useFlowGetStartedStore from "@/store/store.js"
import { produce } from "immer";

import styles from './styles/FlowContactForm.module.scss';

const FlowContactForm = ({callback, store_key}) => {
    const router = useRouter();
    const [first_name_error, setFirstNameError] = useState("");
    const [last_name_error, setLastNameError] = useState("");
    const [email_error, setEmailError] = useState("");
    const [mobile_phone_number_error, setMobilePhoneNumberError] = useState("");

    // const [first_name, setFirstName] = useState("");
    // const [last_name, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [mobile_phone_number, setMobilePhoneNumber] = useState("");

    // function clearErrors() {
    //     setFirstNameError("");
    //     setLastNameError("");
    //     setEmailError("");
    //     setMobilePhoneNumberError("");
    // }

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

    function handleFirstNameChange(evt){
        const tval = evt.target.value;
        setFormData(produce(form_data, draft => {
            draft[store_key]["first_name"] = tval;
        }));
    }

    function handleLastNameChange(evt){
        const tval = evt.target.value;
        setFormData(produce(form_data, draft => {
            draft[store_key]["last_name"] = tval;
        }));
    }

    function handleEmailChange(evt){
        const tval = evt.target.value;
        setFormData(produce(form_data, draft => {
            draft[store_key]["email"] = tval;
        }));
    }

    function handleMobilePhoneNumberChange(evt){
        const tval = evt.target.value;
        setFormData(produce(form_data, draft => {
            draft[store_key]["mobile_phone_number"] = tval;
        }));
    }

    function validateFirstName(evt) {
        let tval = form_data[store_key]?.first_name || "";
        if(evt){
            tval = evt.target.value;
        }
        // const tval = evt.target.value;
        let valid = true;
        setFirstNameError("");
        if(tval.trim() === ""){
            setFirstNameError("First Name is required");
            valid = false;
        }
        if(tval && tval.trim() && tval.trim().length > 40){
            setFirstNameError("First Name must be less than 40 characters");
            // setFirstName(tval.trim().substring(0, 40));
            setFormData(produce(form_data, draft => {
                draft[store_key]["first_name"] = tval.trim().substring(0, 40);
            }));
    
            valid = false;
        }

        return valid;
    }

    function validateLastName(evt) {
        let tval = form_data[store_key]?.last_name || "";
        if(evt){
            tval = evt.target.value;
        }
        let valid = true;
        setLastNameError("");
        if(tval.trim() === ""){
            setLastNameError("Last Name is required");
            valid = false;
        }
        if(tval && tval.trim() && tval.trim().length > 40){
            setLastNameError("Last Name must be less than 40 characters");
            setFormData(produce(form_data, draft => {
                draft[store_key]["last_name"] = tval.trim().substring(0, 40);
            }));
            valid = false;
        }

        return valid;
    }

    function validateEmail(evt) {
        let tval = form_data[store_key]?.email || "";
        if(evt){
            tval = evt.target.value;
        }
        let valid = true;
        setEmailError("");
        if(tval.trim() === ""){
            setEmailError("Email is required");
            valid = false;
        }
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tval.trim()) === false && tval.trim() !== ""){
            setEmailError("Email must be valid");
            valid = false;
        }
        if(tval && tval.trim() && tval.trim().length > 100){
            setEmailError("Email must be less than 100 characters");
            // setEmail(tval.trim().substring(0, 100));
            setFormData(produce(form_data, draft => {
                draft[store_key]["email"] = tval.trim().substring(0, 100);
            }));
            valid = false;
        }

        return valid;
    }


    function validateMobilePhoneNumber(evt) {
        let tval = form_data[store_key]?.mobile_phone_number || "";
        if(evt){
            tval = evt.target.value;
        }
        let valid = true;
        setMobilePhoneNumberError("");
        if(tval.trim() === ""){
            setMobilePhoneNumberError("Mobile Phone Number is required");
            valid = false;
        }
        

        if(/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(tval.trim()) === false && tval.trim() !== ""){
            setMobilePhoneNumberError("Mobile Phone Number must be valid");
            valid = false;
        }
        if(tval && tval.trim() && tval.trim().length > 40){
            setMobilePhoneNumberError("Mobile must be less than 40 characters");
            setMobilePhoneNumber(tval.trim().substring(0, 40));
            valid = false;
        }

        return valid;
    }

    function validateForm() {
        const valid_first_name = validateFirstName();
        const valid_last_name = validateLastName();
        const valid_email = validateEmail();
        const valid_mobile_phone_number = validateMobilePhoneNumber();
        return valid_first_name && valid_last_name && valid_email && valid_mobile_phone_number;
        // return validateFirstName() && validateLastName() && validateEmail() && validateMobilePhoneNumber();
    }

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`} >
                <div className={`${styles['contact-form-container']}`}>
                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleFirstNameChange(e);}} value={form_data[store_key]?.first_name || ""} onKeyUp={(e) => {validateFirstName(e);}} type="text" placeholder="First Name" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{first_name_error}</div>
                    </div>
                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleLastNameChange(e)}} value={form_data[store_key]?.last_name || ""} onKeyUp={(e) => {validateLastName(e);}} type="text" placeholder="Last Name" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{last_name_error}</div>
                    </div>
                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleEmailChange(e)}} value={form_data[store_key]?.email || ""} onKeyUp={(e) => {validateEmail(e);}} type="text" placeholder="Email" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{email_error}</div>
                    </div>
                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleMobilePhoneNumberChange(e)}} value={form_data[store_key]?.mobile_phone_number || ""} onKeyUp={(e) => {validateMobilePhoneNumber(e);}} type="text" placeholder="Mobile Phone Number (include area code)" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{mobile_phone_number_error}</div>
                    </div>
                </div>
                <div className={`${styles['contact-form-disclaimer-container']}`}>By clicking Continue, I agree to HomeEasy Home’s Terms of Use, Privacy Policy, and the Affiliated Business Disclosure and Privacy Notice and I agree that HomeEasy Homes and its affiliated companies may contact me via phone or text, including by automated means. I understand that standard message/data rates may apply. HomeEasy Homes does not sell customer data.</div>
            </div>
        </div>
    )
};

export default FlowContactForm;