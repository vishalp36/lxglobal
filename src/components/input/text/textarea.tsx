import React from 'react';
import { getExtraClasses } from '../../../utils/common';

import styles from '../styles.scss';

export default function Textarea(props) {
	const {
		children,
		className,
		defaultValuetext,
		disabled,
		placeholdertext,
		autoFocus,
		readOnly,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
  	return (
	  	<div className={`${styles['form-group']} ${extraClasses}`}>
	  		<textarea 
	  			className={`${styles['form-control']} ${styles['custom-textarea']}`}
				placeholder={placeholdertext}
				defaultValue={defaultValuetext}
				autoFocus={autoFocus}
				readOnly={readOnly}
                disabled={disabled}
	  		>
			{children}
            </textarea>
	  	</div>
  	);
}
