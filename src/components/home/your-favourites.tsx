import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import WishIcon from "../input/checks-radios/heart";

import Img1 from "../product-card/images/1.png";
import Img2 from "../product-card/images/3.png";
// import Img from "./images/product-pic.png";
// import Img1 from "./images/product-pic-1.png";
// import Img2 from "./images/product-pic-2.png";
// import Img3 from "./images/product-pic-3.png";
// import Img4 from "./images/product-pic-4.png";
// import Img5 from "./images/product-pic-5.png";
// import Img6 from "./images/product-pic-6.png";
// import Img7 from "./images/product-pic-7.png";
// import Img8 from "./images/product-pic-8.png";

import styles from "./styles.scss";

export default function SingleCategory(props) {
  return (
    <section className={`${styles["favourites-section"]}`}>
      <div className="container">
        <h3>Your favourites</h3>
        <p>Products that you buy frequently stored in one place for you.</p>
        <div className={`${styles["product-img-wrap"]}`}>
          {/* <img src={Img} alt="Product" />
          <img src={Img1} alt="Product" />
          <img src={Img2} alt="Product" />
          <img src={Img3} alt="Product" />
          <img src={Img4} alt="Product" />
          <img src={Img5} alt="Product" />
          <img src={Img6} alt="Product" />
          <img src={Img7} alt="Product" />
          <img src={Img8} alt="Product" /> */}
          <div className={`${styles["fav-wrap"]}`}>
            <Link to="/" className={`${styles["fav-img-wrap"]}`}>
              <img src={Img2} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id="1" checked="checked" />
            </div>
          </div>
          <div className={`${styles["fav-wrap"]}`}>
            <Link to="/" className={`${styles["fav-img-wrap"]}`}>
              <img src={Img1} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id="2" checked="checked" />
            </div>
          </div>
          <div className={`${styles["fav-wrap"]}`}>
            <Link to="/" className={`${styles["fav-img-wrap"]}`}>
              <img src={Img2} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id="3" checked="checked" />
            </div>
          </div>
          <div className={`${styles["fav-wrap"]}`}>
            <Link to="/" className={`${styles["fav-img-wrap"]}`}>
              <img src={Img1} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id="4" checked="checked" />
            </div>
          </div>
          <div className={`${styles["fav-wrap"]}`}>
            <Link to="/" className={`${styles["fav-img-wrap"]}`}>
              <img src={Img2} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id="5" checked="checked" />
            </div>
          </div>
          <div className={`${styles["fav-wrap"]}`}>
            <Link to="/" className={`${styles["fav-img-wrap"]}`}>
              <img src={Img1} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id="6" checked="checked" />
            </div>
          </div>
          <div className={`${styles["fav-wrap"]}`}>
            <Link to="/" className={`${styles["fav-img-wrap"]}`}>
              <img src={Img2} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id="7" checked="checked" />
            </div>
          </div>
          <div className={`${styles["fav-wrap"]}`}>
            <Link to="/" className={`${styles["fav-img-wrap"]}`}>
              <img src={Img1} alt="Product" />
            </Link>
            <div className={`${styles["wish-item"]}`}>
              <WishIcon id="8" checked="checked" />
            </div>
          </div>
        </div>
        <Button
          element="a"
          href="/"
          className={`${styles["category-show-more-link"]} btn-link-underline btn-link`}
        >
          Go to My Favorites
        </Button>
      </div>
    </section>
  );
}
