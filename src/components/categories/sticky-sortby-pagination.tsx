import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import CategorySortbyDropdown from "./category-sortby-dropdown";
import Pagination from "../pagination";

import styles from "./styles.scss";

export default function StickySortbyPagination(props) {
  const { className } = props;
  let extraClasses = getExtraClasses(styles, className);

  return (
    <>
      {/* Toggle Active class for show and hide sticky section */}
      <section
        className={`${styles["sticky-sortby-section"]} ${styles.active} ${extraClasses}`}
      >
        <div className="container">
          <div className={`${styles["sticky-sortby-row"]}`}>
            <div className={`${styles["sticky-sortby-col"]}`}>
              <CategorySortbyDropdown className="left-dropdown-box mt-0-dropdown-box " />
            </div>
            <div className={`${styles["sticky-sortby-col"]}`}>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
