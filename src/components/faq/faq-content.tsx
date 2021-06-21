import React, { Children } from "react";
import { Link } from "react-router-dom";

//Components
import FaqList from "./faq-list";

// Styles
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

export default function FaqContent(props) {
  return (
    <>
      <section className={`${styles["faq-section"]} `}>
        <h2
          className={`${styles["text-center"]} ${styles["faq-section-title"]} `}
        >
          FAQ for retailers
        </h2>
        <div className={`faq-nav-slider`}>
          <Swiper
            slidesPerView="auto"
            speed={1000}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide className={`${styles["faq-nav-col"]}`}>
              <Link
                to="/"
                className={`${styles["faq-nav-link"]} ${styles.active}`}
              >
                All
              </Link>
            </SwiperSlide>
            <SwiperSlide className={`${styles["faq-nav-col"]}`}>
              <Link to="/" className={`${styles["faq-nav-link"]}`}>
                Deliver Anything
              </Link>
            </SwiperSlide>
            <SwiperSlide className={`${styles["faq-nav-col"]}`}>
              <Link to="/" className={`${styles["faq-nav-link"]}`}>
                Onboarding
              </Link>
            </SwiperSlide>
            <SwiperSlide className={`${styles["faq-nav-col"]}`}>
              <Link to="/" className={`${styles["faq-nav-link"]}`}>
                Products
              </Link>
            </SwiperSlide>
            <SwiperSlide className={`${styles["faq-nav-col"]}`}>
              <Link to="/" className={`${styles["faq-nav-link"]}`}>
                Payments
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={` ${styles["faq-list-wrap"]}`}>
          <FaqList headingText="Can I use your deliver anything service without a store on Peddler?">
            <p>
              For every store type Peddler provides a solution. Whether you own
              a bakery or a supermarket with thousands of different SKU's. A
              barcode, picture and price is often enough to upload your entire
              inventory. The onboarding team will guide you through a couple of
              simple steps to get your products only as quickly and easily as
              possible.
            </p>
          </FaqList>
          <FaqList
            className="active"
            headingText="I don't have an online store. How do you upload my products? "
          >
            <p>
              For every store type Peddler provides a solution. Whether you own
              a bakery or a supermarket with thousands of different SKU's. A
              barcode, picture and price is often enough to upload your entire
              inventory. The onboarding team will guide you through a couple of
              simple steps to get your products only as quickly and easily as
              possible.
            </p>
          </FaqList>
          <FaqList headingText="My product stock continuesly changes, how does Peddler manage this? ">
            <p>
              For every store type Peddler provides a solution. Whether you own
              a bakery or a supermarket with thousands of different SKU's. A
              barcode, picture and price is often enough to upload your entire
              inventory. The onboarding team will guide you through a couple of
              simple steps to get your products only as quickly and easily as
              possible.
            </p>
          </FaqList>
          <FaqList
            headingText=" How
            often are the items synchronized in my Peddler store?  "
          >
            <p>
              For every store type Peddler provides a solution. Whether you own
              a bakery or a supermarket with thousands of different SKU's. A
              barcode, picture and price is often enough to upload your entire
              inventory. The onboarding team will guide you through a couple of
              simple steps to get your products only as quickly and easily as
              possible.
            </p>
          </FaqList>
          <FaqList headingText=" Are there any connection fees to get my store on Peddler?  ">
            <p>
              For every store type Peddler provides a solution. Whether you own
              a bakery or a supermarket with thousands of different SKU's. A
              barcode, picture and price is often enough to upload your entire
              inventory. The onboarding team will guide you through a couple of
              simple steps to get your products only as quickly and easily as
              possible.
            </p>
          </FaqList>
          <FaqList headingText="What are the costs associated with deliver anything ? ">
            <p>
              For every store type Peddler provides a solution. Whether you own
              a bakery or a supermarket with thousands of different SKU's. A
              barcode, picture and price is often enough to upload your entire
              inventory. The onboarding team will guide you through a couple of
              simple steps to get your products only as quickly and easily as
              possible.
            </p>
          </FaqList>
          <FaqList headingText="I already own an online store, won't I be my own competitor?  ">
            <p>
              For every store type Peddler provides a solution. Whether you own
              a bakery or a supermarket with thousands of different SKU's. A
              barcode, picture and price is often enough to upload your entire
              inventory. The onboarding team will guide you through a couple of
              simple steps to get your products only as quickly and easily as
              possible.
            </p>
          </FaqList>
          <FaqList headingText="I manage my own online store, does thismean I have to keep stock updated on two platforms? ">
            <p>
              For every store type Peddler provides a solution. Whether you own
              a bakery or a supermarket with thousands of different SKU's. A
              barcode, picture and price is often enough to upload your entire
              inventory. The onboarding team will guide you through a couple of
              simple steps to get your products only as quickly and easily as
              possible.
            </p>
          </FaqList>
        </div>
      </section>
    </>
  );
}
