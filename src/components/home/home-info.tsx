import React from "react";
import { Link } from "react-router-dom";

import InfoCard from '../info-card';
import Button from "../button";
//import Image

import Info1 from "./images/pic.png";
import Info2 from "./images/pic-1.png";
import Info3 from "./images/pic-2.png";
import Info4 from "./images/pic-3.png";
import Info5 from "./images/pic-4.png";

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

export default function HomeInfo() {
  return (
    <section className={`${styles["info-section"]}`}>
      <div className="container">
        <div className={`${styles["info-heading"]}`}>
          <h3>Info section</h3>
        </div>

        <div className={`${styles["info-row"]} home-info-slider`}>
          <Swiper
            //slidesPerView="auto"
            //autoplay={true}
            speed={1000}
            navigation
            //spaceBetween={20}
            slidesPerView="auto"
          >
            <SwiperSlide className={`${styles["info-col-wrap"]}`}>
              <Link to="/" className={`${styles["info-col"]}`}>
                <InfoCard 
					image={Info1}
					title="FAQ"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className={`${styles["info-col-wrap"]}`}>
              <Link to="/" className={`${styles["info-col"]}`}>
				<InfoCard 
					image={Info2}
					title="Delivery area"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className={`${styles["info-col-wrap"]}`}>
              <Link to="/" className={`${styles["info-col"]}`}>
				<InfoCard 
					image={Info3}
					title="Information for stores"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className={`${styles["info-col-wrap"]}`}>
              <Link to="/" className={`${styles["info-col"]}`}>
				<InfoCard 
					image={Info4}
					title="Peddler is expanding"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className={`${styles["info-col-wrap"]}`}>
              <Link to="/" className={`${styles["info-col"]}`}>
				<InfoCard 
					image={Info5}
					title="Riders wanted!"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
