import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";

import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import Icon4 from "./images/icon4.png";
import Icon5 from "./images/icon5.png";

import styles from "./styles.scss";

export default function ProductMegaMenu() {
  return (
    <>
      <div className={`${styles["sub-menu"]}`}>
        <div className={`${styles["pos-static"]} container`}>
          <ul className={`${styles["mega-menu-container"]}`}>
            <li className={`${styles["sub-menu-li"]}`}>
              <div className={`${styles["submenu-links"]}`}>
                <Link to="/" className={`${styles["link-title"]}`}>
                  Grosseries
                </Link>
                <div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Button
                      className={`${styles["p-8"]} btn-link-underline btn-link btn-link-14`}
                    >
                      Show more
                    </Button>
                  </div>
                </div>
              </div>
              <Link to="/" className={`${styles["square-box"]}`}>
                <img src={Icon1} alt="Product" />
              </Link>
            </li>
            <li className={`${styles["sub-menu-li"]}`}>
              <div className={`${styles["submenu-links"]}`}>
                <Link to="/" className={`${styles["link-title"]}`}>
                  Beer &amp; Wine
                </Link>
                <div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className={`${styles["square-box"]} ${styles["light-green"]}`}
              >
                <img src={Icon2} alt="Product" />
              </Link>
            </li>
            <li className={`${styles["sub-menu-li"]}`}>
              <div className={`${styles["submenu-links"]}`}>
                <Link to="/" className={`${styles["link-title"]}`}>
                  Chocolates &amp; Patisserie
                </Link>
                <div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Button
                      className={`${styles["p-8"]} btn-link-underline btn-link btn-link-14`}
                    >
                      Show more
                    </Button>
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className={`${styles["square-box"]} ${styles["light-yellow"]}`}
              >
                <img src={Icon3} alt="Product" />
              </Link>
            </li>
            <li className={`${styles["sub-menu-li"]}`}>
              <div className={`${styles["submenu-links"]}`}>
                <Link to="/" className={`${styles["link-title"]}`}>
                  Delicatessen
                </Link>
                <div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Button
                      className={`${styles["p-8"]} btn-link-underline btn-link btn-link-14`}
                    >
                      Show more
                    </Button>
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className={`${styles["square-box"]} ${styles["light-cream"]}`}
              >
                <img src={Icon4} alt="Product" />
              </Link>
            </li>
            <li className={`${styles["sub-menu-li"]}`}>
              <div className={`${styles["submenu-links"]}`}>
                <Link to="/" className={`${styles["link-title"]}`}>
                  Coffee &amp; Tea
                </Link>
                <div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                  <div>
                    <Link to="/" className={`${styles["menu-link"]}`}>
                      Sub-category
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className={`${styles["square-box"]} ${styles["light-red"]}`}
              >
                <img src={Icon5} alt="Product" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
