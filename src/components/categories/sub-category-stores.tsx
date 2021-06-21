import React, { useState } from "react";
import { Link } from "react-router-dom";

//card

import Button from "../button";
import StoreCard from "../store-card";
import StoreCardWithProducts from "../store-card/product-slider";

//images
import Store1 from "../store-card/images/1.png";

import homeStyles from "../home/styles.scss";

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

export default function SubCategoryStores(props) {
  return (
    <section className={`${homeStyles["featured-section"]}`}>
      <div className="container">
        <div className={`${homeStyles["featured-heading"]}`}>
          <h3>Related shops</h3>
          <Button
            element="a"
            href="/"
            className={`${homeStyles["mobile-featured-show-more-link"]} btn-link-underline btn-link`}
          >
            See All
          </Button>
        </div>
        <div className="product-small-slider featured-store-slider">
          <Swiper
            slidesPerView="auto"
            //autoplay={true}
            speed={1000}
            navigation
            //spaceBetween={20}
            breakpoints={{
              // when window width is >= 640px
              768: {
                slidesPerView: 2.5,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className={`${homeStyles["home-product-card"]}`}>
                <StoreCard
                  title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                  image={Store1}
                  badgelabel="bestseller"
                  value1="Bakery"
                  value2="Organic"
                  amount="&euro;2.99"
                  time="60 min"
                  cardLink="/"
                >
                  <StoreCardWithProducts />
                </StoreCard>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${homeStyles["home-product-card"]}`}>
                <StoreCard
                  title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                  image={Store1}
                  badgelabel="bestseller"
                  value1="Bakery"
                  value2="Organic"
                  amount="&euro;2.99"
                  time="60 min"
                  cardLink="/"
                >
                  <StoreCardWithProducts />
                </StoreCard>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${homeStyles["home-product-card"]}`}>
                <StoreCard
                  title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                  image={Store1}
                  badgelabel="bestseller"
                  value1="Bakery"
                  value2="Organic"
                  amount="&euro;2.99"
                  time="60 min"
                  cardLink="/"
                >
                  <StoreCardWithProducts />
                </StoreCard>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${homeStyles["home-product-card"]}`}>
                <StoreCard
                  title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                  image={Store1}
                  badgelabel="bestseller"
                  value1="Bakery"
                  value2="Organic"
                  amount="&euro;2.99"
                  time="60 min"
                  cardLink="/"
                >
                  <StoreCardWithProducts />
                </StoreCard>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={`${homeStyles["text-center"]}`}>
          <Button
            element="a"
            href="/"
            className={`${homeStyles["featured-show-more-link"]} btn-link-underline btn-link`}
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}
