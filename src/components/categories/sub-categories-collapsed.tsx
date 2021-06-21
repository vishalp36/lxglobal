import React from "react";

// Components
import TopNav from "../header/category-header";
import BottomNav from "../bottom-nav";
import SubCategoriesListNoSwiper from "./sub-categories-list-no-swiper";
import CategoryFilter from "./category-filter";
import SubCategoryStores from "./sub-category-stores";
import SubCategoryProducts from "./sub-category-products";
import Breadcrumbs from "./breadcrumbs";




export default function SubCategories() {
  return (
    <>
      <TopNav />
      <Breadcrumbs />
      <SubCategoriesListNoSwiper />
      <CategoryFilter />
      <SubCategoryProducts
        productSectionTitle="Groceries"
        className="product-one"
      />
      <SubCategoryProducts
        productSectionTitle="Delicatessen"
        className="product-two"
      />
      <SubCategoryProducts
        productSectionTitle="Beer &amp; Wine"
        className="product-three"
      />
      <SubCategoryProducts
        productSectionTitle="Coffee &amp; Tea"
        className="product-four"
      />
      <SubCategoryProducts
        productSectionTitle="Chocolates &amp; Patisserie"
        className="product-five"
      />

      <SubCategoryStores />
      <BottomNav />
    </>
  );
}
