import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../button";

// Styles
import styles from "./styles.scss";

// Images
import BoxImg1 from "./images/reach-customer.png";
import BoxImg2 from "./images/increase-turnover.png";
import BoxImg3 from "./images/fast-delivery.png";

export default function RegisterStoreBenefit(props) {
  return (
    <>
      <section className={`${styles["benefit-section"]}`}>
        <div className="container">
          <div className={`${styles["row"]} ${styles["benefit-row"]}`}>
            <div
              className={`${styles["benefit-col"]} ${styles["text-center"]}`}
            >
              <div className={`${styles["benefit-img-wrap"]}`}>
                <img
                  src={BoxImg1}
                  alt="Shop locally"
                  className={`${styles["benefit-img"]}`}
                />
              </div>
            </div>
            <div className={`${styles["benefit-col"]}`}>
              <h3>Reach more customers</h3>
              <p>
                Reach new customers, cross-sell & upsell with the power of many
                as part of our local retail community. Allow consumers
                throughout the city to find everything they need from your store
                and provide the convenience of same they delivery.
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
          <div className={`${styles["row"]} ${styles["benefit-row"]}`}>
            <div
              className={`${styles["benefit-col"]} ${styles["text-center"]}`}
            >
              <div className={`${styles["benefit-img-wrap"]}`}>
                <img
                  src={BoxImg2}
                  alt="Increase turnover"
                  className={`${styles["benefit-img"]}`}
                />
              </div>
            </div>

            <div className={`${styles["benefit-col"]}`}>
              <h3>Increase turnover</h3>
              <p>
                Peddler increases your revenue by turning local online consumers
                into local shoppers, allowing the local retail community to
                compete with online marketplaces. We advertise your products,
                and match immediate demand from online consumers with your
                store. Every customer transaction is made securely and direcrly
                to your own account.
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
          <div className={`${styles["row"]} ${styles["benefit-row"]}`}>
            <div
              className={`${styles["benefit-col"]} ${styles["text-center"]}`}
            >
              <div className={`${styles["benefit-img-wrap"]}`}>
                <img
                  src={BoxImg3}
                  alt="Fast delivery"
                  className={`${styles["benefit-img"]}`}
                />
              </div>
            </div>
            <div className={`${styles["benefit-col"]}`}>
              <h3>Fast delivery</h3>
              <p>
                Provide your new customers instant gratification. With Peddler
                you offer your customers the ultimate in convenience and
                customer experience through eco-friendly and a hyper fast
                delivery service. Orders are delivered the same day in under 60
                mins.
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
        </div>
      </section>
    </>
  );
}
