import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";
import Button from "../button";

import inputStyles from "../input/styles.scss";
import styles from "./styles.scss";

export default function HomeFindPeddler(props) {
  return (
    <section className={`${styles["find-peddler-section"]}`}>
      <div className="container">
        <div className={`${styles["find-peddler-heading"]}`}>
          <h3>Where to find Peddler</h3>
          <Button
            element="a"
            href="/"
            className={`${styles["mobile-find-peddler-show-more-link"]} btn-link-underline btn-link`}
          >
            See All
          </Button>
        </div>

        <div className={`${styles["find-peddler-row"]}`}>
          <div className={`${styles["find-peddler-col"]}`}>
            <Button
              element="a"
              href="/"
              className={`${inputStyles["select-box"]} ${styles["find-peddler-link"]}`}
            >
              Amsterdam
            </Button>
          </div>
          <div className={`${styles["find-peddler-col"]}`}>
            <Button
              element="a"
              href="/"
              className={`${inputStyles["select-box"]} ${styles["find-peddler-link"]}`}
            >
              Utrecht
            </Button>
          </div>
          <div className={`${styles["find-peddler-col"]}`}>
            <Button
              element="a"
              href="/"
              className={`${inputStyles["select-box"]} ${styles["find-peddler-link"]}`}
            >
              Den Haag
            </Button>
          </div>
          <div className={`${styles["find-peddler-col"]}`}>
            <Button
              element="a"
              href="/"
              className={`${inputStyles["select-box"]} ${styles["find-peddler-link"]}`}
            >
              Amsterdam
            </Button>
          </div>
          <div className={`${styles["find-peddler-col"]}`}>
            <Button
              element="a"
              href="/"
              className={`${inputStyles["select-box"]} ${styles["find-peddler-link"]}`}
            >
              Utrecht
            </Button>
          </div>
          <div className={`${styles["find-peddler-col"]}`}>
            <Button
              element="a"
              href="/"
              className={`${inputStyles["select-box"]} ${styles["find-peddler-link"]}`}
            >
              Den Haag
            </Button>
          </div>
        </div>
        <div className={`${styles["text-center"]}`}>
          <Button
            element="a"
            href="/"
            className={`${styles["find-peddler-show-more-link"]} btn-link-underline btn-link`}
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}
