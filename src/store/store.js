"use client"

// import { useRouter, useSearchParams } from "next/navigation";
import { devtools } from 'zustand/middleware'
import { create } from 'zustand'

function updateRoute(pathname, router, searchParams) {
    const tflow = useFlowGetStartedStore.getState().flow;
    const tstep = useFlowGetStartedStore.getState().step;
    const tbranch = useFlowGetStartedStore.getState().branch;
    const tquery = [];
    if(tflow !== undefined){
        tquery.push(`flow=${tflow}`);
    }
    if(tstep !== undefined){
        tquery.push(`step=${tstep}`);
    }
    if(tbranch !== undefined){
        tquery.push(`branch=${tbranch}`);
    }
    // false && console.log(tquery);
    // false && console.log(typeof(pathname));
    // false && console.log(searchParams);
    const query_string = tquery.join("&");
    let turl = pathname;
    if(query_string !== ""){
        turl = `${pathname}?${query_string}`;
    }
    router.push(turl);
    // router.push({
    //     pathname: "/get_started",
    //     query: tquery,
    // });
    // if(tflow !== undefined){
    //     searchParams.set('flow', tflow);
    // }
    // if(tstep !== undefined){
    //     searchParams.set('step', tstep);
    // }
    // if(tbranch !== undefined){
    //     searchParams.set('branch', tbranch);
    // }

}

const initialState = {
    flow: "buy",
    step: undefined,
    branch: undefined,
    chip: undefined,
    percentage: "0%",
    is_busy: false,
    // title: undefined,
    // copy: undefined,
    content: undefined,
    footer_nav: undefined,
    form_data: {},
    payment_data: {},
    form_needs_validation: false,
    form_validated: false,
    form_validation_function: undefined,
    google_api_loaded: false,
    places_suggestions: [],
    new_address: false,
    account_creation_error: undefined,
    account_created: false,
    selected_questions_tab_index: 0,
};

export const useFlowGetStartedStore = create(devtools((set, get) => ({
    ...initialState,
    setFlow: (value) => set({ flow: value }),
    setStep: (value) => set({ step: value }),
    setBranch: (value) => set({ branch: value }),
    setChip: (value) => set({ chip: value }),
    setPercentage: (value) => set({ percentage: value }),
    setIsBusy: (value) => set({ is_busy: value }),
    // setTitle: (value) => set({ title: value }),
    // setCopy: (value) => set({ copy: value }),
    setContent: (value) => set({ content: value }),
    setFooterNav: (value) => set({ footer_nav: value }),
    setFormData: (value) => set({ form_data: value }),
    setPaymentData: (value) => set({ payment_data: value }),
    setFormValidated: (value) => set({ form_validated: value }),
    setFormNeedsValidation: (value) => set({ form_needs_validation: value }),
    setFormValidationFunction: (value) => set({ form_validation_function: value }),
    setGoogleApiLoaded: (value) => set({ google_api_loaded: value }),
    setPlacesSuggestions: (value) => set({ places_suggestions: value }),
    setNewAddress: (value) => set({ new_address: value }),
    setAccountCreationError: (value) => set({ account_creation_error: value }),
    setAccountCreated: (value) => set({ account_created: value }),
    setSelectedQuestionsTabIndex: (value) => set({ selected_questions_tab_index: value }),
    reset: () => set(initialState),
    nextStepValidate: (pathname, router, searchParams, valid_callback) => {
        get().setFormNeedsValidation(true);
        get().setFormValidationFunction(
            (callback) => {
                return new Promise((resolve, reject) => {
                    get().setFormNeedsValidation(false);
                    const tvalid = get().form_validated;
                    if(tvalid){
                        console.log(callback);
                        if(callback){
                            callback();
                        }        
                        console.log(callback);
                        if(valid_callback){
                            valid_callback();
                            resolve();  
                        }else{
                            get().nextStep(pathname, router, searchParams);
                            resolve();  
                        }
                    }else{
                        resolve();
                    }
    
                })
    
            }

        );
    },
    nextStep: (pathname, router, searchParams) => {
        // increment step
        // false && console.log(`next_step: ${get().step}`);
        set((state) => ({ step: (state.step !== undefined) ? state.step + 1 : 1 }));
        // change route
        updateRoute(pathname, router, searchParams);
    },
    // nextStep: () => set((state) => ({ step: (state.step !== undefined) ? state.step + 1 : 0 })),
    prevStep: () => set((state) => ({ step: state.step - 1 })),
})));

//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));




// import create from 'zustand';
// import { persist } from 'zustand/middleware';

// const useStore = create(
//     persist(
//         (set, get) => ({
//             count: 0,
//             increment: () => set(state => ({ count: state.count + 1 })),
//             decrement: () => set(state => ({ count: state.count - 1 })),
//             reset: () => set({ count: 0 })
//         })
//     )
// );


export default useFlowGetStartedStore;