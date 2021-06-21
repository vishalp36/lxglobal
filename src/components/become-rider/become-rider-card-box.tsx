import React from "react";

// Components
import Card from "../box-card";

// Images
import BoxImg1 from "./images/pic-1.png";
import BoxImg2 from "./images/pic-2.png";
import BoxImg3 from "./images/pic-3.png";

//styles
import styles from "./styles.scss";

export default function BecomeRiderCardBox(props) {
  return (
    <>
      <section className={`${styles["become-rider-box-section"]}`}>
        <div className="container">
          <h2 className={`${styles["section-title"]} ${styles["text-center"]}`}>
            We offer riders
          </h2>
          <div className={`${styles["row"]}`}>
            <div className={`${styles["become-rider-box-col"]}`}>
              <Card
                image={BoxImg1}
                title="A good salary"
                content="Lorem ipsum is a common text used as a placeholder for websites and applications."
              />
            </div>
            <div className={`${styles["become-rider-box-col"]}`}>
              <Card
                image={BoxImg2}
                title="Flexible working hours"
                content="Lorem ipsum is a common text used as a placeholder for websites and applications."
              />
            </div>
            <div className={`${styles["become-rider-box-col"]}`}>
              <Card
                image={BoxImg3}
                title="Support"
                content="Lorem ipsum is a common text used as a placeholder for websites and applications."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
