import React, { Children } from 'react';
import { getExtraClasses } from '../../../utils/common';
import styles from './styles.scss';

export default function Checkbox(props) {
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
            <div className={`${styles['custom-checkbox']} ${extraClasses}`}>
                <input id={id} name={name} type={type} defaultChecked={checked}  disabled={disabled} />
                <label htmlFor={id} className={`${styles['checkbox-label']}`}>
                  <span className={`${styles['flex-1']}`}>
                    {children}
				  </span>
                </label>
            </div>
		</>
	);
}

