import React, { Children } from "react";
import { getExtraClasses } from "../../utils/common";

// Styles
import styles from "./styles.scss";

export default function FaqList(props) {
  const { className, headingText, children } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <div className={` ${styles["faq-list"]} ${extraClasses}`}>
        <div className={` ${styles["faq-list-header"]}`}>
          <h4 className={` ${styles["faq-list-header-title"]}`}>
            {headingText}
          </h4>
        </div>
        <div className={` ${styles["faq-list-body"]}`}>{children}</div>
      </div>
    </>
  );
}
