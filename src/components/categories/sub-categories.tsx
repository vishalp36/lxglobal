import React from "react";


// Components
import TopNav from "../header/category-header";
import BottomNav from "../bottom-nav";
import SubCategoriesList from "./sub-categories-list";
import CategoryFilter from "./category-filter";
import SubCategoryStores from "./sub-category-stores";
import SubCategoryProducts from "./sub-category-products";
import Breadcrumbs from "./breadcrumbs";


export default function SubCategories() {
  return (
    <>
      <TopNav />
      <Breadcrumbs />
      <SubCategoriesList />
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
