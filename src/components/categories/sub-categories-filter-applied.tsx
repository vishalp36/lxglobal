import React from "react";


// Components
import TopNav from "../header/category-header";
import BottomNav from "../bottom-nav";
import SubCategoriesList from "./sub-categories-list";
import CategoryFilterApplied from "./category-filter-applied";
import SubCategoryStores from "./sub-category-stores";
import SubCategoryProducts from "./sub-category-products";
import Breadcrumbs from "./breadcrumbs";


export default function SubCategoriesFilterApplied() {
  return (
    <>
      <TopNav />
      <Breadcrumbs />
      <SubCategoriesList />
      <CategoryFilterApplied />
      <SubCategoryProducts
        productSectionTitle="Groceries"
        className="product-one"
      />
      <SubCategoryProducts
        productSectionTitle="Delicatessen"
        className="product-two"
      />
      <SubCategoryProducts
        productSectionTitle="Beer & Wine"
        className="product-three"
      />
      <SubCategoryProducts
        productSectionTitle="Coffee & Tea"
        className="product-four"
      />
      <SubCategoryProducts
        productSectionTitle="Chocolates & Patisserie"
        className="product-five"
      />

      <SubCategoryStores />
      <BottomNav />
    </>
  );
}
