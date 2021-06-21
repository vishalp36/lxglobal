import React from "react";

import ProductCardCartlist from '../product-card-card-list/product-card-list-no-qty';
import Checkbox from '../input/checks-radios/checkbox';
import Product1 from "../product-details/images/product.png";

import styles from './styles.scss';


export default function OrderSummaryBox() {
  return (
    <>
        <div className={`${styles['order-summary-box']}`}>
            <h4 className={`${styles['mb-0']} ${styles['box-title']}`}>Order summary</h4>
            <div className={`${styles.listing}`}>
                <div className={`${styles.list}`}>
                    <Checkbox type="checkbox" id="1" name="checkbox" className="full-w">
                        <ProductCardCartlist 
                            className="prod-img-52"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="&euro;20.00"
                            Qtytext="2x &euro;10.00"
                        />
                    </Checkbox>
                </div>
                <div className={`${styles.list}`}>
                    <Checkbox type="checkbox" id="2" name="checkbox" className="full-w">
                        <ProductCardCartlist 
                            className="prod-img-52"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="&euro;20.00"
                            Qtytext="2x &euro;10.00"
                        />
                    </Checkbox>
                </div>
                <div className={`${styles.list}`}>
                    <Checkbox type="checkbox" id="3" name="checkbox" className="full-w">
                        <ProductCardCartlist 
                            className="prod-img-52"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="&euro;20.00"
                            Qtytext="2x &euro;10.00"
                        />
                    </Checkbox>
                </div>
                <div className={`${styles.list}`}>
                    <Checkbox className="flex-start full-w" type="checkbox" id="4" name="checkbox">
                        <span>
                            Receipt
                        </span>
					</Checkbox>
                </div>
            </div>
            <div className={`${styles['total-section']}`}>
                <div className={`${styles['space-between']}`}>
                    <p className={`${styles['sm-text']} text-16`}>
                        Subtotal
                    </p>
                    <p className={`${styles['sm-text']} text-16`}>
                        €20.00
                    </p>
                </div>
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
