import React from "react";
//buttons
import Button from "../button";

// Components
import TopNav from "../header/cart-header";
import EmptyCartBox from "./empty-cart-box";
import Breadcrumbs from "../categories/breadcrumbs";
import FinalCategoryTitle from "../categories/final-category-title";
import CategoryFilter from "../categories/category-filter";
import FinalCategoryProducts from "../categories/final-category-products";

import BottomNav from "../bottom-nav";


import styles from './styles.scss';





export default function Cart() {
  return (
    <>
      <TopNav />
      <div className={`${styles['visible-only-desktop']}`}>
        <div className="container">
          <EmptyCartBox className="active-box" />
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
        <div className={`${styles['empty-cart-section']}`}>
			<h4 className={`${styles['empty-cart-title']}`}>Lorem ipsum is a placeholder</h4>
            <p className={`${styles['empty-cart-inst']}`}>Lorem ipsum is a common placeholder text used to fill the space.</p>
			<Button element="a" href="/">Start shopping</Button>
		</div>
      </div> 
      <BottomNav />
    </>
  );
}
