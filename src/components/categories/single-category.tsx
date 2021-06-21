import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import styles from "./styles.scss";

export default function SingleCategory(props) {
  const {
    linkTarget,
    imgSrc,
    categoryText,
    className,
    imgWrapClassName,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  let extraClassesImageWrap = getExtraClasses(styles, imgWrapClassName);

  return (
    <>
      <Link
        to={linkTarget}
        className={`${styles["category-wrap"]} ${extraClasses}`}
      >
        <div className={`${styles["img-wrap"]} ${extraClassesImageWrap}`}>
          <img src={imgSrc} alt={categoryText} />
        </div>
        <p className={`${styles["category-text"]} text-16-semibold`}>
          {categoryText}
        </p>
      </Link>
    </>
  );
}
