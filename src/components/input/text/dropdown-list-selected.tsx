import React from 'react';
import { getExtraClasses } from '../../../utils/common';
import Button from '../../button';


import styles from '../styles.scss';

export default function DropdownListSelected(props) {
	const {
        children,
		className,
        placeholdertext,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
  	return (
	  	<div className={`${styles['form-group']} ${extraClasses}`}>
	  		<div className={`${styles['custom-dropdown']}`}>
                <Button className={`${styles['select-box']} ${styles.selected}`}>
                   {children}
                </Button>
            </div>
	  	</div>
  	);
}
