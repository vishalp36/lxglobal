import React from "react";
//buttons
import Button from "../button";
import Badge from '../badge';
import CustomSelect from "../input/text/custom-select";
import Breadcrumbs from "../categories/breadcrumbs-3";
import WishIcon from "../input/checks-radios/heart";
import Quantity from '../quantity-box';
import CartIcon from './images/cart.svg';

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

import Back from "./images/back-arrow.svg";
import MobileBack from "./images/left-arrow.svg";
import Product1 from "./images/product.png";
import styles from './styles.scss';


export default function ProductDetailsContent() {
  return (
    <>
        <div className="container">
            
            <div className={`${styles['desktop-back-btn']}`}>
                <Button element="a" href="/" className="btn-left-icon btn-link">
                    <img src={Back} alt="Back" />
                    Back
                </Button>
            </div>
            
            <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-top-section']}`}>
                    <div className={`${styles['product-image-section']} product-detail-slider`}>
                        <Swiper
                            //autoplay={true}
                            speed={1000}
                            pagination={{ clickable: true }}
                            slidesPerView={'auto'}
                            loop={true}
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
                    </div>
                    <div className={`${styles['product-content-section']}`}>
                       <div>
                            <div className={`${styles['space-between']}`}>
                                <span className={`${styles['category-name']}`}>Tout Patisserie</span>
                                <div className={`${styles['badge-display-in-desktop']}`}>
                                    <Badge className="badge-lg" badgetext="bestseller" />
                                </div>
                            </div>
                            <h2 className="h3">Macaron Naturel Collectie 8 Stuks</h2>
                            <div className={`${styles.weight}`}>
                                0,75 kg
                            </div>
                            <div className={`${styles.price}`}>
                                &euro;11.25
                            </div>
                            <div>
                                <CustomSelect 
                                    placeholdertext = "Select option"
                                    className="my-10"
                                />
                                <Quantity 
								    value="1" 
								    btnclassName="btn-lg-icon" 
								    AddBtnclassName="btn-quantity-plus-icon" 
								    className="quantity-box-lg"
							    />
                                <div className={`${styles['add-to-cart-msg']}`}>
                                    <img src={CartIcon} alt="Cart" className={`${styles['sm-icon']}`} />
                                    1x for &euro;11.25 in your Cart
                                </div>
                            </div>
                            <div className={`${styles['breadcrumb-section']}`}>
                                <Breadcrumbs 
                                    className="breadcrumb-style-2"
                                    breadcrumblink1="Category"
                                    breadcrumblink2="Subcategory"
                                    breadcrumblink3="Sub-Subcategory"
                                />
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
    </>
  );
}
