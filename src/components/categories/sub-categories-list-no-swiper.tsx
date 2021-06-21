import React from "react";

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
  return (
    <>
      <section className={`${styles["sub-categories-list-section"]}`}>
        <div className="container">
          <h2 className={`${styles["sub-categories-list-heading"]}`}>
            Food &amp; Drinks
          </h2>
          <div
            className={`${styles["sub-categories-list-row"]} sub-categories-slider`}
          >
            <Swiper
              //slidesPerView="auto"
              //autoplay={true}
              speed={1000}
              // navigation
              //spaceBetween={20}
              slidesPerView="auto"
              breakpoints={{
                1440: {
                  slidesPerView: 4,
                },
              }}
            >
              	<SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
					<SubCategory
					className="groceries-category"
					imgWrapClassName="groceries-category-img-wrap"
					imgSrc={Img1}
					categoryText="Groceries"
					linkTarget="/"
					/>
              	</SwiperSlide>
              	<SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
					<SubCategory
					className="delicatessen-category"
					imgWrapClassName="delicatessen-category-img-wrap"
					imgSrc={Img2}
					categoryText="Delicatessen"
					linkTarget="/"
					/>
              	</SwiperSlide>
              	<SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
					<SubCategory
					className="beer-category"
					imgWrapClassName="beer-category-img-wrap"
					imgSrc={Img3}
					categoryText="Beer &amp; Wine"
					linkTarget="/"
					/>
              	</SwiperSlide>
              	<SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
					<SubCategory
					className="coffee-category"
					imgWrapClassName="coffee-category-img-wrap"
					imgSrc={Img4}
					categoryText="Coffee &amp; Tea"
					linkTarget="/"
					/>
              	</SwiperSlide>
              	<SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
					<SubCategory
					className="chocolates-category"
					activeClass="active"
					imgWrapClassName="chocolates-category-img-wrap"
					imgSrc={Img5}
					categoryText="Chocolates &amp; Patisserie"
					linkTarget="/"
					/>
              	</SwiperSlide>
				  <SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
					<SubCategory
					className="groceries-category"
					imgWrapClassName="groceries-category-img-wrap"
					imgSrc={Img1}
					categoryText="Groceries"
					linkTarget="/"
					/>
              	</SwiperSlide>
              	<SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
					<SubCategory
					className="delicatessen-category"
					imgWrapClassName="delicatessen-category-img-wrap"
					imgSrc={Img2}
					categoryText="Delicatessen"
					linkTarget="/"
					/>
              	</SwiperSlide>
              	<SwiperSlide className={`${styles["sub-categories-list-col"]}`}>
					<SubCategory
					className="beer-category"
					imgWrapClassName="beer-category-img-wrap"
					imgSrc={Img3}
					categoryText="Beer &amp; Wine"
					linkTarget="/"
					/>
              	</SwiperSlide>
            </Swiper>
            <div className={`${styles["sub-categories-list-col"]} ${styles["show-more-link"]}`}>
              <Button
                  className="btn-link-underline btn-link"
              >
                  Show More
              </Button>
            </div>
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
