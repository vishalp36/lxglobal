import React from "react";
//buttons
import Button from "../button";

// Components
import TopNav from "../header/checkout-header-onscroll";
import BottomNav from "../bottom-nav";
import OrderSummaryBox from "./order-summary-box";
import DeliveryDetails from "./delivery-details/delivery-details-expanded";
import PaymentDetails from "./payment-details/payment-details-expanded";
import Back from "../product-details/images/back-arrow.svg";
import styles from './styles.scss';



export default function Checkout() {
  return (
    <>
        <TopNav headertext="Delivery details" />
        <div className={`${styles['checkout-container']} container`}>
            <div className={`${styles['desktop-back-btn']}`}>
                <Button element="a" href="/" className="btn-left-icon btn-link">
                    <img src={Back} alt="Back" />
                    Back
                </Button>
            </div>
            <div className={`${styles['checkout-row']}`}>
                <div className={`${styles['left-col']}`}>
                    <DeliveryDetails />
                    <PaymentDetails />
                    <div className={`${styles['btn-section']}`}>
                        <Button className="btn-block">
                            Place order
                        </Button>
                    </div>
                </div>
                <div className={`${styles['right-col']}`}>
                    <div className={`${styles['pos-sticky']}`}>
                        <OrderSummaryBox />
                    </div>
                </div>
            </div>
            <div className={`${styles['hide-in-desktop']}`}>
                <div className={`${styles['min-h-box']}`} />
                <div className={`${styles['fix-checkout-footer']}`}>
                    <div className={`${styles['space-between']}`}>
                        <p className={`${styles['sm-text']} text-14`}>
                            Total
                        </p>
                        <p className={`${styles['total-price']} text-16`}>
                            &euro;11.25
                        </p>
                    </div>
                    <Button className="btn-block">Pay</Button>
                </div>
            </div>
        </div>
        <BottomNav  />
    </>
  );
}
