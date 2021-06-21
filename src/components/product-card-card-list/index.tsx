import React, { Children } from "react";
import { getExtraClasses } from "../../utils/common";
import Button from "../button";
import Quantity from '../quantity-box';
import Close from "./images/close.svg";
import styles from "./styles.scss";
import btnstyles from "../button/styles.scss";

export default function ProductCardCartlist(props) {
  const {
    className,
    categoriesname,
    ProductImg,
    title,
    Price,
    QtyclassName,
    oldprice,
    PriceclassName,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  let quantityClasses = getExtraClasses(btnstyles, QtyclassName);
  let priceClasses = getExtraClasses(styles, PriceclassName);
  return (
    <>
        <div className={`${styles["product-list"]} ${extraClasses}`}>
            <div className={`${styles["product-img"]}`}>
                <img src={ProductImg} alt="Product" />
            </div>
            <div className={`${styles["product-content"]}`}>
                <div className={`${styles["d-grid"]}`}>
                    <p className={`${styles["cat-name"]} text-truncate`}>{categoriesname}</p>
                    <div className={`${styles["btn-remove"]}`}>
                        <Button className="btn-link btn-link-icon">
                            <img src={Close} alt="remove" />
                        </Button>
                    </div>
                </div>
                <h6 className={`${styles.title} text-truncate`}>{title}</h6>
                <div className={`${styles["space-between"]}`}>
                    <Quantity 
						value="1" 
						btnclassName={`${quantityClasses} btn-xs-icon `} 
					/>
                    <p className={`${styles.price} ${priceClasses}`}>
                        <span className={`${styles["price-text"]}`}>{oldprice}</span>
                        {Price}
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}
