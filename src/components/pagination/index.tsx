import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

// Images
import LeftArrow from "./images/leftArrow.svg";
import RightArrow from "./images/rightArrow.svg";

//styles
import styles from "./styles.scss";

export default function Pagination(props) {
  const { className } = props;
  let extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={`${extraClasses}`}>
        <ul className={`${styles["pagination"]}`}>
          <li className={`${styles["page-item"]} ${styles.disabled}`}>
            <Link className={`${styles["page-link"]}`} to="/">
              <span className={`${styles["icon-wrap"]}`}>
                <svg className={`${styles["svg-icon"]}`} viewBox="0 0 12 20">
                  <use xlinkHref={`${LeftArrow}#img`} />
                </svg>
              </span>
              <span className={`${styles["previous-span-text"]}`}>
                Previous
              </span>
            </Link>
          </li>
          <li className={`${styles["page-item"]} ${styles.active}`}>
            <Link className={`${styles["page-link"]}`} to="/">
              1
            </Link>
          </li>
          <li className={`${styles["page-item"]}`}>
            <Link className={`${styles["page-link"]}`} to="/">
              2
            </Link>
          </li>
          <li className={`${styles["page-item"]}`}>
            <Link className={`${styles["page-link"]}`} to="/">
              3
            </Link>
          </li>
          <li className={`${styles["page-item"]}`}>
            <Link className={`${styles["page-link"]}`} to="/">
              4
            </Link>
          </li>
          <li className={`${styles["page-item"]}`}>
            <Link className={`${styles["page-link"]}`} to="/">
              <span className={`${styles["next-span-text"]}`}>Next</span>

              <span className={`${styles["icon-wrap"]}`}>
                <svg className={`${styles["svg-icon"]}`} viewBox="0 0 12 20">
                  <use xlinkHref={`${RightArrow}#img`} />
                </svg>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
