import React from "react";
import { Link } from "react-router-dom";

// Components
import TopNav from "../header/category-header";
import Breadcrumbs from "./breadcrumbs";
import FinalCategoryTitle from "./final-category-title";
import FinalCategoryProducts from "./final-category-products";
import StoreList from "./store-list";
import BottomNav from "../bottom-nav";

//styles
import styles from "./styles.scss";

export default function FinalCategory() {
  return (
    <>
      <TopNav />
      <Breadcrumbs />
      <FinalCategoryTitle finalTitle="Favourite products" />
      <FinalCategoryProducts />
      <StoreList />
      <BottomNav />
    </>
  );
}
