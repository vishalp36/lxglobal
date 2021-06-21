import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";

export default function HomeAddress(props) {
  return (
    <section className={`${styles["home-address-section"]}`}>
      <div className="container">
        <div className={`${styles["home-address-card"]}`}>
          <h4 className={`${styles["home-address-text"]}`}>
            67, Van Woustraat, Amsterdam-Zuid, 1074 AD
          </h4>
          <p className={`${styles["home-address-time"]} text-16`}>
            You can get your delivery today 14:00-16:00
          </p>
        </div>
      </div>
    </section>
  );
}
