import React from "react";
//buttons
import Button from "../button";

// Components
import TopNav from "../header/header-with-back-icon";
import BottomNav from "../bottom-nav";
import OrderSummaryBox from "./order-summary-box";
import DeliveryDetails from "./delivery-details/delivery-details-non-signed-in";
import PaymentDetails from "./payment-details/payment-details";
import Back from "../product-details/images/back-arrow.svg";
import styles from './styles.scss';



export default function Checkout() {
  return (
    <>
        <TopNav />
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
                        <p className={`${styles['light-text']} text-14`}>
                            Delivery
                        </p>
                        <p className={`${styles.price} text-14`}>
                            &euro;1.25
                        </p>
                    </div>
                    <div className={`${styles['space-between']}`}>
                        <p className={`${styles['sm-text']} text-14`}>
                            Total
                        </p>
                        <p className={`${styles['total-price']} text-16`}>
                            &euro;12.50
                        </p>
                    </div>
                    <Button className="btn-block">Place order</Button>
                </div>
            </div>
        </div>        
        <BottomNav  />
    </>
  );
}
