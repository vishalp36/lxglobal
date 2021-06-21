import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../button";

// Styles
import styles from "./styles.scss";

// Images
import Img from "./images/easy-integration.png";

export default function EasyIntegration(props) {
  return (
    <>
      <section className={`${styles["easy-integration-section"]}`}>
        <div className="container">
          <div className={`${styles["row"]} ${styles["easy-integration-row"]}`}>
            <div className={`${styles["easy-integration-col"]}`}>
              <div className={`${styles["easy-integration-txt-wrap"]}`}>
                <h3>Easy integrations</h3>
                <p>
                  We use clever technology to connect your inventory to peddler.
                  Whether you own a webshop or not we built solutions for every
                  retailers need. Peddler integrates with most point-of-sale
                  systems and webshops. But we can even turn pictures and
                  barcodes into online sellable products.
                </p>
                <Link
                  element="a"
                  to="/"
                  className={`${styles["register-store-btn"]} btn-lg btn-link`}
                >
                  Register your store
                </Link>
              </div>
            </div>
            <div
              className={`${styles["easy-integration-col"]} ${styles["text-center"]}`}
            >
              <div className={`${styles["easy-integration-img-wrap"]}`}>
                <img
                  src={Img}
                  alt="Easy integrations"
                  className={`${styles["easy-integration-img"]}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
