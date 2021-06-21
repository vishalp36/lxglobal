import React from "react";

import ProductCardCartlist from '../product-card-card-list';

import Product1 from "../product-details/images/product.png";

import styles from './styles.scss';


export default function OrderSummaryBox() {
  return (
    <>
        <div className={`${styles['order-summary-box']}`}>
            <h4 className={`${styles['mb-0']}`}>Order summary</h4>
            <div className={`${styles.listing}`}>
                <div className={`${styles.list}`}>
                    <ProductCardCartlist 
                        categoriesname="Tout Patisserie" 
                        ProductImg={Product1}
                        title="Lorem ipsum is placeholder"
                        Price="€11.25"
                    />
                </div>
                <div className={`${styles.list}`}>
                    <ProductCardCartlist 
                        categoriesname="Tout Patisserie" 
                        ProductImg={Product1}
                        title="Lorem ipsum is placeholder"
                        Price="€11.25"
                    />
                </div>
                <div className={`${styles.list}`}>
                    <ProductCardCartlist 
                        categoriesname="Tout Patisserie" 
                        ProductImg={Product1}
                        title="Lorem ipsum is placeholder"
                        Price="€11.25"
                    />
                </div>
            </div>
            <div className={`${styles['total-section']}`}>
                <div className={`${styles['space-between']}`}>
                    <p className={`${styles['sm-text']} text-16`}>
                        Delivery
                    </p>
                    <p className={`${styles['sm-text']} text-16`}>
                        €2.00
                    </p>
                </div>
                <div className={`${styles['space-between']}`}>
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
