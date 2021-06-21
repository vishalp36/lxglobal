import React from "react";
import { Link } from "react-router-dom";

// Components
import TopNav from "../header/category-header";
import BottomNav from "../bottom-nav";
import SubCategoriesListNoSwiperExpanded from "./sub-categories-list-no-swiper-list-expand";
import CategoryFilter from "./category-filter";
import SubCategoryStores from "./sub-category-stores";
import SubCategoryProducts from "./sub-category-products";
import Breadcrumbs from "./breadcrumbs";




export default function SubCategories() {
  return (
    <>
      <TopNav />
      <Breadcrumbs />
      <SubCategoriesListNoSwiperExpanded />
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
