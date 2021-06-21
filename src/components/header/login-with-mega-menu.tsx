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
      <div className={`${styles["site-header"]} ${extraClasses}`}>
        <div className={`${styles["fix-div"]}`}>
            <div className={`${styles["top-nav"]}`}>
                <div className="container">
                <div className={`${styles["flex-container"]}`}>
                    <div className={`${styles["logo-section"]}`}>
                    <Link to="/" className={`${styles.logo}`}>
                        <img src={Logo} alt="Peddler" />
                    </Link>
                    </div>
                    <div className={`${styles["select-address"]}`}>
                    <Button className="btn-link btn-link-with-icon">
                        <img
                        src={Cycle}
                        alt="Delivery"
                        className={`${styles["flex-1"]}`}
                        />
                        <span
                        className={`text-truncate ${styles["hide-in-mobile"]} ${styles["max-w"]}`}
                        >
                        Choose delivery address
                        </span>
                        <span
                        className={`text-truncate ${styles["hide-in-desktop-769"]} ${styles["max-w"]}`}
                        >
                        Deliver to
                        </span>
                        <span
                        className={`${styles["hide-in-desktop-only"]} ${styles["flex-1"]}`}
                        >
                        <img
                            src={DownArrow}
                            alt="Delivery"
                            className={`${styles["down-arrow"]}`}
                        />
                        </span>
                    </Button>
                    </div>
                    <div className={`${styles["right-section"]}`}>
                    {/* <form className={`${styles['search-box']} ${SearchOpen ? styles.active : ''}`}> */}
                        <form className={`${styles["search-box"]}`}>
                            <SearchInput
                            // onClick={toggleSearch}
                            type="search"
                            placeholdertext="Search for products, brands, stores..."
                            className="header-search-input transparent-input input-search has-left-icon has-right-icon"
                            />
                        </form>
                        <div className={`${styles['profile-menu']} ${menuClasses}`}>
                            <Button
                                element="a"
                                href="/"
                                className="btn-link btn-link-white btn-link-with-icon"
                            >
                                <img
                                    src={Avatar}
                                    alt="Avatar"
                                    className={`${styles["display-only-desktop"]} ${styles["avatar-size"]}`}
                                />
                                <img
                                    src={mobileAvatar}
                                    alt="Avatar"
                                    className={`${styles["avatar-size-m"]} ${styles["hide-in-desktop"]}`}
                                />
                                <span
                                    className={`${styles["display-only-desktop"]} ${styles["max-w-128"]} text-truncate`}
                                >
                                    Name Surname
                                </span>
                            </Button>
                            <div className={`${styles['profile-dropdown']}`}>
                                <ProfileDropdown />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
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
        </div>
      </div>
      <ProfileMenu className={menuclassName} />
    </>
  );
}
