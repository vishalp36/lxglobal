import React from "react";
//buttons
import Button from "../button";
import Badge from '../badge';

// Components
import TopNav from "../header/checkout-header-onscroll";
import OrderSummaryBox from "../checkout/order-summary-box-with-checkbox";

import Back from "../product-details/images/back-arrow.svg";
import Time from "../checkout/images/time.svg";
import Time2 from "../checkout/images/time2.svg";
import Pin from "../checkout/images/pin.svg";
import Cycle from "../checkout/images/cycle.svg";
import Orderstyles from '../order-status/styles.scss';
import CheckoutStyles from "../checkout/styles.scss";
import BottomNav from "../bottom-nav";
import Notification from "../notification";


export default function StoreOrderHistory() {
  return (
    <>
        <TopNav headertext="My orders" />
        <div className={`${Orderstyles['order-status-container']} container`}>
            <div className={`${Orderstyles['desktop-back-btn']}`}>
                <Button element="a" href="/" className="btn-left-icon btn-link">
                    <img src={Back} alt="Back" />
                    My orders
                </Button>
            </div>
			<div className={`${CheckoutStyles['checkout-row']}`}>
                <div className={`${CheckoutStyles['left-col']}`}>
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
                    <div className={`${Orderstyles['btn-section']} ${CheckoutStyles['hide-in-mobile']}`}>
                        <Button className="btn-block mb-1">Accept order</Button>
                        <Button className="btn-block btn-link">Reject &amp; refund order</Button>
                    </div>
                </div>
                <div className={`${CheckoutStyles['right-col']} ${CheckoutStyles['mobile-box']}`}>
                    <div className={`${CheckoutStyles['pos-sticky']}`}>
						<h3 className={`${CheckoutStyles['box-mobile-title']}`}>Order summary</h3>
						<Notification
							notificationtext="Prepare these items with the order number clearly labeled for the courier."	
						/>
                        <OrderSummaryBox />
                    </div>
					<div className={`${Orderstyles['btn-section']} ${CheckoutStyles['hide-in-desktop']}`}>
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
