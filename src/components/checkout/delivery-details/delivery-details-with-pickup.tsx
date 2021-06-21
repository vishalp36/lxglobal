import React from "react";
//buttons
import Button from "../../button";

//Input
import Input from "../../input/text";


import Time from "../images/time.svg";
import Document from "../images/doc.svg";
import styles from '../styles.scss';
import SwitchWithtext from "../../input/checks-radios/switch-with-text";

export default function DeliveryDetails() {
  return (
    <>
        <div className={`${styles['delivery-section']}`}>
            <h3>Delivery details</h3>
            <form>
                <div className={`${styles['store-pickup-section']}`}>
                    <SwitchWithtext 
                        id="7"
                        id2="8"
                        switch1text="Delivery"
                        switch2text="Store pick-up"
                        defaultChecked2
                    />
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
