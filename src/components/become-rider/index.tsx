import React from "react";

import BottomNav from "../bottom-nav";
import TopNav from "../header/secondary-header";
import Footer from "../footer";
import BecomeRiderBanner from "./become-rider-banner";
import BecomeRiderCardBox from "./become-rider-card-box";
import RegisterDeliveryRiderForm from "../register-delivery-rider-form";
import BecomeRiderTestimonial from "./become-rider-testimonial";

import styles from "./styles.scss";

export default function BecomeRider(props) {
  return (
    <>
      <TopNav className={`${styles["light-gray-bg"]}`} />
      <BecomeRiderBanner />
      <BecomeRiderCardBox />
      <BecomeRiderTestimonial />
      <RegisterDeliveryRiderForm />
      <Footer />
      <BottomNav />
    </>
  );
}
