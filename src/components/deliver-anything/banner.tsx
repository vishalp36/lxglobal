import React from "react";
//buttons
import Button from "../button";
import Breadcrumbs from "../categories/breadcrumbs-3";
import Banner from "./images/banner.png";
import MobileBack from "../product-details/images/left-arrow.svg";
import styles from './styles.scss';


export default function DeliverAnythingBanner() {
  return (
    <>
        <div className={`${styles['banner-section']}`}>
            <div className={`${styles['banner-img']}`}>
                <img src={Banner}  alt="Banner" />
            </div>
            <div className={`${styles['banner-content']} container`}>
                <div className={`${styles['mobile-back-btn']} ${styles['hide-in-desktop']}`}>
                    <Button element="a" href="/" className="btn-left-icon btn-left-sm-icon btn-link">
                        <img src={MobileBack} alt="Back" />
                    </Button>
				</div>
                <div className={`${styles['display-only-desktop']}`}>
                    <Breadcrumbs 
                        className="with-white-text"
                        breadcrumblink1="Home"
                        breadcrumblink2="Stores"
                        breadcrumblink3="Deliver anything"
                    />
                </div>
                <div className={`${styles['white-box']}`}>
                    <h3 className={`${styles.title} text-truncate`}>Deliver Anything</h3>
                    <p className={`${styles.inst} text-gray mb-0`}>We can find and deliver whatever you need from one place to another.</p>
                </div>
            </div>
            
        </div>
    </>
  );
}
