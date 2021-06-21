import React from "react";


import Badge from "../badge";
//card
import ProductCard from "../product-card";

//images
import Img1 from "../product-card/images/1.png";
import Img2 from "../product-card/images/2.png";

import productstyle from "../product-card/styles.scss";
import styles from "./styles.scss";

export default function FinalCategoryProducts() {
  //let extraClassesImageWrap = getExtraClasses(styles, imgWrapClassName);
  return (
    <section className={`${styles["final-product-list-section"]}`}>
      <div className="container">
        <div className={`${styles["final-product-row"]}`}>
          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              className="active"
              id={0}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
            >
              <span className={`${productstyle["badge-div"]}`}>
                <Badge badgetext="bestseller" />
              </span>
              <span className={`${productstyle["item-visible"]} text-15`}>
                <span className="semibold">2x</span>
                &nbsp;for&nbsp;
                <span className="semibold">&euro;39.9</span>&nbsp; in your Cart
              </span>
            </ProductCard>
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={1}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              defaultWish
            >
              <span className={`${productstyle["badge-div"]}`}>
                <Badge badgetext="our picks" className="badge-pink" />
              </span>
              <span className={`${productstyle["item-visible"]} text-15`}>
                <span className="semibold">2x</span>
                &nbsp;for&nbsp;
                <span className="semibold">&euro;39.9</span>&nbsp; in your Cart
              </span>
            </ProductCard>
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              className="active"
              id={2}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
            >
              <span className={`${productstyle["badge-div"]}`}>
                <Badge badgetext="bestseller" />
              </span>
              <span className={`${productstyle["item-visible"]} text-15`}>
                <span className="semibold">2x</span>
                &nbsp;for&nbsp;
                <span className="semibold">&euro;39.9</span>&nbsp; in your Cart
              </span>
            </ProductCard>
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={3}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              //newprice="&euro;11.25"
              //priceclassName="with-new-price"
            />
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={4}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              //newprice="&euro;11.25"
              //priceclassName="with-new-price"
            >
              <span className={`${productstyle["badge-div"]}`}>
                <Badge badgetext="bestseller" />
              </span>
            </ProductCard>
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={5}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              newprice="&euro;11.25"
              priceclassName="with-new-price"
            />
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={11}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              defaultWish
            >
              <span className={`${productstyle["badge-div"]}`}>
                <Badge badgetext="our picks" className="badge-pink" />
              </span>
              <span className={`${productstyle["item-visible"]} text-15`}>
                <span className="semibold">2x</span>
                &nbsp;for&nbsp;
                <span className="semibold">&euro;39.9</span>&nbsp; in your Cart
              </span>
            </ProductCard>
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              className="active"
              id={12}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
            >
              <span className={`${productstyle["badge-div"]}`}>
                <Badge badgetext="bestseller" />
              </span>
              <span className={`${productstyle["item-visible"]} text-15`}>
                <span className="semibold">2x</span>
                &nbsp;for&nbsp;
                <span className="semibold">&euro;39.9</span>&nbsp; in your Cart
              </span>
            </ProductCard>
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={13}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              //newprice="&euro;11.25"
              //priceclassName="with-new-price"
            />
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={14}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              //newprice="&euro;11.25"
              //priceclassName="with-new-price"
            >
              <span className={`${productstyle["badge-div"]}`}>
                <Badge badgetext="bestseller" />
              </span>
            </ProductCard>
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={15}
              image={Img1}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              newprice="&euro;11.25"
              priceclassName="with-new-price"
            />
          </div>

          <div className={`${styles["final-product-col"]}`}>
            <ProductCard
              id={16}
              image={Img2}
              storename="Store Name"
              title="Lorem ipsum is placeholder"
              price="&euro;11.25"
              weight="0,75 kg"
              disabledbtn
            >
              <span className={`${productstyle["not-available"]}`}>
                Not available right now
              </span>
            </ProductCard>
          </div>
        </div>
      </div>
    </section>
  );
}
