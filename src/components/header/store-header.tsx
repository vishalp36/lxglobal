import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import TopNav from "../header/with-mega-menu";
import BackIcon from "./images/back-icon.svg";
import SortIcon from "./images/sort.svg";

import styles from "./styles.scss";


export default function StoreHeader() {
  return (
    <>
        <TopNav className="category-header-desktop" />
        <div className={`${styles["category-header-mobile"]}`}>
            <div className="container">
                <div className={`${styles["category-header-wrap"]}`}>
                    <Link to='/' className={`${styles["category-back-link"]}`}>
                        <img src={BackIcon} alt="Back" className={`${styles["category-header-back-icon"]}`} />
                    </Link>
                    <div>
                        <Button to="/" className={`${styles['sort-btn']} btn-link`}>
                            <img src={SortIcon} alt="SortIcon" className={`${styles['sort-icon']}`} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
