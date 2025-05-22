"use client"
import { useState, useEffect } from 'react';

// Hook
export default function useGoogleTagManager() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [dataLayer, setDataLayer] = useState(null);

    function gtmPush(options){
        if(options[0] === "callback"){
            if(dataLayer !== null){
                doEventClick(
                    {
                        event_name: options[1],
                        callback_function: options[2]
                    }
                );
            }else{
                (options[2])();
            }
        }
    }

	function doEventClick(options){
        
            if("event_name" in options){
                if("callback_function" in options) {
                    if (dataLayer){
                        let callbackExecuted = false;
                        dataLayer.push({
                            'event': options.event_name,
                            'eventCallback': ()=>{
                                callbackExecuted = true;
                                options.callback_function();
                            }
                        });
                        setTimeout(() => {
                            if (!callbackExecuted) {
                                options.callback_function();
                            }
                        }, 500); // Adjus
                    } else{
                        // Directly execute the callback if dataLayer is unavailable
                        options.callback_function();
                    }
                } else if("event_location_tab" in options){
                    dataLayer.push({
                        'event': options.event_name,
                        'eventCallback': ()=>{window.open(options.event_location_tab, "_blank").focus();}
                    });
                } else if("event_location" in options){
                    dataLayer.push({
                        'event': options.event_name,
                        'eventCallback': ()=>{window.document.location.href = options.event_location;}
                    });
                }else{
                    dataLayer.push({
                        'event': options.event_name,
                        'eventCallback': ()=>{}
                    });
                }
    
            }
    
        }
            

    useEffect(() => {
        if (typeof window.dataLayer !== "undefined") {
            // console.log("loading datalayer");
        //   window.dataLayer.push({
        //     event: "pageview",
        //     page: url,
        //   })
        setDataLayer(window.dataLayer);
        }else{
            setDataLayer(null);
        }
    }, []); // Empty array ensures that effect is only run on mount
    
    useEffect(() => {
        if (dataLayer !== null) {
            // console.log("loading datalayer");
        }
    }, [dataLayer]);

    return [dataLayer, doEventClick, gtmPush];
}
