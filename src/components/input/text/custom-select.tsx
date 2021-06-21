import React from 'react';
import { getExtraClasses } from '../../../utils/common';
import Button from '../../button';

import styles from '../styles.scss';

export default function CustomSelect(props) {
	const {
        children,
		className,
        boxclassName,
        dropdownclassName,
        placeholdertext,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
    let btnClasses = getExtraClasses(styles, boxclassName);
    let dropdownClasses = getExtraClasses(styles, dropdownclassName);
  	return (
	  	<div className={`${styles['form-group']} ${extraClasses}`}>
	  		<div className={`${styles['custom-dropdown']} ${dropdownClasses}`}>
                <Button className={`${styles['select-box']} ${btnClasses}`}>
                    <span className={`${styles['multi-line-ellipsis']}`}>{placeholdertext}</span>
                </Button>
                {children}
            </div>
	  	</div>
  	);
}
