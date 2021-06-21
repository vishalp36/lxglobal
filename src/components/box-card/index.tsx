import React, { Children } from "react";
import { getExtraClasses } from "../../utils/common";

import styles from "./styles.scss";

export default function BoxCard(props) {
  const { className, image, title, content } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <div className={`${styles["box-card"]} ${extraClasses}`}>
        <div className={`${styles["box-img"]}`}>
          <img src={image} alt="box" />
        </div>
        <div className={`${styles["box-content-wrap"]}`}>
          <h4 className={`${styles["box-title"]}`}>{title}</h4>
          <p className={`${styles["box-content"]}`}>{content}</p>
        </div>
      </div>
    </>
  );
}
