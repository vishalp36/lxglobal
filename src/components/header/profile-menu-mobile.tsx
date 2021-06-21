import React, { useState } from "react";
import { getExtraClasses } from "../../utils/common";
import { Link } from "react-router-dom";
import Logo from "../../resources/images/logo.svg";
import Avatar from "./images/avatar.svg";
import Store from "./images/store.svg";
import Close from "../../resources/svg-icons/close.svg";
import Button from "../button";


import styles from "./styles.scss";

export default function ProfileMenu(props) {
    const { className,closeMenu } = props;
    let extraClasses = getExtraClasses(styles, className);
    const [menulistOpen, setMenuListOpen] = useState(false);
    const toggleMenuList = () => {
    	setMenuListOpen(!menulistOpen);
    };
  return (
    <>
        <div className={`${styles['profile-menu-mobile']} ${extraClasses}`}>
            <div className={`${styles['top-header-menu']}`}>
                <Link to="/" className={`${styles['menu-logo']}`}>
                    <img src={Logo} alt="Peddler" />
                </Link>
                <Button onClick={closeMenu} className="btn-link">
                    <img src={Close} alt="Close" className={`${styles['btn-close']}`} />
                </Button>
            </div>
            <div className={`${styles['menu-container']}`}>
                <div className={`${styles['menu-list']}`}>
                    <div className={`${styles['name-list']} ${menulistOpen ? styles.open : ''}`}>
                        <Button
                            onClick={toggleMenuList}
                            className={`${styles['btn-name']} ${styles.arrow} btn-block btn-link-with-icon`}
                        >
                            <img
                                src={Avatar}
                                alt="Avatar"
                                className={`${styles["avatar-size"]}`}
                            />
                            <span
                                className="text-truncate"
                            >
                                Name Surname
                            </span>
                        </Button>
                        <div className={`${styles['store-div']}`}>
                            <Button
                                element="a"
                                href="/"
                                className={`${styles['store-name']} ${styles['btn-name']} btn-block btn-link-with-icon`}
                            >
                                <img
                                    src={Store}
                                    alt="Store"
                                    className={`${styles["avatar-size"]}`}
                                />
                                <div className={`${styles['name-row']}`}>
                                    <span
                                        className={`${styles['flex-1']} text-truncate`}
                                    >
                                        Store Name
                                    </span>
                                    <span className={`${styles.value}`}>
                                        6 new
                                    </span>
                                </div>
                            </Button>
                            <Button
                                element="a"
                                href="/"
                                className={`${styles['store-name']} ${styles['btn-name']} btn-block btn-link-with-icon`}
                            >
                                <img
                                    src={Store}
                                    alt="Store"
                                    className={`${styles["avatar-size"]}`}
                                />
                                <div className={`${styles['name-row']}`}>
                                    <span
                                        className={`${styles['flex-1']} text-truncate`}
                                    >
                                        Store Name
                                    </span>
                                    <span className={`${styles.value}`}>
                                        2 new
                                    </span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <Link to="/" className={`${styles['menu-item']}`}>
                        Your account
                    </Link>
                    <Link to="/" className={`${styles['menu-item']}`}>
                        My favourites
                    </Link>
                    <Link to="/" className={`${styles['menu-item']} ${styles['space-between']}`}>
                        Order history
                    </Link>
                </div>
                <div className={`${styles['menu-list']}`}>
                    <Link to="/" className={`${styles['menu-item']}`}>
                        FAQ
                    </Link>
                    <Link to="/" className={`${styles['menu-item']}`}>
                        About us
                    </Link>
                    <Link to="/" className={`${styles['menu-item']}`}>
                        Register your store
                    </Link>
                    <Link to="/" className={`${styles['menu-item']}`}>
                        Riders wanted
                    </Link>
                    <Link to="/" className={`${styles['menu-item']}`}>
                        Help
                    </Link>
                </div>
                <div className={`${styles['menu-list']}`}>
                    <Link to="/" className={`${styles['menu-item']} text-danger`}>
                        Sign out
                    </Link>
                </div>
            </div>
        </div>
    </>
  );
}
