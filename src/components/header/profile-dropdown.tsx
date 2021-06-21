import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";

import Button from "../button";


import styles from "./styles.scss";

export default function ProfileDropDown(props) {

  return (
    <>
        <ul className={`${styles['profile-menu-list']}`}>
            <li>
                <Link to="/" className={`${styles['profile-link']}`}>
                    Your account
                </Link>
            </li>
            <li>
                <Link to="/" className={`${styles['profile-link']}`}>
                    My favourites
                </Link>
            </li>
            <li>
                <Link to="/" className={`${styles['profile-link']}`}>
                    Order history
                </Link>
            </li>
            <li>
                <Link to="/" className={`${styles['profile-link']}`}>
                    Sign out
                </Link>
            </li>
        </ul>
    </>
  );
}
