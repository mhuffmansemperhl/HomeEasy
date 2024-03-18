"use client"
import styles from './Electronic.module.scss';
import useWindowSize from '../../hooks/useWindowSize';

const Electronic = () => {


    const size = useWindowSize();


    return (
        <div  className={styles['main-component']}>
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['tos-content-container']}`}>

 <p>E-Consent</p>
<p>This eConsent,if you provide it,applies to your use of this Platform, Application and/or Website on any access device, including a desktop, laptop, tablet, mobile,or any other electronic device, and to any Document, including loan documents, disclosures (initial disclosures, pre-close disclosures, closing disclosures), records, and servicing notices, and any other loan documents that we provide to you in electronic form.</p>
<p>If you provide eConsent, we will be able to provide electronic Documents and notifications to you within our platform,in other portals,and/or through other methods we may use for delivery of electronic Documents.With Your eConsent, You will also be able to sign and authorize these Documents electronically, rather than on paper. Anytime you are signing using a platform contracted with SimpleNexus,you will be prompted to provide eConsent again.</p>
<p>Before We can engage in this transaction electronically, it is important that You understand Your rights and responsibilities. Please read the following and affirm Your consent to conduct business with Us electronically. For purposes of this eConsent Agreement, ‘You’ and ‘Your’ mean the borrower(s) under the applicable loan to which such Documents apply, and ‘We’,’Our’ and ‘Us’ mean the applicable mortgage broker(s), loan processor(s),or mortgage banker(s) with whom You are transacting business for such loan(s).</p>
<h5>YOUR CONSENT</h5>

    <p>• Your consent to participate in this transaction and use this application electronically will apply to all Loan Documents, notifications and communicationsfor the applicable loans for which You are applying or inquiring. If You provide Your consent by clicking the ‘I agree’ button at the bottom of the page,We will conduct this transaction electronically, instead of providing You with the Loan Documents in paper form.</p>
    <p>• If a document related to your loan application is not available in electronic form, a paper copy will be provided to You free of charge.</p>
    <p>• Conducting this transaction and inquiry electronically is an option. If You choose not to receive Documents electronically, paper Documents will be mailed to You. Additionally: You will not be required to pay a fee for receiving paper copies of the Documents.</p>


<h5>WITHDRAWAL OF CONSENT</h5>

    <p>• You have the right to withdraw Your consent at any time. By declining or revoking Your consent to receive Documents electronically,We will provide You with the Documents in paper form.</p>
    <p>• If You originally consent to receive Documents electronically, but later decide to withdraw Your consent, You can do so by notifying Us at: <br /> Phone: (401) 900-5109</p>
    <p>•  Address: 225 Dupont Drive, Providence, Rhode Island 02907</p>
    <p>• If You originally consent to receive Documents electronically, but later withdraw Your consent, You will not be required to pay a fee for withdrawing consent and receiving paper copies of the Documents.</p>

<h5>OBTAINING PAPER COPIES</h5>

    <p>• After Your consent is given,You may request from Us paper copies of Your Loan Documents.Please send this request to Us at: <br />Phone: (401) 900-5109 <br /> Address: 225 Dupont Drive, Providence, Rhode Island 02907</p>
<p>
• If You request paper copies of the Loan Documents: <br />
You will not be required to pay a fee for receiving paper copies of the Loan Documents.
</p>
<h5>SYSTEM REQUIREMENTS</h5>
<p>• In order to receive Documents electronically, You must have a computer with Internet access and an Internet email account and address; an Internet browser using 128-bit encryption or higher, Adobe Acrobat 7.0 or higher, SSL encryption and access to a printer or the ability to download information in order to keep copies of Your Documents electronically for Your records.</p>
<p>• If the software or hardware requirements change in the future, and You are unable to continue receiving Documents electronically, paper copies of such Loan Documents will be mailed to You once You notify Us that You are no longer able to access the Documents electronically because of the changed requirements. We will use commercially reasonable efforts to notify You before such requirements change. If You choose to withdraw Your consent upon notification of the change, You will be able to do so without penalty.</p>
<h5>HOW WE CAN REACH YOU</h5>
<p>• You must promptly notify Us if there is a change in Your email address or in other information needed to contact You electronically. You can contact Us at:</p>
<p> Phone: (401) 900-5109 <br /> Address: 225 Dupont Drive, Providence, Rhode Island 02907</p>
<p>• We will not assume liability for non-receipt of notification of the availability of Documents electronically in the event Your email address on file is invalid; Your email or Internet service provider filters the notification as ‘spam’ or ‘junk mail’; there is a malfunction in Your computer, browser, Internet service and/or software; or for other reasons beyond Our control.</p>

                </div>
            </div>

        </div>
    );
};

export default Electronic;
