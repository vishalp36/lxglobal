import React from "react";
import { getExtraClasses } from "../../utils/common";
import { Link } from "react-router-dom";

import Badge from "../badge";
import TimeIcon from "./images/time.svg";
import Cycle from "./images/cycle.svg";
import Pin from "./images/pin.svg";
import styles from "./styles.scss";

export default function StoreCard(props) {
  const {
    children,
    className,
    title,
    value1,
    value2,
    amount,
    city,
    time,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <div className={`${styles["store-card"]} ${extraClasses}`}>
        <div className={`${styles["store-card-link"]}`}>
            <div>
                <div className={`${styles["store-info"]}`}>
                    <h3 className={`${styles.title}`}>{title}</h3>
                    <div className={`${styles["tag-section"]}`}>
                        <span className={`${styles.inline}`}>{value1}</span>
                        <span className={`${styles.inline}`}>{value2}</span>
                    </div>
                </div>
            </div>
            <div className={`${styles["bottom-section"]}`}>
                <div className={`${styles.inline} ${styles["light-dot"]}`}>
                    <img
                        src={Pin}
                        alt="Pin"
                        className={`${styles["sm-icon-20"]}`}
                    />
                    <span className={`${styles["light-text"]}`}>{city}</span>
                </div>
                <div className={`${styles.inline} ${styles["light-dot"]}`}>
                    <img
                        src={Cycle}
                        alt="Cycle"
                        className={`${styles["sm-icon-20"]}`}
                    />
                    <span className={`${styles["light-text"]}`}>{amount}</span>
                </div>
                <div className={`${styles.inline} ${styles["light-dot"]}`}>
                    <img
                        src={TimeIcon}
                        alt="Time"
                        className={`${styles["sm-icon-20"]}`}
                    />
                    <span className={`${styles["light-text"]}`}>{time}</span>
                </div>
            </div>
           <div className={`${styles["store-inst"]}`}>
                {children}
           </div>
        </div>
      </div>
    </>
  );
}
