"use client"

import styles from './Footer.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
// import CookieConsent from '../CookieConsent';
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

const Footer = ({centered_style}) => {
    const windowSize = useWindowSize();
    const router = useRouter();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
    const [centerType, setCenterType] = useState("centered-content2");

    useEffect(() => {
        console.log(centered_style);
        if(centered_style) {
            setCenterType(centered_style);
        }else{
            console.log("doing nothing")
        }
    }, [centered_style]);

    useEffect(() => {

        if (!document.getElementById('cc--main')) {
            console.log("..initializing cookie consent")
            window.CC = window.initCookieConsent();
            window.CC.run({
                current_lang: 'en',
                autoclear_cookies: true,                   // default: false
                page_scripts: true,                        // default: false

                // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
                // delay: 0,                               // default: 0
                // auto_language: '',                      // default: null; could also be 'browser' or 'document'
                // autorun: true,                          // default: true
                // force_consent: false,                   // default: false
                // hide_from_bots: true,                   // default: true
                // remove_cookie_tables: false             // default: false
                // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
                // cookie_expiration: 182,                 // default: 182 (days)
                // cookie_necessary_only_expiration: 182   // default: disabled
                // cookie_domain: location.hostname,       // default: current domain
                // cookie_path: '/',                       // default: root
                // cookie_same_site: 'Lax',                // default: 'Lax'
                // use_rfc_cookie: false,                  // default: false
                // revision: 0,                            // default: 0

                onFirstAction: function(user_preferences, cookie){
                    // callback triggered only once on the first accept/reject action
                },

                onAccept: function (cookie) {
                    // callback triggered on the first accept/reject action, and after each page load
                },

                onChange: function (cookie, changed_categories) {
                    // callback triggered when user changes preferences after consent has already been given
                },

                languages: {
                    'en': {
                        consent_modal: {
                            title: 'Cookie preferences',
                            description: 'This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                            primary_btn: {
                                text: 'Accept all',
                                role: 'accept_all'              // 'accept_selected' or 'accept_all'
                            },
                            secondary_btn: {
                                text: 'Reject all',
                                role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                            }
                        },
                        settings_modal: {
                            title: 'Cookie preferences',
                            save_settings_btn: 'Save settings',
                            accept_all_btn: 'Accept all',
                            reject_all_btn: 'Reject all',
                            close_btn_label: 'Close',
                            // cookie_table_caption: 'Cookie list',
                            cookie_table_headers: [
                                {col1: 'Name'},
                                {col2: 'Domain'},
                                {col3: 'Expiration'},
                                {col4: 'Description'}
                            ],
                            blocks: [
                                {
                                    title: 'Cookie usage 📢',
                                    description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                                }, {
                                    title: 'Strictly necessary cookies',
                                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                                    toggle: {
                                        value: 'necessary',
                                        enabled: true,
                                        readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                                    }
                                }, {
                                    title: 'Performance and Analytics cookies',
                                    description: 'These cookies allow the website to remember the choices you have made in the past',
                                    toggle: {
                                        value: 'analytics',     // your cookie category
                                        enabled: false,
                                        readonly: false
                                    },
                                    cookie_table: [             // list of all expected cookies
                                        {
                                            col1: '^_ga',       // match all cookies starting with "_ga"
                                            col2: 'google.com',
                                            col3: '2 years',
                                            col4: 'description ...',
                                            is_regex: true
                                        },
                                        {
                                            col1: '_gid',
                                            col2: 'google.com',
                                            col3: '1 day',
                                            col4: 'description ...',
                                        }
                                    ]
                                }, {
                                    title: 'Advertisement and Targeting cookies',
                                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                                    toggle: {
                                        value: 'targeting',
                                        enabled: false,
                                        readonly: false
                                    }
                                }, {
                                    title: 'More information',
                                    description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                                }
                            ]
                        }
                    }
                }
            });
        }else{
            console.log("some error initializing cookie consent");
        }

    }, []);    
    return (
        <div>
            <div className={styles['main-component']}>
                <div className={styles['upper-footer']}>
                    <div className={`${styles['upper-footer-content-container']} ${centerType}`}>
                        <div className={styles["upper-footer-content-left"]}>
                            <div className={styles["upper-footer-content-left-links-container"]}>
                                <div className={styles["upper-footer-content-left-links"]}>
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Sell</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_sell_req_io", ()=>{router.push(`/instantoffer`);}]);}}>Request an InstantOffer</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_sell_how_works", ()=>{router.push(`/sell`);}]);}}>How it works</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_sell_pricing", ()=>{router.push(`/calculator_savings`);}]);}}>Pricing</a> </div>
                                    </div>
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Buy</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_buy_browse_homes", ()=>{router.push(`https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&idxStatus=active&ccz=city&lp=100000&srt=newest&city%5B%5D=37986`);}]);}}>Browse homes</a> </div>
                                    </div>
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Sell &amp; Buy</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_buy_sell_how_works", ()=>{router.push(`/buyandsell`);}]);}}>How it works</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_buy_sell_req_io", ()=>{router.push(`/instantoffer`);}]);}}>Request an InstantOffer</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_buy_sell_pricing", ()=>{router.push(`/calculator_savings`);}]);}}>Pricing</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_buy_sell_brows_homes", ()=>{router.push(`https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&idxStatus=active&ccz=city&lp=100000&srt=newest&city%5B%5D=37986`);}]);}}>Browse homes</a> </div>
                                    </div>
{/* 
                                    {windowSize.width > 1023 && 
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Mortgage</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_mort_todays_rates", ()=>{router.push(`https://www.gethomeeasy.com/`);}]);}}>Today’s rates</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_mort_home_loans", ()=>{router.push(`https://www.gethomeeasy.com/`);}]);}}>Home loans</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_mort_refi", ()=>{router.push(`https://www.gethomeeasy.com/`);}]);}}>Refinance</a> </div>
                                    </div>
                                } */}

                                </div>
                            </div>

                            {true &&
                            <div className={styles["upper-footer-content-left-links-container"]}>
                                <div className={styles["upper-footer-content-left-links"]}>
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Mortgage</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_mort_todays_rates", ()=>{router.push(`https://www.gethomeeasy.com/`);}]);}}>Today’s rates</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_mort_home_loans", ()=>{router.push(`https://www.gethomeeasy.com/`);}]);}}>Home loans</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_mort_refi", ()=>{router.push(`https://www.gethomeeasy.com/`);}]);}}>Refinance</a> </div>
                                    </div>
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Agents</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_agents_partner", ()=>{router.push(`/agents`);}]);}}>Partner with us</a> </div>
                                    </div>
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>About</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_about_comp_mission", ()=>{router.push(`/about`);}]);}}>Company + Mission</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_about_contact", ()=>{router.push(`/contact`);}]);}}>Contact</a> </div>
                                    </div>
                                   
                                </div>

                                <div className={styles["upper-footer-content-left-links"]}>
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Calculators</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_calc_net_proceeds", ()=>{router.push(`/calculator_proceeds`);}]);}}>Net proceeds</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_calc_he_savings", ()=>{router.push(`/calculator_savings`);}]);}}>HomeEasy savings</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_calc_est_mnt_pmts", ()=>{router.push(`/calculator_monthly_payments`);}]);}}>Est. monthly payments</a> </div>
                                    </div>
        
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Help Center</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_help_faq", ()=>{router.push(`/questions`);}]);}}>FAQ</a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_help_contact", ()=>{router.push(`/contact`);}]);}}>Contact</a> </div>
                                    </div>
                                    <div className={styles["upper-footer-content-left-links-item"]}>
                                        <div className={styles["upper-footer-content-left-links-title"]}>Finds Homes on The Go</div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_agents_partner", ()=>{router.push(`/`);}]);}}><img src="/img/google (1).png" alt="google" /></a> </div>
                                        <div className={styles["upper-footer-content-left-links-link"]}> <a className='underline-on-hover-red' onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_1_agents_partner", ()=>{router.push(`/`);}]);}}><img src="/img/google (2).png" alt="apple" /></a> </div>
                                    </div>
                                </div>
                            </div>
                        
                            }


                        </div>

                        {/* {windowSize.width > 1023 && */}
                        <div className={styles["upper-footer-content-right"]}>
                            <div className={styles["upper-footer-content-right-image-container"]}>
                                <a href="/"><img src="/img/equal-housing-opportunity-logo-1200w copy.svg" alt="Equal Housing Opportunity" /></a>
                            </div>
                            <div className={styles["upper-footer-content-right-copy-container"]}>
                                <p>HOMEEASY HOMES IS COMMITTED TO AND ABIDES BY THE FAIR HOUSING ACT AND EQUAL OPPORTUNITY ACT. READ HOMEEASY HOME’S <a href="/fair_housing" target="_blank">FAIR HOUSING POLICY</a> AND THE <a href="https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf" target="_blank">NEW YORK STATE FAIR HOUSING NOTICE</a>.</p>

                                <p>HomeEasy&trade; is a registered trademark licensed to HomeEasy LLC.</p> 

                                <p>HomeEasy Homes is committed to ensuring digital accessibility for individuals with disabilities. If you wish to report an issue or seek an accommodation, please contact us at info@homeeasyhomes.com.

