import React from "react";

// Components
import TestimonialCard from "./testimonial-card";

// Images
import Img from "./images/avatar.png";

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

export default function RegisterStoreTestimonial(props) {
  return (
    <>
      <section className={`${styles["customer-service-section"]}`}>
        <h2 className={`${styles["text-center"]}`}>Customer service</h2>
        <p className={`${styles["resigster-testimoniol-sub-text"]}`}>
          Peddler offers your customers the service they have become accustomed
          to from you. Loyal and satisfied customers is at the heart of
          everything we do. Our friendly customer services team is available
          throughout the day to answer any questions with the upmost care on
          your behalf.{" "}
        </p>
        <div className={`customer-service-slider`}>
          <Swiper
            slidesPerView="auto"
            speed={1000}
            navigation={true}
            // loop={true}
            // loopFillGroupWithBlank={true}
          >
            <SwiperSlide>
              <TestimonialCard
                avtarImg={Img}
                testimonialName="Jay Ho"
                testimonialText="Peddler offers your customers the service they have become accustomed to from you. Loyal and satisfied customers is at the heart of everything we do. Our friendly customer services team is available throughout the day."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                avtarImg={Img}
                testimonialName="Elena Smirnova"
                testimonialText="Peddler offers your customers the service they have become accustomed to from you. Loyal and satisfied customers is at the heart of everything we do. "
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                avtarImg={Img}
                testimonialName="James J"
                testimonialText="Peddler offers your customers the service they have become accustomed to from you. Loyal and satisfied customers is at the heart of everything we do. Our friendly customer services team is available throughout the day."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                avtarImg={Img}
                testimonialName="Jay Ho"
                testimonialText="Peddler offers your customers the service they have become accustomed to from you. Loyal and satisfied customers is at the heart of everything we do. Our friendly customer services team is available throughout the day."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                avtarImg={Img}
                testimonialName="Jay Ho"
                testimonialText="Peddler offers your customers the service they have become accustomed to from you. Loyal and satisfied customers is at the heart of everything we do. Our friendly customer services team is available throughout the day."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
