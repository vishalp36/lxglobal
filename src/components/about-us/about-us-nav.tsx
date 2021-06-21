import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./styles.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

// Import Swiper styles
// tslint:disable-next-line:no-submodule-imports
import "swiper/swiper-bundle.min.css";
import "../../resources/css/lib/swiper-slider/custom-slider.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper components
SwiperCore.use([Autoplay, Navigation]);

export default function AboutUsNav(props) {
  return (
    <>
      <section className={`${styles["about-us-nav-section"]}`}>
        <div className="container">
          <div className={`about-us-nav-slider ${styles["row"]}`}>
            <Swiper
              slidesPerView="auto"
              speed={1000}
              navigation
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide className={`${styles["about-us-nav-col"]}`}>
                <Link to="/" className={`${styles["about-us-nav-link"]}`}>
                  Order from home
                </Link>
              </SwiperSlide>
              <SwiperSlide className={`${styles["about-us-nav-col"]}`}>
                <Link to="/" className={`${styles["about-us-nav-link"]}`}>
                  Pay securely online
                </Link>
              </SwiperSlide>
              <SwiperSlide className={`${styles["about-us-nav-col"]}`}>
                <Link to="/" className={`${styles["about-us-nav-link"]}`}>
                  Delivered the same day
                </Link>
              </SwiperSlide>
              <SwiperSlide className={`${styles["about-us-nav-col"]}`}>
                <Link to="/" className={`${styles["about-us-nav-link"]}`}>
                  Contactless delivery
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
