import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../button";

// Styles
import styles from "./styles.scss";

// Images
import Img from "./images/delivery-anything.png";

export default function DeliveryAnything(props) {
  return (
    <>
      <section className={`${styles["delivery-anything-section"]}`}>
        <div className="container">
          <div
            className={`${styles["row"]} ${styles["delivery-anything-row"]}`}
          >
            <div
              className={`${styles["delivery-anything-col"]} ${styles["text-center"]}`}
            >
              <div className={`${styles["delivery-anything-img-wrap"]}`}>
                <img
                  src={Img}
                  alt="Easy integrations"
                  className={`${styles["delivery-anything-img"]}`}
                />
              </div>
            </div>
            <div className={`${styles["delivery-anything-col"]}`}>
              <div className={`${styles["delivery-anything-txt-wrap"]}`}>
                <h3>Deliver anything</h3>
                <p>
                  Do you want to offer your existing customers same-day
                  delivery? Our deliver-anything allows you to book a custom
                  delivery to your customer in a matter of minutes. Our courrers
                  take care of the rest, we can ship everything from flowers to
                  books safely from store to door.
                </p>
                <Link
                  element="a"
                  to="/"
                  className={`${styles["register-store-btn"]} btn-lg btn-link`}
                >
                  Explore deliver anything feature
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
