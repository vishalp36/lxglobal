import React from "react";


import TopNav from "../header/cart-header";

import BottomNav from "../bottom-nav";

import OrderSummaryDetailsCart from "./delivery-anything-cart-mobile";

import styles from './styles.scss';

// only for mobile and tablet
export default function DeliverAnything() {
  return (
    <>
        <TopNav />
        <div className={`${styles['deliver-anything-section']} ${styles['deliver-anything-cart']}`}>
            <div>
                <OrderSummaryDetailsCart />
            </div>
        </div> 
        <BottomNav  />
    </>
  );
}
