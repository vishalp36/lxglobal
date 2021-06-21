import React, { useState } from "react";

import StoreCard from "../store-card";


//images
import Store1 from "../store-card/images/1.png";

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

export default function HomeFeaturedStores(props) {
  return (
    <>
        <div className="product-small-slider featured-store-slider">
            <Swiper
                slidesPerView="auto"
                speed={1000}
                navigation
                breakpoints={{
                // when window width is >= 640px
                1024: {
                    slidesPerView: 3,
                },
                }}
            >
                <SwiperSlide>
                    <div className={`${styles["home-product-card"]}`}>
                        <StoreCard
                            title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                            image={Store1}
                            badgelabel="bestseller"
                            value1="Bakery"
                            value2="Organic"
                            amount="&euro;2.99"
                            time="60 min"
                            cardLink="/"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles["home-product-card"]}`}>
                        <StoreCard
                            title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                            image={Store1}
                            tagclassName="badge-yellow"
                            badgelabel="top rated"
                            value1="Bakery"
                            value2="Organic"
                            amount="&euro;2.99"
                            time="60 min"
                            cardLink="/"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles["home-product-card"]}`}>
                        <StoreCard
                            title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                            image={Store1}
                            value1="Bakery"
                            value2="Organic"
                            amount="&euro;2.99"
                            time="60 min"
                            cardLink="/"
                            tagclassName="d-none"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles["home-product-card"]}`}>
                        <StoreCard
                            title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                            image={Store1}
                            value1="Bakery"
                            value2="Organic"
                            amount="&euro;2.99"
                            time="60 min"
                            cardLink="/"
                        />
                    </div>
                </SwiperSlide>
          </Swiper>
        </div>
    </>
  );
}
