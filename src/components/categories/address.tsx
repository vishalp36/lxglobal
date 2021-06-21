import React from "react";
import { getExtraClasses } from "../../utils/common";
import { Link } from "react-router-dom";

import styles from "./styles.scss";

// images

import LocPin from "./images/location-pin.svg";
import CloseIcon from "./images/close.svg";

export default function Address(props) {
  const { className, location } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <section className={`${styles["address-section"]}`}>
      <div className={`${styles["address-wrap"]} ${extraClasses}`}>
        <img
          src={LocPin}
          alt="Location"
          className={`${styles["address-pin-img"]}`}
        />
        <p className={`${styles["address-text"]} text-15-semibold`}>
          {location}
        </p>
        <Link
          to="/categories/"
          className={`${styles["address-close-img-wrap"]}`}
        >
          <img src={CloseIcon} alt="close" />
        </Link>
      </div>
    </section>
  );
}
