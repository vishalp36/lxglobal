import React from 'react';
import { getExtraClasses } from '../../../utils/common';
import Button from '../../button';
import Eye from '../icons/eye.svg';
import EyeSlash from '../icons/eye-slash.svg';
import styles from '../styles.scss';

export default function PasswordInput(props) {
	const {
        children,
		className,
        iconclassName,
		type,
		defaultValuetext,
		disabled,
		placeholdertext,
		autoFocus,
		readOnly,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
    let iconactiveClass = getExtraClasses(styles, iconclassName);
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
			<Button className={`${styles['right-icon']} btn-link ${iconactiveClass}`}>
				<img src={Eye} alt="eye" className={`${styles['svg-icon']} ${styles.show}`} />
                <img src={EyeSlash} alt="eye" className={`${styles['svg-icon']} ${styles.hide}`} />
			</Button>
            {children}
	  	</div>
  	);
}
