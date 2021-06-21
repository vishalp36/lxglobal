import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
import styles from "./styles.scss";
import Badge from "../badge";


export default function HistoryList(props) {
    const {
        tag,
        tagclassName,
        orderno,
        title,
        date,
        price,
      } = props;
      let tagClasses = getExtraClasses(styles, tagclassName);
  return (
    <>
        <div className={`${styles.box}`}>
            <div className={`${styles['space-between']}`}>
                <div className={`${styles['flex-div']}`}>
                    <h5 className={`${styles['row-title']}`}>{title}</h5>
                    <span className={`${styles['order-no']}`}>{orderno}</span>
                </div>
                <div>
                    <Badge badgetext={tag} className={tagClasses} />
                </div>
            </div>
            <div className={`${styles['flex-row']}`}>
                <span className={`${styles.inline}`}>{date}</span>
                <span className={`${styles.inline}`}>{price}</span>
            </div>
        </div>
    </>
  );
}
