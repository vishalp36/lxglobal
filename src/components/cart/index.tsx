import React from "react";
//buttons
import Button from "../button";

// Components
import TopNav from "../header/login-with-mega-menu";
import AddtoCartBox from "./cart-box";
import Breadcrumbs from "../categories/breadcrumbs";
import FinalCategoryTitle from "../categories/final-category-title";
import CategoryFilter from "../categories/category-filter";
import FinalCategoryProducts from "../categories/final-category-products";
import CartList from "./cart-list-section-mobile";
import BottomNav from "../bottom-nav";
import ProductSmallSliderwithBorder from "../store-card/product-silder-with-border";

import styles from './styles.scss';





export default function Cart() {
  return (
    <>
      <TopNav />
      <div className={`${styles['visible-only-desktop']}`}>
        <div className="container">
          <AddtoCartBox className="active-box" />
        </div>
      </div>
	  {/* Here comes any pages content */}
      <div className={`${styles['visible-only-desktop']}`}>
        <Breadcrumbs />
        <FinalCategoryTitle finalTitle="Final category" />
        <CategoryFilter className="final-category-filter-section" />
        <FinalCategoryProducts />
      </div>
	  {/* mobile design */}
      <div className={`${styles['cart-content-section']} ${styles['hide-in-desktop']}`}>
        <div className={`${styles['slider-section']}`}>
			<h3 className={`${styles['slider-title']} h4`}>You always buy</h3>
			<ProductSmallSliderwithBorder />
		</div>
        <CartList />
		<div className={`${styles['min-h-box']}`} />
		<div className={`${styles['fix-cart-footer']}`}>
			<div className={`${styles['space-between']}`}>
				<p className={`${styles.inst}`}>Total without delivery</p>
				<p className={`${styles.price}`}>
          <span className={`${styles["old-price"]}`}>€11.25</span>
          <span className={`${styles["new-price"]}`}>€11.25</span>
        </p>
			</div>
			<Button className="btn-block">Order</Button>
		</div>
      </div> 
      <BottomNav  />
    </>
  );
}
