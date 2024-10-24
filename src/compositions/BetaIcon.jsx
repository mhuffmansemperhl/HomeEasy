import React from 'react'
import styles from "./BetaIcon.module.scss";

const BetaIcon = ({imgSx, containerSx, popupSx, showPopup = true}) => {
  return (
    <div style={{...containerSx}} className={styles["beta-content-callout-item"]}>
      <img src="/img/beta.svg" alt="beta" style={{...imgSx}}  />
      {showPopup && (
        <div
        style={{...popupSx, zIndex: "100"}}
        className={
          styles["beta-content-callout-item-popover"]
        }
      >
        1% Listings is currently in beta and available only in select area codes.<sup>2</sup>
      </div>
      )}
    </div>
  )
}

export default BetaIcon