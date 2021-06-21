import React, { useState } from 'react';
import { getExtraClasses } from '../../utils/common';
//buttons
import Button from "../button";
import Product1 from "../product-details/images/product.png";
import CartIcon from "./images/cart.svg";
import DeleteIcon from "./images/delete.svg";
import ProductCardCartlist from '../product-card-card-list';
import styles from './cart-box.scss';

export default function EmptyCartBox(props) {
    const {
		className,
	} = props;
    const [openCart, setOpenCart] = useState(false);
	const toggleCart = () => {
		setOpenCart(!openCart);
	};
	let extraClasses = getExtraClasses(styles, className);
	return (
		<>
            <div className={`${extraClasses}`}>
                <div className={`${styles['add-to-cart-box']}`}>
                    <div className={`${openCart ? styles['cart-open'] : ''}`}>
                        <div className={`${styles['top-header']}`} onClick={toggleCart}>
                            <div className={`${styles['flex-1']}`}>
                                <img src={CartIcon} alt="Cart" className={`${styles['cart-icon']}`} />
                                <span className={`${styles['price-text']}`}>€0</span>
                            </div>
                        </div>
                        <div className={`${styles['cart-list']} ${styles['empty-cart']}`}>
                            <div className={`${styles['overflow-scroll']}`}>
                                <h4 className={`${styles['empty-cart-title']}`}>Lorem ipsum is a placeholder</h4>
                                <p className={`${styles['empty-cart-inst']}`}>Lorem ipsum is a common placeholder text used to fill the space.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.overlay} ${openCart ? styles.open : ''}`} />
            </div>
		</>
	);
}

