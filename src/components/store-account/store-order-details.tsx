import React from "react";
//buttons
import Button from "../button";
import Badge from '../badge';

// Components
import TopNav from "../header/checkout-header-onscroll";


import ProductCardCartlist from '../product-card-card-list/product-card-list-no-qty';

import Product1 from "../product-details/images/product.png";
import Back from "../product-details/images/back-arrow.svg";
import Time from "../checkout/images/time.svg";
import Time2 from "../checkout/images/time2.svg";
import Pin from "../checkout/images/pin.svg";
import Cycle from "../checkout/images/cycle.svg";
import Orderstyles from '../order-status/styles.scss';
import CheckoutStyles from "../checkout/styles.scss";
import Styles from "./styles.scss";
import BottomNav from "../bottom-nav";


export default function StoreOrderHistory() {
  return (
    <>
        <TopNav headertext="My orders" />
        <div className={`${Styles['history-container']} ${Orderstyles['order-status-container']} container`}>
            <div className={`${Orderstyles['desktop-back-btn']}`}>
                <Button element="a" href="/" className="btn-left-icon btn-link">
                    <img src={Back} alt="Back" />
                    My orders
                </Button>
            </div>
			<div className={`${Orderstyles['order-details-container']}`}>
				<div>
					<div className={`${Orderstyles['space-between']} ${Orderstyles['flex-col']}`}>
						<div>
							<h3>New order #1737519361</h3>
							<p className="text-gray">Received March 25th, 10:11</p>
						</div>
						<Badge badgetext="Sent to store" className="badge-lg badge-success" />
					</div>
					<div>
						<Button className="btn-link">Download packingslip</Button>
					</div>
				</div>
				<div>
					<div>
						<div className={`${CheckoutStyles['details-section']} ${CheckoutStyles['order-detail-no-border']}`}>
							<div className={`${CheckoutStyles['details-row']}`}>
								<div className={`${CheckoutStyles.icon} ${CheckoutStyles['icon-18']}`}>
									<img src={Time} alt="Time" />
								</div>
								<div className={`${CheckoutStyles.content}`}>
									<div className={`${CheckoutStyles['space-between']} ${CheckoutStyles['flex-start']}`}>
										<p className={`${CheckoutStyles['small-title']}`}>Pickup time</p>
									</div>
									<div className={`${CheckoutStyles['time-text']}`}>
                                        Today, 12:00 - 14:00
									</div>
								</div>
							</div>
						</div>
						<div className={`${CheckoutStyles['details-section']} ${CheckoutStyles['order-detail-no-border']}`}>
							<div className={`${CheckoutStyles['details-row']}`}>
								<div className={`${CheckoutStyles.icon} ${CheckoutStyles['icon-18']}`}>
									<img src={Time2} alt="Time" />
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
                        <div className={`${CheckoutStyles['details-section']} ${CheckoutStyles['order-detail-no-border']}`}>
							<div className={`${CheckoutStyles['details-row']}`}>
								<div className={`${CheckoutStyles.icon} ${CheckoutStyles['icon-18']}`}>
									<img src={Cycle} alt="Cycle" />
								</div>
								<div className={`${CheckoutStyles.content}`}>
									<div className={`${CheckoutStyles['space-between']} ${CheckoutStyles['flex-start']}`}>
										<p className={`${CheckoutStyles['small-title']}`}>Courier</p>
									</div>
									<div className={`${CheckoutStyles['time-text']}`}>
                                        Courier Name
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`${Orderstyles['summary-details']} ${Orderstyles['pady-30']}`}>
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
                    <div className={`${Orderstyles['btn-section']}`}>
                        <Button className="btn-block mb-1">Accept order</Button>
                        <Button className="btn-block btn-link">Reject &amp; refund order</Button>
                    </div>
				</div>
			</div> 
        </div>
        <BottomNav />
    </>
  );
}
