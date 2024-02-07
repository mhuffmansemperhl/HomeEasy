"use client"
import { useRouter } from "next/navigation";

import styles from './styles/FlowListItems.module.scss';
import useFlowGetStartedStore from "@/store/store.js";
import { produce } from "immer";

const FlowListItems = ({list_items, nav_items, store_key, checkbox_mode, callback}) => {
    // const router = useRouter();
    const form_data = useFlowGetStartedStore(state => state.form_data);
    const setFormData = useFlowGetStartedStore(state => state.setFormData);
    const nextStep = useFlowGetStartedStore(state => state.nextStep);

    function doAction(index){
        if(checkbox_mode === true){
false && console.log("checkbox mode");
        }else{
            false && console.log("...doing action");
            false && console.log(index);
            false && console.log(list_items[index]);
            false && console.log(store_key);

            if(store_key){
                setFormData(produce(form_data, draft => {
                    draft[store_key] = list_items[index];
                }));
            }
            // false && console.log(newFormData);

            // false && console.log("...doing navigation");
            if(callback){
                callback(index);
            }
            // nextStep(nav_items.pathname, nav_items.router, nav_items.searchParams);

            // callback(index);
        }
    }

    return (
        <div className={`${styles['main-component']}`}>
            <div className={`${styles['main-content-container']}  centered-content`} >

            <div className={`${styles['list-items-container']}`}>
                {list_items.map((item, index) => (
                    <div onClick={()=>{doAction(index);}}  className={`${styles['list-item']} ${form_data[store_key] === item ? styles["selected"] : "" }`} key={index}>
                        <div className={`${styles['list-item-title']} ${form_data[store_key] === item ? styles["selected"] : "" }`}>
                            {item}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
};

export default FlowListItems;
