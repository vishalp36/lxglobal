import React from "react";
import { Link } from "react-router-dom";

// Components
import TopNav from "../header/final-category-scroll-header";
import StickySortbyPagination from "./sticky-sortby-pagination";
import Breadcrumbs from "./breadcrumbs";
import FinalCategoryTitle from "./final-category-title";
import CategoryFilter from "./category-filter";
import FinalCategoryProducts from "./final-category-products";
import Pagination from "../pagination";
import ScrollToTop from "../scroll-to-top";
import BottomNav from "../bottom-nav";


//styles
import styles from "./styles.scss";

export default function FinalCategoryScroll() {
  return (
    <>
      <TopNav />
      <StickySortbyPagination />
      <Breadcrumbs />
      <FinalCategoryTitle finalTitle="Final category" className="mt-80px" />
      <CategoryFilter className="final-category-filter-section" />
      <FinalCategoryProducts />
      <Pagination className={`${styles["pagination-section"]}`} />
      <ScrollToTop targetelement="#app" />
      <BottomNav />
    </>
  );
}
