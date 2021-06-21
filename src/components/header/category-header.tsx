import React from "react";

import TopNav from "../header/with-mega-menu";
import MobileNav from "./category-header-mobile";


export default function CategoryHeader() {
  return (
    <>
      <TopNav className="category-header-desktop" />
      <MobileNav backLink="/" />
    </>
  );
}
