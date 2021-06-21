import React from 'react';
import { getExtraClasses } from '../../../utils/common';
import Button from '../../button';
import ClearBtn from '../icons/clear.svg';

import styles from '../styles.scss';

export default function InputWithBtn(props) {
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
			<Button className={`${styles['right-icon']} btn-link`}>
				<img src={ClearBtn} alt="Clear" className={`${styles['svg-icon']}`} />
			</Button>
			{children}
	  	</div>
  	);
}
