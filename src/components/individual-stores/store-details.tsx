import React from "react";
import { Link } from "react-router-dom";

// Components
import TopNav from "../header/header-with-back-icon";

import BottomNav from "../bottom-nav";
import Banner from "./store-detail-banner";
import Pin from "../checkout/images/pin.svg";
import Phone from "../checkout/images/phone.svg";
import Time from "../checkout/images/time.svg";
import Info from "./images/info.svg";
import Share from "./images/share.svg";
import Instagram from "./images/insta.svg";
import Facebook from "./images/fb.svg";
import styles from './styles.scss';


export default function IndividualStore() {
  return (
    <>
        <TopNav MobileclassName= "display-none"/>
        <div className={`${styles['stores-section']}`}>
            <Banner />
			<div className={`${styles['store-container']} container`}>
				<div className={`${styles['store-detail-card']}`}>
					<h2 className={`${styles['store-title']}`}>Store Name</h2>
					<div className={`${styles["tag-section"]}`}>
						<span className={`${styles.inline}`}>Bakery</span>
						<span className={`${styles.inline}`}>Organic</span>
              		</div>
					<div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon}`}>
                            <img src={Pin} alt="Pin" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Address</p>
                            </div>
                            <div className={`${styles.address}`}>
                                Maasstraat 77, 1078 LT, Amsterdam
                            </div>
                        </div>
                    </div>
					<div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon} ${styles['icon-18']}`}>
                            <img src={Phone} alt="Phone" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Telephone</p>
                            </div>
                            <div className={`${styles.phone}`}>
								+31206762620
                            </div>
                        </div>
                    </div>
					<div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon} ${styles['icon-18']}`}>
                            <img src={Time} alt="Time" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Opening hours</p>
                            </div>
                            <div className={`${styles['time-details']}`}>
								<div className={`${styles['space-between']} ${styles['mb-5']}`}>
									<span>Monday</span>
									<span>8:30 - 18:00</span>
								</div>
								<div className={`${styles['space-between']} ${styles['mb-5']}`}>
									<span>Tuesday</span>
									<span>8:30 - 18:00</span>
								</div>
								<div className={`${styles['space-between']} ${styles['mb-5']}`}>
									<span>Wednesday</span>
									<span>8:30 - 18:00</span>
								</div>
								<div className={`${styles['space-between']} ${styles['mb-5']}`}>
									<span>Thursday</span>
									<span>8:30 - 18:00</span>
								</div>
								<div className={`${styles['space-between']} ${styles['mb-5']}`}>
									<span>Friday</span>
									<span>8:30 - 18:00</span>
								</div>
								<div className={`${styles['space-between']} ${styles['mb-5']}`}>
									<span>Saturday</span>
									<span className="text-gray70">closed</span>
								</div>
								<div className={`${styles['space-between']} ${styles['mb-5']}`}>
									<span>Sunday</span>
									<span className="text-gray70">closed</span>
								</div>
                            </div>
                        </div>
                    </div>
					<div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon} ${styles['icon-18']}`}>
                            <img src={Info} alt="Info" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Store description</p>
                            </div>
                            <div className={`${styles.desc}`}>
							Deze ambachtelijke patisserie en chocolaterie maakt onweerstaanbare creaties, Tout heeft de allerlekkerste gebakjes, taarten, macarons, bonbons en nog veel meer.
                            </div>
                        </div>
                    </div>
					<div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon} ${styles['icon-18']}`}>
                            <img src={Share} alt="Share" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Social</p>
                            </div>
                            <div className={`${styles.desc}`}>
								<div>
									<Link to="/" className={`${styles['social-link']}`}>
										<img src={Instagram} alt="Instagram" />
										<span>Instagram</span>
									</Link>
								</div>
								<div>
									<Link to="/" className={`${styles['social-link']} mb-0`}>
										<img src={Facebook} alt="Facebook" />
										<span>Facebook</span>
									</Link>
								</div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
        </div> 
        <BottomNav  />
    </>
  );
}
