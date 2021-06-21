import React from "react";
import { Link } from "react-router-dom";

import SingleCategory from "./single-category";
import Button from "../button";
//import Image

import Cat1 from "./images/cat1.png";
import Cat2 from "./images/cat2.png";
import Cat3 from "./images/cat3.png";
import Cat4 from "./images/cat4.png";
import Cat5 from "./images/cat5.png";
import Cat6 from "./images/cat6.png";
import Cat7 from "./images/cat7.png";
import Cat8 from "./images/cat8.png";

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

export default function Categories() {
  return (
    <section className={`${styles["categories-section"]} categories-slider`}>
      <div className="container">
        <div className={`${styles["categories-heading"]}`}>
          <h3>Categories</h3>
          <Button
            element="a"
            href="/"
            className={`${styles["mobile-category-show-more-link"]} btn-link-underline btn-link`}
          >
            See All
          </Button>
        </div>

        <div className={`${styles["categories-row"]}`}>
          <Swiper
            //slidesPerView="auto"
            //autoplay={true}
            speed={1000}
            navigation
            //spaceBetween={20}
            slidesPerView="auto"
            breakpoints={{
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="food-category"
                imgWrapClassName="food-category-img-wrap"
                imgSrc={Cat1}
                categoryText="Food &amp; Drinks"
                linkTarget="/"
              />
              <SingleCategory
                className="beauty-category"
                imgWrapClassName="beauty-category-img-wrap"
                imgSrc={Cat5}
                categoryText="Beauty &amp; Health"
                linkTarget="/"
              />
            </SwiperSlide>
            <SwiperSlide className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="flowers-category"
                imgWrapClassName="flowers-category-img-wrap"
                imgSrc={Cat2}
                categoryText="Flowers &amp; Plants"
                linkTarget="/"
              />
              <SingleCategory
                className="pets-category"
                imgWrapClassName="pets-category-img-wrap"
                imgSrc={Cat6}
                categoryText="Pets"
                linkTarget="/"
              />
            </SwiperSlide>
            <SwiperSlide className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="home-category"
                imgWrapClassName="home-category-img-wrap"
                imgSrc={Cat3}
                categoryText="Home &amp; Living"
                linkTarget="/"
              />
              <SingleCategory
                className="games-category"
                imgWrapClassName="games-category-img-wrap"
                imgSrc={Cat7}
                categoryText="Games"
                linkTarget="/"
              />
            </SwiperSlide>
            <SwiperSlide className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="diy-category"
                imgWrapClassName="diy-category-img-wrap"
                imgSrc={Cat4}
                categoryText="DIY"
                linkTarget="/"
              />
              <SingleCategory
                className="toys-category"
                imgWrapClassName="toys-category-img-wrap"
                imgSrc={Cat8}
                categoryText="Toys"
                linkTarget="/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={`${styles["text-center"]}`}>
          <Button
            element="a"
            href="/"
            className={`${styles["category-show-more-link"]} btn-link-underline btn-link`}
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}
