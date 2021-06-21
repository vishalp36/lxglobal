import React from "react";
import Button from "../button";

// Components
import TopNav from "../header/category-header";
import Breadcrumbs from "../categories/breadcrumbs-4";
import SubCategoriesList from "../categories/sub-categories-list-3";
import CategoryFilter from "../categories/category-filter";
import FinalCategoryProducts from "../categories/final-category-products";
import FeaturedStores from "../home/feature-store-slider";
import BottomNav from "../bottom-nav";

//styles
import styles from "./styles.scss";


export default function SearchResult() {
  return (
    <>
      <TopNav />
      <Breadcrumbs
        breadcrumblink1="Home"
        breadcrumblink2="Search results"
      />
	  	<div className={`${styles['result-container']}`}>
			<div className="container">
				<div className={`${styles['store-slider']} no-slider-in-mobile`}>
				<h2 className={`${styles.title}`}>Search request</h2>
				<FeaturedStores />
				<div className={`${styles["show-more-link"]}`}>
					<Button
					element="a"
					href="/"
					className="btn-link-underline btn-link"
					>
					Show all 14 stores
					</Button>
				</div>
				</div>
			</div>
			<div className={`${styles['display-only-desktop']}`}>
				<SubCategoriesList />
			</div>
			<CategoryFilter className="final-category-filter-section" />
			<FinalCategoryProducts />
	  	</div>
    <BottomNav />
    </>
  );
}
