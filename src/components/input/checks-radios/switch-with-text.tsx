import React from 'react';
import { getExtraClasses } from '../../../utils/common';
import styles from './styles.scss';

export default function SwitchWithtext(props) {
    const {
		onClick,
        id,
        id2,
		disabled,
        defaultChecked,
		defaultChecked2,
		className,
        switch1text,
        switch2text,
	} = props; 
	let extraClasses = getExtraClasses(styles, className);
	return (
		<>
			<div className={`${styles['switch-toggle']} ${extraClasses}`}>
                <input id={id} name="switch" type="radio" defaultChecked={defaultChecked} />
                <label htmlFor={id} onClick={onClick}>{switch1text}</label>
                <input id={id2} name="switch" type="radio" disabled={disabled} defaultChecked={defaultChecked2} />
                <label htmlFor={id2} onClick={onClick}>{switch2text}</label>
                <a />
            </div>
		</>
	);
}
