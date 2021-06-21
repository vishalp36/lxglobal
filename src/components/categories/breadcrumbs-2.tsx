import React from "react";
import { Link } from "react-router-dom";

import styles from "./breadcrumbs.scss";

export default function Breadcrumbs() {
  return (
    <>
      <section className={`${styles["breadcrumb-section"]}`}>
        <div className="container">
          <ol className={`${styles.breadcrumb}`}>
            <li className={`${styles["breadcrumb-item"]}`}>
              <Link to="/" className={`${styles["breadcrumb-link"]}`}>
                Home
              </Link>
            </li>
            <li className={`${styles["breadcrumb-item"]}`}>
              <Link to="/" className={`${styles["breadcrumb-link"]}`}>
                Category (or Store name)
              </Link>
            </li>
            <li className={`${styles["breadcrumb-item"]}`}>
              <span className={`${styles["breadcrumb-link"]}`}>
                Product name
              </span>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
