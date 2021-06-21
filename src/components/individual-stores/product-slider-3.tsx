import React from "react";

import { getExtraClasses } from "../../utils/common";

import Badge from "../badge";
//card
import ProductCard from "../product-card";
import Button from "../button";

//images
import Img1 from "../product-card/images/1.png";
import Img2 from "../product-card/images/2.png";

import productstyle from "../product-card/styles.scss";
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

export default function SubCategoryProducts(props) {
    const { 
        productSectionTitle, 
        className,
        value 
    } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <section className={`${styles['product-section']} ${extraClasses}`}>
      <div>
        <div className={`${styles['product-heading']}`}>
            <h3 className={`${styles['product-title']}`}>
                {productSectionTitle}
                <span className={`${styles.value}`}>{value}</span>
            </h3>
        </div>
        <div className="product-small-slider product-home-slider product-subcategory">
            <Swiper
                slidesPerView="auto"
                speed={1000}
                navigation
                breakpoints={{
                1440: {
                    slidesPerView: 7,
                },
                }}
            >
            <SwiperSlide>
              <div className={`${styles['h-100']}`}>
                <ProductCard
                	className="active"
                	id={0}
                	image={Img1}
                  	storename="Store Name"
                  	title="Lorem ipsum is placeholder"
                  	price="&euro;11.25"
                  	weight="0,75 kg"
                >
                  <span className={`${productstyle['badge-div']}`}>
                    <Badge badgetext="bestseller" />
                  </span>
                  <span className={`${productstyle['item-visible']} text-15`}>
                    <span className="semibold">2x</span>
                    &nbsp;for&nbsp;
                    <span className="semibold">&euro;39.9</span>
                    <span className={`${productstyle['top-sub-text']}`}>
                      in your Cart
                    </span>
                  </span>
                </ProductCard>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles['h-100']}`}>
                <ProductCard
                  	id={1}
                  	image={Img1}
                  	storename="Store Name"
                  	title="Lorem ipsum is placeholder"
                  	price="&euro;11.25"
                  	weight="0,75 kg"
                  	defaultWish
                >
                  <span className={`${productstyle['badge-div']}`}>
                    <Badge badgetext="our picks" className="badge-pink" />
                  </span>
                  <span className={`${productstyle['item-visible']} text-15`}>
                    <span className="semibold">2x</span>
                    &nbsp;for&nbsp;
                    <span className="semibold">&euro;39.9</span>
                    <span className={`${productstyle["top-sub-text"]}`}>
                      in your Cart
                    </span>
                  </span>
                </ProductCard>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles['h-100']}`}>
                <ProductCard
                  	className="active"
                  	id={2}
                  	image={Img1}
                  	storename="Store Name"
                  	title="Lorem ipsum is placeholder"
                  	price="&euro;11.25"
                  	weight="0,75 kg"
                >
                  <span className={`${productstyle['badge-div']}`}>
                    <Badge badgetext="bestseller" />
                  </span>
                  <span className={`${productstyle['item-visible']} text-15`}>
                    <span className="semibold">2x</span>
                    &nbsp;for&nbsp;
                    <span className="semibold">&euro;39.9</span>
                    <span className={`${productstyle["top-sub-text"]}`}>
                      in your Cart
                    </span>
                  </span>
                </ProductCard>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles['h-100']}`}>
                <ProductCard
                  	id={3}
                  	image={Img1}
                  	storename="Store Name"
                  	title="Lorem ipsum is placeholder"
                  	price="&euro;11.25"
                  	weight="0,75 kg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles['h-100']}`}>
                <ProductCard
                  	id={4}
                  	image={Img1}
                 	storename="Store Name"
                  	title="Lorem ipsum is placeholder"
                  	price="&euro;11.25"
                  	weight="0,75 kg"
                  	//newprice="&euro;11.25"
                  	//priceclassName="with-new-price"
                >
                  <span className={`${productstyle['badge-div']}`}>
                    <Badge badgetext="bestseller" />
                  </span>
                </ProductCard>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
