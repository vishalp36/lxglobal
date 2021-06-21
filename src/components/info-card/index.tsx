import React, { Children } from "react";
import { getExtraClasses } from "../../utils/common";

import styles from "./styles.scss";

export default function InfoCard(props) {
  const { className, image, title } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <div className={`${styles["info-card"]} ${extraClasses}`}>
        <div className={`${styles["info-img"]}`}>
          <img src={image} alt="info" />
        </div>
        <div className={`${styles["info-content"]}`}>
          <h4 className={`${styles["info-title"]}`}>{title}</h4>
        </div>
      </div>
    </>
  );
}
