import React from "react";

import BottomNav from "../bottom-nav";
import TopNav from "../header/secondary-header";
import Footer from "../footer";
import AboutUsBanner from "./about-us-banner";
import AboutUsNav from "./about-us-nav";
import AboutUsBox from "./about-us-box";
import AboutUsContactInfo from "./about-us-contact-info";

import styles from "./styles.scss";

export default function AboutUs(props) {
  return (
    <>
      <TopNav className={`${styles["light-gray-bg"]}`} />
      <AboutUsBanner />
      <AboutUsNav />
      <AboutUsBox />
      <AboutUsContactInfo />
      <Footer />
      <BottomNav />
    </>
  );
}
