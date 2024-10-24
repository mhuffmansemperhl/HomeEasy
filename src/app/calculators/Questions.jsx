import { useState } from 'react';
import styles from './Questions.module.scss';
import Net_Proceed from '../calculator_proceeds/Calculator'; // Import your custom component files
import Saving from '../calculator_savings/Calculator'; // Import your custom component files
import Estimated from '../calculator_monthly_payments/Calculator'; // Import your custom component files

import Net_Proceed_header from '../calculator_proceeds/Header'; // Import your custom component files
import Saving_header from '../calculator_savings/Header'; // Import your custom component files
import Estimated_header from '../calculator_monthly_payments/Header'; // Import your custom component files

const Questions = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabNames = ["Net Proceeds", "HomeEasy Savings", "Estimated Monthly Payments"];

    const tabComponents = [
        <Net_Proceed key={"Net_Proceed_Component"} />,
        <Saving key={"Saving_Component"} />,
        <Estimated key={"Estimated_Component"} />,
    ];

    const tabHeaders = [
        <Net_Proceed_header key={"Net_Proceed_header"} />,
        <Saving_header key={"Saving_header"} />,
        <Estimated_header key={"Estimated_header"} />,
    ];

    return (
        <>
        <div > 
        {tabHeaders[selectedTab]}
        </div>
          
            <div className={styles['main-component']}>
                <div className={`${styles['main-component-content-container']} centered-content`}>
                    <div className={styles['main-component-tabs-container']}>
                        {tabNames.map((name, index) => (
                            <div key={index} onClick={() => setSelectedTab(index)} className={selectedTab === index ? styles['main-component-tab-selected'] : styles['main-component-tab']}>
                                {name}
                            </div>
                        ))}
                    </div>
                    <div className={styles['main-component-question-container']}>
                        {tabComponents[selectedTab]}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Questions;
