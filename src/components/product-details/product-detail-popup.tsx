
import React from "react";

// Components
import Modal from "../modal";
import Button from "../button";
import WishIcon from "../input/checks-radios/heart";
import Radio from "../input/checks-radios";
import Badge from '../badge';
import Img1 from "../../resources/images/1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

// Import Swiper styles
// tslint:disable-next-line:no-submodule-imports
import "swiper/swiper-bundle.min.css";
import "../../resources/css/lib/swiper-slider/custom-slider.scss";
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Autoplay, Pagination]);
import Product1 from "./images/product.png";

//styles
import modalStyles from "../modal/styles.scss";
import inputStyle from '../input/styles.scss';
import styles from "./styles.scss";



export default function ProductDetailsPopup() {
   return (
    <>
      	<Modal
			overlayClass="open"
			className="open modal-lg"
            contentClass="justify-spacebetween "
		>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div className={`${styles['modal-container']}  ${styles['product-content-container']}`}>
                    <div className={`${styles['product-top-section']}`}>
                        <div className={`${styles['product-image-section']} product-detail-slider`}>
                            <Swiper
                                //autoplay={true}
                                speed={1000}
                                pagination={{ clickable: true }}
                                slidesPerView={'auto'}
                                watchOverflow
                                //loop={true}
                                breakpoints={{
                                    767: {
                                        centeredSlides: true,
                                    },
                                    1025: {
                                        centeredSlides: false,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className={`${styles['product-image-box']}`}>
                                        <img src={Product1} alt="Product" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`${styles['product-image-box']}`}>
                                        <img src={Product1} alt="Product" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`${styles['product-image-box']}`}>
                                        <img src={Product1} alt="Product" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className={`${styles['wish-icon']}`}>
                                <WishIcon id={7} className="heart-checkbox-lg" />
                            </div>
                            <div className={`${styles['badge-div']}`}>
                                <Badge badgetext="bestseller" />
                            </div>
                        </div>
                        <div className={`${styles['product-content-section']}`}>
                            <div>
                                <div className={`${styles['space-between']}`}>
                                    <span className={`${styles['category-name']}`}>Tout Patisserie</span>
                                </div>
                                <h2 className={`${styles.title}`}>Macaron Naturel Collectie 8 Stuks</h2>
                                <div className={`${styles.weight}`}>
                                    0,75 kg
                                </div>
                                <div className={`${styles.price}`}>
                                    &euro;11.25
                                </div>
                            </div>
                            <div>
                                <div className={`${styles["mb-16"]}`}>
                                    <Radio type="radio" id="1" name="radio" checked>
                                        <span className={`${inputStyle.list} ${inputStyle['no-pad-hover']}`}>
                                            <span className={`${inputStyle['list-img']}`}>
                                                <img src={Img1} alt="Product" />
                                            </span>
                                            <span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
                                                lorem ipsum is common placeholder text used to demonstrate the graph
                                                lorem ipsum is common 
                                            </span>
                                        </span>
                                    </Radio>
                                </div>
                                <div className={`${styles["mb-16"]}`}>
                                    <Radio type="radio" id="2" name="radio">
                                        <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                            Lorem ipsum is placeholder
                                        </span>
                                    </Radio>
                                </div>
                                <div className={`${styles["mb-16"]}`}>
                                    <Radio type="radio" id="3" name="radio" disabled className="space-between out-of-stock">
                                        <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                            Lorem ipsum is placeholder
                                        </span>
                                        <span className={`${inputStyle['out-of-stock-text']}`}>Out of stock</span>
                                    </Radio>
                                </div>
                                <div className={`${styles["mb-16"]}`}>
                                    <Radio type="radio" id="4" name="radio">
                                        <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                            Lorem ipsum is placeholder
                                        </span>
                                    </Radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['product-details']}`}>
                        <p className={`${styles['brand-name']}`}>Brand</p>
                        <div className={`${styles['category-title']} text-primary`}>
                            Tout Patisserie
                        </div>
                        <div className={`${styles.description}`}>
                            <h6 className={`${styles['desc-title']}`}>Description</h6>
                            <div className={`${styles.desc}`}>
                                <p>Geen zin om zelf macarons uit te kiezen? Geniet van de naturel collectie!</p>
                                <p>De naturel collectie bestaat uit een mix van macarons met smaken als koffie, vanille, chocolade, salty-karamel. Alle macarons uit de naturel collectie zijn zonder kleurstoffen. De samenstelling kan variëren.</p>
                                <p>Persoonlijke boodschap met kaartje? (€ 1,-): Altijd leuk om een kaartje met een persoonlijke boodschap toe te voegen! Vergeet dan ook niet deze optie te selecteren bij het bestellen. Nadat u het item in het winkelmandje hebt toegevoegd kunt u bij de bezorginstructies een persoonlijke boodschap achterlaten.</p>
                            </div>
                        </div>
                    </div>
                </div>
        	</div>
			<div
				className={`${modalStyles["modal-footer"]}`}
			>
				<Button className="btn-block">
					Add to cart
				</Button>
			</div>
      	</Modal>
    </>
  );
}
