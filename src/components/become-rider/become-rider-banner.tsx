import React from "react";

// Components
import Button from "../button";
import TopBanner from "../top-banner";

// Images
import BannerImg from "./images/banner_desktop.png";
import BannerMobileImg from "./images/banner_mobile.png";

//styles
import styles from "./styles.scss";

export default function BecomeRiderBanner(props) {
  return (
    <>
      <TopBanner
        bannerImage={BannerImg}
        bannerImageMobile={BannerMobileImg}
        className={`${styles["light-gray-bg"]}`}
      >
        <h1 className={`${styles["banner-title-txt"]}`}>
          Cycle through the city.
          <br /> Earn money.
          <br /> Flexible hours.
        </h1>
        <div className={`${styles["banner-btn-wrap"]}`}>
          <Button className={`${styles["banner-text-btn"]} btn-lg btn-primary`}>
            Become a rider
          </Button>
          <p className={` ${styles["banner-text-content"]}`}>
            We are looking for riders who pick up and deliver packages on our
            e-bikes in Amsterdam. A sporty job with flexible working hours and a
            good salary.
          </p>
        </div>
      </TopBanner>
    </>
  );
}
