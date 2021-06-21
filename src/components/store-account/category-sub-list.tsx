import React from 'react';
import { getExtraClasses } from '../../utils/common';
import Badge from '../badge';

import styles from './styles.scss';

export default function InventorySubList(props) {
	const {
		className,
        ListImg,
        productname,
        badgelabel,
        price,
        badgeClass,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	return (
		<>
			<div className={`${styles.list} ${styles['sub-list']} ${extraClasses}`}>
                <div className={`${styles['product-img']}`}>
					<img src={ListImg} alt="product" />
				</div>
                <div className={`${styles['product-content']}`}>
                    <div className={`${styles['product-name-row']} text-truncate`}>
                        <p className={`${styles['product-name']} mb-0 text-truncate`}>
							{productname}
						</p>
                        <Badge badgetext={badgelabel} className={badgeClass} />
                    </div>
                    <div>
						<p className={`${styles['product-price']} mb-0`}>{price}</p>
					</div>
                </div>
			</div>
		</>
	);
}
