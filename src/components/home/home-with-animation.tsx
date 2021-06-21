import React from "react";
import { Link } from "react-router-dom";

import Button from "../button";
import Animation from "../animation/index";
import styles from "./styles.scss";

import BannerImage from "./images/banner-image.png";
import BannerImageMobile from "./images/banner-image-mobile.png";

export default function HomeBanner(props) {
  const { bannerText, bannerButtonInfoText } = props;
  return (
    <section className={`${styles["banner-section"]}`}>
      <div className="container">
        <div className={`${styles["row"]}`}>
          <div className={`${styles["col-md-6"]}`}>
            <div className={`${styles["banner-text"]}`}>
              <h1 className={`${styles["white-text"]}`}>
                {/* De beste producten uit jouw stad. Dezelfde dag in huis. */}
                {bannerText}
              </h1>
              <div className={`${styles["banner-btn-wrap"]}`}>
                <Button
                  className={`${styles["banner-text-btn"]} btn-lg btn-secondary`}
                >
                  Start my shopping
                </Button>
                <p
                  className={`${styles["white-text"]} ${styles["banner-text-content"]}`}
                >
                  {bannerButtonInfoText}
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles["col-md-6"]}`}>
            {/* <img
              src={BannerImage}
              alt="Banner Image"
              className={`${styles["banner-image"]}`}
            />
            <img
              src={BannerImageMobile}
              alt="Banner Image"
              className={`${styles["banner-mobile-image"]}`}
            /> */}
            <Animation />
          </div>
        </div>
      </div>
    </section>
  );
}
