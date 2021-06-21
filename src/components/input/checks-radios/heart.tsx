import React, { Children } from 'react';
import { getExtraClasses } from '../../../utils/common';
import Checkbox from './checkbox';
import styles from './styles.scss';

export default function HeartCheckbox(props) {
  const {
	className,
    disabled,
    id,
    checked,
  } = props;
  let extraClasses = getExtraClasses(styles, className);
	return (
		<>
            <div className={`${styles['heart-checkbox']} ${extraClasses}`}>
                <input id={id} name="wish" type='checkbox' defaultChecked={checked}  disabled={disabled} />
                <label htmlFor={id} className={`${styles['checkbox-label']}`} />
            </div>
		</>
	);
}

