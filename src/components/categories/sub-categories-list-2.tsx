import React from "react";

// Components
import SubCategory from "./single-sub-category";
import Button from "../button";

//images
import Img1 from "./images/cat.png";
import Img2 from "./images/cat-3.png";
import Img3 from "./images/cat-2.png";
import Img4 from "./images/cat-8.png";
import Img5 from "./images/cat-11.png";
import Img6 from "./images/cat-9.png";
import Img7 from "./images/cat-1.png";
import Img8 from "./images/cat-4.png";

import BtnImg from "./images/down-arrow.svg";

//styles
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

export default function SubCategoriesList(props) {
  return (
    <>
      <section className={`${styles["sub-categories-list-section"]} `}>
        <div className="container">
          <h2 className={`${styles["sub-categories-list-heading"]}`}>
            Stores
          </h2>
          <div
            className={`${styles["sub-categories-list-row"]} sub-categories-slider`}
          >
            <Swiper
              speed={1000}
              slidesPerView="auto"
              breakpoints={{
                1440: {
                  slidesPerView: 4,
                },
              }}
            >
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="light-pink"
                        imgSrc={Img1}
                        categoryText="Food &amp; Drinks"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="light-orange"
                        imgSrc={Img2}
                        categoryText="Toys"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="lightest-pink"
                        imgSrc={Img3}
                        categoryText="Flowers &amp; Plants"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="lightest-gray"
                        imgSrc={Img4}
                        categoryText="Home &amp; Living"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="lightest-cream"
                        imgSrc={Img5}
                        categoryText="DIY"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="lightest-yellow"
                        imgSrc={Img6}
                        categoryText="Baby"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="light-cream"
                        imgSrc={Img7}
                        categoryText="Games"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="light-purple"
                        imgSrc={Img8}
                        categoryText="Gifts"
                        linkTarget="/"
                    />
                </SwiperSlide>
            </Swiper>
            <div className={`${styles["sub-category-btn-wrap"]}`}>
              <Button className={`${styles["sub-category-btn"]}`}>
                <img src={BtnImg} alt="arrow" />
              </Button>
            </div>
          </div>
          <div className={`${styles["sub-category-border-bottom"]}`}></div>
        </div>
      </section>
    </>
  );
}
