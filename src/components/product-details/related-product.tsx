import React from "react";
import { getExtraClasses } from "../../utils/common";
import Button from "../button";

import Badge from "../badge";
//card
import ProductCard from "../product-card";


//images
import Img1 from "../product-card/images/1.png";
import Img2 from "../product-card/images/2.png";

import productstyle from "../product-card/styles.scss";
import homeStyles from "../home/styles.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

// Import Swiper styles
// tslint:disable-next-line:no-submodule-imports
import "swiper/swiper-bundle.min.css";
import "../../resources/css/lib/swiper-slider/custom-slider.scss";
import "swiper/components/navigation/navigation.scss";
import styles from './styles.scss';

// install Swiper components
SwiperCore.use([Autoplay, Navigation]);

export default function SubCategoryProducts(props) {
  const { productSectionTitle } = props;
  return (
    <section className={`${homeStyles["product-section"]}`}>
      <div className="container">
        <div className={`${styles['space-between']}`}>
			<div className={`${homeStyles["product-heading"]}`}>
			<h3>{productSectionTitle}</h3>
			</div>
			<div className={`${styles["see-all-link"]}`}>
				<Button
					element="a"
					href="/"
					className="btn-link-underline btn-link"
				>
					See All
				</Button>
			</div>
		</div>
        <div className="product-small-slider product-home-slider">
          <Swiper
            slidesPerView="auto"
            //autoplay={true}
            speed={1000}
            navigation
            //spaceBetween={20}
            breakpoints={{
              // when window width is >= 640px
              1440: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <ProductCard
                  className="active"
                  id={0}
                  image={Img1}
                  storename="Store Name"
                  title="Lorem ipsum is placeholder"
                  price="&euro;11.25"
                  weight="0,75 kg"
                >
                  <span className={`${productstyle["badge-div"]}`}>
                    <Badge badgetext="bestseller" />
                  </span>
                  <span className={`${productstyle["item-visible"]} text-15`}>
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
              <div>
                <ProductCard
                  id={1}
                  image={Img1}
                  storename="Store Name"
                  title="Lorem ipsum is placeholder"
                  price="&euro;11.25"
                  weight="0,75 kg"
                  defaultWish
                >
                  <span className={`${productstyle["badge-div"]}`}>
                    <Badge badgetext="our picks" className="badge-pink" />
                  </span>
                  <span className={`${productstyle["item-visible"]} text-15`}>
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
              <div>
                <ProductCard
                  className="active"
                  id={2}
                  image={Img1}
                  storename="Store Name"
                  title="Lorem ipsum is placeholder"
                  price="&euro;11.25"
                  weight="0,75 kg"
                >
                  <span className={`${productstyle["badge-div"]}`}>
                    <Badge badgetext="bestseller" />
                  </span>
                  <span className={`${productstyle["item-visible"]} text-15`}>
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
              <div>
                <ProductCard
                  id={3}
                  image={Img1}
                  storename="Store Name"
                  title="Lorem ipsum is placeholder"
                  price="&euro;11.25"
                  weight="0,75 kg"
                  //newprice="&euro;11.25"
                  //priceclassName="with-new-price"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard
                  id={4}
                  image={Img1}
                  storename="Store Name"
                  title="Lorem ipsum is placeholder"
                  price="&euro;11.25"
                  weight="0,75 kg"
                  newprice="&euro;11.25"
                  priceclassName="with-new-price"
                >
                  <span className={`${productstyle["badge-div"]}`}>
                    <Badge badgetext="bestseller" />
                  </span>
                </ProductCard>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard
                  id={5}
                  image={Img1}
                  storename="Store Name"
                  title="Lorem ipsum is placeholder"
                  price="&euro;11.25"
                  weight="0,75 kg"
                  newprice="&euro;11.25"
                  priceclassName="with-new-price"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard
                  id={6}
                  image={Img2}
                  storename="Store Name"
                  title="Lorem ipsum is placeholder"
                  price="&euro;11.25"
                  weight="0,75 kg"
                  disabledbtn
                >
                  <span className={`${productstyle["not-available"]}`}>
                    Not available right now
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
