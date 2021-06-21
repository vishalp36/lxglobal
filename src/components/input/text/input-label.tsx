import React from "react";
import { getExtraClasses } from "../../../utils/common";

import styles from "../styles.scss";

export default function InputLabel(props) {
  const {
    children,
    className,
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
  return (
    <div className={`${styles["form-group"]} ${extraClasses}`}>
      <label htmlFor={`${forName}`} className={`${styles["input-label"]}`}>
        {label}
      </label>
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
      {children}
    </div>
  );
}
