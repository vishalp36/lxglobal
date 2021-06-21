import React from "react";
import { Link } from "react-router-dom";

// Components
import TopNav from "../header/final-category-header";
import Breadcrumbs from "./breadcrumbs";
import FinalCategoryTitle from "./final-category-title";
import CategoryFilter from "./category-filter";
import FinalCategoryProducts from "./final-category-products";
import Pagination from "../pagination";
import BottomNav from "../bottom-nav";

//styles
import styles from "./styles.scss";

export default function FinalCategory() {
  return (
    <>
      <TopNav />
      <Breadcrumbs />
      <FinalCategoryTitle finalTitle="Final category" />
      <CategoryFilter className="final-category-filter-section" />
      <FinalCategoryProducts />
      <Pagination className={`${styles["pagination-section"]}`} />
      <BottomNav />
    </>
  );
}
