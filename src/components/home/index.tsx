import React from "react";
import { Link } from "react-router-dom";

import BottomNav from "../bottom-nav";
import TopNav from "../header";
import Footer from "../footer";

import HomeBanner from "./home-banner";
import HomeFindPeddler from "./home-find-peddler";
import Categories from "./categories";
import YourFavourites from "./your-favourites";
import HomeProducts from "./home-products";
import HomeAddress from "./home-address";
import GridBannerbox from "./grid-banner-box";
import HomeSaleProducts from "./home-sale-products";
import HomeFeaturedStores from "./home-featured-stores";
import HomeInfo from "./home-info";
import CTA from "./cta-section";

export default function Home() {
  return (
    <>
      <TopNav />
      <HomeBanner
        bannerText="De beste producten uit jouw stad. Dezelfde dag in huis."
        bannerButtonInfoText="De leukse winkels op een plek. Shoppen wanneer jouw datuitkomt. Vandaag bezorgd."
      />
      <HomeFindPeddler />
      <Categories />
      <YourFavourites />
      <HomeProducts />
      <HomeAddress />
      <GridBannerbox />
      <HomeFeaturedStores />
      <CTA />
      <HomeSaleProducts />
      <HomeInfo />
      <Footer />
      <BottomNav />
    </>
  );
}
