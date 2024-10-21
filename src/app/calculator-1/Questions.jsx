import { useState } from 'react';
import styles from './Questions.module.scss';
import Net_Proceed from '../calculator_proceeds/Calculator';
import Saving from '../calculator_savings/Calculator';
import Estimated from '../calculator_monthly_payments/Calculator';
import Net_Proceed_header from '../calculator_proceeds/Header';
import Saving_header from '../calculator_savings/Header';
import Estimated_header from '../calculator_monthly_payments/Header';

const Questions = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabNames = ["Net Proceeds", "HomeEasy Savings", "Estimated Monthly Payments"];

    const tabComponents = [
        <Net_Proceed key="net_proceed" />,
        <Saving key="saving" />,
        <Estimated key="estimated" />,
    ];

    const tabHeaders = [
        <Net_Proceed_header key="net_proceed_header" />,
        <Saving_header key="saving_header" />,
        <Estimated_header key="estimated_header" />,
    ];

    return (
        <>
            <div>
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
