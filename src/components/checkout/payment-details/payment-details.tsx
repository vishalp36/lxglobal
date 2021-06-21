import React from "react";
import Radio from "../../input/checks-radios";
import Checkbox from "../../input/checks-radios/checkbox";
import CardIcon from "../images/card.svg";
import Ideal from "../images/ideal.svg";
import BankTransfer from "../images/bank-contact.svg";
import BankContact from "../images/bank-transfer.svg";
import inputStyle from '../../input/styles.scss';
import styles from '../styles.scss';

export default function PaymentDetails() {
  return (
    <>
        <div className={`${styles['payment-section']}`}>
            <h3>Payment details</h3>
            <div className={`${styles['method-list']}`}>
                <div className={`${styles['small-heading']}`}>
                    <div className={`${styles.icon} ${styles['icon-18']}`}>
                        <img src={CardIcon} alt="Payment" />
                    </div>
                    <div className={`${styles.content}`}>
                        <p className={`${styles['small-title']}`}>Payment methods</p>
                    </div>
                </div>
                <div>
                    <div className={`${styles['list-col']}`}>
                        <Radio type="radio" id="1" name="radio" className="radio-style2" checked>
                            <span className={`${inputStyle.list} ${inputStyle['list-style2']} ${inputStyle['no-pad-hover']}`}>
                                <span className={`${inputStyle['list-img']}`}>
                                    <img src={Ideal} alt="Ideal" />
                                </span>
                                <span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
                                    iDEAL
                                </span>
                            </span>
                        </Radio>
                    </div> 
                    <div className={`${styles['list-col']}`}>
                        <Radio type="radio" id="2" name="radio" className="radio-style2">
                            <span className={`${inputStyle.list} ${inputStyle['list-style2']} ${inputStyle['no-pad-hover']}`}>
                                <span className={`${inputStyle['list-img']}`}>
                                    <img src={BankTransfer} alt="BankTransfer" />
                                </span>
                                <span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
                                    Bank transfer
                                </span>
                            </span>
                        </Radio>
                    </div> 
                    <div className={`${styles['list-col']}`}>
                        <Radio type="radio" id="3" name="radio" className="radio-style2">
                            <span className={`${inputStyle.list} ${inputStyle['list-style2']} ${inputStyle['no-pad-hover']}`}>
                                <span className={`${inputStyle['list-img']}`}>
                                    <img src={BankContact} alt="BankContact" />
                                </span>
                                <span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
                                    Bancontact
                                </span>
                            </span>
                        </Radio>
                    </div> 
                </div>
                <div className={`${styles['billing-section']}`}>
                    <div className={`${styles['billing-container']}`}>
                        <Checkbox className="flex-start" type="checkbox" id="5" name="checkbox">
                            <span>
                                Different billing address than delivery address?
                            </span>
                        </Checkbox>
                    </div>
                </div>
                <div className={`${styles['discount-section']}`}>
                    <div className={`${styles['discount-container']}`}>
                        <h3 className={`${styles['discount-title']}`}>Discount on your next order?</h3>
                        <Checkbox className="flex-start" type="checkbox" id="6" name="checkbox">
                            <span>
                                I would like to receive a discount voucher for my next order and register for the newsletter!
                            </span>
                        </Checkbox>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
