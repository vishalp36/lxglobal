import React from "react";
import { Link } from "react-router-dom";

import styles from './styles.scss';


export default function SideBar() {
  return (
    <>
        <ul className={`${styles.sidebar}`}>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']} ${styles.open}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
                <ul className={`${styles['sub-cat-dropdown']}`}>
                    <li className={`${styles['category-link']}`}>
                        <Link to="/" className={`${styles['category-name']} text-truncate`}>Subcategory name</Link>
                    </li>
                    <li className={`${styles['category-link']} ${styles.open}`}>
                        <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Subcategory name</span>
                        <ul className={`${styles['sub-cat-dropdown']}`}>
                            <li className={`${styles['category-link']}`}>
                                <Link to="/" className={`${styles['category-name']} text-truncate`}>Subcategory name</Link>
                            </li>
                            <li className={`${styles['category-link']} ${styles.open}`}>
                                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Subcategory name</span>
                                <ul className={`${styles['sub-cat-dropdown']}`}>
                                    <li className={`${styles['category-link']}`}>
                                        <Link to="/" className={`${styles['category-name']} text-truncate`}>Subcategory name</Link>
                                    </li>
                                    <li className={`${styles['category-link']}`}>
                                        <Link to="/" className={`${styles['category-name']} text-truncate`}>Subcategory name</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={`${styles['category-link']}`}>
                        <Link to="/" className={`${styles['category-name']} text-truncate`}>Subcategory name</Link>
                    </li>
                    <li className={`${styles['category-link']}`}>
                        <Link to="/" className={`${styles['category-name']} text-truncate`}>Subcategory name</Link>
                    </li>
                </ul>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
            <li className={`${styles['category-link']}`}>
                <span className={`${styles['category-name']} ${styles['with-arrow']} text-truncate`}>Category name</span>
            </li>
        </ul>
    </>
  );
}
