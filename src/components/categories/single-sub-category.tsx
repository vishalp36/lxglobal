import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import Filterbox from "./filter-box";

import styles from "./styles.scss";
import filterstyles from "./filter-box.scss";

export default function SingleSubCategory(props) {
  const {
    linkTarget,
    imgSrc,
    categoryText,
    className,
    imgWrapClassName,
    activeClass,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  let extraClassesImageWrap = getExtraClasses(styles, imgWrapClassName);
  let activeClasses = getExtraClasses(filterstyles, activeClass);

  return (
    <>
      <Link
        to={linkTarget}
        className={`${styles["sub-category-wrap"]} ${extraClasses}`}
      >
        <div
          className={`${styles["sub-category-img-wrap"]} ${extraClassesImageWrap}`}
        >
          <img src={imgSrc} alt={categoryText} />
        </div>
        <h4 className={`${styles["sub-category-text"]}`}>{categoryText}</h4>
      </Link>
      <Filterbox
        className={`${styles["sub-category-mobile-text"]} ${activeClasses}`}
        labelTitle={categoryText}
      />
    </>
  );
}
