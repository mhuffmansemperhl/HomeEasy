"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import useFlowGetStartedStore from "@/store/store.js";
// import Header from './Header';
// import Questions from "./Questions";
import ButtonFooter from "@/components/ButtonFooter";
import FlowHeader from "@/components/FlowHeader";
// import FlowProgress from "@/components/FlowProgress";
import FlowContent from "@/components/FlowContent";
import FlowChips from "@/components/FlowChips";
import FlowAddressSell from "@/components/FlowAddressSell";
import FlowListItems from "@/components/FlowListItems";
import FlowContactForm from "@/components/FlowContactForm";
import FlowProfessionalDetailsForm from "@/components/FlowProfessionalDetailsForm";
import FlowPasswordForm from "@/components/FlowPasswordForm";
import FlowSignupForm from "@/components/FlowSignupForm";
import styles from "./page.module.scss";
import { set } from "immutable";
import { useDebouncedCallback } from "use-debounce";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

export default function Question() {
  const pathname = usePathname();
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();
  const searchParams = useSearchParams();
  const nav_items = {
    pathname: pathname,
    router: router,
    searchParams: searchParams,
  };
  // const [barPercent, setBarPercent] = useState("20%");

  // false && console.log(useFlowGetStartedStore);
  const [flow_loaded, setFlowLoaded] = useState(false);

  const flow = useFlowGetStartedStore((state) => state.flow);
  const setFlow = useFlowGetStartedStore((state) => state.setFlow);

  const step = useFlowGetStartedStore((state) => state.step);
  const setStep = useFlowGetStartedStore((state) => state.setStep);

  const branch = useFlowGetStartedStore((state) => state.branch);
  const setBranch = useFlowGetStartedStore((state) => state.setBranch);

  const percentage = useFlowGetStartedStore((state) => state.percentage);
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

  const is_busy = useFlowGetStartedStore((state) => state.is_busy);
  const setIsBusy = useFlowGetStartedStore((state) => state.setIsBusy);

  const account_creation_error = useFlowGetStartedStore(
    (state) => state.account_creation_error
  );
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

  // function selectChip(chip_index){
  //   setFlow(["sell", "buy", "sellbuy"][chip_index]);
  //   nextStep(pathname, router, searchParams);
  //   // setBranch(0);
  //   // false && console.log(index);

  // }

  //  {/* <ButtonFooter
  // className={styles['allways-bottom']}
  // button_info={{label: "Next"}}
  // /> */}
  // <ButtonFooter
  // className={styles['allways-bottom']}
  // button_info={{label: "Submit"}}
  // />

  function loadChipsPage(options) {
    true && console.log("loading chips");
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        copy="The easiest way to sell or buy your home starts here."
        subcopytitle="I want to:"
        content={
          <FlowChips
            nav_items={nav_items}
            // pathname={pathname}
            // router={router}
            // searchParams={searchParams}
            // callback={(index) => {
            //   selectChip(index);
            // }}
            // selectedChip={flow}
          />
        }
      />
    );
  }

  function loadAddressSellPage(options) {
    false && console.log("loading address sell page");
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
              false && console.log(address_data);
              if ("branch" in options) {
                false && console.log("incrementing branch");
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
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadAddressBuyPage(options) {
    false && console.log("loading loadAddressBuyPage");
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={
          options.title || "What’s the address of the home you want to buy?"
        }
        copy={options.copy || "Enter a city, neighborhood, or address."}
        content={
          <FlowAddressSell
            store_key={options.store_key || "buy_address"}
            callback={(address_data) => {
              false && console.log(address_data);
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
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadSignupFormPage(options) {
    false && console.log("loading loadSignupFormPage");
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
        label={"Next"}
        callback={(data) => {
          // nextStepValidate(pathname, router, searchParams);
          nextStepValidate(pathname, router, searchParams, () =>
            createNewAccount(data)
          );
        }}
      />
    );
  }

  function loadLookingToSellPage(options) {
    false && console.log("loading looking to sale page");
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
              console.log(
                pathname,
                router,
                searchParams,
                "=======[sell_1]======"
              );
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
        store_key={options.store_key || "looking_to_sell"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadLearnMoreAboutHomeEasyHomesPage(options) {
    false && console.log("loading loadLearnMoreAboutHomeEasyHomesPage");
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title="What would you like to learn more about?"
        copy="We have a whole team of experts ready to help!"
        content={
          <FlowListItems
            store_key={options.store_key || "learn_more_about_heh"}
            list_items={learn_more_about_heh_list_items}
            callback={(index) => {
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
    false && console.log("loading loadMotivatingToBuyPage");
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
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        store_key={options.store_key || "motivating_to_buy"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadWhatWouldYouLikeToDoNextBuyPage(options) {
    false && console.log("loading loadWhatWouldYouLikeToDoNextBuyPage");
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
            callback={(index) => {
              if ("branch" in options) {
                setBranch(options.branch + index);
              } else {
                setBranch(index);
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
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        store_key={options.store_key || "what_would_you_like_to_do_next_buy"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadGotItHowCanWeHelpPage(options) {
    false && console.log("loading loadGotItHowCanWeHelpPage");
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
    false && console.log("loading  loadRelationshipToHomePage");
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
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        store_key={options.store_key || "signed_seller_agreement_agent"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadAgentLookingForInstantOffer(options) {
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
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Next"}
        store_key={options.store_key || "also_need_to_buy"}
        callback={() => {
          nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  function loadSorryOnlyHomeownersPage(options) {
    false && console.log("loading  loadSorryOnlyHomeownersPage");

    false && console.log(form_data);

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
    if (tag) {
      doEventClick({ event_name: tag });
    }
  }

  function loadWellBeInTouchPage(options) {
    false && console.log("loading  loadWellBeInTouchPage");
    fireEventTag(options.event_tag);
    setPercentage(options.progress || "32%");
    setContent(
      <FlowContent
        title={options.title || "We’ll be in touch!"}
        copy={
          options.copy ||
          "One of our representatives will call you shortly to learn more about what you are looking for and to discuss options."
        }
      />
    );
    setFooterNav(
      <ButtonFooter
        className={styles["allways-bottom"]}
        label={"Back to our homepage"}
        callback={() => {
          // router.push("/");
          // if(options.event_tag){
          //   gtmPush(["callback", options.event_tag, ()=>{router.push("/");}]);
          // }else{
          window.location.href = "/";
          // }
          // nextStep(pathname, router, searchParams);
        }}
      />
    );
  }

  const loadBestWayToReachYouPage = (options) => {
    false && console.log("loading  loadBestWayToReachYouPag");
    false && console.log(`precall branch is${branch}`);
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
          console.log("this is form_data________", data);
          // nextStepValidate(pathname, router, searchParams);
          nextStepValidate(pathname, router, searchParams, () =>
            createNewAccount(data)
          );
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
    console.log("creating new account");
    // if (!account_created) {
      try {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' }
        // };
        // const urlparams = new URLSearchParams({
        //   firstName: 'Mike',
        //   lastName: 'Huffman',
        //   email: 'mhuffman@semperhl.com'
        // });

        const payload = {};
        if ("contact" in form_data) {
          console.log(form_data, "+++++++ NewIDXAccount +++++++");
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
              console.log("idx_api response.status is -------", response.status);
              console.log("this is the idx_api response -------", response);
              setIsBusy(false);
              return response.json();
            })
            .then((data) => {
              console.log("data_body********", data.body);
              const jdata = data.body;
              // if (jdata.status) {
                console.log("idx_api jdata.status is ------", jdata.status);
                setAccountCreated(true);
                // return true;
                nextStep(pathname, router, searchParams);
                createNewHubspotAccount(form_data);
              // } else {
              //   doAccountCreationError(
              //     "Error creating account. Please try again or contact us for assistance. Code: 102"
              //   );
              //   return false;
              //   // console.log(jdata.message); //error
              // }
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
      // set busy flag
      // setIsBusy(true);
    // }
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
          // "milestone_stage": ""
        };

        // if("contact" in form_data){
        //   if("first_name" in form_data.contact){
        //     payload.firstname = form_data.contact.first_name;
        //   }
        //   if("last_name" in form_data.contact){
        //     payload.lastname = form_data.contact.last_name;
        //   }
        //   if("email" in form_data.contact){
        //     payload.email = form_data.contact.email;
        //   }
        //   if("mobile_phone_number" in form_data.contact){
        //     payload.phone = form_data.contact.mobile_phone_number;
        //   }
        //   // if("mobile_phone_number" in form_data.contact){
        //   //   payload.phone = form_data.contact.mobile_phone_number;
        //   // }
        // };

        //   if("sell_address" in form_data){
        //     if("address_components" in form_data['sell_address']){
        //       // if("first_name" in form_data.contact){
        //       //   payload.firstname = form_data.contact.first_name;
        //       // }
        //       payload.property_address = form_data['sell_address']['address_components']['address'];
        // //       "property_address": "123 Test St.",
        // //       "property_city": "Providence",
        // //       "property_state": "RI",
        // //       "property_zip_code": "02860",

        //     }
        //   };

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
            console.log(response.status);
            console.log(response);
            // setIsBusy(false);
            return response.json();
          })
          .then((data) => {
            const jdata = data.body;
            // if (jdata.status) {
              console.log("hubspot_api jdata.status is -----------", jdata.status);
              setAccountCreated(true);
              return true;
              // nextStep(pathname, router, searchParams);
            // } else {
            //   doAccountCreationError(
            //     "Error creating account. Please try again or contact us for assistance. Code: 102"
            //   );
            //   // return false;
            //   // console.log(jdata.message); //error
            // }
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
    console.log("form_data___________", data);
    createNewIDXAccount(data);
    // createNewHubspotAccount();
    // const idx_account_created = await createNewIDXAccount();
    // if(idx_account_created){
    //   const hubspot_account_created = createNewHubspotAccount();
    //   if(hubspot_account_created){
    //     setIsBusy(false);
    //   }else{
    //     setIsBusy(false);
    //   }
    // }else{
    //   setIsBusy(false);
    // }
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

  // const scrollToTop = () => window.scrollTo(0, 0);

  // useEffect(() => {
  //   // false && console.log("scrolling to top");
  //   // scrollToTop();
  //   setFooterNav(undefined);
  //   // false && console.log(searchParams);

  //   // false && console.log(tflow);
  //   // false && console.log(tstep);
  //   // false && console.log(tbranch);

  //       // case "sell_4_2": {
  //       //   loadAgentLookingForInstantOffer({"progress": "60%"});
  //       //   break;
  //       // }

  //       // case "sell_4_2": {
  //       //   loadAgentLookingForInstantOffer({"progress": "60%"});
  //       //   break;
  //       // }

  //       // case "sell_5_0": {
  //       //   loadAddressSellPage({"progress": "70%"});
  //       //   break;
  //       // }

  //       // case "sell_6_0": {
  //       //   loadBestWayToReachYouPage({"progress": "90%"});
  //       //   break;
  //       // }

  //       // case "sell_7_0": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "sell_5_1": {
  //       //   loadBestWayToReachYouPage({"progress": "90%", "title": "Interested in selling your home with HomeEasy Homes?", "copy": "Once your listing agreement expires, we’d love to hear from you."});
  //       //   break;
  //       // }
  //       // case "sell_6_1": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "sell_3_1": {
  //       //   loadAgentLookingForInstantOffer({"progress": "50%"});
  //       //   break;
  //       // }

  //       // // SELL FLOWS
  //       // case "sell_1_null": {
  //       //   loadAddressSellPage({"progress": "32%"});
  //       //   break;
  //       // }
  //       // case "sell_2_null": {
  //       //   loadLookingToSellPage({"progress": "40%"});
  //       //   break;
  //       // }
  //       // case "sell_3_null": {
  //       //   loadRelationshipToHomePage({"progress": "50%"});
  //       //   break;
  //       // }

  //       // case "sell_4_0": {
  //       //   loadSignedSellerAgreementAgentPage({"branch": 3, "progress": "60%"});
  //       //   break;
  //       // }

  //       // case "sell_4_1": {
  //       //   loadSorryOnlyHomeownersPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "sell_4_2": {
  //       //   loadSignedSellerAgreementAgentPage({"branch": 5, "progress": "50%"});
  //       //   break;
  //       // }

  //       // case "sell_5_3": {
  //       //   loadSorryOnlyHomeownersPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "sell_5_4": {
  //       //   loadBestWayToReachYouPage({"progress": "70%"});
  //       //   break;
  //       // }

  //       // case "sell_6_4": {
  //       //   loadCreateAPasswordPage({"progress": "90%"});
  //       //   break;
  //       // }

  //       // case "sell_7_4": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "sell_5_5": {
  //       //   loadSorryOnlyHomeownersPage({"progress": "100%"});
  //       //   break;
  //       // }
  //       // case "sell_5_6": {
  //       //   loadBestWayToReachYouPage({"progress": "70%"});
  //       //   break;
  //       // }
  //       // case "sell_6_6": {
  //       //   loadCreateAPasswordPage({"progress": "90%"});
  //       //   break;
  //       // }
  //       // case "sell_7_6": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // // BUY FLOWS
  //       // case "buy_1_null": {
  //       //   loadAddressBuyPage({"progress": "32%"});
  //       //   break;
  //       // }
  //       // case "buy_2_null": {
  //       //   loadMotivatingToBuyPage({"progress": "50%"});
  //       //   break;
  //       // }

  //       // case "buy_3_null": {
  //       //   loadWhatWouldYouLikeToDoNextBuyPage({"progress": "60%"});
  //       //   break;
  //       // }

  //       // case "buy_4_0": {
  //       //   loadSearchAndBrowseHomesPage();
  //       //   break;
  //       // }

  //       // case "buy_4_1": {
  //       //   loadSignupFormPage({"progress": "90%"});
  //       //   break;
  //       // }
  //       // case "buy_5_1": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "buy_4_2": {
  //       //   loadLearnMoreAboutHomeEasyHomesPage({"progress": "80%"});
  //       //   break;
  //       // }

  //       // case "buy_5_2": {
  //       //   loadSignupFormPage({
  //       //     "progress": "90%",
  //       //     "title": "We will be reaching out to answer all of your questions.",
  //       //     // "copy": "You will be connected with a HomeEasy Homes specialist.  No obligation, no pressure.",
  //       //   });
  //       //   break;
  //       // }

  //       // case "buy_6_2": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "buy_4_3": {
  //       //   loadSignupFormPage({
  //       //     "progress": "90%",
  //       //     "title": "You need advice, we can give it.",
  //       //   });
  //       //   break;
  //       // }

  //       // case "buy_5_3": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "buy_4_4": {
  //       //   loadSignupFormPage({
  //       //     "progress": "90%",
  //       //     "title": "We will be reaching out to answer all of your questions.",
  //       //     // "copy": "You will be connected with a HomeEasy Homes specialist.  No obligation, no pressure.",
  //       //   });
  //       //   break;
  //       // }

  //       // case "buy_5_4": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // // SELL/BUY FLOWS
  //       // case "sellbuy_1_null": {
  //       //   loadAddressSellPage({"progress": "32%"});
  //       //   break;
  //       // }

  //       // case "sellbuy_2_null": {
  //       //   loadLookingToSellPage({"progress": "48%"});
  //       //   break;
  //       // }

  //       // case "sellbuy_3_null": {
  //       //   loadAddressBuyPage({"progress": "64%"});
  //       //   break;
  //       // }

  //       // case "sellbuy_4_null": {
  //       //   loadSignedSellerAgreementAgentPage({"branch": 3, "progress": "90%"});
  //       //   break;
  //       // }

  //       // case "sellbuy_5_3": {
  //       //   loadSorryOnlyHomeownersPage({"progress": "100%"});
  //       //   break;
  //       // }

  //       // case "sellbuy_5_4": {
  //       //   loadBestWayToReachYouPage({"progress": "90%"});
  //       //   break;
  //       // }
  //       // case "sellbuy_6_4": {
  //       //   loadWellBeInTouchPage({"progress": "100%"});
  //       //   break;
  //       // }

  //     }
  //   }

  //   }
  // }, [searchParams]);

  function parseStepFlowBranch(default_if_missing) {
    // for(let key in searchParams.keys()){
    //   false && console.log(`${key} = ${searchParams.get(key)}`);
    // }
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
          case "sell_1": {
            loadLookingToSellPage({ progress: "32%" });
            break;
          }
          case "sell_2": {
            loadRelationshipToHomePage({
              progress: "40%",
              relationship_items: ["Owner", "Agent"],
            });
            break;
          }
          case "sell_3_0": {
            loadSignedSellerAgreementAgentPage({ progress: "50%", branch: 0 });
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
            });
            break;
          }

          case "sell_4_2": {
            loadAddressSellPage({ progress: "60%", branch: 2 });
            break;
          }

          case "sell_4_3": {
            loadBestWayToReachYouPage({
              progress: "90%",
              branch: 1,
              title: "Interested in growing your business with HomeEasy Homes?",
              copy: "We work with agents in Rhode Island, Massachusetts, and Connecticut.",
            });
            break;
          }

          case "sell_5_0": {
            loadAddressSellPage({ progress: "80%" });
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
            loadBestWayToReachYouPage({ progress: "90%" });
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
            loadBestWayToReachYouPage({ progress: "80%" });
            break;
          }

          case "sell_5_9": {
            loadCreateAPasswordPage({ progress: "90%" });
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
            loadBestWayToReachYouPage({ progress: "90%" });
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
            loadBestWayToReachYouPage({ progress: "80%" });
            break;
          }

          case "sell_4_11": {
            loadCreateAPasswordPage({ progress: "90%" });
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
                if (index === 0) {
                  const turl =
                    "https://homeeasyhomes.idxbroker.com/idx/search/advanced?&a_propStatus%5B%5D=Active&a_propStatus%5B%5D=Active+Under+Contract&a_propStatus%5B%5D=Pending&srt=newest";
                  window.open(turl, "_blank");
                } else {
                  nextStep(pathname, router, searchParams);
                }
              },
            });
            break;
          }

          case "buy_4_1": {
            loadSignupFormPage({ progress: "60%" });
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
            loadCreateAPasswordPage({ progress: "90%" });
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
            loadCreateAPasswordPage({ progress: "90%" });
            break;
          }

          case "buy_5_4": {
            loadCreateAPasswordPage({ progress: "90%" });
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
            loadCreateAPasswordPage({ progress: "90%" });
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
            loadCreateAPasswordPage({ progress: "90%" });
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
            loadCreateAPasswordPage({ progress: "90%" });
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
            loadCreateAPasswordPage({ progress: "90%" });
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
            });
            break;
          }

          case "instantoffer_3_0": {
            loadBestWayToReachYouPage({ progress: "75%" });
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
            loadBestWayToReachYouPage({ progress: "75%" });
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
        // false && console.log(setFlowLoaded);
        // setFlowLoaded(true);
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
    (value) => {
      true && console.log("... doing debounced navigation");
      true && console.log(`value is ${value}`);
      doFlowStepDisplay();
      // setFooterNav(undefined);
      // parseStepFlowBranch(true);
      // doFlowStep();
    },
    // delay in ms
    0
  );

  useEffect(() => {
    true && console.log("page loaded");
    debouncedNavigation();

    window.addEventListener("popstate", (event) => {
      debouncedNavigation();
      // false && console.log(window.location.href);
      // false && console.log("popstate");
    });

    // setFooterNav(undefined);
    // parseStepFlowBranch(true);
    // doFlowStep();
  }, []);

  useEffect(() => {
    true && console.log("router update");
    debouncedNavigation();
    // setFooterNav(undefined);
    // parseStepFlowBranch(false);
    // doFlowStep();
  }, [searchParams]);

  useEffect(() => {
    if (!flow_loaded) {
      // setFlowLoaded(true);
      false && console.log("step, flow, branch update");
      debouncedNavigation();
      // false && console.log(flow);
      // false && console.log(step);
      // false && console.log(branch);
      // doFlowStep();
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

  // useEffect(() => {
  //   // for (const key of searchParams.keys()) {
  //   //   false && console.log(key);
  //   // }

  //   // const tstep = searchParams.get('step');
  //   // const tflow = searchParams.get('flow');
  //   // const tbranch = searchParams.get('branch');
  //   // if(tflow !== null) {
  //   //   setFlow(tflow);
  //   // }
  //   // if(tstep !== null) {
  //   //   setStep(tstep);
  //   // }
  //   // if(tbranch !== null) {
  //   //   setBranch(parseInt(tbranch));
  //   // }

  //   // setPercentage("20%");
  //   // setStep(0);
  //   // nextStep();
  //   // false && console.log(tstep);
  //   // false && console.log(tflow);
  //   // false && console.log(tbranch);

  //   // false && console.log(flow);
  //   // false && console.log(step);
  //   // false && console.log(branch);
  //   // setTimeout(() => {
  //   //   // router.push({
  //   //       // pathname: "/get_started",
  //   //   // });
  //   //   // false && console.log(step);
  //   // }, 3000);

  //   // false && console.log(search);
  //   // setTimeout(() => {
  //   //   router.push(`/get_started?flow=2&step=2`);
  //   // }, 5000);
  //     // setInterval(() => {
  //     //     // setBarPercent("23%");
  //     //     setBarPercent(`${Math.floor(Math.random() * 100) + 1}%`);
  //     // }, 5000);
  // }, []);

  useEffect(() => {
    console.log("============hello=========", form_data);
  }, [form_data]);

  return (
    <div className={styles["main"]}>
      <FlowHeader />
      <div className={`${styles["progress-container"]} centered-content`}>
        {/* <FlowProgress
          visualParts={[
            {
              percentage: percentage,
              color: "#D30200",
            },
          ]}
        /> */}
      </div>
      <div className={`${styles["content-container"]} centered-content`}>
        {content}
        {/* <FlowContent
        title="What’s the address of the home you want to sell?"
        copy="Enter a city, neighborhood, or address."
        content={<FlowAddressSell />}
        /> */}

         {/* <FlowContent
        title="When are you looking to sell?"
        copy="Your timeline helps us understand how we can help you get ready to sell your home"
        content={<FlowListItems
          list_items={list_items}
          callback={(index) => {
            false && console.log(index);
          }}
        />}
        />  */}

        {/* <FlowContent
          title={"What’s the best way to reach you?"}
          copy={"Our advice is always free."}
          content={<FlowContactForm 
            callback={(contact_data) => {
              false && console.log(contact_data);
            }}
          
          />}
        /> */}
{/* 
         <FlowContent
          title={"Create a password to"}
          content={<FlowPasswordForm 
            callback={(contact_data) => {
              false && console.log(contact_data);
            }}
          
          />}
        />  */}

        {/* <FlowContent
            // title={`${flow} - ${step} - ${branch}`}
            title={"Let’s start with the basics!"}
            copy={"You will be connected with a HomeEasy Homes specialist.  No obligation, no pressure."}
            content={<FlowSignupForm 
              callback={(contact_data) => {
                false && console.log(contact_data);
              }}
            
            />}
          /> */}
      </div>

      <div className={styles["footer-container"]}>{footer_nav}</div>
    </div>
  );
}