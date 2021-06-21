import React from 'react';
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
//images
import Insta from "../../resources/svg-icons/instagram.svg";
import Logo from "../../resources/images/logo.svg";
import styles from './styles.scss';

export default function Footer(props) {
    const {
		className,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	return (
		<>
            <div className={`${styles['min-h-box']} ${extraClasses}`}/>
            <div className={`${styles['site-footer']} ${extraClasses}`}>
                <div className="container">
                    <div className={`${styles['footer-container']}`}>
                        <div className={`${styles['flex-left']}`}>
                            <div>
                                <Link to="/" className={`${styles.logo}`}>
                                    <img src={Logo} alt="Peddler" />
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className={`${styles['footer-link']}`}>
                                    FAQ
                                </Link>
                                <Link to="/" className={`${styles['footer-link']}`}>
                                    About us
                                </Link>
                                <Link to="/" className={`${styles['footer-link']}`}>
                                    Register your store
                                </Link>
                                <Link to="/" className={`${styles['footer-link']}`}>
                                    Riders wanted!
                                </Link>
                                <Link to="/" className={`${styles['footer-link']}`}>
                                    Terms &amp; Conditions
                                </Link>
                                <Link to="/" className={`${styles['footer-link']}`}>
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/" className={`${styles['sm-icon']}`}>
                                <img src={Insta} alt="Instagram" />
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles['copy-right-div']}`}>
                        <p className={`${styles['copy-right-text']}`}>&copy; 2020 Peddler B.V. All rights reserved.</p>
                    </div>
                </div>
            </div>
		</>
	);
}

