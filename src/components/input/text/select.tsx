import React from 'react';
import { getExtraClasses } from '../../../utils/common';

import styles from '../styles.scss';

export default function Select(props) {
	const {
		className,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
  	return (
	  	<div className={`${styles['form-group']} ${extraClasses}`}>
	  		<select 
	  			className={`${styles['form-control-select']}`}
	  		>
			    <option>Option1</option>
                <option>Option2</option>
                <option>Option3</option>
                <option>Option4</option>
            </select>
	  	</div>
  	);
}
