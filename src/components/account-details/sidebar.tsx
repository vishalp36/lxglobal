import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
import UserIcon from "./images/user.svg";
import Doc from "./images/doc.svg";
import styles from "./styles.scss";

export default function AccountSideBar(props) {
    const {
		activeLink,
        activeLink2
	} = props;
	let activeclass = getExtraClasses(styles, activeLink);
    let activeclass2 = getExtraClasses(styles, activeLink2);
  return (
    <>
      	<div className={`${styles['account-sidebar']}`}>
            <h4 className={`${styles['user-name']}`}>Name Surname</h4>
            <ul className={`${styles['sidebar-list']}`}>
                <li className={`${styles['sidebar-li']}`}>
                    <Link to="/" className={`${activeclass} ${styles['sidebar-link']}`}>
                        <svg className={`${styles['svg-icon']}`} viewBox="0 0 20 20">
                  		    <use xlinkHref={`${UserIcon}#img`} />
                		</svg>
                        <span className={`${styles['sidebar-text']}`}>Your account</span>
                    </Link>
                </li>
                <li className={`${styles['sidebar-li']}`}>
                    <Link to="/" className={`${activeclass2} ${styles['sidebar-link']}`}>
                        <svg className={`${styles['svg-icon']}`} viewBox="0 0 20 20">
                  		    <use xlinkHref={`${Doc}#img`} />
                		</svg>
                        <span className={`${styles['sidebar-text']}`}>Order history</span>
                    </Link>
                </li>
            </ul>
        </div>
    </>
  );
}
