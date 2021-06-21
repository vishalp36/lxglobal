import React from "react";
//buttons
import Button from "../../button";

//Input
import Input from "../../input/text";
import Textarea from '../../input/text/textarea';
import Pin from "../images/pin.svg";
import PinGray from "../images/pin-gray.svg";
import CurrentLocation from "../images/current-loc.svg";
import Time from "../images/time.svg";
import Plus from "../images/plus.svg";
import Document from "../images/doc.svg";
import styles from '../styles.scss';

export default function DeliveryDetails() {
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
                                <Button className="btn-link p-0">Cancel</Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['select-address']} ${styles.open}`}>
                        <Button className={`${styles['address-row']} ${styles.active} btn-link btn-block`}>
                            <span className={`${styles.icon}`}>
                                <img src={PinGray} alt="Pin" />
                            </span>
                            <span className={`${styles['address-text']}`}>
                                Maasstraat 77, 1078 LT, Amsterdam
                            </span>
                        </Button>
                        <Button className={`${styles['address-row']} btn-link btn-block`}>
                            <span className={`${styles.icon}`}>
                                <img src={PinGray} alt="Pin" />
                            </span>
                            <span className={`${styles['address-text']}`}>
                                Street 77, 1078 RT, Utrecht
                            </span>
                        </Button>
                        <Button className={`${styles['address-row']} btn-link btn-block`}>
                            <span className={`${styles.icon} ${styles['icon-18']}`}>
                                <img src={CurrentLocation} alt="Current location" />
                            </span>
                            <span className={`${styles['address-text']} ${styles['address-text-2']}`}>
                                Use my current location
                            </span>
                        </Button>
                        <Button className={`${styles['address-row']} btn-link btn-block`}>
                            <span className={`${styles.icon} ${styles['icon-18']}`}>
                                <img src={Plus} alt="Plus" />
                            </span>
                            <span className={`${styles['address-text']} ${styles['address-text-2']}`}>
                                Add new address
                            </span>
                        </Button>
                    </div>
                </div>
                <div className={`${styles['details-section']}`}>
                    <div className={`${styles['details-row']}`}>
                        <div className={`${styles.icon} ${styles['icon-18']}`}>
                            <img src={Time} alt="Time" />
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles['space-between']} ${styles['flex-start']}`}>
                                <p className={`${styles['small-title']}`}>Delivery time</p>
                                <Button className="btn-link p-0">Cancel</Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['select-time']} ${styles.open}`}>
                        <div className={`${styles['select-day']}`}>
                            <Button className={`${styles.active} ${styles.time} btn-link`}>
                                Today
                            </Button>
                            <Button className={`${styles.time} btn-link`}>
                                Tomorrow
                            </Button>
                            <Button className={`${styles.time} btn-link`}>
                                Mon, 25th
                            </Button>
                            <Button className={`${styles.time} btn-link`}>
                                Tue, 26th
                            </Button>
                            <Button className={`${styles.time} btn-link`}>
                                Wed, 27th
                            </Button>
                            <Button className={`${styles.time} btn-link`}>
                                Thu, 28th
                            </Button>
                            <Button className={`${styles.time} btn-link`}>
                                Fri, 29th
                            </Button>
                            <Button className={`${styles.time} btn-link`}>
                                Sat, 30th
                            </Button>
                        </div>
                        <div>
                            <div className={`${styles['btn-time']}`}>
                                <Button className="btn-block btn-outline-gray">
                                    Between 14:00 - 16:00
                                </Button>
                            </div>
                            <div className={`${styles['btn-time']}`}>
                                <Button className="active btn-block btn-outline-gray">
                                    Between 16:00 - 18:00
                                </Button>
                            </div>
                            <div className={`${styles['btn-time']}`}>
                                <Button className="btn-block btn-outline-gray">
                                    Between 18:00 - 20:00
                                </Button>
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
                                <Button className="btn-link p-0">Cancel</Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['inst-section']} ${styles.open}`}>
                        <div className={`${styles['textarea-block']}`}>
                            <Textarea
                                placeholdertext="Any notes for us?"
                            />
                        </div>
                        <Button>Add</Button>
                    </div>
                </div>
                <div className={`${styles['details-section']} ${styles['voucher-section']}`}>
                    <div className={`${styles['details-row']} ${styles['flex-col']}`}>
                        <div className={`${styles['space-between']}`}>
                            <h4 className="mb-0">Add a voucher</h4>
                            <div className={`${styles['btn-add']}`}>
                                <Button className="btn-link p-0">Cancel</Button>
                            </div>
                        </div>
                        <div className={`${styles['voucher-input']} ${styles.open}`}>
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
