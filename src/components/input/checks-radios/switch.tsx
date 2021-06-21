import React, { Children } from 'react';
import { getExtraClasses } from '../../../utils/common';
import styles from './styles.scss';

export default function Switch(props) {
  const {
	className,
	children,
    disabled,
    id,
    name,
    checked,
    type,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
	return (
		<>
            <div className={`${styles['toggle-switch']} ${extraClasses}`}>
			    <input type="checkbox" id={id} defaultChecked={checked}  disabled={disabled} />
			    <label htmlFor={id} className={`${styles['checkbox-label']}`} />
                {children}
		    </div>
		</>
	);
}

