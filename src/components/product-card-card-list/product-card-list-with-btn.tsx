import React, { Children } from "react";
//buttons
import Button from "../button";
import { getExtraClasses } from "../../utils/common";
import CartIcon from "../../resources/svg-icons/cart.svg";

import styles from "./styles.scss";


export default function ProductCardCartlist(props) {
  const {
    className,
    categoriesname,
    ProductImg,
    title,
    Price,
    Qtytext,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
        <div className={`${styles["product-list"]} ${extraClasses}`}>
            <div className={`${styles["product-img"]}`}>
                <img src={ProductImg} alt="Product" />
            </div>
            <div className={`${styles["product-content"]}`}>
                <div className={`${styles["space-between"]}`}>
                    <div className={`${styles["d-grid"]}`}>
                        <p className={`${styles["cat-name"]} text-truncate`}>{categoriesname}</p>
                        <h6 className={`${styles.title} text-truncate`}>{title}</h6>
                    </div>
                    <div className={`${styles["d-flex"]}`}>
                        <span className={`${styles.price}`}>{Price}</span>
                        <div className={`${styles['btn-cart']}`}>
                            <Button className="btn-icon">
                                <img src={CartIcon} alt="cart" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
                
                