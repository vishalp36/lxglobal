import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import Filterbox from "./filter-box";
import CategorySortbyDropdown from "./category-sortby-dropdown";

import FilterIcon from "./images/filter.svg";

import filterStyles from "./filter-box.scss";
import styles from "./styles.scss";

export default function CategoryFilter(props) {
  const { className } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <section
        className={`${styles["category-filter-section"]} ${extraClasses}`}
      >
        <div className="container">
          <div className={`${styles["category-filter-row"]} ${styles["align-center"]}`}>
            <div className={`${styles["category-filter-col-9"]}`}>
                <Filterbox
                    className="mr-10px mb-0 filter-box-danger"
                    labelTitle="Sale"
                />
                <Filterbox
                    className="mr-10px mb-0"
                    labelTitle="Our picks"
                />
                <Filterbox
                    className="mr-10px mb-0"
                    labelTitle="Bestsellers"
                />
                <Filterbox
                    className="mr-10px mb-0 image-check-box img-left"
                    labelTitle="More filters"
                >
                    <svg
                        className={`${filterStyles["svg-icon"]}`}
                        viewBox="0 0 16 10"
                    >
                        <use xlinkHref={`${FilterIcon}#img`} />
                    </svg>
                </Filterbox>
            </div>
            <div className={`${styles["category-filter-col-3"]}`}>
              <CategorySortbyDropdown />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
