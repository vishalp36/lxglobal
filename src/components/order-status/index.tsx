import React from "react";
//buttons
import Button from "../button";
import Badge from '../badge';

// Components
import TopNav from "../header/header-with-back-icon";


import ProductCardCartlist from '../product-card-card-list/product-card-list-no-qty';

import Product1 from "../product-details/images/product.png";
import Back from "../product-details/images/back-arrow.svg";
import Store from "./images/store.svg";
import Time from "../checkout/images/time.svg";
import Pin from "../checkout/images/pin.svg";
import MapImg from "./images/map.png";
import PinWhite from "./images/pin-white.svg";
import styles from './styles.scss';
import CheckoutStyles from "../checkout/styles.scss";



export default function OrderStatus() {
  return (
    <>
        <TopNav MobileclassName= "display-none"/>
        <div className={`${styles['order-status-container']} container`}>
            <div className={`${styles['desktop-back-btn']}`}>
                <Button element="a" href="/" className="btn-left-icon btn-link">
                    <img src={Back} alt="Back" />
                    My orders
                </Button>
            </div>
			<div className={`${styles['order-details-container']}`}>
				<div>
					<div className={`${styles['space-between']} ${styles['flex-col']}`}>
						<div>
							<h3>Thanks for your order!</h3>
							<p className="text-gray">Order number #222245463</p>
						</div>
						<Badge badgetext="Sent to store" className="badge-lg badge-success" />
					</div>
					<div>
						<Button className="btn-link">Download receipt</Button>
					</div>
				</div>
				<div>
					<div className={`${styles['map-section']}`}>
						<img src={MapImg} alt="Map" className={`${styles['map-image']}`} />
						<div className={`${styles['map-route']}`}>
							<div className={`${styles['icon-1']} ${styles['circle-44']} ${styles['circle-icon']}`}>
								<img src={PinWhite} alt="Location" />
							</div>
							<div className={`${styles['icon-2']} ${styles['circle-outline']} ${styles['circle-44']} ${styles['circle-icon']}`}>
								<img src={Store} alt="Store" />
							</div>
							<div className={`${styles['icon-3']} ${styles['circle-outline']} ${styles['circle-44']} ${styles['circle-icon']}`}>
								<img src={Store} alt="Store" />
							</div>
							<div className={`${styles['icon-4']} ${styles['circle-outline']} ${styles['circle-44']} ${styles['circle-icon']}`}>
								<img src={Store} alt="Store" />
							</div>
						</div>
					</div>
					<div>
						<div className={`${CheckoutStyles['details-section']} ${CheckoutStyles['order-detail-no-border']}`}>
							<div className={`${CheckoutStyles['details-row']}`}>
								<div className={`${CheckoutStyles.icon} ${CheckoutStyles['icon-18']}`}>
									<img src={Store} alt="Store" />
								</div>
								<div className={`${CheckoutStyles.content}`}>
									<div className={`${CheckoutStyles['space-between']} ${CheckoutStyles['flex-start']}`}>
										<p className={`${CheckoutStyles['small-title']}`}>Store</p>
									</div>
									<div className={`${CheckoutStyles['time-text']}`}>
										Store name
									</div>
								</div>
							</div>
						</div>
						<div className={`${CheckoutStyles['details-section']} ${CheckoutStyles['order-detail-no-border']}`}>
							<div className={`${CheckoutStyles['details-row']}`}>
								<div className={`${CheckoutStyles.icon} ${CheckoutStyles['icon-18']}`}>
									<img src={Time} alt="Time" />
								</div>
								<div className={`${CheckoutStyles.content}`}>
									<div className={`${CheckoutStyles['space-between']} ${CheckoutStyles['flex-start']}`}>
										<p className={`${CheckoutStyles['small-title']}`}>Delivery time</p>
									</div>
									<div className={`${CheckoutStyles['time-text']}`}>
										Today, 14:00 - 16:00
									</div>
								</div>
							</div>
						</div>
						<div className={`${CheckoutStyles['details-section']} ${CheckoutStyles['order-detail-no-border']}`}>
							<div className={`${CheckoutStyles['details-row']}`}>
								<div className={`${CheckoutStyles.icon}`}>
									<img src={Pin} alt="Map" />
								</div>
								<div className={`${CheckoutStyles.content}`}>
									<div className={`${CheckoutStyles['space-between']} ${CheckoutStyles['flex-start']}`}>
										<p className={`${CheckoutStyles['small-title']}`}>Delivery address</p>
									</div>
									<div className={`${CheckoutStyles['time-text']}`}>
										Maasstraat 77, 1078 LT, Amsterdam
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles['hide-in-desktop']}`}>
						<Button className="btn-block">Go to my orders</Button>
					</div>
					<div className={`${styles['summary-details']}`}>
						<div className={`${CheckoutStyles['order-summary-box']}`}>
							<h4 className={`${CheckoutStyles['mb-0']} ${styles['summary-title']}`}>Order summary</h4>
							<div className={`${CheckoutStyles.listing} ${styles['summary-listing']}`}>
								<div className={`${CheckoutStyles.list} ${styles['summary-list']}`}>
									<ProductCardCartlist 
										categoriesname="Tout Patisserie" 
										ProductImg={Product1}
										title="Lorem ipsum is placeholder"
										Price="&euro;20.00"
										Qtytext="2x &euro;10.00"
									/>
								</div>
								<div className={`${CheckoutStyles.list} ${styles['summary-list']}`}>
									<ProductCardCartlist 
										categoriesname="Tout Patisserie" 
										ProductImg={Product1}
										title="Lorem ipsum is placeholder"
										Price="&euro;20.00"
										Qtytext="2x &euro;10.00"
									/>
								</div>
								<div className={`${CheckoutStyles.list} ${styles['summary-list']}`}>
									<ProductCardCartlist 
										categoriesname="Tout Patisserie" 
										ProductImg={Product1}
										title="Lorem ipsum is placeholder"
										Price="&euro;20.00"
										Qtytext="2x &euro;10.00"
									/>
								</div>
							</div>
							<div className={`${CheckoutStyles['total-section']} ${styles['summary-total']}`}>
								<div className={`${CheckoutStyles['space-between']}`}>
									<p className={`${CheckoutStyles['sm-text']} text-16`}>
										Subtotal
									</p>
									<p className={`${CheckoutStyles['sm-text']} text-16`}>
										&euro;20.00
									</p>
								</div>
								<div className={`${CheckoutStyles['space-between']}`}>
									<p className={`${CheckoutStyles['sm-text']} text-16`}>
										Delivery
									</p>
									<p className={`${CheckoutStyles['sm-text']} text-16`}>
										&euro;2.00
									</p>
								</div>
								<div className={`${CheckoutStyles['space-between']}`}>
									<p className={`${CheckoutStyles['sm-text']} text-16 text-primary`}>
										Discount
									</p>
									<p className={`${CheckoutStyles['sm-text']} text-16 text-primary`}>
										- &euro;2.00
									</p>
								</div>
								<div className={`${CheckoutStyles['space-between']}`}>
									<p className="text-16 text-16-semibold">
										Total
									</p>
									<p className="text-16 text-16-semibold">
										&euro;20.00
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> 
        </div>
    </>
  );
}
