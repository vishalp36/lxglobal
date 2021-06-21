import React from "react";

//card

import Button from "../button";
import StoreCard from "../store-card";
import StoreCardWithProducts from "../store-card/product-slider";

//images
import Store1 from "../store-card/images/1.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
// tslint:disable-next-line:no-submodule-imports
import "swiper/swiper-bundle.min.css";
import "../../resources/css/lib/swiper-slider/custom-slider.scss";
import styles from './styles.scss';

// install Swiper components
SwiperCore.use([Autoplay]);

export default function StoreList(props) {
  return (
    <>
        <div className="store-list-slider featured-store-slider">
            <Swiper
                slidesPerView= 'auto'
                speed={1000}
            >
                <SwiperSlide className="store-list">
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
                </SwiperSlide>
                <SwiperSlide className="store-list">
                    <StoreCard
                        title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                        image={Store1}
                        badgelabel="bestseller"
                        tagclassName="badge-yellow"
                        value1="Bakery"
                        value2="Organic"
                        amount="&euro;2.99"
                        time="60 min"
                        cardLink="/"
                    />
                </SwiperSlide>
                <SwiperSlide className="store-list">
                    <StoreCard
                        title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                        image={Store1}
                        tagclassName="d-none"
                        value1="Bakery"
                        value2="Organic"
                        amount="&euro;2.99"
                        time="60 min"
                        cardLink="/"
                    />
                </SwiperSlide>
                <SwiperSlide className="store-list">
                    <StoreCard
                        title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                        image={Store1}
                        tagclassName="d-none"
                        value1="Bakery"
                        value2="Organic"
                        amount="&euro;2.99"
                        time="60 min"
                        cardLink="/"
                    />
                </SwiperSlide>
                <SwiperSlide className="store-list">
                    <StoreCard
                        title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                        image={Store1}
                        tagclassName="d-none"
                        value1="Bakery"
                        value2="Organic"
                        amount="&euro;2.99"
                        time="60 min"
                        cardLink="/"
                    />
                </SwiperSlide>
                <SwiperSlide className="store-list">
                    <StoreCard
                        title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                        image={Store1}
                        tagclassName="d-none"
                        value1="Bakery"
                        value2="Organic"
                        amount="&euro;2.99"
                        time="60 min"
                        cardLink="/"
                    />
                </SwiperSlide>
            </Swiper>
            <div className={`${styles["btn-show-more"]} ${styles["display-only-desktop"]}`}>
                <Button
                    element="a"
                    href="/"
                    className="btn-link-underline btn-link"
                >
                    Show More
                </Button>
            </div>
        </div>
    </>
  );
}
