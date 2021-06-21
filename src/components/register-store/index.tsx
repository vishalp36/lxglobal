import React from "react";

import BottomNav from "../bottom-nav";
import TopNav from "../header/secondary-header";
import Footer from "../footer";
import RegisterStoreBanner from "./register-store-banner";
import RegisterStoreCardBox from "./register-store-card-box";
import RegisterStoreBenefit from "./register-store-benefit";
import EasyIntegration from "./easy-integration";
import DeliveryAnything from "./delivery-anything";
import RegisterStoreForm from "../register-store-form";
import RegisterStoreTestimonial from "./register-store-testimonial";

import styles from "./styles.scss";

export default function RegisterStore(props) {
  return (
    <>
      <TopNav className={`${styles["light-gray-bg"]}`} />
      <RegisterStoreBanner />
      <RegisterStoreCardBox />
      <RegisterStoreBenefit />
      <EasyIntegration />
      <RegisterStoreTestimonial />
      <DeliveryAnything />
      <RegisterStoreForm />
      <Footer />
      <BottomNav />
    </>
  );
}
