import React from "react";
//import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";
import Button from "../button";

// Images
import TopArrow from "./images/topArrow.svg";

// styles
import styles from "./styles.scss";

export default function ScrollToTop(props) {
  const { className, targetelement } = props;
  let extraClasses = getExtraClasses(styles, className);

  return (
    <>
      {/* Toggle Active class for show /hide btn */}
      <Button
        element="a"
        href={targetelement}
        className={`${styles["scroll-top-btn"]} ${styles.active} ${extraClasses} `}
      >
        <svg className={`${styles["svg-top-arrow"]}`} viewBox="0 0 20 13">
          <use xlinkHref={`${TopArrow}#img`} />
        </svg>
      </Button>
    </>
  );
}
