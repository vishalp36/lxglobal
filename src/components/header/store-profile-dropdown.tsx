import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import Button from "../button";
import Store from "./images/store-gray.svg";

import styles from "./styles.scss";

export default function StoreProfileDropDown(props) {

  return (
    <>
        <ul className={`${styles['profile-menu-list']}`}>
            <li className={`${styles['store-list']}`}>
                <Button
                    element="a" href="/" 
                    className="btn-link-gray btn-link btn-link-with-icon"
                >
                    <svg className={`${styles["store-icon"]}`} viewBox="0 0 32 32">
                  	    <use xlinkHref={`${Store}#img`} />
                	</svg>
                    <span
                        className={`${styles["max-w-128"]} text-truncate`}
                    >
                        Store Name
                        <span className={`${styles["store-value"]}`}>6 new</span>
                    </span>
                </Button>
            </li>
            <li className={`${styles['store-list']}`}>
                <Button
                    element="a" href="/" 
                    className="btn-link-gray btn-link btn-link-with-icon"
                >
                    <svg className={`${styles["store-icon"]}`} viewBox="0 0 32 32">
                  	    <use xlinkHref={`${Store}#img`} />
                	</svg>
                    <span
                        className={`${styles["max-w-128"]} text-truncate`}
                    >
                        Store Name
                        <span className={`${styles["store-value"]}`}>6 new</span>
                    </span>
                </Button>
            </li>
            <li className={`${styles['store-list']}`}>
                <Button
                    element="a" href="/" 
                    className="btn-link-gray btn-link btn-link-with-icon"
                >
                    <svg className={`${styles["store-icon"]}`} viewBox="0 0 32 32">
                  	    <use xlinkHref={`${Store}#img`} />
                	</svg>
                    <span
                        className={`${styles["max-w-128"]} text-truncate`}
                    >
                        Store Name
                        <span className={`${styles["store-value"]}`}>6 new</span>
                    </span>
                </Button>
            </li>
        </ul>
    </>
  );
}
