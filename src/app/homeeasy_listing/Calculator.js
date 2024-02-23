"use client";
import IconPopover from "@/components/fluid/IconPopover";
import DuoInput from "@/components/fluid/DuoInput";
// import UnitInput from "@/components/fluid/UnitInput";


import { NumericFormat } from 'react-number-format';

import useGoogleTagManager from "@/hooks/useGoogleTagManager";

import styles from "./Calculator.module.scss";


const Calculator = ({}) => {

  return (
    <div className={`${styles["main-component"]}`}>
      <div className={`${styles["main-content-container"]}  centered-content2`}>
      <div className={`${styles["table_heading"]}`}>
            HomeEasy Homes listing fee and
            minimum commission by market.
              </div>
        <div className={`${styles["main-calculator-container"]}`}>
          <div className={`${styles["main-calculator-form-container"]}`}>
          <table>
      <thead>
        <tr>
          <th>Market</th>
          <th>Listing Fee</th>
          <th>Min. Commission</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Boston</td>
          <td>1%</td>
          <td>$6,000</td>
        </tr>
        <tr>
          <td>Connecticut</td>
          <td>1%</td>
          <td>$4,000</td>
        </tr>
        <tr>
          <td>Northern New England</td>
          <td>1%</td>
          <td>$4,000</td>
        </tr>
        <tr>
          <td>Rhode Island</td>
          <td>1%</td>
          <td>$4,000</td>
        </tr>
      </tbody>
    </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
