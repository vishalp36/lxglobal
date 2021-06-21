import React from "react";
import { getExtraClasses } from "../../utils/common";
import styles from "./styles.scss";

export default function FinalCategoryTitle(props) {
  const { finalTitle, className } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <section
        className={`${styles["final-categories-title-section"]} ${extraClasses}`}
      >
        <div className="container">
          <h2 className={`${styles["final-categories-title"]}`}>
            {finalTitle}
          </h2>
        </div>
      </section>
    </>
  );
}
