import React from "react";
//buttons
import Button from "../button";
import ProductCardCartlist from '../product-card-card-list/product-card-list-no-img';


import Checkoutstyles from '../checkout/styles.scss';

import styles from './styles.scss';

export default function OrderSummaryDetailsCart() {
  return (
    <>
        <div className={`${Checkoutstyles['order-summary-box']} ${styles['deliver-anything-box']}`}>
            <h4>Deliver anything</h4>
            <div className={`${Checkoutstyles.listing} ${styles['deliver-anything-listing']}`}>
                <div className={`${Checkoutstyles.list} ${styles['deliver-anything-list']}`}>
                    <ProductCardCartlist 
                        title="Package"
                        Price="€11.25"
                        QtyclassName="btn-sm-icon"
                    />
                </div>
                <div className={`${Checkoutstyles.list} ${styles['deliver-anything-list']}`}>
                    <ProductCardCartlist 
                        title="Package"
                        Price="€11.25"
                        QtyclassName="btn-sm-icon"
                    />
                </div>
                <div className={`${Checkoutstyles.list} ${styles['deliver-anything-list']}`}>
                    <ProductCardCartlist 
                        title="Package"
                        Price="€11.25"
                        QtyclassName="btn-sm-icon"
                    />
                </div>
            </div>
            <div className={`${Checkoutstyles['min-h-box']}`} />
                <div className={`${Checkoutstyles['fix-checkout-footer']}`}>
                    <div className={`${Checkoutstyles['space-between']}`}>
                        <p className="text-14">
                            Total without delivery
                        </p>
                        <p className={`${styles.price} text-16`}>
                            &euro;11.25
                        </p>
                    </div>
                    <Button className="btn-block">Order</Button>
                </div>
        </div>
    </>
  );
}
