import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import Button from "../button";

import BackIcon from "./images/back-icon.svg";
import FilterIcon from "./images/filter.svg";

import styles from "./styles.scss";

export default function CategoryHeaderMobile(props) {
  const { className, backLink, backLinkText, categotyName } = props;
  let extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={`${styles["category-header-mobile"]} ${extraClasses}`}>
        <div className="container">
          <div className={`${styles["category-header-wrap"]}`}>
            <Link to={backLink} className={`${styles["category-back-link"]}`}>
              <img src={BackIcon} alt="Back" className={`${styles["category-header-back-icon"]}`} />
              <span className={`${styles["category-header-back-text"]}`}>
                {backLinkText}
              </span>
            </Link>
            <h2 className={`${styles["category-header-title"]}`}>
              {categotyName}
            </h2>
            <div>
              <span className={`${styles['filter-value']}`}>4</span>
              <Button to="/" className={`${styles['filter-btn']} btn-link`}>
                <img src={FilterIcon} alt="filter" className={`${styles["category-header-filter-icon"]}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
