import React from "react";
import { Link } from "react-router-dom";

import BottomNav from "../bottom-nav";
import SingleCategory from "./single-category";
import Address from "./address";
//images
import Img from "./images/cat.png";
import Img1 from "./images/cat-2.png";
import Img2 from "./images/cat-8.png";
import Img3 from "./images/cat-10.png";
import Img4 from "./images/cat-4.png";
import Img5 from "./images/cat-1.png";
import Img6 from "./images/cat-3.png";
import Img7 from "./images/cat-9.png";
import Img8 from "./images/cat-11.png";
import Img9 from "./images/cat-5.png";
import Img10 from "./images/cat-6.png";
import Img11 from "./images/cat-7.png";

import styles from "./styles.scss";

export default function CategoriesWithAddress() {
  return (
    <>
      <section className={`${styles["categories-section"]}`}>
        <div className="container">
          <h3>Categories</h3>
          <div className={`${styles["categories-row"]}`}>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="food-category"
                imgWrapClassName="food-category-img-wrap"
                imgSrc={Img}
                categoryText="Food & Drinks"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              {" "}
              <SingleCategory
                className="flowers-category"
                imgWrapClassName="flowers-category-img-wrap"
                imgSrc={Img1}
                categoryText="Flowers & Plants"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="home-category"
                imgWrapClassName="home-category-img-wrap"
                imgSrc={Img2}
                categoryText="Home & Lliving"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="cooking-category"
                imgWrapClassName="cooking-category-img-wrap"
                imgSrc={Img3}
                categoryText="Cooking & Kitchen"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="gifts-category"
                imgWrapClassName="gifts-category-img-wrap"
                imgSrc={Img4}
                categoryText="Gifts"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="games-category"
                imgWrapClassName="games-category-img-wrap"
                imgSrc={Img5}
                categoryText="Games"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="toys-category"
                imgWrapClassName="toys-category-img-wrap"
                imgSrc={Img6}
                categoryText="Toys"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="baby-category"
                imgWrapClassName="baby-category-img-wrap"
                imgSrc={Img7}
                categoryText="Baby"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="diy-category"
                imgWrapClassName="diy-category-img-wrap"
                imgSrc={Img8}
                categoryText="DIY"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="pets-category"
                imgWrapClassName="pets-category-img-wrap"
                imgSrc={Img9}
                categoryText="Pets"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="beauty-category"
                imgWrapClassName="beauty-category-img-wrap"
                imgSrc={Img10}
                categoryText="Beauty & Health"
                linkTarget="/"
              />
            </div>
            <div className={`${styles["categories-col"]}`}>
              <SingleCategory
                className="fashion-category"
                imgWrapClassName="fashion-category-img-wrap"
                imgSrc={Img11}
                categoryText="Fashion"
                linkTarget="/"
              />
            </div>
          </div>
        </div>
      </section>
      <Address location="67, Van Woustraat, Amsterdam" />
      <BottomNav />
    </>
  );
}
