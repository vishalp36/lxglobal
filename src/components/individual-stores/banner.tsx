import React from "react";
//buttons
import Button from "../button";
import Breadcrumbs from "../categories/breadcrumbs-3";
import BannerImg from "./images/banner.png";
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
                    />
                </div>
                <div className={`${styles['white-box']}`}>
                    <StoreCard 
                        title="Store Name"
                        value1="Bakery"
                        value2="Organic"
                        city="Amsterdam"
                        amount="&euro;2.99"
                        time="60 min"
                        className="white-card"
					>
                        <div className={`${styles['store-content']}`}>
                            <p className={`${styles.inst}`}>Iets wat goed is mag best ontzettend lekker zijn. Biologische wijnen, zachte Nederlandse witschimmelkaas uit de streek, verse groenten en fr Iets wat goed is mag best ontzettend lekker zijn. Biologische wijnen, zachte Nederlandse witschimmelkaas uit de streek, verse groenten en fr Iets wat goed is mag best ontzettend lekker zijn. Biologische wijnen, zachte Nederlandse witschimmelkaas uit de streek, verse groenten en fr</p>
                            <Button className={`${styles['btn-more']} btn-link p-0 font-weight-normal`}>... More info</Button>
                        </div>
                    </StoreCard>
                </div>
            </div>
            
        </div>
    </>
  );
}
