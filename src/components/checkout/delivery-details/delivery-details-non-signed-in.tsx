import React, {useState} from "react";
//buttons
import Button from "../../button";

//Input
import Input from "../../input/text";
//Input
import InputLabel from "../../input/text/input-label";

import Pin from "../images/pin.svg";
import Time from "../images/time.svg";
import Document from "../images/doc.svg";
import Phone from "../images/phone.svg";
//phoneInput
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
//custom css
import '../../../resources/css/lib/phone-input/phone-input.scss';
import styles from '../styles.scss';

export default function DeliveryDetails() {
    const [value, setValue] = useState()
  return (
    <>
        <div className={`${styles['delivery-section']}`}>
            <h3>Delivery details</h3>
            <form>
                <div className={`${styles['details-section']}`}>
                    <div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon}`}>
                            <img src={Pin} alt="Pin" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Delivery address</p>
                                <Button className="btn-link p-0">Change</Button>
                            </div>
                            <div className={`${styles.address}`}>
                                Maasstraat 77, 1078 LT, Amsterdam
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles['details-section']}`}>
                    <div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon}`}>
                            <img src={Phone} alt="Phone" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Contact</p>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col}`}>
                                <InputLabel
                                    type="text"
                                    placeholdertext="Name Surname"
                                    label="Your name"
                                    forName="your_name"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col}`}>
                                <InputLabel
                                    type="email"
                                    placeholdertext="email@email.com"
                                    label="Email (for receipt)"
                                    forName="email"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col}`}>
                                <label htmlFor="Phone_no" className={`${styles['label-name']}`}>
                                    Phone number (for delivery updates)
                                </label>
                                <PhoneInput
                                    className="custom-phone-input"
                                    international
                                    placeholder="000 000 000"
                                    defaultCountry="NL"
                                    value={value}
                                    onChange={setValue}
                                />
                            </div>
                        </div>
                        <div className={`${styles['link-center']}`}>
                            <Button className="btn-link p-0">Have an account?</Button>
                        </div>
                    </form>
                </div>
                <div className={`${styles['details-section']}`}>
                    <div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon} ${styles['icon-18']}`}>
                            <img src={Time} alt="Time" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Delivery time</p>
                                <Button className="btn-link p-0">Change</Button>
                            </div>
                            <div className={`${styles['time-text']}`}>
                                Today, 14:00 - 16:00
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles['details-section']}`}>
                    <div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon}`}>
                            <img src={Document} alt="Document" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Delivery instructions</p>
                                <Button className="btn-link p-0">Change</Button>
                            </div>
                            <div className={`${styles['inst-text']}`}>
                                Is it a gift?
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles['details-section']} ${styles['voucher-section']}`}>
                    <div className={`${styles['details-row']} ${styles['flex-col']}`}>
                        <div className={`${styles['space-between']}`}>
                            <h4 className="mb-0">Add a voucher</h4>
                            <div className={`${styles['btn-add']}`}>
                                <Button className="btn-link p-0">Add</Button>
                            </div>
                        </div>
                        <div className={`${styles['voucher-input']}`}>
                            <p>If you have a Peddler voucher code, apply it to your order.</p>
                            <div className={`${styles['input-row']}`}>
                                <div className={`${styles['input-col']}`}>
                                    <Input type="text" placeholdertext="Add a voucher" />
                                </div>
                                <div className={`${styles['full-w-in-mobile']}`}>
                                    <Button className="btn-block">Add</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  );
}
