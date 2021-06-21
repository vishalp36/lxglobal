import React, { Children } from "react";
import { getExtraClasses } from "../../utils/common";
import { Link } from "react-router-dom";

import Button from "../button";
import WishIcon from "../input/checks-radios/heart";
import CartIcon from "../../resources/svg-icons/cart.svg";
import Plus from "../../resources/svg-icons/plus.svg";
import styles from "./styles.scss";

export default function ProductCard(props) {
  const {
    id,
    children,
    className,
    priceclassName,
    image,
    storename,
    title,
    price,
    newprice,
    weight,
    disabledbtn,
    defaultWish,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  let newpriceClasses = getExtraClasses(styles, priceclassName);
  return (
    <>
      <div className={`${styles["product-card"]} ${extraClasses}`}>
        <div>
          <div className={`${styles["product-top"]}`}>
            <Link to="/" className={`${styles["product-img"]}`}>
              <img src={image} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id={id} checked={defaultWish} />
            </div>
            <div className={`${styles.weight}`}>{weight}</div>
            {children}
          </div>
          <div className={`${styles["product-info"]}`}>
            <p className={`${styles["store-name"]}`}>
              <Link to="/">{storename}</Link>
            </p>
            <h4 className={`${styles.title}`}>
              <Link to="/">{title}</Link>
            </h4>
          </div>
        </div>
        <div className={`${styles["space-between"]}`}>
          <div className={`${newpriceClasses}`}>
            <span className={`${styles.price}`}>{price}</span>
            {/* Conditional Rendering */}
            <span className={`${styles["new-price"]}`}>{newprice}</span>
          </div>
          <div>
            <Button className="btn-icon" disabled={disabledbtn}>
              <img
                src={CartIcon}
                alt="cart"
                className={`${styles["cart-icon"]}`}
              />
              <img src={Plus} alt="Add" className={`${styles["add-icon"]}`} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
