import React from "react";
import { Link } from "react-router-dom";

// Components
import ProductCardCartlist from '../product-card-card-list';
import Product1 from "../product-details/images/product.png";


import styles from './styles.scss';



export default function CartList() {
  return (
    <>
       <div className={`${styles['cart-list-container']}`}>
            <div>
                <h3 className="h4 text-truncate">Category name</h3>
                <div className={`${styles['list-section']}`}>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="h4 text-truncate">Category name</h3>
                <div className={`${styles['list-section']}`}>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            oldprice="€11.25"
                            PriceclassName="new-price"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                    <div className={`${styles.list}`}>
                        <ProductCardCartlist 
                            className="mobile-card-list"
                            categoriesname="Tout Patisserie" 
                            ProductImg={Product1}
                            title="Lorem ipsum is placeholder"
                            Price="€11.25"
                            QtyclassName="btn-sm-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
