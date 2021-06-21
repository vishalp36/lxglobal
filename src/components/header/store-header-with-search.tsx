import React from "react";

import MobileNav from "./store-header-mobile-search";


export default function StoreHeaderWithSearch() {
  return (
    <>
      <MobileNav
        backLink="/"
        categotyName="Store name"
        className="shadow"
      />
    </>
  );
}
