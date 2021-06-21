import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";


import Logo from "../../resources/images/logo-white.svg";
import Cycle from "./images/cycle.svg";
import DownArrow from "./images/down-arrow.svg";

import styles from "./styles.scss";

export default function TopNav() {
  const [SearchOpen, setSearchOpen] = useState(false);
  // const toggleSearch = () => {
  // 	setSearchOpen(!SearchOpen);
  // };
  return (
    <>
      <div
        className={`${styles["site-header"]} ${styles["site-header-links"]}`}
      >
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
                    <img src={Cycle} alt="Delivery" />
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
                    <span className={`${styles["hide-in-desktop-only"]}`}>
                      <img
                        src={DownArrow}
                        alt="Delivery"
                        className={`${styles["down-arrow"]}`}
                      />
                    </span>
                  </Button>
                </div>
                <div className={`${styles["right-section"]}`}>
                  <Button
                    element="a"
                    href="/"
                    className={`${styles["right-section--nav-link"]} btn-link btn-link-white`}
                  >
                    About us
                  </Button>
                  <Button
                    element="a"
                    href="/"
                    className={`${styles["right-section--nav-link"]} btn-link btn-link-white`}
                  >
                    Register your store
                  </Button>
                  <Button
                    element="a"
                    href="/"
                    className={`${styles["right-section--nav-link"]} btn-link btn-link-white`}
                  >
                    Riders wanted
                  </Button>
                  <Button
                    element="a"
                    href="/"
                    className={`${styles["right-section--nav-link"]} btn-link btn-link-white`}
                  >
                    FAQ
                  </Button>
                  <Button
                    element="a"
                    href="/"
                    className={`${styles["right-section--nav-link"]} btn-link btn-link-white`}
                  >
                    Shop now
                  </Button>
                  <div>
                    <Button
                      element="a"
                      href="/"
                      className={`${styles["right-section--nav-link"]} btn-link btn-link-white`}
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
