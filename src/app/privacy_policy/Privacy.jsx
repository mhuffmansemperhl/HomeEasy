"use client"
import styles from './Privacy.module.scss';
import useWindowSize from '../../hooks/useWindowSize';

const Privacy = () => {


    const size = useWindowSize();


    return (
        <div  className={styles['main-component']}>
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['tos-content-container']}`}>

                    <h5>Privacy Policy</h5>
                    <h5>What information do we collect?</h5>
                    <p>We collect information from you when you fill out a form. When registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address or phone number. You may, however, visit our site anonymously. In addition, we collect phone contacts in the mobile app when you share the app.</p>

                    <h5>What do we use your information for?</h5>

                    <p>Any of the information we collect from you may be used in one of the following ways: To personalize your experience (Your information helps us to better respond to your individual needs). To improve our website (We continually strive to improve our website offerings based on the information and feedback we receive from you). To improve customer service (Your information helps us to more effectively respond to your customer service requests and support needs). To process transactions (Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested). To administer a contest, promotion, survey or other site feature. To send periodic emails (The email address you provide for order processing will only be used to send you information and updates pertaining to your order).</p>
                    <h5>How do we protect your information?</h5>
                    <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
                    <h5>Do we use cookies? </h5>
                    <p>Yes. Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser – if you allow – that enables the sites or service providers systems to recognize your browser and capture and remember certain information. HOMEEASY HOMES may use third-party service providers to use this information to deliver targeted advertising to you. You can remove any cookies you have and block future cookies by visiting the settings of your web browser.</p>
                    <h5>Do we disclose any information to outside parties?</h5>
                    <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect others or ours rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
                    <h5>Third part links</h5>
                    <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

                    <p>California Online Privacy Protection Act Compliance</p>
                    <p>Because we value your privacy, we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We, therefore, will not distribute your personal information to outside parties without your consent.</p>
                    <p>Children’s Online Privacy Protection Act Compliance</p>
                    <p>We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age.Our website, products and services are all directed to people who are at least 13 years old or older.</p>
                    <p>Online Privacy Policy Only</p>
                    <p> This online privacy policy applies only to information collected through our website and not to information collected offline.</p>
                    <p>Legal & Licensing</p>
                    <p>Please also visit our Legal & Licensing section for more information.</p>
                    <p>Your Consent</p>
                    <p> By using our site, you consent to our privacy policy.</p>
                    <p> Changes to our Privacy Policy</p>
                    <p>If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification date below.</p>
                    <p>Contacting Us</p>
                    <p>  If there are any questions regarding this privacy policy, you may contact us using the information below. 225 Dupont Drive, Providence, RI 02907 United States info@HomeEasyHomes.com</p>
                    <p>Privacy Policy for California Residents</p>
                    <p>CCPA PRIVACY NOTICE</p>
                    <p>This California Consumer Privacy Act (“CCPA”) PRIVACY NOTICE is for California residents only and supplements the information contained in the Privacy Statement of HomeEasy Homes, Inc, and its subsidiaries (collectively, “we,” “us,” or “our”) and applies solely to visitors, client’s, users, and others who reside in the State of California (“consumers” or “you”). We adopt this notice to comply with the California Consumer Privacy Act of 2018 (“CCPA”) and other California privacy laws. Any terms defined in the CCPA have the same meaning when used in this notice.</p>
                    <p>Information We Collect</p>
                    <p>  We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device (“personal information”). In particular, we have collected the following categories of personal information from consumers within the last twelve (12) months:</p>
                   
                    <div className={`${styles['table_main']}`}>
                    <table align="center">
                    <thead>
                        <tr>
                            <td>Category</td>
                            <td>Examples</td>
                            <td>Collected</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>other physical patterns, and sleep, health, or exercise data.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>F. Internet or other similar network activity.</td>
                            <td>Browsing history, search history, information on a consumer’s interaction with a website, application, or advertisement.</td>
                            <td>YES</td>
                        </tr>
                        <tr>
                            <td>G. Geolocation data.</td>
                            <td>Physical location or movements.</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>H. Sensory data.</td>
                            <td>Audio, electronic, visual, thermal, olfactory, or similar information.</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>I. Professional or employment-related information.</td>
                            <td>Current or past job history or performance evaluations.</td>
                            <td>YES</td>
                        </tr>
                        <tr>
                            <td>J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).</td>
                            <td>Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.</td>
                            <td>YES</td>
                        </tr>
                        <tr>
                            <td>K. Inferences drawn from other personal information.</td>
                            <td>Education records directly related to a student maintained by an educational institution or party Profile reflecting a person’s preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.class lists, student schedules, student identification codes, student financial information, or student disciplinary records.</td>
                            <td>NO</td>
                        </tr>
                    </tbody>
                    </table>
                        </div>
                        <p>Personal information does not include:</p>
                        <p>Publicly available information from federal, state or local government records.</p>
                        <ul>
                            <li>De-identified or aggregated consumer information.</li>
                            <li>Information excluded from the CCPA’s scope, such as personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver’s Privacy Protection Act of 1994.</li>
                        </ul>
                        <p>We obtain the categories of personal information listed above from the following categories of sources:</p>
                        <ul>
                            <li>Directly from our clients or their agents. For example, from documents that our clients provide to us related to the services that we are asked to perform.</li>
                            <li>Indirectly from our clients or their agents. For example, through information we collect from our clients in the course of providing services to them.</li>
                            <li>Directly and indirectly from activity on our website (www.HomeEasy Homescorp.com). For example, from submissions through our website portal or website usage details collected automatically.</li>
                            <li>From third-parties that interact with us in connection with the services we perform. For example, credit reporting agencies, appraisers, lead providers, prescreened data providers, and other service providers.</li>
                        </ul>
                           <p> Use of Personal Information We may use or disclose the personal information we collect for one or more of the following business purposes:</p>
                           <ul>
                            <li>To fulfill or meet the reason for which the information is provided. For example, if you provide us with personal information in order for us to prepare a rate quote or ask a question about our products or services, we will use that personal information to respond to your inquiry.</li>
                            <li>To provide, support, personalize and develop our Website, products and services.</li>
                            <li> To provide you with information, products or services that you request from us.</li>
                            <li>To provide you with email alerts, event registrations and other notices concerning our products or services, or events or news, that may be of interest to you.</li>
                            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collections.</li>
                            <li>For testing, research, analysis and product development.</li>
                            <li>As necessary or appropriate to protect the rights, property or safety of us, our clients or others.</li>
                            <li>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</li>
                            <li>As described to you when collecting your personal information or as otherwise set forth in the CCPA.</li>
                            <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among the assets transferred.</li>
<li>To respond to audits or state or federal examinations by our regulators.</li>
<li>We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.</li>
                           </ul>
<h5>Sharing Personal Information</h5>
<p>  We may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract.</p>
<p>  We disclose your personal information for a business purpose to the following categories of third parties:</p>
<ul>
    <li>Our affiliates.</li>
    <li>Service providers.</li>
    <li>Third parties to whom you or your agents authorize us to disclose your personal information in connection with products or services we provide to you.</li>
    <li>In the preceding twelve (12) months, we have not sold any personal information and we have no intention of doing so in the future.</li>
</ul>
<h5>Your Rights and Choices</h5>
<p>The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.</p>
<p> Access to Specific Information and Data Portability</p>

<p> Unless your personal information is excluded from the scope of the CCPA, you have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:</p>
<ul>
    <li>The categories of personal information we collected about you.</li>
    <li> The categories of sources for the personal information we collected about you.</li>
    <li>Our business or commercial purpose for collecting or selling that personal information.</li>
    <li>The categories of third parties with whom we share that personal information.</li>
    <li> The specific pieces of personal information we collected about you (also called a data portability request).</li>
    <li>If we sold or disclosed your personal information for a business purpose, two separate lists disclosing: o sales, identifying the personal information categories that each category of recipient purchased; and o disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained. Deletion Request Rights</li>
</ul>
<p>Unless your personal information is excluded from the scope of the CCPA, you have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.</p>
<p> We may deny your deletion request if retaining the information is necessary for us or our service providers to:</p>
<ul  className={styles['ul_number']}>
    <li>Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.</li>
    <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
    <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
    <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li>
    <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 seq.).</li>
    <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s achievement, if you previously provided informed consent.</li>
    <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li>
    <li>Comply with a legal obligation.</li>
    <li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li>
</ul>
<p>Exercising Access, Data Portability, and Deletion Rights</p>
<p>To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by either:</p>
<ul>
    <li>Visiting us at www.HomeEasyHomes.com</li>
    <li>Emailing us at marketing@HomeEasyHomes.com</li>
</ul>
<p></p>

<p>
Only you or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.
</p>
<p> You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:</p>
<ul>
    <li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.</li>
    <li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
</ul>
<p>We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you. Making a verifiable consumer request does not require you to create an account with us. We will only use personal information provided in a verifiable consumer request to verify the requestor’s identity or authority to make the request.Our practices with regard to verifying a request will vary depending on the request and the information we have on the person making the request.</p>
<h5>Response Timing and Format</h5>
<p>We endeavor to respond to a verifiable consumer request within 45 days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing. If you have an account with us, we will deliver our written response to that account. If you do not have an account with us, we will deliver our written response by mail or electronically, at your option. Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request’s receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.</p>
<p>We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.</p>
<h5>Non-Discrimination</h5>
<p>We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:</p>
<ul>
    <li> Deny you goods or services.</li>
    <li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
    <li>Provide you a different level or quality of goods or services.</li>
    <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
</ul>
<h5>Changes to Our Privacy Notice</h5>
<p>We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will notify you by email or through a notice on our website homepage.</p>
<h5>Contact Information</h5>
<p> If you have any questions or comments about this notice, our Privacy Statement, the ways in which we collect and use your personal information, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:</p>
<ul>
    <li>Website: www.HomeEasyHomes.com </li>
    <li>Email: info@HomeEasyHomes.com</li>
    <li>Postal Address: HomeEasy Homes, Inc.225 Dupont Drive, Providence, RI 02907</li>
    <li>Attn: Legal Department</li>
</ul>
                </div>
            </div>

        </div>
    );
};

export default Privacy;
