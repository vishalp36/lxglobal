import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../button";

// Styles
import styles from "./styles.scss";

// Images
import BoxImg1 from "./images/categories.png";
import BoxImg2 from "./images/delivery.png";
import BoxImg3 from "./images/shop.png";

export default function AboutUsBox(props) {
  return (
    <>
      <section className={`${styles["about-us-box-section"]}`}>
        <div className="container">
          <div className={`${styles["row"]} ${styles["about-us-box-row"]}`}>
            <div
              className={`${styles["about-us-box-col"]} ${styles["text-center"]}`}
            >
              <div className={`${styles["about-us-box-img-wrap"]}`}>
                <img
                  src={BoxImg1}
                  alt="Shop locally"
                  className={`${styles["about-us-box-img"]}`}
                />
              </div>
            </div>
            <div className={`${styles["about-us-box-col"]}`}>
              <h3>Shop locally</h3>
              <p>
                Order the best products from your favourite local stores on
                Peddler and have it delivered the same day. You can even request
                to pickup your item in store at a reserved time slot just for
                you.
              </p>
              <Link
                element="a"
                to="/"
                className={`${styles["start-shoping-btn"]} btn-lg btn-link`}
              >
                Start shopping
              </Link>
            </div>
          </div>
          <div className={`${styles["row"]} ${styles["about-us-box-row"]}`}>
            <div
              className={`${styles["about-us-box-col"]} ${styles["text-center"]}`}
            >
              <div className={`${styles["about-us-box-img-wrap"]}`}>
                <img
                  src={BoxImg2}
                  alt="Same day delivery"
                  className={`${styles["about-us-box-img"]}`}
                />
              </div>
            </div>

            <div className={`${styles["about-us-box-col"]}`}>
              <h3>Same day delivery</h3>
              <p>
                Our bicycle couriers deliver orders quickly, sustainably and
                safely through our contactless delivery network. We match the
                products you are looking for with the nearest available
                retailer, and deliver it the same day or at the time of your
                choosing!
              </p>
              <Link
                element="a"
                to="/"
                className={`${styles["start-shoping-btn"]} btn-lg btn-link`}
              >
                Start shopping
              </Link>
            </div>
          </div>
          <div className={`${styles["row"]} ${styles["about-us-box-row"]}`}>
            <div
              className={`${styles["about-us-box-col"]} ${styles["text-center"]}`}
            >
              <div className={`${styles["about-us-box-img-wrap"]}`}>
                <img
                  src={BoxImg3}
                  alt="For local retailers"
                  className={`${styles["about-us-box-img"]}`}
                />
              </div>
            </div>
            <div className={`${styles["about-us-box-col"]}`}>
              <h3>For local retailers</h3>
              <p>
                Give your local store a sales boost with Peddler. We provide all
                the tools & support retailers need to setup their product
                inventory online in a few simple steps. Peddler increases the
                reach of local store(s) and their product offering to new
                customers throughout their geography. Peddler offers the
                convenience of fast, clean and a reliable on-demand delivery
                service!
              </p>
              <Link
                element="a"
                to="/"
                className={`${styles["start-shoping-btn"]} btn-lg btn-link`}
              >
                Register your store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
