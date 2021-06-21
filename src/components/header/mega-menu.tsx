import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import Button from "../button";
import SearchInput from "../input/text/input-search-onheader";
import Avatar from "./images/avatar.svg";
import mobileAvatar from "./images/mobile-avatar.svg";
import Logo from "../../resources/images/logo-white.svg";
import Cycle from "./images/cycle.svg";
import StoreMegaMenu from "./store-menu";
import ProductMegaMenu from "./product-mega-menu";
import DownArrow from "./images/down-arrow.svg";

import styles from "./styles.scss";
import ProfileDropdown from "./profile-dropdown";
import ProfileMenu from "./profile-menu-mobile";

export default function MegaMenu(props) {
  const { className,menuclassName,children } = props;
  let extraClasses = getExtraClasses(styles, className);
  let menuClasses = getExtraClasses(styles, menuclassName);
  const [SearchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!SearchOpen);
  };

  return (
    <>
        <div className={`${styles["mega-menu-div"]}`}>
            <div className={`${styles["pos-static"]} container`}>
                <ul className={`${styles["mega-menu-links"]}`}>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Stores
                </Link>
                <StoreMegaMenu />
                </li>
                <li>
                <Link to="/" className={`${styles.links} text-danger`}>
                    Sales
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Food &amp; Drinks
                </Link>
                <ProductMegaMenu />
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Flowers &amp; Plants
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Home &amp; Interior
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    DIY
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Cooking &amp; Kitchen
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Pets
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Beauty &amp; Health
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Games
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Toys
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Baby
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Gifts
                </Link>
                </li>
                <li>
                <Link to="/" className={`${styles.links}`}>
                    Fashion
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </>
  );
}
