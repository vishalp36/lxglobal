import React from "react";
import { getExtraClasses } from "../../utils/common";

import styles from "./styles.scss";

export default function TopBanner(props) {
  const { children, className, bannerImage, bannerImageMobile } = props;
  let extraClasses = getExtraClasses(styles, className);

  return (
    <section className={`${styles["banner-section"]}  ${extraClasses}`}>
      <div className="container">
        <div className={`${styles["row"]}`}>
          <div className={`${styles["col-md-6"]}`}>
            <div className={`${styles["banner-text"]}`}>{children}</div>
          </div>
          <div className={`${styles["col-md-6"]} ${styles["text-center"]}`}>
            <img
              src={bannerImage}
              alt="Banner Image"
              className={`${styles["banner-image"]}`}
            />
            <img
              src={bannerImageMobile}
              alt="Banner Image"
              className={`${styles["banner-mobile-image"]}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
