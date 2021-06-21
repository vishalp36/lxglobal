import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import CTABanner from "./images/cta-banner.png";
import RightArrow from "./images/right-arrow.svg";
import RightArrowyellow from "./images/right-arrow-yellow.svg";
import styles from "./styles.scss";

export default function CTA(props) {
  return (
    <div className={`${styles['cta-section']}`}>
        <div className="container">
            <div className={`${styles['cta-container']}`}>
                <div className={`${styles['image-section']}`}>
                   <div className={`${styles['cta-banner']}`}>
                    <img src={CTABanner} alt="Banner" />
                   </div>
                </div>
                <div className={`${styles['box-section']}`}>
                    <div className={`${styles['box-col']}`}>
                        <div className={`${styles.box}`}>
                            <h3>Register your store</h3>
                            <p className={`${styles.inst}`}>Reach new customers, cross-sell &amp; upsell with the power of many as part of our local retail community.</p>
                            <Button element="a" href="/" className="btn-link btn-link-right-icon">
                                Register your store
                                <img src={RightArrow} alt="RightArrow" />
                            </Button>
                        </div>
                    </div>
                    <div className={`${styles['box-col']}`}>
                        <div className={`${styles.box}`}>
                            <h3>Deliver anything</h3>
                            <p className={`${styles.inst}`}>Reach new customers, cross-sell &amp; upsell with the power of many as part of our local retail community.</p>
                            <Button element="a" href="/" className="btn-link btn-link-secondary  btn-link-right-icon">
                                Deliver anything
                                <img src={RightArrowyellow} alt="RightArrow" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
