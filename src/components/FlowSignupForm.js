"use client"
import { useRouter } from "next/navigation";
import useFlowGetStartedStore from "@/store/store.js"
import { produce } from "immer";

import styles from './styles/FlowSignupForm.module.scss';
import { useEffect, useState } from "react";

const FlowSignupForm = ({callback, store_key}) => {
    const router = useRouter();
    const [placeholder1, setPlaceholder1] = useState("");
    const [placeholder2, setPlaceholder2] = useState("");
    const [placeholder3, setPlaceholder3] = useState("");
    const [placeholder4, setPlaceholder4] = useState("");

    const [first_name_error, setFirstNameError] = useState("");
    const [last_name_error, setLastNameError] = useState("");
    const [email_error, setEmailError] = useState("");
    const [mobile_phone_number_error, setMobilePhoneNumberError] = useState("");

    // const [first_name, setFirstName] = useState("");
    // const [last_name, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [mobile_phone_number, setMobilePhoneNumber] = useState("");

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

        setTimeout(() => {
            setPlaceholder1("Email");
            setPlaceholder2("Mobile Phone Number (include area code)");
            setPlaceholder3("First Name");
            setPlaceholder4("Last Name");
        }
        , 200);
    }, []);

    useEffect(() => {
        false && console.log("...checking for form validation");
        if(form_needs_validation){
            setFormValidated(validateForm());
            form_validation_function().catch(e => {
                false && console.log(e);
            });
        }
    }, [form_needs_validation]);

    function handleKeyUp(evt) {
        false && console.log(evt.keyCode);
        if(evt.keyCode === 13){
            false && console.log("need to do next here");
            // validateForm();
        }
    }

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
    }

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`} >

                <div className={`${styles['signup-form-container']}`}>

                    {/* <div className={`${styles['contact-form-text-input']}`}>
                    <input type="text" placeholder={placeholder1}/>
                    </div> */}

                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleEmailChange(e)}} value={form_data[store_key]?.email || ""} onKeyUp={(e) => {validateEmail(e);}} type="text" placeholder={placeholder1} />
                        <div className={`${styles['contact-form-text-input-error']}`}>{email_error}</div>
                    </div>

                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleMobilePhoneNumberChange(e)}} value={form_data[store_key]?.mobile_phone_number || ""} onKeyUp={(e) => {validateMobilePhoneNumber(e);}} type="text" placeholder={placeholder2} />
                        <div className={`${styles['contact-form-text-input-error']}`}>{mobile_phone_number_error}</div>
                    </div>

                    <div className={`${styles['contact-form-half-row-container']}`}>
                        <div className={`${styles['contact-form-text-input']}`}>
                            <input onChange={(e)=>{handleFirstNameChange(e);}} value={form_data[store_key]?.first_name || ""} onKeyUp={(e) => {validateFirstName(e);}} type="text" placeholder={placeholder3} />
                            <div className={`${styles['contact-form-text-input-error']}`}>{first_name_error}</div>
                        </div>
                        <div className={`${styles['contact-form-text-input']}`}>
                            <input onChange={(e)=>{handleLastNameChange(e)}} value={form_data[store_key]?.last_name || ""} onKeyUp={(e) => {validateLastName(e);}} type="text" placeholder={placeholder4} />
                            <div className={`${styles['contact-form-text-input-error']}`}>{last_name_error}</div>
                        </div>
                    </div>

                    <div className={`${styles['signup-form-divider']}`}>
                        <div className={`${styles['signup-form-divider-line']}`}></div>
                        <div className={`${styles['signup-form-divider-text']}`}>or</div>
                    </div>

                    <div className={`${styles['signup-form-signin-container']}`}>
                        <a href="https://homeeasyhomes.idxbroker.com/idx/userlogin" target="_blank" >Sign in</a>
                    </div>

                    <div className={`${styles['signup-form-disclaimer-container']}`}>
                    By signing up, I agree to HomeEasy Home’s Terms of Use, Privacy Policy, and expressly agree to receive HomeEasy Homes email and texts.  Message and data rates may apply. 
                    </div>

                </div>



            </div>
        </div>
    )
};

export default FlowSignupForm;
