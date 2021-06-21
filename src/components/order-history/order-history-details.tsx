import React from "react";
//buttons
import Button from "../button";
import Badge from '../badge';

// Components
import TopNav from "../header/checkout-header-onscroll";
import Breadcrumbs from "../categories/breadcrumbs-3";

import ProductCardCartlist from '../product-card-card-list/product-card-list-no-qty';

import Product1 from "../product-details/images/product.png";
import Back from "../product-details/images/back-arrow.svg";
import Store from "../order-status/images/store.svg";
import Time from "../checkout/images/time.svg";
import Pin from "../checkout/images/pin.svg";
import MapImg from "../order-status/images/map.png";
import PinWhite from "../order-status/images/pin-white.svg";
import Orderstyles from '../order-status/styles.scss';
import CheckoutStyles from "../checkout/styles.scss";
import Styles from "./styles.scss";


export default function OrderHistory() {
  return (
    <>
        <TopNav headertext="My orders" />
        <div className={`${Styles['history-container']} ${Orderstyles['order-status-container']} container`}>
            <div className={`${Styles['breadcrumbs-section']}`}>
                <Breadcrumbs
                    className="breadcrumbs-space-0" 
                    breadcrumblink1="Home"
                    breadcrumblink2="Order history"
                    breadcrumblink3="Order #222245463"
                />
            </div>
			<div className={`${Orderstyles['order-details-container']}`}>
				<div>
					<div className={`${Orderstyles['space-between']} ${Orderstyles['flex-col']}`}>
						<div>
							<h3>Organic Food For You</h3>
							<p className="text-gray">Order number #222245463</p>
						</div>
						<Badge badgetext="Sent to store" className="badge-lg badge-success" />
					</div>
					<div>
						<Button className="btn-link">Download receipt</Button>
					</div>
				</div>
				<div>
					<div className={`${Orderstyles['map-section']}`}>
						<img src={MapImg} alt="Map" className={`${Orderstyles['map-image']}`} />
						<div className={`${Orderstyles['map-route']}`}>
							<div className={`${Orderstyles['icon-1']} ${Orderstyles['circle-44']} ${Orderstyles['circle-icon']}`}>
								<img src={PinWhite} alt="Location" />
							</div>
							<div className={`${Orderstyles['icon-2']} ${Orderstyles['circle-outline']} ${Orderstyles['circle-44']} ${Orderstyles['circle-icon']}`}>
								<img src={Store} alt="Store" />
							</div>
							<div className={`${Orderstyles['icon-3']} ${Orderstyles['circle-outline']} ${Orderstyles['circle-44']} ${Orderstyles['circle-icon']}`}>
								<img src={Store} alt="Store" />
							</div>
							<div className={`${Orderstyles['icon-4']} ${Orderstyles['circle-outline']} ${Orderstyles['circle-44']} ${Orderstyles['circle-icon']}`}>
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
					<div className={`${Orderstyles['summary-details']}`}>
						<div className={`${CheckoutStyles['order-summary-box']}`}>
							<h4 className={`${CheckoutStyles['mb-0']} ${Orderstyles['summary-title']}`}>Order summary</h4>
							<div className={`${CheckoutStyles.listing} ${Orderstyles['summary-listing']}`}>
								<div className={`${CheckoutStyles.list} ${Orderstyles['summary-list']}`}>
									<ProductCardCartlist 
										categoriesname="Tout Patisserie" 
										ProductImg={Product1}
										title="Lorem ipsum is placeholder"
										Price="&euro;20.00"
										Qtytext="2x &euro;10.00"
									/>
								</div>
								<div className={`${CheckoutStyles.list} ${Orderstyles['summary-list']}`}>
									<ProductCardCartlist 
										categoriesname="Tout Patisserie" 
										ProductImg={Product1}
										title="Lorem ipsum is placeholder"
										Price="&euro;20.00"
										Qtytext="2x &euro;10.00"
									/>
								</div>
								<div className={`${CheckoutStyles.list} ${Orderstyles['summary-list']}`}>
									<ProductCardCartlist 
										categoriesname="Tout Patisserie" 
										ProductImg={Product1}
										title="Lorem ipsum is placeholder"
										Price="&euro;20.00"
										Qtytext="2x &euro;10.00"
									/>
								</div>
							</div>
							<div className={`${CheckoutStyles['total-section']} ${Orderstyles['summary-total']}`}>
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
