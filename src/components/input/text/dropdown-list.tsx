import React from 'react';
import Img1 from "../../../resources/images/1.png";

import styles from '../styles.scss';

export default function DropdownList(props) {
  	return (
        <ul className={`${styles['dropdwon-list']}`}>
            <li className={`${styles.list}`}>
                <div className={`${styles['list-img']}`}>
                    <img src={Img1} alt="Product" />
                </div>
                <div className={`${styles['list-text']} ${styles['multi-line-ellipsis']}`}>
                    lorem ipsum is common placeholder text used to demonstrate the graph
                    lorem ipsum is common 
                </div>
            </li>
            <li className={`${styles.list}`}>
                <div className={`${styles['list-text']} ${styles['multi-line-ellipsis']}`}>
                    Lorem ipsum is placeholder
                </div>
            </li>
            <li className={`${styles.list} ${styles.disabled}`}>
                <div className={`${styles['list-text']} ${styles['multi-line-ellipsis']}`}>
                    Lorem ipsum is placeholder
                </div>
                <span className={`${styles['out-of-stock']}`}>Out of stock</span>
            </li>
            <li className={`${styles.list}`}>
                <div className={`${styles['list-text']} ${styles['multi-line-ellipsis']}`}>
                    Lorem ipsum is placeholder
                </div>
            </li>
            <li className={`${styles.list}`}>
                <div className={`${styles['list-text']} ${styles['multi-line-ellipsis']}`}>
                    Lorem ipsum is placeholder
                </div>
            </li>
            <li className={`${styles.list}`}>
                <div className={`${styles['list-text']} ${styles['multi-line-ellipsis']}`}>
                    Lorem ipsum is placeholder
                </div>
            </li>
            <li className={`${styles.list}`}>
                <div className={`${styles['list-text']} ${styles['multi-line-ellipsis']}`}>
                    Lorem ipsum is placeholder
                </div>
            </li>
        </ul>
  	);
}
