import React from "react";

// Components
import Button from "../button";
import TopBanner from "../top-banner";

// Images
import Img from "./images/testimonial-rider.png";

//styles
import styles from "./styles.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
// tslint:disable-next-line:no-submodule-imports
import "swiper/swiper-bundle.min.css";
import "../../resources/css/lib/swiper-slider/custom-slider.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper components
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function BecomeRiderTestimonial(props) {
  return (
    <>
      <section className={`${styles["rider-testimonial"]}`}>
        <div className={`container`}>
          <h2 className={`${styles["text-center"]} ${styles["mb-0"]}`}>
            What do riders say?
          </h2>
          <div className={`rider-testimonial-slider`}>
            <Swiper
              slidesPerView={1}
              speed={1000}
              spaceBetween={20}
              centeredSlides={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div className={`${styles["rider-testimonial-wrap"]}`}>
                  <div className={`${styles["rider-testimonial-img-wrap"]}`}>
                    <img
                      src={Img}
                      alt="Rider"
                      className={`${styles["rider-testimonial-img"]}`}
                    />
                  </div>
                  <div className={`${styles["rider-testimonial-text-wrap"]}`}>
                    <p className={`${styles["rider-testimonial-text"]}`}>
                      Customers are always happy when I come along with
                      something nice from the store.
                    </p>
                    <p className={`${styles["rider-testimonial-user"]}`}>
                      Annie // Peddler Rider
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles["rider-testimonial-wrap"]}`}>
                  <div className={`${styles["rider-testimonial-img-wrap"]}`}>
                    <img
                      src={Img}
                      alt="Rider"
                      className={`${styles["rider-testimonial-img"]}`}
                    />
                  </div>
                  <div className={`${styles["rider-testimonial-text-wrap"]}`}>
                    <p className={`${styles["rider-testimonial-text"]}`}>
                      Customers are always happy when I come along with
                      something nice from the store.
                    </p>
                    <p className={`${styles["rider-testimonial-user"]}`}>
                      Annie // Peddler Rider
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
