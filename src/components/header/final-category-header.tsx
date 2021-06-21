import React from "react";

import TopNav from "../header/with-mega-menu";
import MobileNav from "./category-header-mobile";




export default function FinalCategoryHeader() {
  return (
    <>
      <TopNav className="category-header-desktop" />
      <MobileNav
        backLink="/"
        backLinkText="Sub-subcategory"
        className="final-category-header-mobile"
      />
    </>
  );
}
