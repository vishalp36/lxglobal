import React from "react";
// Components
import TopNav from "../header/header-with-back-icon";
import BottomNav from "../bottom-nav";
import ProductDetailsContent from "./product-details-with-qty";
import RelatedProducts from "./related-product";
import Breadcrumbs from "../categories/breadcrumbs-2";


export default function ProductDetails() {
  return (
    <>
      <TopNav />
      <Breadcrumbs />
      <ProductDetailsContent />
      <RelatedProducts
        productSectionTitle="Related products"
      />
      <BottomNav />
    </>
  );
}
