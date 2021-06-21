import React from 'react';
import { getExtraClasses } from '../../utils/common';

import styles from './styles.scss';

export default function InventoryList(props) {
	const {
		children,
		className,
		name
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	return (
		<>
			<div className={`${styles.list} ${extraClasses}`}>
                <h2 className={`${styles['cat-name']} text-truncate h4 mb-0`}>{name}</h2>
				{children}
			</div>
		</>
	);
}
