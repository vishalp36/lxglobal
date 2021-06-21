import React from "react";


// Components
import TopNav from "../header/category-header";
import BottomNav from "../bottom-nav";
import SubCategoriesListOpen from "./sub-categories-list-open";
import CategoryFilter from "./category-filter";
import SubCategoryStores from "./sub-category-stores";
import SubCategoryProducts from "./sub-category-products";
import Breadcrumbs from "./breadcrumbs";


export default function SubCategoriesOpenDropdown() {
  return (
    <>
      <TopNav />
      <Breadcrumbs />
      <SubCategoriesListOpen />
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
