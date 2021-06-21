import React from "react";
import Textarea from '../input/text/textarea';
import Radio from "../input/checks-radios";
import Checkoutstyles from '../checkout/styles.scss';
import inputStyle from '../input/styles.scss';
import styles from './styles.scss';

export default function PackageDetails() {
  return (
    <>
        <div className={`${Checkoutstyles['delivery-section']}`}>
            <h3>Package details</h3>
            <div className={`${styles['detail-block']}`}>
                <h4>What do you want to deliver?</h4>
                <div className={`${styles['textarea-block']}`}>
                    <Textarea
                        placeholdertext="Describe briefly the contents of your delivery"
                    />
                </div>
            </div>
            <div className={`${styles['detail-block']}`}>
                <h4>Package size</h4>
                <div>
                    <div className={`${styles['radio-list']}`}>
                        <Radio type="radio" id="1" name="radio">
                            <span className={`${styles['radio-title']} ${inputStyle['multi-line-ellipsis']}`}>
                                Package - &euro;7.49
                            </span>
                            <span className={`${styles['radio-inst']}`}>
                                <span>0-20kg</span>
                                <span className={`${styles['size-text']}`}>75cm x 50cm x 50cm</span>
                            </span>
                        </Radio>
                    </div>
                    <div className={`${styles['radio-list']}`}>
                        <Radio type="radio" id="2" name="radio">
                            <span className={`${styles['radio-title']} ${inputStyle['multi-line-ellipsis']}`}>
                                Letterbox - &euro;4.25
                            </span>
                            <span className={`${styles['radio-inst']}`}>
                                <span>0-2kg</span>
                                <span className={`${styles['size-text']}`}>38cm x 26,5cm x 3,2cm</span>
                            </span>
                        </Radio>
                    </div>
                    <div className={`${styles['radio-list']}`}>
                        <Radio type="radio" id="3" name="radio">
                            <span className={`${styles['radio-title']} ${inputStyle['multi-line-ellipsis']}`}>
                                Custom - &euro;6.99
                            </span>
                            <span className={`${styles['radio-inst']}`}>
                                on request
                            </span>
                        </Radio>
                    </div>
                </div>
            </div>
            <div className={`${styles['detail-block']}`}>
                <h4>Package contents</h4>
                <div>
                    <div className={`${styles['radio-list']}`}>
                        <Radio type="radio" id="4" name="radio">
                            <span className={`${styles['radio-title']} ${inputStyle['multi-line-ellipsis']}`}>
                            Food
                            </span>
                        </Radio>
                    </div>
                    <div className={`${styles['radio-list']}`}>
                        <Radio type="radio" id="5" name="radio">
                            <span className={`${styles['radio-title']} ${inputStyle['multi-line-ellipsis']}`}>
                                Alcohol
                            </span>
                        </Radio>
                    </div>
                    <div className={`${styles['radio-list']}`}>
                        <Radio type="radio" id="6" name="radio">
                            <span className={`${styles['radio-title']} ${inputStyle['multi-line-ellipsis']}`}>
                                Goods / products
                            </span>
                        </Radio>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
