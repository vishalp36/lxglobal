import React from "react";

import ProductCardCartlist from '../product-card-card-list/product-card-list-no-img';

import Product1 from "../product-details/images/product.png";

import Checkoutstyles from '../checkout/styles.scss';


export default function OrderSummaryDetails() {
  return (
    <>
        <div className={`${Checkoutstyles['order-summary-box']}`}>
            <h4 className={`${Checkoutstyles['mb-0']}`}>Order summary</h4>
            <div className={`${Checkoutstyles.listing}`}>
                <div className={`${Checkoutstyles.list}`}>
                    <ProductCardCartlist 
                        title="Package"
                        Price="€11.25"
                    />
                </div>
                <div className={`${Checkoutstyles.list}`}>
                    <ProductCardCartlist 
                        title="Package"
                        Price="€11.25"
                    />
                </div>
            </div>
            <div className={`${Checkoutstyles['total-section']}`}>
                <div className={`${Checkoutstyles['space-between']}`}>
                    <p className="text-16 text-16-semibold">
                        Total
                    </p>
                    <p className="text-16 text-16-semibold">
                        €20.00
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}
