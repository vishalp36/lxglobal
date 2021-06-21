import React from 'react';
import { getExtraClasses } from '../../utils/common';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation } from 'swiper';
import SmallProductCard from "../product-card/product-sm-card";
//images
import Img1 from "../product-card/images/1.png";
import Img2 from "../product-card/images/3.png";
// Import Swiper styles
// tslint:disable-next-line:no-submodule-imports
import 'swiper/swiper-bundle.min.css';
import '../../resources/css/lib/swiper-slider/custom-slider.scss';
import 'swiper/components/navigation/navigation.scss';
import styles from './styles.scss';
// install Swiper components
SwiperCore.use([Autoplay,Navigation]);
export default function ProductSmallSlider(props) {
  const {
	className,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
    return (
		<>
            <div className={`${styles['product-sm-slider']} product-small-slider`}>
                <Swiper
                    slidesPerView='auto'
                    //autoplay={true}
                    speed={1000}
                    navigation
                    spaceBetween={20}
                >
                    <SwiperSlide>
                        <div className="h-100">
                            <SmallProductCard 
                                image={Img2}
                                title="Lorem ipsum is placeholder"
                                price="&euro;4.95"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-100">
                            <SmallProductCard 
                                image={Img1}
                                title="Lorem ipsum is placeholder"
                                price="&euro;4.95"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-100">
                            <SmallProductCard 
                                image={Img2}
                                title="Lorem ipsum is placeholder"
                                price="&euro;4.95"
                            >
                                <span className={`${styles['qty-val']}`}>2x</span>
                            </SmallProductCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-100">
                            <SmallProductCard 
                                image={Img2}
                                title="Lorem ipsum is placeholder"
                                price="&euro;4.95"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-100">
                            <SmallProductCard 
                                image={Img2}
                                title="Lorem ipsum is placeholder"
                                price="&euro;4.95"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
		</>
	);
}

