import React from "react";
//buttons
import Button from "../button";
import Breadcrumbs from "../categories/breadcrumbs-5";
import BannerImg from "./images/banner.png";
import Back from "../product-details/images/back-arrow.svg";
import MobileBack from "../product-details/images/left-arrow.svg";
import SearchIcon from "./images/search.svg";
import styles from './styles.scss';
import StoreCard from "../store-card/store-card-no-img";


export default function Banner() {
  return (
    <>
        <div className={`${styles['banner-section']}`}>
            <div className={`${styles['banner-img']}`}>
                <img src={BannerImg}  alt="Banner" />
            </div>
            <div className={`${styles['banner-content']} container`}>
                <div className={`${styles['hide-in-desktop']}`}>
                    <div className={`${styles['mobile-back-btn']}`}>
                        <Button element="a" href="/" className="btn-left-icon btn-left-sm-icon btn-link">
                            <img src={MobileBack} alt="Back" />
                        </Button>
                    </div>
                    <div className={`${styles['mobile-search-btn']}`}>
                        <Button element="a" href="/" className="btn-left-icon btn-left-sm-icon btn-link">
                            <img src={SearchIcon} alt="Search" />
                        </Button>
                    </div>
                </div>
                <div className={`${styles['display-only-desktop']}`}>
                    <Breadcrumbs 
                        className="with-white-text"
                        breadcrumblink1="Home"
                        breadcrumblink2="Stores"
                        breadcrumblink3="Store Name"
                        breadcrumblink4="Store details"
                    />
                    <div className={`${styles['desktop-back-btn']}`}>
                        <Button element="a" href="/" className="btn-left-icon btn-link">
                            <img src={Back} alt="Back" />
                            Back to Store
                        </Button>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  );
}
