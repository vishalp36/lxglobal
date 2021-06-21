import React, { useState } from 'react';
import { getExtraClasses } from '../../utils/common';
//buttons
import Button from "../button";
import Product1 from "../product-details/images/product.png";
import CartIcon from "./images/cart.svg";
import DeleteIcon from "./images/delete.svg";
import ProductCardCartlist from '../product-card-card-list';
import styles from './cart-box.scss';

export default function AddtoCartBox(props) {
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
                                <span className={`${styles['price-text']}`}>€345.95</span>
                            </div>
                            <div>
                                <Button className="btn-link btn-link-icon">
                                    <img src={DeleteIcon} alt="remove" className={`${styles['delete-icon']}`} />
                                </Button>
                            </div>
                        </div>
                        <div className={`${styles['cart-list']}`}>
                            <div className={`${styles['overflow-scroll']}`}>
                                <div>
                                    <p className={`${styles['cat-name']} text-truncate`}>Category name</p>
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
                                </div>
                                <div>
                                    <p className={`${styles['cat-name']} text-truncate`}>Category name</p>
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
                                        <div className={`${styles.list}`}>
                                            <ProductCardCartlist 
                                            categoriesname="Tout Patisserie" 
                                            ProductImg={Product1}
                                            title="Lorem ipsum is placeholder"
                                            Price="€11.25"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles['min-h-64']}`} />
                            <div className={`${styles['box-footer']}`}>
                                <Button className="btn-block btn-sm">Order</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.overlay} ${openCart ? styles.open : ''}`} />
            </div>
		</>
	);
}

