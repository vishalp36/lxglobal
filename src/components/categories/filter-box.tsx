import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import styles from "./filter-box.scss";

export default function Filterbox(props) {
  	const { 
    	className, 
		labelTitle, 
		children 
	} = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      	<Link to="/" className={`${styles["filter-box"]} ${extraClasses}`}>
			{labelTitle}
			{children}
      	</Link>
    </>
  );
}
