import React from "react";
//buttons
import Button from "../button";



import Time from "../checkout/images/time.svg";
import Time1 from "./images/time-1.svg";

import Checkoutstyles from '../checkout/styles.scss';

export default function DeliveryTimeDetails() {
  return (
    <>
        <div className={`${Checkoutstyles['delivery-section']}`}>
            <h3>Delivery time</h3>
            <div>
                <div className={`${Checkoutstyles['details-section']}`}>
                    <div className={`${Checkoutstyles['details-row']}`}>
                        <div className={`${Checkoutstyles.icon} ${Checkoutstyles['icon-18']}`}>
                            <img src={Time1} alt="Time" />
                        </div>
                        <div className={`${Checkoutstyles.content}`}>
                            <div className={`${Checkoutstyles['space-between']} ${Checkoutstyles['flex-start']}`}>
                                <p className={`${Checkoutstyles['small-title']}`}>Delivery time</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${Checkoutstyles['select-time']} ${Checkoutstyles.open}`}>
                        <div className={`${Checkoutstyles['select-day']}`}>
                            <Button className={`${Checkoutstyles.active} ${Checkoutstyles.time} btn-link`}>
                                Today
                            </Button>
                            <Button className={`${Checkoutstyles.time} btn-link`}>
                                Tomorrow
                            </Button>
                            <Button className={`${Checkoutstyles.time} btn-link`}>
                                Mon, 25th
                            </Button>
                            <Button className={`${Checkoutstyles.time} btn-link`}>
                                Tue, 26th
                            </Button>
                            <Button className={`${Checkoutstyles.time} btn-link`}>
                                Wed, 27th
                            </Button>
                            <Button className={`${Checkoutstyles.time} btn-link`}>
                                Thu, 28th
                            </Button>
                            <Button className={`${Checkoutstyles.time} btn-link`}>
                                Fri, 29th
                            </Button>
                            <Button className={`${Checkoutstyles.time} btn-link`}>
                                Sat, 30th
                            </Button>
                        </div>
                        <div>
                            <div className={`${Checkoutstyles['btn-time']}`}>
                                <Button className="btn-block btn-outline-gray">
                                    Between 14:00 - 16:00
                                </Button>
                            </div>
                            <div className={`${Checkoutstyles['btn-time']}`}>
                                <Button className="active btn-block btn-outline-gray">
                                    Between 16:00 - 18:00
                                </Button>
                            </div>
                            <div className={`${Checkoutstyles['btn-time']}`}>
                                <Button className="btn-block btn-outline-gray">
                                    Between 18:00 - 20:00
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${Checkoutstyles['details-section']}`}>
                    <div className={`${Checkoutstyles['details-row']}`}>
                        <div className={`${Checkoutstyles.icon} ${Checkoutstyles['icon-18']}`}>
                            <img src={Time} alt="Time" />
                        </div>
                        <div className={`${Checkoutstyles.content}`}>
                            <div className={`${Checkoutstyles['space-between']} ${Checkoutstyles['flex-start']}`}>
                                <p className={`${Checkoutstyles['small-title']}`}>Pickup time</p>
                            </div>
                            <div className={`${Checkoutstyles['time-text']} text-gray`}>
                                Choose delivery time
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
