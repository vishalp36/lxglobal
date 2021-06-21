import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "../button";
//Input
import Input from "../input/text";
import BottomNav from "../bottom-nav";
import TopNav from "../header/checkout-header-onscroll";
import Breadcrumbs from "../categories/breadcrumbs-4";
import AccountSideBar from "../account-details/store-account-sidebar";
import Mollie from "./images/mollie-logo.svg";
import Storeimg from "./images/store.png";
import Pin from "../checkout/images/pin.svg";
import Phone from "../checkout/images/phone.svg";
import Time from "../checkout/images/time.svg";
import Info from "../individual-stores/images/info.svg";
import Share from "../individual-stores/images/share.svg";
import Bag from "./images/bag.svg";
import Instagram from "../individual-stores/images/insta.svg";
import Facebook from "../individual-stores/images/fb.svg";

import accountstyles from "../account-details/styles.scss";

import styles from "./styles.scss";


export default function StoreAccount(props) {
  return (
    <>
      	<TopNav/>
      	<div>
			<Breadcrumbs 
				breadcrumblink1="Home"
				breadcrumblink2="Store profile"
			/>
      	</div>
		<div className="container">
			<div className={accountstyles['account-details-container']}>
				<div className={`${accountstyles['left-section']}`}>
					<AccountSideBar activeLink="active" />
				</div>
				<div className={`${accountstyles['right-section']}`}>
					<div className={`${accountstyles['max-w-616']}`}>
						<h3 className={`${accountstyles.title}`}>Store profile</h3>
						<div className={`${styles['store-profile-details']}`}>
							<h4>Mollie account</h4>
							<div className={`${accountstyles['input-row']} ${styles['label-with-icon']}`}>
								<img src={Mollie} alt="Mollie" className={`${styles['svg-icon']}`} />
								<div className={`${styles['flex-1']}`}>
									<div className={`${accountstyles['space-between']}`}>
										<label className={`${accountstyles['label-name']}`}>
											Mollie profile
										</label>
										<Button className="btn-link p-0">Edit</Button>
									</div>
									<div>
										<Input 
											type="text" 
											placeholdertext="Name"
											defaultValuetext="Profile name"
											className="transparent-input no-border"
											readOnly
											disabled
										/>
									</div>
								</div>
							</div>
							<div className={`${styles['store-details']}`}>
								<h4>Store details</h4>
								<div className={`${styles['store-img']}`}>
									<img src={Storeimg} alt="Store banner" />
								</div>
								<div>
									<div className={`${styles['details-row']}`}>
										<div className={`${styles.icon} ${styles['icon-18']}`}>
											<img src={Bag} alt="Bag" />
										</div>
										<div className={`${styles.content}`}>
											<div className={`${accountstyles['space-between']} ${styles['flex-start']}`}>
												<p className={`${styles['small-title']}`}>Store name</p>
											</div>
											<div className={`${styles['store-name']}`}>
												Store name
											</div>
										</div>
									</div>
									<div className={`${styles['details-row']}`}>
										<div className={`${styles.icon}`}>
											<img src={Pin} alt="Pin" />
										</div>
										<div className={`${styles.content}`}>
											<div className={`${accountstyles['space-between']} ${styles['flex-start']}`}>
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
											<div className={`${accountstyles['space-between']} ${styles['flex-start']}`}>
												<p className={`${styles['small-title']}`}>Telephone</p>
											</div>
											<div className={`${styles.phone}`}>
												+31206762620
											</div>
										</div>
									</div>
									<div className={`${styles['details-row']}`}>
										<div className={`${styles.icon} ${styles['icon-18']}`}>
											<img src={Info} alt="Info" />
										</div>
										<div className={`${styles.content}`}>
											<div className={`${accountstyles['space-between']} ${styles['flex-start']}`}>
												<p className={`${styles['small-title']}`}>Store description</p>
											</div>
											<div className={`${styles.desc}`}>
												Deze ambachtelijke patisserie en chocolaterie maakt onweerstaanbare creaties, Tout heeft de allerlekkerste gebakjes, taarten, macarons, bonbons en nog veel meer.
											</div>
										</div>
									</div>
									<div className={`${styles['details-row']}`}>
										<div className={`${styles.icon} ${styles['icon-18']}`}>
											<img src={Time} alt="Time" />
										</div>
										<div className={`${styles.content}`}>
											<div className={`${accountstyles['space-between']} ${styles['flex-start']}`}>
												<p className={`${styles['small-title']}`}>Opening hours</p>
											</div>
											<div className={`${styles['time-details']}`}>
												<div className={`${accountstyles['space-between']} ${styles['mb-5']}`}>
													<span>Monday</span>
													<span>8:30 - 18:00</span>
												</div>
												<div className={`${accountstyles['space-between']} ${styles['mb-5']}`}>
													<span>Tuesday</span>
													<span>8:30 - 18:00</span>
												</div>
												<div className={`${accountstyles['space-between']} ${styles['mb-5']}`}>
													<span>Wednesday</span>
													<span>8:30 - 18:00</span>
												</div>
												<div className={`${accountstyles['space-between']} ${styles['mb-5']}`}>
													<span>Thursday</span>
													<span>8:30 - 18:00</span>
												</div>
												<div className={`${accountstyles['space-between']} ${styles['mb-5']}`}>
													<span>Friday</span>
													<span>8:30 - 18:00</span>
												</div>
												<div className={`${accountstyles['space-between']} ${styles['mb-5']}`}>
													<span>Saturday</span>
													<span className="text-gray70">closed</span>
												</div>
												<div className={`${accountstyles['space-between']} ${styles['mb-5']}`}>
													<span>Sunday</span>
													<span className="text-gray70">closed</span>
												</div>
                            				</div>
										</div>
									</div>
									<div className={`${styles['details-row']}`}>
										<div className={`${styles.icon} ${styles['icon-18']}`}>
											<img src={Share} alt="Share" />
										</div>
										<div className={`${styles.content}`}>
											<div className={`${accountstyles['space-between']} ${styles['flex-start']}`}>
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
					</div>
				</div>
			</div>
		</div>
		<BottomNav />
    </>
  );
}
