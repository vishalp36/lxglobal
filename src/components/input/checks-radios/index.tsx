import React, { Children } from 'react';
import { getExtraClasses } from '../../../utils/common';
import styles from './styles.scss';

export default function Radio(props) {
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
            <div className={`${styles['custom-radio']} ${extraClasses}`}>
                <input id={id} name={name} type={type} defaultChecked={checked}  disabled={disabled} />
                <label htmlFor={id} className={`${styles['radio-label']}`}>
                  <span className={`${styles['flex-1']}`}>
                    {children}
				  </span>
                </label>
            </div>
		</>
	);
}

