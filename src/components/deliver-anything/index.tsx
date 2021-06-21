import React from "react";
//buttons
import Button from "../button";

// Components
import TopNav from "../header/header-with-back-icon";

import BottomNav from "../bottom-nav";
import DeliverAnythingBanner from "./banner";
import OrderSummaryDetails from "./order-summary-details";
import DeliveryAddressDetails from "./delivery-address-details";
import DeliveryTimeDetails from "./delivery-time-details";
import PackageDetails from "./package-details";
import Checkoutstyles from '../checkout/styles.scss';
import styles from './styles.scss';

export default function DeliverAnything() {
  return (
    <>
        <TopNav MobileclassName= "display-none"/>
        <div className={`${styles['deliver-anything-section']}`}>
            <DeliverAnythingBanner />
            <div className={`${styles['details-container']} container`}>
                <div className={`${Checkoutstyles['checkout-row']}`}>
                    <div className={`${Checkoutstyles['left-col']}`}>
                        <PackageDetails />
                        <DeliveryAddressDetails />
                        <DeliveryTimeDetails />
                        <div>
                            <Button className="btn-block">
                                Add to cart  -  €11.25
                            </Button>
                        </div>
                    </div>
                    <div className={`${Checkoutstyles['right-col']}`}>
                        <div className={`${Checkoutstyles['pos-sticky']}`}>
                            <OrderSummaryDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <BottomNav  />
    </>
  );
}
