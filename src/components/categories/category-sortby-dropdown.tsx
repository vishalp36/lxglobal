import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import styles from "./styles.scss";
import Button from "../button";

export default function CategorySortbyDropdown(props) {
  const [dropdDownOpen, setDropdDownOpen] = useState(false);
  const toggleDropDown = () => {
    setDropdDownOpen(!dropdDownOpen);
  };
  const { className } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <div
        className={`${styles["dropdown-box"]} ${extraClasses} ${
          dropdDownOpen ? styles.open : ""
        }`}
      >
        <Button
          className={`${styles["dropdown-btn"]}`}
          onClick={toggleDropDown}
        >
          Sort by: <span>Recommended</span>
        </Button>

        <ul className={`${styles["dropdwon-list-wrap"]} `}>
          <li className={`${styles["selected"]} `}>
            <Link to="/" className={`${styles["dropdwon-link"]}`}>
              Recommended
            </Link>
          </li>
          <li className={``}>
            <Link to="/" className={`${styles["dropdwon-link"]}`}>
              Popular
            </Link>
          </li>
          <li className={``}>
            <Link to="/" className={`${styles["dropdwon-link"]}`}>
              Price: low to high
            </Link>
          </li>
          <li className={``}>
            <Link to="/" className={`${styles["dropdwon-link"]}`}>
              Price: high to low
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
