import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.png";

import styles from "./styles.scss";

export default function StoreMegaMenu() {
  return (
    <>
      <div className={`${styles["sub-menu"]}`}>
        <div className={`${styles["pos-static"]} container`}>
          <ul
            className={`${styles["mega-menu-container"]} ${styles["store-mega-menu"]}`}
          >
            <li className={`${styles["sub-menu-li"]}`}>
              <div className={`${styles["sub-menu-left"]}`}>
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Food &amp; Drinks
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    DIY
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Games
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Baby
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Home &amp; Interior
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Cooking &amp; Kitchen
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Toys
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Gifts
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Flowers &amp; Plants
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Beauty &amp; Health
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Pets
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
                <div className={`${styles["submenu-links"]}`}>
                  <Link to="/" className={`${styles["link-title"]}`}>
                    Fashion
                  </Link>
                  <div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
                      </Link>
                    </div>
                    <div>
                      <Link to="/" className={`${styles["menu-link"]}`}>
                        The Store Name
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
              </div>
            </li>
            <li className={`${styles["sub-menu-li"]}`}>
              <Link to="/" className={`${styles["link-title"]}`}>
                New stores this week
              </Link>
              <div className={`${styles["sub-menu-right"]}`}>
                <div className={`${styles["col-2"]}`}>
                  <Link to="/" className={`${styles["menu-link"]}`}>
                    <img
                      src={Img1}
                      alt="Store"
                      className={`${styles["store-img"]}`}
                    />
                    <span className={`${styles["d-block"]}`}>
                      The Store Name
                    </span>
                  </Link>
                </div>
                <div className={`${styles["col-2"]}`}>
                  <Link to="/" className={`${styles["menu-link"]}`}>
                    <img
                      src={Img2}
                      alt="Store"
                      className={`${styles["store-img"]}`}
                    />
                    <span className={`${styles["d-block"]}`}>
                      The Store Name
                    </span>
                  </Link>
                </div>
                <div className={`${styles["col-2"]}`}>
                  <Link to="/" className={`${styles["menu-link"]}`}>
                    <img
                      src={Img1}
                      alt="Store"
                      className={`${styles["store-img"]}`}
                    />
                    <span className={`${styles["d-block"]}`}>
                      The Store Name
                    </span>
                  </Link>
                </div>
                <div className={`${styles["col-2"]}`}>
                  <Link to="/" className={`${styles["menu-link"]}`}>
                    <img
                      src={Img2}
                      alt="Store"
                      className={`${styles["store-img"]}`}
                    />
                    <span className={`${styles["d-block"]}`}>
                      The Store Name
                    </span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
