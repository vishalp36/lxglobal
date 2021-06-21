import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "../button";
//Input
import Input from "../input/text";
import BottomNav from "../bottom-nav";
import TopNav from "../header/checkout-header-onscroll";
import Breadcrumbs from "../categories/breadcrumbs-4";
import AccountSideBar from "./sidebar";
import Checkbox from "../input/checks-radios/checkbox";
//phoneInput
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
//custom css
import '../../resources/css/lib/phone-input/phone-input.scss';

import styles from "./styles.scss";



export default function AccountDetails(props) {
	const [value, setValue] = useState();
  return (
    <>
      	<TopNav/>
      	<div>
			<Breadcrumbs 
				breadcrumblink1="Home"
				breadcrumblink2="Your account"
			/>
      	</div>
		<div className="container">
			<div className={styles['account-details-container']}>
				<div className={`${styles['left-section']}`}>
					<AccountSideBar activeLink="active" />
				</div>
				<div className={`${styles['right-section']}`}>
					<div className={`${styles['max-w-616']}`}>
						<h3 className={`${styles.title}`}>Your account</h3>
						<div className={`${styles['tab-section']}`}>
							<Link to="/" className={`${styles['tab-link']} ${styles.active}`}>
								Account details
							</Link>
							<Link to="/" className={`${styles['tab-link']}`}>
								Saved addresses
							</Link>
						</div>
						<div className={`${styles['tab-content']}`}>
							<form>
								<div className={`${styles['input-row']}`}>
									<div className={`${styles['space-between']}`}>
										<label className={`${styles['label-name']}`}>Name</label>
										<Button className="btn-link p-0">Edit</Button>
									</div>
									<div>
										<Input 
											type="text" 
											placeholdertext="Name"
											defaultValuetext="username"
											className="transparent-input no-border"
											readOnly
											disabled
										/>
									</div>
								</div>
								<div className={`${styles['input-row']}`}>
									<div className={`${styles['space-between']}`}>
										<label className={`${styles['label-name']}`}>Phone</label>
										<Button className="btn-link p-0">Edit</Button>
									</div>
									<div>
									<PhoneInput
										className="custom-phone-input no-border-input custom-phone-input-no-flag"
										international
										placeholder="000 000 000"
										defaultCountry="NL"
										value="+1 000 000 000"
										onChange={setValue}
										readOnly
										disabled
									/>
									</div>
								</div>
								<div className={`${styles['input-row']}`}>
									<div className={`${styles['space-between']}`}>
										<label className={`${styles['label-name']}`}>Email</label>
										<Button className="btn-link p-0">Edit</Button>
									</div>
									<div>
										<Input 
											type="email" 
											placeholdertext="Email"
											defaultValuetext="email@email.com"
											className="transparent-input no-border"
											readOnly
											disabled
										/>
									</div>
								</div>
								<div className={`${styles['input-row']}`}>
									<div className={`${styles['space-between']}`}>
										<label className={`${styles['label-name']}`}>Password</label>
										<Button className="btn-link p-0">Update</Button>
									</div>
									<div>
										<Input 
											type="text" // if user edit that time type="password" 
											placeholdertext="Password"
											defaultValuetext="Updated 2 month ago"
											className="transparent-input no-border"
											readOnly
											disabled
										/>
									</div>
								</div>
								<div className={`${styles['input-row']}`}>
									<div className={`${styles['space-between']}`}>
										<label className={`${styles['label-name']}`}>Newsletter</label>
										<Button className="btn-link p-0">Cancel</Button>
									</div>
									<div>
                                        <Checkbox 
                                            className="flex-start"
                                            type="checkbox" 
                                            id="1" 
                                            name="checkbox" 
                                            checked
                                        >
                                            <span>
                                            Subscribe to newsletter
                                            </span>
                                        </Checkbox>
									</div>
                                    <div className={`${styles['btn-save']}`}>
                                        <Button>Save</Button>
                                    </div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<BottomNav />
    </>
  );
}
