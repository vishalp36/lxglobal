import React from "react";
import Button from "../button";
import styles from "./styles.scss";
import Pin from "./images/pin.svg";
import Close from "./images/close.svg";


export default function AddressList(props) {
    const {
        title,
        inst,
      } = props;
  return (
    <>
        <div className={`${styles.box}`}>
            <div className={`${styles['icon-box']}`}>
                <svg className={`${styles['map-icon']}`} viewBox="0 0 14 19">
                    <use xlinkHref={`${Pin}#img`} />
                </svg>
            </div>
            <div className={`${styles['address-content']}`}>
                <h5 className={`${styles['address-title']} text-truncate`}>{title}</h5>
                <p className={`${styles['address-inst']} text-truncate`}>{inst}</p>
                <div className={`${styles['btn-remove']}`}>
                    <Button className="btn-link">
                        <svg className={`${styles['close-icon']}`} viewBox="0 0 10 10">
                            <use xlinkHref={`${Close}#img`} />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    </>
  );
}
