"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import useFlowGetStartedStore from "@/store/store.js";
import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
import FlowContent from "@/components/FlowContent";
import FlowChips from "@/components/FlowChips";
import FlowAddressSell from "@/components/FlowAddressSell";
import FlowListItems from "@/components/FlowListItems";
import FlowContactForm from "@/components/FlowContactForm";
import FlowProfessionalDetailsForm from "@/components/FlowProfessionalDetailsForm";
import FlowPasswordForm from "@/components/FlowPasswordForm";
import FlowSignupForm from "@/components/FlowSignupForm";
import styles from "./page.module.scss";
import { useDebouncedCallback } from "use-debounce";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import getZipCode from "@/helpers/getCustomerZipCode";
import cermoPayload from "@/helpers/cermoPayload";
import { FORM_TAGS } from "@/helpers/formTags";
import { validateUser } from "@/helpers/validateUser";

export default function Question() {
  const [firedEvents, setFiredEvents] = useState(new Set());
  const pathname = usePathname();
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
  const searchParams = useSearchParams();
  const nav_items = {
    pathname: pathname,
    router: router,
    searchParams: searchParams,
  };
  
  const [flow_loaded, setFlowLoaded] = useState(false);

  const flow = useFlowGetStartedStore((state) => state.flow);
  const setFlow = useFlowGetStartedStore((state) => state.setFlow);

  const resetState = useFlowGetStartedStore(state => state.reset);

  const step = useFlowGetStartedStore((state) => state.step);
  const setStep = useFlowGetStartedStore((state) => state.setStep);

  const branch = useFlowGetStartedStore((state) => state.branch);
  const setBranch = useFlowGetStartedStore((state) => state.setBranch);

 const setPercentage = useFlowGetStartedStore((state) => state.setPercentage);

  const content = useFlowGetStartedStore((state) => state.content);
  const setContent = useFlowGetStartedStore((state) => state.setContent);

  const footer_nav = useFlowGetStartedStore((state) => state.footer_nav);
  const setFooterNav = useFlowGetStartedStore((state) => state.setFooterNav);

  const nextStep = useFlowGetStartedStore((state) => state.nextStep);
  const nextStepValidate = useFlowGetStartedStore(
    (state) => state.nextStepValidate
  );

  const form_data = useFlowGetStartedStore((state) => state.form_data);
  const setIsBusy = useFlowGetStartedStore((state) => state.setIsBusy);

  const setAccountCreationError = useFlowGetStartedStore(
    (state) => state.setAccountCreationError
  );

  const account_created = useFlowGetStartedStore(
    (state) => state.account_created
  );
  const setAccountCreated = useFlowGetStartedStore(
    (state) => state.setAccountCreated
  );

  const looking_to_sell_list_items = [
    "This month",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
  ];

  const relationship_to_home_list_items = ["Owner", "Agent", "Other"];

  const yes_no_list_items = ["Yes", "No"];

  const motivating_to_buy_list_items = [
    "Feeling financially ready",
    "Relocating due to job",
    "Just browsing listings",
    "Other",
  ];

  const what_would_you_like_to_do_next_buy_list_items = [
    "Search & browse homes",
    "Learn more about homebuying",
    "Learn about HomeEasy Homes",
    "Get advice on the market",
    "Other",
  ];

  const learn_more_about_heh_list_items = [
    "Instant cash offers",
    "List for 1%",
    "Selling & buying your home",
    "HomeEasy Homes process",
    "Other",
  ];

  const got_it_how_can_we_help_items = [
    "I would like an InstantOffer*",
    "My listing agreement is about to expire",
  ];



  function loadChipsPage(options) {
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        copy="The easiest way to sell or buy your home starts here."
        subcopytitle="I want to:"
        content={
          <FlowChips
            nav_items={nav_items}
           
          />
        }
      />
    );
  }

  function loadAddressSellPage(options) {
    if (options?.tag) {
      fireEventTag(options.tag);
    }
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={
          options.title || "What’s the address of the home you want to sell?"
        }
        copy={options.copy || "Enter a city, neighborhood, or address."}
        content={
          <FlowAddressSell
            store_key={options.store_key || "sell_address"}
            callback={(address_data) => {
              if ("branch" in options) {
                setBranch(options.branch + branch);
              }
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        name={"sell_address"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadAddressBuyPage(options) {
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={
          options.title || "Where do you want to buy?"
        }
        copy={options.copy || "Enter a city, neighborhood, or address."}
        content={
          <FlowAddressSell
            store_key={options.store_key || "buy_address"}
            callback={(address_data) => {
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        name={"buy_address"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadSignupFormPage(options) {
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={options.title || "Let’s start with the basics!"}
        copy={
          options.copy ||
          "You will be connected with a HomeEasy Homes specialist. No obligation, no pressure."
        }
        content={
          <FlowSignupForm
            store_key={options.store_key || "contact"}
            callback={(contact_data) => {
              false && console.log(contact_data);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        needValidation={true}
        label={"Next"}
        callback={(data) => {
          const contact = data?.contact;
          const isValidUserData = validateUser(contact?.email, contact?.first_name, contact?.last_name, contact?.mobile_phone_number);
          
          if(isValidUserData?.isValid ){
            const payloadForCermo = cermoPayload({flow, ...data,});
            fetch('/api/cermo_api', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payloadForCermo)
            });
            nextStepValidate(pathname, router, searchParams);

          }
        }}
      />
    );
  }

  function loadLookingToSellPage(options) {
    const tag = FORM_TAGS.sell_timeline;
    fireEventTag(tag);
    
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title="When are you looking to sell?"
        copy="Your timeline helps us understand how we can help you get ready to sell your home"
        content={
          <FlowListItems
            list_items={looking_to_sell_list_items}
            nav_items={nav_items}
            store_key={options.store_key || "looking_to_sell"}
            callback={(index) => {
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    
  }

  function loadLearnMoreAboutHomeEasyHomesPage(options) {
    const tagClickedDictionary = {
      "Instant cash offers": "buy_learn_heh_icoffers",
      "List for 1%": "buy_learn_heh_list1",
      "Selling & buying your home": "buy_learn_heh_sellbuy",
      "HomeEasy Homes process": "buy_learn_heh_process",
      "Other": "buy_learn_heh_other"
  };
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title="What would you like to learn more about?"
        copy="We have a whole team of experts ready to help!"
        content={
          <FlowListItems
            store_key={options.store_key || "learn_more_about_heh"}
            list_items={learn_more_about_heh_list_items}
            callback={(index, selectedOption) => {
              const selectedTag = tagClickedDictionary[selectedOption];
              fireEventTag(selectedTag)
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        store_key={options.store_key || "learn_more_about_heh"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadMotivatingToBuyPage(options) {
    const tag = FORM_TAGS.buy_motivation;
    fireEventTag(tag);

    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={options.title || "What’s motivating you to buy?"}
        copy={options.copy || "Select all that apply."}
        content={
          <FlowListItems
            store_key={options.store_key || "motivating_to_buy"}
            checkbox_mode={false}
            list_items={options.list_items || motivating_to_buy_list_items}
            callback={(index) => {
              if ("branch" in options) {
                setBranch(options.branch + index);
              }
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
   
  }

  function loadWhatWouldYouLikeToDoNextBuyPage(options) {
    const tag = FORM_TAGS.buy_next;
    fireEventTag(tag);

    const tagClickedDictionary = {
      "Search & browse homes": "buy_browse",
      "Learn more about homebuying": "buy_learn",
      "Learn about HomeEasy Homes": "buy_learn_heh", 
      "Get advice on the market": "buy_advice",
      "Other": "buy_other"
  };
    
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title="What would you like to do next?"
        copy="By understanding your specific needs, we can assist you better."
        content={
          <FlowListItems
            store_key={
              options.store_key || "what_would_you_like_to_do_next_buy"
            }
            list_items={what_would_you_like_to_do_next_buy_list_items}
            callback={(index, selectedOption) => {
              const selectedTag = tagClickedDictionary[selectedOption];

              fireEventTag(selectedTag);
              if ("branch" in options) {
                
                setBranch(options.branch + index);
              } else {
                setBranch(index === 0 ? 1 : index);
              }
              if ("next_step" in options) {
                options.next_step(index);
              } else {
                nextStep(pathname, router, searchParams);
              }
            }}
          />
        }
      />
    );
  }

  function loadGotItHowCanWeHelpPage(options) {
    if (options?.tag) {
      fireEventTag(options.tag);
    }
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title="Got it. How can we help you?"
        infobox={options.infobox || undefined}
        content={
          <FlowListItems
            store_key={options.store_key || "got_it_how_can_we_help"}
            list_items={got_it_how_can_we_help_items}
            callback={(index) => {
              if ("branch" in options) {
                setBranch(options.branch + index);
              } else {
                setBranch(index);
              }
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        store_key={options.store_key || "got_it_how_can_we_help"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadSearchAndBrowseHomesPage() {
    const turl =
      "https://homeeasyhomes.idxbroker.com/idx/search/advanced?srt=newest";
    window.open(turl, "_blank");
  }

  function loadRelationshipToHomePage(options) {
    if (options?.tag) {
      fireEventTag(options.tag);
    }
    setPercentage("48%");
    setContent(
      <FlowContent
        title="What is your relationship to this home?"
        content={
          <FlowListItems
            store_key={options.store_key || "relationship_to_home"}
            list_items={
              options.relationship_items || relationship_to_home_list_items
            }
            callback={(index) => {
              if ("branch" in options) {
                setBranch(options.branch + index);
              } else {
                setBranch(index);
              }
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        store_key={options.store_key || "relationship_to_home"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadSignedSellerAgreementAgentPage(options) {
    if (options?.tag) {
      fireEventTag(options.tag);
    }
    false && console.log("loading  loadSignedSellerAgreementAgentPage");
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title="Have you signed an agreement with an agent to sell your home?"
        content={
          <FlowListItems
            store_key={options.store_key || "signed_seller_agreement_agent"}
            list_items={yes_no_list_items}
            callback={(index) => {
              if ("branch" in options) {
                setBranch(options.branch + index);
              }
              // false && console.log(index);
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    
  }

  function loadAgentLookingForInstantOffer(options) {
    const tag = FORM_TAGS.sell_agent_instant;
    fireEventTag(tag);
    false && console.log("loading  loadAgentLookingForInstantOffer");
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={
          options.title ||
          "Are you looking for an InstantOffer* on a house you are listing?"
        }
        infobox={options.infobox || undefined}
        content={
          <FlowListItems
            store_key={options.store_key || "agent_looking_for_instant_offer"}
            list_items={yes_no_list_items}
            callback={(index) => {
              if ("branch" in options) {
                setBranch(3);
              } else {
                setBranch(index);
              }
              // false && console.log(index);
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        store_key={options.store_key || "agent_looking_for_instant_offer"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadAlsoNeedToBuy(options) {
    false && console.log("loading  loadAlsoNeedToBuy");
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={
          options.title || "Do you also need to buy a new home after you sell?"
        }
        infobox={options.infobox || undefined}
        content={
          <FlowListItems
            store_key={options.store_key || "also_need_to_buy"}
            list_items={yes_no_list_items}
            callback={(index) => {
              if ("branch" in options) {
                setBranch(options.branch + index);
              } else {
                setBranch(index);
              }
              // false && console.log(index);
              nextStep(pathname, router, searchParams);
            }}
          />
        }
      />
    );
    
  }

  function loadSorryOnlyHomeownersPage(options) {
    false && console.log("loading  loadSorryOnlyHomeownersPage");

    false && 

    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title="We’re sorry, HomeEasy Homes can only work directly with homeowners for now."
        copy={
          "If you become unrepresented in the future, we’d love to hear from you."
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Back to our homepage"}
        callback={() => {
          router.push("/");
          // nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function fireEventTag(tag) {
    if (tag && !firedEvents.has(`${flow}_${step}_${tag}`)) {
      doEventClick({ event_name: tag });
      setFiredEvents(prev => new Set(prev).add(`${flow}_${step}_${tag}`));
    }
  }

  function loadWellBeInTouchPage(options) {
    let tag = "";
    const isSell = flow === "sell";
    const customerAddress = isSell ? form_data?.sell_address?.address_components : form_data?.buy_address?.address_components;
    const validPromoZipCodes = ["02760","02763","02761", "02056","02070","02093","02762"];
    const iframe = 'https://api.leadconnectorhq.com/widget/booking/Jw8JXRWYGUSVnIEZn9kj';
    let copy = '';
    
    if(flow === "sell"){
      tag = FORM_TAGS.sell_instant_calendar
      const customerZipCode = getZipCode(customerAddress);
      const isCustomerZipCodeValidForPromo = validPromoZipCodes.includes(customerZipCode);
      if(isCustomerZipCodeValidForPromo){
        copy = 'Let’s schedule a call at a time that works best for you to go over next steps.';
      } else {
        copy = 'Our 1% listing option isn’t available in your area at the moment. However, we’ll get in touch to go over other options with you.'
      }
    }

    if (flow === "buy" || flow === "sellbuy") {
      tag = FORM_TAGS.buy_calendar
      copy = 'Let’s schedule a call at a time that works best for you to go over next steps.'
    }

    if (flow === "instantoffer") {
      tag = FORM_TAGS.instant_calendar
     }
   
    false && console.log("loading  loadWellBeInTouchPage");
    fireEventTag(tag);
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={options.title || "Next steps"}
        copy={
          copy || options.copy ||
          "Schedule a time with us and one of our representatives will call you, to discover and explore more about what you are looking for, and to discuss your best options"
        }
        iframe={iframe}
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Back to our homepage"}
        callback={() => {
          
          window.location.href = "/";
        
        }}
      />
    );
  }

  const loadBestWayToReachYouPage = (options) => {
    if (options?.tag) {
      fireEventTag(options.tag);
    }
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={options.title || "What’s the best way to reach you?"}
        copy={options.copy || "Our advice is always free."}
        content={
          <FlowContactForm
            store_key={options.store_key || "contact"}
            callback={(contact_data) => {
              false && console.log("doing callback");
              if ("branch" in options) {
                false && console.log("incrementing branch");
                setBranch(options.branch + branch);
              }
              false && console.log(contact_data);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        callback={(data) => {
          const contact = data?.contact;
          const isValidUserData = validateUser(contact?.email, contact?.first_name, contact?.last_name, contact?.mobile_phone_number);
          
          if(isValidUserData?.isValid ){
            const payloadForCermo = cermoPayload({flow, ...data,});
            fetch('/api/cermo_api', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payloadForCermo)
            });
            nextStepValidate(pathname, router, searchParams);

          }
         
        }}
      />
    );
  };

  function loadProfessionalDetailsPage(options) {
    false && console.log("loading  loadProfessionalDetailsPage");
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={options.title || "Professional details."}
        copy={
          options.copy ||
          "The following details are helpful for us to make sure it's a fit."
        }
        content={
          <FlowProfessionalDetailsForm
            store_key={options.store_key || "professional_details"}
            callback={(contact_data) => {
              false && console.log("doing callback");
              if ("branch" in options) {
                false && console.log("incrementing branch");
                setBranch(options.branch + branch);
              }
             
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        callback={() => {
          nextStepValidate(pathname, router, searchParams);
        }}
      />
    );
  }

  function doAccountCreationError(error_text) {
    setIsBusy(false);
    setAccountCreationError(error_text);
    alert(error_text);
  }

  const createNewIDXAccount = async (form_data) => {
   
    
      try {
    
        const payload = {};
        if ("contact" in form_data) {
          
          if ("first_name" in form_data.contact) {
            payload.firstName = form_data.contact.first_name;
          }
          if ("last_name" in form_data.contact) {
            payload.lastName = form_data.contact.last_name;
          }
          if ("email" in form_data.contact) {
            payload.email = form_data.contact.email;
          }
          if ("mobile_phone_number" in form_data.contact) {
            payload.phone = form_data.contact.mobile_phone_number;
          }

          fetch("/api/idx_api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              params: payload,
            }),
          })
            .then((response) => {
             
              setIsBusy(false);
              return response.json();
            })
            .then((data) => {
              const jdata = data.body;
                setAccountCreated(true);
                
                nextStep(pathname, router, searchParams);
                createNewHubspotAccount(form_data);
              
            });
        } else {
          doAccountCreationError(
            "Error creating account. Please try again or contact us for assistance. Code: 101"
          );
          //error
          return false;
        }
      } catch (err) {
        setIsBusy(false);
        doAccountCreationError(
          "Error creating account. Please try again or contact us for assistance. Code: 103"
        );
        console.log(err); //error
        return false;
      }
     
  };

  const createNewHubspotAccount = async (form_data) => {
    if (flow === "instantoffer" || flow === "sell") {
      try {
        const payload = {
          lead_source: "InstantOffer",
          firstname: form_data.contact.first_name,
          lastname: form_data.contact.last_name,
          email: form_data.contact.email,
          phone: form_data.contact.mobile_phone_number,
        
        };

      

        fetch("/api/hubspot_api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer pat-na1-33cf6163-5250-4aa6-bb18-77804d1a2bc2",
          },
          body: JSON.stringify({
            properties: payload,
          }),
        })
          .then((response) => {
            
            // setIsBusy(false);
            return response.json();
          })
          .then((data) => {
              setAccountCreated(true);
              return true;
           
          });
      } catch (err) {
        doAccountCreationError(
          "Error creating account. Please try again or contact us for assistance. Code: 103"
        );
        console.log(err); //error
        // return false;
      }
    }
  };

  const createNewAccount = async (data) => {
    setIsBusy(true);
    createNewIDXAccount(data);
 
  };

  function loadCreateAPasswordPage(options) {
    false && console.log("loading  loadCreateAPasswordPage");
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={options.title || "Create a password to"}
        content={
          <FlowPasswordForm
            store_key={options.store_key || "contact"}
            callback={(contact_data) => {
              false && console.log(contact_data);
            }}
          />
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        callback={(data) => {
          // createNewAccount();
          // console.log("form_data_____________", form_data);
          nextStepValidate(pathname, router, searchParams, () =>
            createNewAccount(data)
          );
        }}
        skipCallback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }


  function parseStepFlowBranch(default_if_missing) {
 
    const tstep = searchParams.get("step");
    const tflow = searchParams.get("flow");
    const tbranch = searchParams.get("branch");
    false && console.log(`setting flow to ${tflow}`);
    if (tflow !== null) {
      setFlow(tflow);
    } else {
      if (default_if_missing) setFlow(undefined);
    }
    false && console.log(`setting step to ${tstep}`);
    if (tstep !== null) {
      setStep(parseInt(tstep));
    } else {
      if (default_if_missing) setStep(undefined);
    }
    false && console.log(`setting branch to ${tbranch}`);
    if (tbranch !== null) {
      setBranch(parseInt(tbranch));
    } else {
      if (default_if_missing) setBranch(undefined);
    }
  }

  function doFlowStep() {
    false && console.log(flow);
    false && console.log(step);
    false && console.log(branch);
    if (step === undefined && branch === undefined) {
      // set default Content Here
      loadChipsPage({ progress: "16%" });
    } else {
      if (step !== undefined) {
        // set other content here
        // const switch_string = `${flow}_${step}_${branch}`;
        let switch_string = `${flow}`;
        if (step !== undefined) switch_string += `_${step}`;
        if (branch !== undefined) switch_string += `_${branch}`;
        false && console.log(switch_string);
        switch (switch_string) {
          // SELL FLOWS
          case "sell_0": {
            loadAddressSellPage({
              progress: "33%",
              title: "What's the address of the home you're selling?",
            });
            break;
          }
          case "sell_1": {
            loadLookingToSellPage({ progress: "32%" });
            break;
          }
          case "sell_2": {
            loadRelationshipToHomePage({
              progress: "40%",
              relationship_items: ["Owner", "Agent"],
              tag: FORM_TAGS.sell_relationship,
            });
            break;
          }
          case "sell_3_0": {
            loadSignedSellerAgreementAgentPage({ progress: "50%", branch: 0, tag: FORM_TAGS.sell_owner });
            break;
          }
          case "sell_3_1": {
            loadAgentLookingForInstantOffer({
              progress: "50%",
              branch: 2,
              infobox:
                "<strong>*InstantOffer:</strong><br/>Get an instant, cash offer to buy your home. The fastest way and most trouble-free way to selling your home.",
            });
            break;
          }

          case "sell_3_8": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_4_0": {
            loadGotItHowCanWeHelpPage({
              tag: FORM_TAGS.sell_yagreement,
              progress: "60%",
              infobox:
                "<strong>*InstantOffer:</strong><br/>Get an instant, cash offer to buy your home. The fastest way and most trouble-free way to selling your home.",
            });
            break;
          }

          case "sell_4_1": {
            loadBestWayToReachYouPage({
              progress: "90%",
              branch: 1,
              copy: "Our advice and instant cash offers are always free.",
              tag: FORM_TAGS.sell_instant_contact,
            });
            break;
          }

          case "sell_4_2": {
            loadAddressSellPage({ progress: "60%", branch: 2, tag: "sell_instant" });
            break;
          }

          case "sell_4_3": {
            loadBestWayToReachYouPage({
              progress: "90%",
              branch: 1,
              title: "Interested in growing your business with HomeEasy Homes?",
              copy: "We work with agents in Rhode Island, Massachusetts, and Connecticut.",
              tag: FORM_TAGS.sell_agent_contact,
            });
            break;
          }

          case "sell_5_0": {
            loadAddressSellPage({ progress: "80%", tag: "sell_instant" });
            break;
          }

          case "sell_5_1": {
            loadBestWayToReachYouPage({
              progress: "90%",
              title: "Interested in selling your home with HomeEasy Homes?",
              copy: "Once your listing expires, we would love to work with you!",
            });
            break;
          }

          case "sell_5_2": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
              copy: "We will be reaching out shortly with our cash offer.",
            });
            break;
          }

          case "sell_5_3": {
            loadBestWayToReachYouPage({
              progress: "90%",
              copy: "We will be reaching out shortly with our InstantOffer.",
              tag: FORM_TAGS.sell_instant_contact,
            });
            break;
          }

          case "sell_5_4": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
              copy: "We will be reaching out shortly to talk to you about opportunities to grow your real estate business.",
            });
            break;
          }

          case "sell_6_0": {
            loadBestWayToReachYouPage({ progress: "90%", tag: FORM_TAGS.sell_instant_contact, });
            break;
          }

          case "sell_6_1": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_6_3": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_7_0": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_7_1": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_7_3": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_8_0": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_0_8": {
            loadAddressSellPage({
              progress: "33%",
              title: "What's the address of the home you're selling?",
            });
            break;
          }

          case "sell_1_8": {
            loadBestWayToReachYouPage({
              progress: "66%",
              copy: "We will be reaching out shortly with our InstantOffer",
              tag: FORM_TAGS.sell_instant_contact,
            });
            break;
          }

          case "sell_2_8": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
              copy: "We will be reaching out shortly with our cash offer.",
            });
            break;
          }

          case "sell_0_9": {
            loadAddressSellPage({
              progress: "32%",
              title: "What's the address of the home you're selling?",
            });
            break;
          }

          case "sell_1_9": {
            loadLookingToSellPage({ progress: "42%" });
            break;
          }

          case "sell_2_9": {
            loadAlsoNeedToBuy({ progress: "52%", branch: 9 });
            break;
          }

          case "sell_3_9": {
            loadAddressBuyPage({
              progress: "70%",
              title: "Where do you want to buy?",
            });
            break;
          }

          case "sell_4_9": {
            loadBestWayToReachYouPage({ progress: "80%", tag: FORM_TAGS.sell_instant_contact, });
            break;
          }

          case "sell_5_9": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "sell_6_9": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_3_10": {
            loadBestWayToReachYouPage({ progress: "90%", tag: FORM_TAGS.sell_instant_contact, });
            break;
          }

          case "sell_5_10": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_4_10": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "sell_0_11": {
            loadAddressSellPage({
              progress: "50%",
              title: "What's the address of the home you're selling?",
            });
            break;
          }

          case "sell_1_11": {
            loadLookingToSellPage({ progress: "60%" });
            break;
          }

          case "sell_2_11": {
            loadAddressBuyPage({
              progress: "70%",
              title: "Where do you want to buy?",
            });
            break;
          }

          case "sell_3_11": {
            loadBestWayToReachYouPage({ progress: "80%", tag: FORM_TAGS.sell_instant_contact, });
            break;
          }

          case "sell_4_11": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "sell_5_11": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          // BUY FLOWS
          case "buy_1": {
            loadAddressBuyPage({ progress: "32%" });
            break;
          }
          case "buy_2": {
            loadMotivatingToBuyPage({
              progress: "42%",
              list_items: [
                "First-time homebuyer",
                "Relocating due to job",
                "Want to upgrade from my current home",
                "Investment/second home",
              ],
              copy: " ",
            });
            break;
          }
          case "buy_3": {
            loadWhatWouldYouLikeToDoNextBuyPage({
              progress: "50%",
              next_step: (index) => {
               
                  nextStep(pathname, router, searchParams);
                
              },
            });
            break;
          }

          case "buy_4_1": {
            loadSignupFormPage({ progress: "60%", tag: FORM_TAGS.buy_contact_info, });
            break;
          }

          case "buy_4_2": {
            loadLearnMoreAboutHomeEasyHomesPage({ progress: "60%" });
            break;
          }

          case "buy_4_3": {
            loadSignupFormPage({
              progress: "60%",
              title: "You need advice, we can give it.",
              copy: "You will be connected with a HomeEasy Homes specialist.  No obligation, no pressure.",
            });
            break;
          }

          case "buy_4_4": {
            loadSignupFormPage({
              progress: "60%",
              title: "We will be reaching out to answer all of your questions.",
              copy: "You will be connected with a HomeEasy Homes specialist.  No obligation, no pressure.",
            });
            break;
          }

          case "buy_5_1": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "buy_5_2": {
            loadSignupFormPage({
              progress: "80%",
              title: "We will be reaching out to answer all of your questions.",
              copy: "You will be connected with a HomeEasy Homes specialist.  No obligation, no pressure.",
            });
            break;
          }

          case "buy_5_3": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "buy_5_4": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "buy_6_1": {
            loadWellBeInTouchPage({
              event_tag: "flow_buy_conv",
              progress: "100%",
            });
            break;
          }

          case "buy_6_2": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "buy_6_3": {
            loadWellBeInTouchPage({
              event_tag: "flow_buy_conv",
              progress: "100%",
            });
            break;
          }

          case "buy_6_4": {
            loadWellBeInTouchPage({
              event_tag: "flow_buy_conv",
              progress: "100%",
            });
            break;
          }

          case "buy_7_2": {
            loadWellBeInTouchPage({
              event_tag: "flow_buy_conv",
              progress: "100%",
            });
            break;
          }

          // SELL/BUY FLOWS
          case "sellbuy_1": {
            loadAddressSellPage({
              progress: "20%",
              title: "What's the address of the home you're selling?",
              copy: "Please enter address or city and state.",
            });
            break;
          }

          case "sellbuy_2": {
            loadLookingToSellPage({ progress: "30%" });
            break;
          }

          case "sellbuy_3": {
            loadAddressBuyPage({
              progress: "40%",
              title: "Where do you want to buy?",
              copy: "Enter a city, neighborhood, or address.",
            });
            break;
          }

          case "sellbuy_4": {
            loadSignedSellerAgreementAgentPage({ progress: "40%", branch: 0 });
            break;
          }

          case "sellbuy_5_0": {
            loadGotItHowCanWeHelpPage({
              progress: "50%",
              branch: 0,
              infobox:
                "<strong>*InstantOffer:</strong><br/>Get an instant, cash offer to buy your home. The fastest way and most trouble-free way to selling your home.",
            });
            break;
          }

          case "sellbuy_5_1": {
            loadBestWayToReachYouPage({ progress: "80%", branch: 1 });
            break;
          }

          case "sellbuy_6_0": {
            loadAddressSellPage({ progress: "80%" });
            break;
          }

          case "sellbuy_6_1": {
            loadBestWayToReachYouPage({
              progress: "80%",
              title: "Interested in selling your home with HomeEasy Homes?",
              copy: "Once your listing expires, we would love to work with you!",
            });
            break;
          }

          case "sellbuy_6_2": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "sellbuy_7_0": {
            loadBestWayToReachYouPage({
              progress: "85%",
              copy: "We will be reaching out shortly with our InstantOffer.",
            });
            break;
          }

          case "sellbuy_7_1": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "sellbuy_7_2": {
            loadWellBeInTouchPage({
              event_tag: "flow_sellbuy_conv",
              progress: "100%",
            });
            break;
          }

          case "sellbuy_8_0": {
            loadWellBeInTouchPage({ progress: "90%" });
            break;
          }

          case "sellbuy_8_1": {
            loadWellBeInTouchPage({
              event_tag: "flow_sellbuy_conv",
              progress: "100%",
            });
            break;
          }

          case "sellbuy_9_0": {
            loadWellBeInTouchPage({
              event_tag: "flow_sellbuy_conv",
              progress: "100%",
            });
            break;
          }

          // INSTANTOFFER FLOWS
          case "instantoffer_1": {
            loadAddressSellPage({
              progress: "25%",
              title: "What's the address of the home want to sell?",
              copy: "Please enter address, city, and state.",
            });
            break;
          }

          case "instantoffer_2": {
            loadRelationshipToHomePage({
              progress: "50%",
              relationship_items: ["Owner", "Agent"],
              tag: FORM_TAGS.instant_relationship
            });
            break;
          }

          case "instantoffer_3_0": {
            loadBestWayToReachYouPage({ progress: "75%", tag: FORM_TAGS.instant_contact });
            break;
          }

          case "instantoffer_5_0": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "instantoffer_5_1": {
            loadWellBeInTouchPage({
              event_tag: "flow_sell_conv",
              progress: "100%",
            });
            break;
          }

          case "instantoffer_3_1": {
            loadBestWayToReachYouPage({ progress: "75%", tag: FORM_TAGS.instant_contact });
            break;
          }

          case "instantoffer_4_0": {
            loadWellBeInTouchPage({
              event_tag: "flow_instantoffer_conv",
              progress: "100%",
            });
            break;
          }

          case "instantoffer_4_1": {
            loadWellBeInTouchPage({
              event_tag: "flow_instantoffer_conv",
              progress: "100%",
            });
            break;
          }

          // LISTINGFORONE FLOWS
          case "listingforone_1": {
            loadAddressSellPage({
              progress: "33%",
              title: "What's the address of the home you are selling?",
              copy: "Please enter address, city, and state.",
            });
            break;
          }

          case "listingforone_2": {
            loadBestWayToReachYouPage({ progress: "66%" });
            break;
          }

          case "listingforone_3": {
            loadWellBeInTouchPage({
              event_tag: "flow_listingforone_conv",
              progress: "100%",
              copy: "We will be reaching out shortly with our cash offer.",
            });
            break;
          }

          // AGENT FLOWS
          case "partner_1": {
            loadBestWayToReachYouPage({
              progress: "32%",
              title: "Let's get started!",
              copy: "Remember getting started is easy and obligation free!",
            });
            break;
          }
          case "partner_2": {
            loadProfessionalDetailsPage({ progress: "66%" });
            break;
          }
          case "partner_3": {
            loadWellBeInTouchPage({
              event_tag: "flow_partner_conv",
              progress: "100%",
              copy: "Thank you for your interest in HomeEasy Homes. One of our representatives will call you shortly to learn more about what you are looking for and to discuss options.",
            });
            break;
          }
        }
       
      }
    }
  }

  function doFlowStepDisplay() {
    setFooterNav(undefined);
    parseStepFlowBranch(true);
    doFlowStep();
  }

  const debouncedNavigation = useDebouncedCallback(
    // function
    (value) => {doFlowStepDisplay();
      
    },
    // delay in ms
    0
  );

  useEffect(() => {
    debouncedNavigation();

    window.addEventListener("popstate", (event) => {
      debouncedNavigation();
    });

    return () => {
      resetState();
      window.removeEventListener("popstate", (event) => {
        debouncedNavigation();
      });
    };
   
  }, []);

  useEffect(() => {
    debouncedNavigation();
    
  }, [searchParams]);

  useEffect(() => {
    if (!flow_loaded) {
      debouncedNavigation();
      
    }
    if((flow === "sell" && +step > 0) || (flow !== "sell" && +step > 1)) {
      if(JSON.stringify(form_data) === "{}") {
        router.push(`/get_started`);
      }
      return
    }
  }, [step, flow, branch]);

  useEffect(() => {
    if (account_created) {
      setTimeout(() => {
        setAccountCreated(false);
      }, 100);
      nextStep(pathname, router, searchParams);
    }
  }, [account_created]);



  return (
    <div className={styles["main"]}>
      <FlowHeader />
      <div className={`${styles["progress-container"]} centered-content`}>
       
      </div>
      <div className={`${styles["content-container"]} centered-content`}>
        {content}
        
      </div>

      <div className={styles["footer-container"]}>{footer_nav}</div>
    </div>
  );
}