"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useFlowGetStartedStore from "@/store/store.js"
import { produce } from "immer";

import styles from './styles/FlowPasswordForm.module.scss';

const FlowPasswordForm = ({callback, store_key}) => {
    const router = useRouter();
    const is_busy = useFlowGetStartedStore(state => state.is_busy);
    const setIsBusy = useFlowGetStartedStore(state => state.setIsBusy);

    const account_creation_error = useFlowGetStartedStore(state => state.account_creation_error);
    const setAccountCreationError = useFlowGetStartedStore(state => state.setAccountCreationError);


    const [email_error, setEmailError] = useState("");
    // const [password_error, setPasswordError] = useState("");

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const form_needs_validation = useFlowGetStartedStore(state => state.form_needs_validation);
    const form_validation_function = useFlowGetStartedStore(state => state.form_validation_function);
    const setFormValidated = useFlowGetStartedStore(state => state.setFormValidated);

    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);

    useEffect(() => {
        false && console.log("...checking for form validation");
        if(form_needs_validation){
            setFormValidated(validateForm());
            form_validation_function().catch(e => {
                false && console.log(e);
            });
        }
    }, [form_needs_validation]);

    useEffect(() => {

        setAccountCreationError(undefined);

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

    function handleEmailChange(evt){
        setAccountCreationError(undefined);

        const tval = evt.target.value;
        setFormData(produce(form_data, draft => {
            draft[store_key]["email"] = tval;
        }));
    }

    // function handlePasswordChange(evt){
    //     const tval = evt.target.value;
    //     setFormData(produce(form_data, draft => {
    //         draft[store_key]["password"] = tval;
    //     }));
    // }


    function validateEmail(evt) {
        setAccountCreationError(undefined);

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
            setFormData(produce(form_data, draft => {
                draft[store_key]["email"] = tval.trim().substring(0, 100);
            }));
            valid = false;
        }

        return valid;
    }

    // function validatePassword(evt) {
    //     let tval = form_data[store_key]?.password || "";
    //     if(evt){
    //         tval = evt.target.value;
    //     }
    //     let valid = true;
    //     setPasswordError("");
    //     if(tval.trim() === ""){
    //         setPasswordError("Password is required");
    //         valid = false;
    //     }
    //     if(tval && tval.trim() && tval.trim().length > 40){
    //         setPasswordError("Password must be less than 40 characters");
    //         // setPassword(tval.trim().substring(0, 40));
    //         setFormData(produce(form_data, draft => {
    //             draft[store_key]["password"] = tval.trim().substring(0, 40);
    //         }));
    //         valid = false;
    //     }

    //     return valid;
    // }

    function validateForm() {
        const valid_email = validateEmail();
        // const valid_password = validatePassword();
        // return valid_email && valid_password;
        return valid_email;
        // return validateFirstName() && validateLastName() && validateEmail() && validateMobilePhoneNumber();
    }


    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`} >
                <div className={`${styles['password-benefits-list']}`}>
                <div className={`${styles['password-benefits-list-item']}`}>Save your favorite homes</div>
                <div className={`${styles['password-benefits-list-item']}`}>Get notified of new homes</div>
                <div className={`${styles['password-benefits-list-item']}`}>Book a home tour now</div>
                <div className={`${styles['password-benefits-list-item']}`}>See your InstantOffer</div>
                </div>

                <div className={`${styles['password-form-container']}`}>
                    <div className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handleEmailChange(e)}} value={form_data[store_key]?.email || ""} onKeyUp={(e) => {validateEmail(e);}} type="text" placeholder="Email" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{email_error}</div>
                        {account_creation_error &&
                            <div className={`${styles['contact-form-text-input-error']}`}>{account_creation_error}</div>
                        }
                        { is_busy &&
                        <div className={`${styles['contact-form-text-input-feedback']}`}>Creating account</div>
                        }
                    </div>
                    {/* <div name="password" className={`${styles['contact-form-text-input']}`}>
                        <input onChange={(e)=>{handlePasswordChange(e)}} value={form_data[store_key]?.password || ""} onKeyUp={(e) => {validatePassword(e);}} type="password" placeholder="Password" />
                        <div className={`${styles['contact-form-text-input-error']}`}>{password_error}</div>
                    </div> */}
                </div>

            </div>
        </div>
    )
};

export default FlowPasswordForm;
