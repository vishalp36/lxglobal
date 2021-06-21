import React, { useState } from "react";
import { getExtraClasses } from "../../utils/common";

// Components
import InputLabel from "../input/text/input-label";
import Button from "../button";
import PhoneInput from "react-phone-number-input";

// styles
import InputStyles from "../input/styles.scss";

import styles from "./styles.scss";
import "react-phone-number-input/style.css";
import "../../resources/css/lib/phone-input/phone-input.scss";

export default function RegisterStoreForm(props) {
  const [value, setValue] = useState();
  return (
    <>
      <section className={`${styles["register-rider-form-section"]}`}>
        <div className={`container`}>
          <form action="" className={`${styles["register-rider-form"]}`}>
            <h2 className={`${styles["form-title"]}`}>Register your store</h2>
            <p className={`${styles["form-sub-text"]}`}>
              Lorem ipsum is a common text used as a placeholder for websites
              and applications. Lorem ipsum is a common text used as a
              placeholder for websites and applications.
            </p>

            <div className={`${styles.row}`}>
              <div className={`${styles.col}`}>
                <InputLabel
                  type="text"
                  defaultValuetext=""
                  label="Your Name"
                  forName="your_name"
                />
              </div>
              <div className={`${styles.col}`}>
                <InputLabel
                  type="text"
                  defaultValuetext=""
                  label="Store name"
                  forName="address"
                />
              </div>
              <div className={`${styles.col}`}>
                <InputLabel
                  type="Email"
                  defaultValuetext=" "
                  label="Email"
                  forName="email"
                />
              </div>
              <div className={`${styles.col}`}>
                <label className={`${InputStyles["input-label"]}`}>
                  Mobile
                </label>
                <PhoneInput
                  className="custom-phone-input custom-phone-input-no-flag"
                  international
                  placeholder="000 000 000"
                  defaultCountry="NL"
                  value={value}
                  onChange={setValue}
                />
              </div>

              <div className={`${styles.col}`}>
                <Button
                  className={`${styles["form-btn"]} btn-lg btn-secondary`}
                >
                  Register your store
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
