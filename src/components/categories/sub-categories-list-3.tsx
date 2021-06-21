import React from "react";
import { getExtraClasses } from '../../utils/common';

// Components
import SubCategory from "./single-sub-category";
import Button from "../button";

//images
import Img1 from "./images/sub-cat-1.png";
import Img2 from "./images/sub-cat-2.png";
import Img3 from "./images/sub-cat-3.png";
import Img4 from "./images/sub-cat-4.png";
import Img5 from "./images/sub-cat-5.png";


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
  const {
		className
	} = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <section className={`${styles["sub-categories-list-section"]} ${extraClasses}`}>
        <div className="container">
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
                        imgWrapClassName="orange"
                        imgSrc={Img1}
                        categoryText="Matching category"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="lightest-cream"
                        imgSrc={Img2}
                        categoryText="Matching category"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="light-green"
                        imgSrc={Img3}
                        categoryText="Matching category"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="light-red"
                        imgSrc={Img4}
                        categoryText="Matching category"
                        linkTarget="/"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <SubCategory
                        imgWrapClassName="light-yellow"
                        imgSrc={Img5}
                        categoryText="Matching category"
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
