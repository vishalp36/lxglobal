import React from "react";
import { Link } from "react-router-dom";

import Filterbox from "./filter-box";
import CategorySortbyDropdown from "./category-sortby-dropdown";

import FilterIcon from "./images/filter.svg";

import filterStyles from "./filter-box.scss";
import styles from "./styles.scss";

export default function CategoryFilterApplied() {
  return (
    <>
      <section className={`${styles["category-filter-section"]}`}>
        <div className="container">
          <div className={`${styles["category-filter-row"]}`}>
            <div className={`${styles["category-filter-col-9"]}`}>
              <Filterbox
                className="mr-10px"
                labelTitle="True Pizza"
              />
              <Filterbox
                className="mr-10px"
                labelTitle="The Store Name"
              />
              <Filterbox
                className="mr-10px"
                labelTitle="True Pizza"
              />
              <Filterbox
                className="mr-10px"
                labelTitle="The Store Name"
              />
              <Filterbox
                className="mr-10px"
                labelTitle="Deli-caat"
              />
              <Filterbox
                className="mr-10px"
                labelTitle="The Store Name"
              />
            </div>
            <div className={`${styles["category-filter-col-3"]}`}>
              <CategorySortbyDropdown />
            </div>
            <div className={`${styles["category-filter-col-9"]}`}>
              <Filterbox
                className="mr-10px danger-checkbox"
                labelTitle="Sale"
              />
              <Filterbox
                className="mr-10px active"
                labelTitle="Our picks"
              />
              <Filterbox
                className="mr-10px"
                labelTitle="Bestsellers"
              />
              <Filterbox
                className="active mr-10px image-check-box img-left"
                labelTitle="More filters"
              >
                <span className="filter-count"> (1)</span>
                <svg
                  className={`${filterStyles["svg-icon"]}`}
                  viewBox="0 0 16 10"
                >
                  <use xlinkHref={`${FilterIcon}#img`} />
                </svg>
              </Filterbox>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
