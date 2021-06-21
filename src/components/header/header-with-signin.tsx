import React, {useState} from "react";
import { getExtraClasses } from "../../utils/common";
import { Link } from "react-router-dom";
import Button from "../button";
import SearchInput from "../input/text/input-search-onheader";

import Logo from "../../resources/images/logo-white.svg";
import ProfileDropdown from "./profile-dropdown";
import Cycle from "./images/cycle.svg";
import Avatar from "./images/avatar.svg";
import mobileAvatar from "./images/mobile-avatar.svg";
import DownArrow from "./images/down-arrow.svg";

import styles from "./styles.scss";
import MegaMenu from "./mega-menu";
import ProfileMenu from "./profile-menu-mobile";
import BottomNav from "../bottom-nav";

export default function TopNav(props) {
	const { 
		menuclassName,
	} = props;
	let menuClasses = getExtraClasses(styles, menuclassName);
  const [Menupen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!Menupen);
  };
  return (
    <>
      <div className={`${styles["site-header"]}`}>
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
                      onClick={toggleMenu}
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
          <MegaMenu />
        </div>
      </div>
      <ProfileMenu 
        className={`${Menupen ? 'open' : ''}`}
        closeMenu={toggleMenu} 
      />
      <BottomNav />
    </>
  );
}
