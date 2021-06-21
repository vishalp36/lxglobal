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
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  let quantityClasses = getExtraClasses(btnstyles, QtyclassName);
  return (
    <>
        <div className={`${styles["product-list"]} ${extraClasses}`}>
            <div className={`${styles["product-content"]}`}>
                <div className={`${styles["d-grid"]}`}>
                    <h6 className={`${styles.title} text-truncate`}>{title}</h6>
                    <div className={`${styles["btn-remove"]}`}>
                        <Button className="btn-link btn-link-icon">
                            <img src={Close} alt="remove" />
                        </Button>
                    </div>
                </div>
                <div className={`${styles["space-between"]}`}>
                    <Quantity 
						value="1" 
						btnclassName={`${quantityClasses} btn-xs-icon `} 
					/>
                    <p className={`${styles.price}`}>{Price}</p>
                </div>
            </div>
        </div>
    </>
  );
}
