import React, { Children } from "react";
import { getExtraClasses } from "../../utils/common";

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
                <div className={`${styles["d-grid"]}`}>
                    <p className={`${styles["cat-name"]} text-truncate`}>{categoriesname}</p>
                </div>
                <h6 className={`${styles.title} text-truncate`}>{title}</h6>
                <div className={`${styles["space-between"]}`}>
                    <p className={`${styles['qty-text']}`}>{Qtytext}</p>
                    <p className={`${styles.price} ${styles['light-text']}`}>{Price}</p>
                </div>
            </div>
        </div>
    </>
  );
}
