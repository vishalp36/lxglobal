import React from 'react';
import { getExtraClasses } from '../../../utils/common';

import styles from '../styles.scss';

export default function Input(props) {
	const {
		children,
		className,
		type,
		defaultValuetext,
		disabled,
		placeholdertext,
		autoFocus,
		readOnly,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
  	return (
	  	<div className={`${styles['form-group']} ${extraClasses}`}>
	  		<input 
	  			type={type} 
	  			className={`${styles['form-control']}`}
				placeholder={placeholdertext}
				defaultValue={defaultValuetext}
				autoFocus={autoFocus}
				readOnly={readOnly}
                disabled={disabled}
	  		/>
			{children}
	  	</div>
  	);
}
