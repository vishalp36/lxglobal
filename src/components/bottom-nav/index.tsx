import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import HomeIcon from "./images/home.svg";
import ShopIcon from "./images/bag.svg";
import ProductIcon from "./images/product.svg";
import SearchIcon from "./images/search.svg";
import CartIcon from "./images/cart.svg";
import styles from "./styles.scss";

export default function BottomNav() {
  return (
    <>
      <div className={`${styles["min-h-box"]}`} />
      <div className={`${styles["bottom-nav"]}`}>
        <div className="container">
          <ul className={`${styles["bottom-nav-div"]}`}>
            <li className={`${styles["bottom-nav-link"]} ${styles.active}`}>
              <Link to="/">
                <svg className={`${styles["svg-icon"]}`} viewBox="0 0 24 24">
                  <use xlinkHref={`${HomeIcon}#img`} />
                </svg>
                <span className={`${styles["bottom-nav-text"]}`}>Home</span>
              </Link>
            </li>
            <li className={`${styles["bottom-nav-link"]}`}>
              <Link to="/">
                <svg className={`${styles["svg-icon"]}`} viewBox="0 0 22 24">
                  <use xlinkHref={`${ShopIcon}#img`} />
                </svg>
                <span className={`${styles["bottom-nav-text"]}`}>Shops</span>
              </Link>
            </li>
            <li className={`${styles["bottom-nav-link"]}`}>
              <Link to="/">
                <svg className={`${styles["svg-icon"]}`} viewBox="0 0 22 22">
                  <use xlinkHref={`${ProductIcon}#img`} />
                </svg>
                <span className={`${styles["bottom-nav-text"]}`}>Products</span>
              </Link>
            </li>
            <li className={`${styles["bottom-nav-link"]}`}>
              <Link to="/">
                <svg className={`${styles["svg-icon"]}`} viewBox="0 0 24 24">
                  <use xlinkHref={`${SearchIcon}#img`} />
                </svg>
                <span className={`${styles["bottom-nav-text"]}`}>Search</span>
              </Link>
            </li>
            <li className={`${styles["bottom-nav-link"]}`}>
              <Link to="/">
                <svg className={`${styles["svg-icon"]}`} viewBox="0 0 24 24">
                  <use xlinkHref={`${CartIcon}#img`} />
                </svg>
                <span className={`${styles["bottom-nav-text"]}`}>Cart</span>
                <span className={`${styles.value}`}>24</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
