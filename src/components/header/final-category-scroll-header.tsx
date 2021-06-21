import React from "react";

import TopNav from "../header/with-mega-menu";
import MobileNav from "./category-header-mobile";


export default function FinalCategoryHeaderScroll() {
  return (
    <>
      <TopNav className="category-header-desktop" />
      <MobileNav
        backLink="/"
        backLinkText="Sub-subcategory"
        categotyName="Category name"
        className="final-category-scroll-header-mobile"
      />
    </>
  );
}
