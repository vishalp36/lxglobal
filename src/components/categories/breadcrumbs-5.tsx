import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
import styles from "./breadcrumbs.scss";

export default function Breadcrumbs(props) {
    const {
		className,
        breadcrumblink1,
        breadcrumblink2,
        breadcrumblink3,
        breadcrumblink4,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <section className={`${styles["breadcrumb-section"]} ${extraClasses}`}>
        <div className="container">
          <ol className={`${styles.breadcrumb}`}>
            <li className={`${styles["breadcrumb-item"]}`}>
              <Link to="/" className={`${styles["breadcrumb-link"]}`}>
                {breadcrumblink1}
              </Link>
            </li>
            <li className={`${styles["breadcrumb-item"]}`}>
              <Link to="/" className={`${styles["breadcrumb-link"]}`}>
                {breadcrumblink2}
              </Link>
            </li>
            <li className={`${styles["breadcrumb-item"]}`}>
              <Link to="/" className={`${styles["breadcrumb-link"]}`}>
                {breadcrumblink3}
              </Link>
            </li>
            <li className={`${styles["breadcrumb-item"]}`}>
              <span className={`${styles["breadcrumb-link"]}`}>
                {breadcrumblink4}
              </span>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
