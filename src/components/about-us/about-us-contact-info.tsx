import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./styles.scss";

export default function AaboutUsContactInfo(props) {
  return (
    <>
      <section className={`${styles["about-us-contact-section"]}`}>
        <div className={`${styles["text-center"]} container`}>
          <h2 className={`${styles["about-us-contact-title"]}`}>Contact</h2>
          <p className={`${styles["about-us-contact-text"]}`}>
            Would you like to get in touch for any queries, are you looking for
            additional informationor would you like to request a logo or visual
            materials?
          </p>
          <p>&nbsp;</p>
          <p className={`${styles["about-us-contact-text"]}`}>
            Please contact us at&nbsp;
            <a href="mailto:helpdesk@peddler.com">helpdesk@peddler.com</a>
          </p>
          <p className={`${styles["about-us-contact-text"]}`}>
            We are happy to help.
          </p>
        </div>
      </section>
    </>
  );
}
