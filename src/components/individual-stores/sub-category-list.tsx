import React, { useState } from "react";
import { getExtraClasses } from "../../utils/common";

import Button from "../button";
import TopNav from "../header/store-header-with-search";
import Filterbox from "../categories/filter-box";

import BtnImg from "../categories/images/down-arrow.svg";

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
    const [categories, setCategories] = useState(false);
	const togglecategories = () => {
		setCategories(!categories);
	};
  return (
    <>
      <section className={`${styles['sub-categories-list-section']} ${categories ? `${styles.open} open` : ''}`}>
        <div className={`${styles.hide}`}>
            <TopNav />
        </div>
        <div
            className={`${styles["sub-categories-list-row"]} sub-categories-slider`}
          >
            <Swiper
              speed={1000}
              slidesPerView="auto"
            >
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
                <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
                    <Filterbox
                        className={`${styles["sub-cat-link"]}`}
                        labelTitle="Sub-category"
                    />
                </SwiperSlide>
            </Swiper>
            <div className={`${styles["sub-category-btn-wrap"]}`}>
              <Button className={`${styles["sub-category-btn"]}`} onClick={togglecategories}>
                <img src={BtnImg} alt="arrow" />
              </Button>
            </div>
          </div>
          <div className={`${styles["sub-category-border-bottom"]}`}></div>
      </section>
    </>
  );
}
