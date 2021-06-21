import React from "react";
//buttons
import Button from "../button";


import Pin from "../checkout/images/pin.svg";
import Sub from "./images/subtract.svg";
import PinGray from "../checkout/images/pin-gray.svg";
import CurrentLocation from "../checkout/images/current-loc.svg";
import Plus from "../checkout/images/plus.svg";
import Checkoutstyles from '../checkout/styles.scss';

export default function DeliveryAddressDetails() {
  return (
    <>
        <div className={`${Checkoutstyles['delivery-section']}`}>
            <h3>Delivery address</h3>
            <div>
                <div className={`${Checkoutstyles['details-section']}`}>
                    <div className={`${Checkoutstyles['details-row']}`}>
                        <div className={`${Checkoutstyles.icon}`}>
                            <img src={Sub} alt="subtract" />
                        </div>
                        <div className={`${Checkoutstyles.content}`}>
                            <div className={`${Checkoutstyles['space-between']} ${Checkoutstyles['flex-start']}`}>
                                <p className={`${Checkoutstyles['small-title']}`}>Pickup Address</p>
                                <Button className="btn-link p-0">Change</Button>
                            </div>
                            <div className={`${Checkoutstyles.address}`}>
                                Maasstraat 77, 1078 LT, Amsterdam
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${Checkoutstyles['details-section']}`}>
                    <div className={`${Checkoutstyles['details-row']}`}>
                        <div className={`${Checkoutstyles.icon}`}>
                            <img src={Pin} alt="Pin" />
                        </div>
                        <div className={`${Checkoutstyles.content}`}>
                            <div className={`${Checkoutstyles['space-between']} ${Checkoutstyles['flex-start']}`}>
                                <p className={`${Checkoutstyles['small-title']}`}>Delivery address</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${Checkoutstyles['select-address']} ${Checkoutstyles.open}`}>
                        <Button className={`${Checkoutstyles['address-row']} btn-link btn-block`}>
                            <span className={`${Checkoutstyles.icon}`}>
                                <img src={PinGray} alt="Pin" />
                            </span>
                            <span className={`${Checkoutstyles['address-text']}`}>
                                Maasstraat 77, 1078 LT, Amsterdam
                            </span>
                        </Button>
                        <Button className={`${Checkoutstyles['address-row']} btn-link btn-block`}>
                            <span className={`${Checkoutstyles.icon}`}>
                                <img src={PinGray} alt="Pin" />
                            </span>
                            <span className={`${Checkoutstyles['address-text']}`}>
                                Street 77, 1078 RT, Utrecht
                            </span>
                        </Button>
                        <Button className={`${Checkoutstyles['address-row']} btn-link btn-block`}>
                            <span className={`${Checkoutstyles.icon} ${Checkoutstyles['icon-18']}`}>
                                <img src={CurrentLocation} alt="Current location" />
                            </span>
                            <span className={`${Checkoutstyles['address-text']} ${Checkoutstyles['address-text-2']}`}>
                                Use my current location
                            </span>
                        </Button>
                        <Button className={`${Checkoutstyles['address-row']} btn-link btn-block`}>
                            <span className={`${Checkoutstyles.icon} ${Checkoutstyles['icon-18']}`}>
                                <img src={Plus} alt="Plus" />
                            </span>
                            <span className={`${Checkoutstyles['address-text']} ${Checkoutstyles['address-text-2']}`}>
                                Add new address
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
