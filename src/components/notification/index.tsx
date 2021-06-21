import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
import styles from "./styles.scss";


export default function Notification(props) {
    const {
		className,
        notificationtext
	} = props;
	let extraClasses = getExtraClasses(styles, className);
  return (
    <>
        <div className={`${styles.notification} ${extraClasses}`}>
            <p className={`${styles['notification-text']}`}>{notificationtext}</p>
        </div>
    </>
  );
}