By searching, you agree to the <a href="/tos" target="_blank">Terms of Use</a>, <a href="/privacy_policy" target="_blank">Privacy Policy</a> and <a href="https://oag.ca.gov/privacy/ccpa" target="_blank">California Privacy Notice</a>. California DRE #02012110</p>

<p>TREC: <a href="/files/TREC.pdf" target="_blank">Info about Brokerage Services</a>, <a href="https://www.trec.texas.gov/forms/consumer-protection-notice" target="_blank">Consumer Protection Notice</a>, <a href="https://www.sml.texas.gov/wp-content/uploads/2021/07/rmlo_80_200_b_recovery_fund_notice.pdf" target="_blank">Texas Mortgage Company Compliant/Recovery Fund Notice</a></p>

<p><sup>1</sup>Homes are subject to our approval and must be listed within an MLS in the areas that HomeEasy Homes operates. Homes are subject to inspections and other limitations.</p>

<p><a href="https://www.nmlsconsumeraccess.org/" target="_blank">NMLS Consumer Access</a></p>
<p><a href="https://help.jmaclending.com/hc/files/11272354/12124268/1/1548800701341/Affiliated+Business+Disclosure.pdf" target="_blank">Affiliated Business Arrangement Disclosure</a></p>
                            {/* By searching, you agree to the Terms of Use, Privacy Policy and California Privacy Notice. California DRE #02012110; Semper Home Loans: NMLS #1053
    TREC: Info about Brokerage Services, Consumer Protection Notice, Texas Mortgage Company Compliant/Recovery Fund Notice
    Real estate brokerage licenses

    <p><sup>1</sup> Homes are subject to our approval and must be listed within an MLS in the areas that HomeEasy Homes operates. Homes are subject to inspections and other limitations.</p>

    <p>HomeEasy Homes is registered trademark of Semper Home Loans, Inc.</p>

    <p>NMLS Consumer Access</p>
    <p>Affiliated Business Arrangement Disclosure</p> */}
                            </div>
                        </div>
                    
                        {/* } */}
                    </div>
                </div>

                <div className={styles['lower-footer']}>
                    <div className={`${styles['lower-footer-content-container']} centered-content2`}>

                        <div className={styles["lower-footer-content-left"]}>
                            <div className={styles["lower-footer-content-left-image-container"]}> <a href="/"><img src="/img/footer_logo_icon.svg" alt="HomeEasy Homes" /></a> </div>
                        </div>

                        {windowSize.width > 1023 &&
                        <div className={styles["lower-footer-content-middle"]}>
                            <div className={styles["lower-footer-content-middle-copyright-container"]}>
                                <div className={styles["lower-footer-content-middle-copyright"]}>HomeEasy Homes © 2024. All Rights Reserved</div>
                            </div>
                            <div className={styles["lower-footer-content-middle-links-container"]}>
                                <div className={styles["lower-footer-content-middle-links"]}>
                                    {/* <a href="/">Affiliated Business Arrangement Disclosure</a> */}
                                    <a href="/electronic_consent" target="_blank">Electronic Consent</a>
                                    <a href="/tos" target="_blank">Terms &amp; Conditions of Use</a>
                                    <a href="/privacy_policy" target="_blank">Privacy Policy</a>
                                    <a onClick={()=>{
                                        console.log(window.CC);
                                        console.log("doing cookies")
                                        // preventdefault();
                                        // stopPropagation();
                                        
                                        window.CC.showSettings();
                                        return false;
                                    }}>Cookie Preferences</a>
                                </div>                     
                            </div>
                            <div className={styles["lower-footer-content-middle-links-container"]}>
                                <div className={styles["lower-footer-content-middle-links"]}>
                                    <strong>TREC: </strong>
                                    <a href="/files/TREC.pdf" target="_blank">Information About Brokerage Services</a>
                                    <a href="https://www.trec.texas.gov/forms/consumer-protection-notice" target="_blank">Consumer Protection Notice</a>
                                </div>
                            </div>
                            
                        </div>
                     }

                        <div className={styles["lower-footer-content-right"]}>
                            <div className={styles["lower-footer-content-right-social-links"]}>
                                <div className={styles["lower-footer-content-right-social-links-container"]}>
                                <a target="_blank" onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_2_social_linkedin", ()=>{router.push(`https://www.linkedin.com/company/semper-home-loans`);}]);}}><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512">
                                        <path
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                    </svg></a>
                                    <a target="_blank" onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_2_social_insta", ()=>{router.push(`https://www.instagram.com/semperhl/`);}]);}}><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg></a>
                                    <a target="_blank" onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_2_social_fb", ()=>{router.push(`https://www.facebook.com/semperhl`);}]);}}><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                    </svg></a>
                                    <a target="_blank" onClick={(e) => {e.preventDefault(); gtmPush(["callback", "foot_2_social_twitter", ()=>{router.push(`https://twitter.com/SemperHL`);}]);}}><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg></a>

                                </div>
                            </div>   
                        </div>
                    </div>
                   
                    {windowSize.width < 1024 && 
                    <div className={`${styles['lower-footer-content-container']} ${styles['second-lower']} centered-content`}>
                        <div className={styles["lower-footer-content-middle"]}>
                            <div className={styles["lower-footer-content-middle-copyright-container"]}>
                                <div className={styles["lower-footer-content-middle-copyright"]}>HomeEasy Homes © 2023. All Rights Reserved</div>
                            </div>
                            <div className={styles["lower-footer-content-middle-links-container"]}>
                                <div className={styles["lower-footer-content-middle-links"]}>
                                    {/* <a href="/">Affiliated Business Arrangement Disclosure</a> */}
                                    <a href="/electronic_consent" target="_blank">Electronic Consent</a>
                                    <a href="/tos" target="_blank">Terms &amp; Conditions of Use</a>
                                    <a href="/privacy_policy" target="_blank">Privacy Policy</a>
                                    <a onClick={()=>{
                                        console.log(window.CC);
                                        console.log("doing cookies")
                                        // preventdefault();
                                        // stopPropagation();
                                        window.CC.showSettings();
                                        return false;
                                    }}>Cookie Preferences</a>
                                </div>                     
                            </div>
                            <div className={styles["lower-footer-content-middle-links-container"]}>
                                <div className={styles["lower-footer-content-middle-links"]}>
                                    <strong>TREC: &nbsp; </strong>
                                    <a href="/files/TREC.pdf" target="_blank">Information About Brokerage Services</a>
                                    <a href="https://www.trec.texas.gov/forms/consumer-protection-notice" target="_blank">Consumer Protection Notice</a>
                                </div>
                            </div>
                        </div>

                    </div>
                
                    }
 {/* footer custom text */}
 <div className={`${styles['bottom_footer_text']} centered-content2`}> 
                        <div className={styles["inner"]}>
                            <p>*Overall, the national average Realtor commission in 2023 was 5.46% according to data from <a href="https://www.statista.com/statistics/777612/average-commission-rate-realtors-usa/" target="_blank">Statista.com</a></p>
                            <p>**Average InstantOffer closes in 15 days. This does not guarantee that every sale will.</p>
                       
                        </div>
                        <div className={styles["grand_text"]}>
                            1 The following offers are available only to clients who are purchasing a home and financing with HomeEasy Mortgage: (1) Client purchasing with a HomeEasy Homes Partner Agent
                            through HomeEasy Homes will receive a lender paid credit that is 1.50% of their loan amount. For example, a $200,000 home purchase price minus a 5% down payment of $10,000
                            results in a loan amount of $190,000. Client would receive a credit of 1.50% of the $190,000, for a credit of $2,850 toward closing costs. (2) Client is referred by a real estate agent
                            to buy a new home will not receive a lender paid credit. Offer does not apply to new loans submitted through an Executive Loan Officer, mortgage broker, through Schwab, or on nonagency jumbo loans, non-QM loans, bank statement loans, second lien products or team member loans. Offer may not be redeemed for cash and is nontransferable. Offer cannot be
                            retroactively applied to loans where the rate has been locked. Conditions and exclusions apply. This is not a commitment to lend and is contingent on qualification per full
                            underwriting guidelines.
                            </div>
                        <div className={styles["grand_text2"]}>
                        <div className={styles["grand_text"]}>
                        2 Save with HomeEasy Homes’ lower 1% listing fee when you buy and sell with a Preferred HomeEasy Homes Agent, versus a more-typical 2.5% listing fee. Fees subject to change,
                         <a href="/homeeasy_listing" target='_blank'>minimums apply</a> . Buyer’s agent fee not included.
                            </div>
                        <div className={styles["bottom_text"]}>
                        <p>Apple and the Apple logo are trademarks of Apple Inc. registered in the U.S. and other countries. App Store is a service mark of Apple Inc.</p>
                        <p>Wear OS by Google and Google Play are trademarks of Google LLC.</p>
                        <p>
                        Semper Home Loans, Inc., HomeEasy Homes, LLC, and HomeEasy Mortgage, LLC are separate operating subsidiaries of Semper Home Loans, Inc. Each company is a distinct legal entity, operated and managed through its own management and governance structure as necessitated by its state of incorporation and the relevant legal and regulatory requirements.
                        </p>
                            </div>
                            </div>
                    </div>
                </div>    


            </div>
        </div>
    );
};

export default Footer;