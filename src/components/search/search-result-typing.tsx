import React from "react";
import Button from "../button";

// Components
import TopNav from "../header/header-search-with-typing";
import Breadcrumbs from "../categories/breadcrumbs-4";
import SubCategoriesList from "../categories/sub-categories-list-3";
import CategoryFilter from "../categories/category-filter";
import SubCategoryProducts from "../categories/sub-category-products";
import FeaturedStores from "../home/home-featured-stores";
import BottomNav from "../bottom-nav";

//styles
import styles from "./styles.scss";


export default function SearchResult() {
  return (
    <>
      <TopNav MobileclassName="active" />
      <Breadcrumbs
        breadcrumblink1="Home"
        breadcrumblink2="Search results"
      />
	  	<div className={`${styles['result-container']} ${styles['result-search-typing']}`}>
		  	<SubCategoryProducts
				productSectionTitle="Products"
			/>
			<div>
				<SubCategoriesList
					className="categories-list-pad" 
				/>
			</div>
			<CategoryFilter className="final-category-filter-section" />
			<FeaturedStores />
		</div>
    <BottomNav />
    </>
  );
}
