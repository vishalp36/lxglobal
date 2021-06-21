import React from 'react';
//buttons
import Button from "../button";
import { getExtraClasses } from '../../utils/common';
import Plus from "../../resources/svg-icons/plus.svg";
import Minus from "../../resources/svg-icons/minus.svg";
import styles from './styles.scss';
import btnstyles from '../button/styles.scss';

export default function Quantity(props) {
    const {
		onClick,
        disabled,
        value,
        className,
        btnclassName,
        AddBtnclassName,
        SubBtnclassName,
        plusdisabled,
    } = props; 
    let extraClasses = getExtraClasses(styles, className);
    let btnClasses = getExtraClasses(btnstyles, btnclassName);
    let plusbtnClasses = getExtraClasses(btnstyles, AddBtnclassName);
    let minusbtnClasses = getExtraClasses(btnstyles, SubBtnclassName);
	return (
		<>
			<div className={`${styles['quantity-box']} ${extraClasses}`}>
                <Button 
                    className={`btn-outline-gray btn-icon ${btnClasses} ${minusbtnClasses}`} disabled={disabled}
                >
                    <svg
                        className={`${btnstyles["svg-icon"]}`}
                        viewBox="0 0 16 2"
                    >
                        <use xlinkHref={`${Minus}#img`} />
                    </svg>
                </Button>
                <span className={`${styles.value}`}>{value}</span>
                <Button 
                    className={`btn-icon ${btnClasses} ${plusbtnClasses}`}
                    disabled={plusdisabled}
                >
					<img src={Plus} alt="Add" />
				</Button>
            </div>
		</>
	);
}

