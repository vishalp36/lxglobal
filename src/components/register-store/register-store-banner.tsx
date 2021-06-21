import React from "react";

// Components
import Button from "../button";
import TopBanner from "../top-banner";

// Images
import BannerImg from "./images/banner_desktop.png";
import BannerMobileImg from "./images/banner_mobile.png";

//styles
import styles from "./styles.scss";

export default function RegisterStoreBanner(props) {
  return (
    <>
      <TopBanner
        bannerImage={BannerImg}
        bannerImageMobile={BannerMobileImg}
        className={`${styles["light-gray-bg"]}`}
      >
        <h1 className={`${styles["banner-title-txt"]}`}>
          Food, lifestyle & gifts.
          <br /> Local retailers.
          <br /> Same day delivery.
        </h1>
        <div className={`${styles["banner-btn-wrap"]}`}>
          <Button className={`${styles["banner-text-btn"]} btn-lg btn-primary`}>
            Register your store
          </Button>
          <p className={` ${styles["banner-text-content"]}`}>
            De leukse winkels op een plek. Shoppen wanneer jouw dat uitkomt.
            Vandaag bezorgd.
          </p>
        </div>
      </TopBanner>
    </>
  );
}
