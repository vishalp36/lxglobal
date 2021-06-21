import React from "react";
import { getExtraClasses } from "../../../utils/common";
import Button from "../../button";
import Eye from "../icons/eye.svg";
import EyeSlash from "../icons/eye-slash.svg";
import styles from "../styles.scss";

export default function PasswordInputLabel(props) {
  const {
    children,
    className,
    iconclassName,
    type,
    defaultValuetext,
    disabled,
    placeholdertext,
    autoFocus,
    readOnly,
    forName,
    label,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
  let iconactiveClass = getExtraClasses(styles, iconclassName);
  return (
    <div className={`${styles["form-group"]} ${extraClasses}`}>
      <label htmlFor={`${forName}`} className={`${styles["input-label"]}`}>
        {label}
      </label>
      <div className={`${styles["input-group"]}`}>
        <input
          type={type}
          className={`${styles["form-control"]}`}
          placeholder={placeholdertext}
          defaultValue={defaultValuetext}
          name={forName}
          autoFocus={autoFocus}
          readOnly={readOnly}
          disabled={disabled}
        />
        <Button
          className={`${styles["right-icon"]} btn-link ${iconactiveClass}`}
        >
          <img
            src={Eye}
            alt="eye"
            className={`${styles["svg-icon"]} ${styles.show}`}
          />
          <img
            src={EyeSlash}
            alt="eye"
            className={`${styles["svg-icon"]} ${styles.hide}`}
          />
        </Button>
      </div>
      {children}
    </div>
  );
}
