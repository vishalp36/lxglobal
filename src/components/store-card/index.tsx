import React from "react";
import { getExtraClasses } from "../../utils/common";
import { Link } from "react-router-dom";

import Badge from "../badge";
import TimeIcon from "./images/time.svg";
import Cycle from "./images/cycle.svg";
import styles from "./styles.scss";

export default function StoreCard(props) {
  const {
    children,
    className,
    tagclassName,
    image,
    badgelabel,
    title,
    value1,
    value2,
    amount,
    time,
    cardLink,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  let tagClasses = getExtraClasses(styles, tagclassName);
  return (
    <>
      <div className={`${styles["store-card"]} ${extraClasses}`}>
        <Link to={cardLink} className={`${styles["store-card-link"]}`}>
          <div>
            <div className={`${styles["store-top"]}`}>
              <div className={`${styles["store-img"]}`}>
                <img src={image} alt="Store" />
              </div>
              <div className={`${styles["store-tag"]}`}>
                <Badge badgetext={badgelabel} className={`${tagClasses}`} />
              </div>
            </div>
            <div className={`${styles["store-info"]}`}>
              <h4 className={`${styles.title}`}>{title}</h4>
              <div className={`${styles["tag-section"]}`}>
                <span className={`${styles.inline}`}>{value1}</span>
                <span className={`${styles.inline}`}>{value2}</span>
              </div>
            </div>
          </div>
          <div className={`${styles["bottom-section"]}`}>
            <div className={`${styles.inline} ${styles["light-dot"]}`}>
              &euro;&euro;
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
        </Link>
        {children}
      </div>
    </>
  );
}
