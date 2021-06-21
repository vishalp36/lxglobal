import React from "react";
import { Link } from "react-router-dom";

import Button from "../button";

import styles from "./styles.scss";

import BannerImage1 from "./images/banner.png";
import BannerMobileImage1 from "./images/banner-mobile.png";
import BannerImage2 from "./images/banner-1.png";
import BannerImage3 from "./images/banner-2.png";

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

export default function GridBannerbox(props) {
  return (
    <section className={`${styles["grid-banner-section"]}`}>
      <div className="container">
        <div
          className={`${styles["grid-banner-box-wrap"]} grid-banner-box-slider`}
        >
          <Swiper
            //slidesPerView="auto"
            //autoplay={true}
            speed={1000}
            navigation
            //spaceBetween={20}
            slidesPerView="auto"
            breakpoints={{
              1440: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide className={`${styles["col-8"]}`}>
              {/* <div className={`${styles["col-8"]}`}> */}
              <Link
                to="/"
                className={`${styles["grid-banner-box"]} ${styles["grid-banner-box-1"]}`}
              >
                <img
                  src={BannerImage1}
                  alt="Banner 1"
                />
				<div className={`${styles["grid-banner-text-wrap"]}`}>
                  <h3 className={`${styles["grid-banner-text"]}`}>
                    Breng pasen vandaag nog in huis.
                  </h3>
                  <Button
                    className={`${styles["grid-banner-btn"]} btn-lg btn-primary`}
                  >
                    Explore category
                  </Button>
                </div>
              </Link>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className={`${styles["col-4"]}`}>
              {/* <div className={`${styles["col-4"]}`}> */}
              <Link
                to="/"
                className={`${styles["grid-banner-box"]} ${styles["grid-banner-box-2"]}`}
              >
                <img src={BannerImage2} alt="Banner 2" />

                <div className={`${styles["grid-banner-text-wrap"]}`}>
                  <h3 className={`${styles["grid-banner-text"]}`}>
                    Groen + Akker Nieuwe producten
                  </h3>
                </div>
              </Link>
              <Link
                to="/"
                className={`${styles["grid-banner-box"]} ${styles["grid-banner-box-3"]}`}
              >
                <img src={BannerImage3} alt="Banner 3" />
                <div className={`${styles["grid-banner-text-wrap"]}`}>
                  <h3 className={`${styles["grid-banner-text"]}`}>
                    Lekker vers Lekker snel bezorgd
                  </h3>
                </div>
              </Link>
              {/* </div> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
