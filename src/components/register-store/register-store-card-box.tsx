import React from "react";

// Components
import Card from "../box-card";

// Images
import BoxImg1 from "./images/pic-1.png";
import BoxImg2 from "./images/pic-2.png";
import BoxImg3 from "./images/pic-3.png";

//styles
import styles from "./styles.scss";

export default function RegisterStoreCardBox(props) {
  return (
    <>
      <section className={`${styles["register-store-box-section"]}`}>
        <div className="container">
          <h2 className={`${styles["section-title"]} ${styles["text-center"]}`}>
            Sell more locally,
            <br /> easy as a Dutchman on his bike
          </h2>
          <div className={`${styles["row"]}`}>
            <div className={`${styles["register-store-box-col"]}`}>
              <Card
                image={BoxImg1}
                title="Sell anything you want"
                content="Lorem ipsum is a common text used as a placeholder for websites and applications."
              />
            </div>
            <div className={`${styles["register-store-box-col"]}`}>
              <Card
                image={BoxImg2}
                title="Fast delivery"
                content="Lorem ipsum is a common text used as a placeholder for websites and applications."
              />
            </div>
            <div className={`${styles["register-store-box-col"]}`}>
              <Card
                image={BoxImg3}
                title="Easy integration"
                content="Lorem ipsum is a common text used as a placeholder for websites and applications."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
