import React, { Children } from 'react';
import { getExtraClasses } from '../../utils/common';
import styles from './styles.scss';

export default function Badge(props) {
  const {
	className,
    badgetext,
  } = props;
  const extraClasses = getExtraClasses(styles, className);
  return (
		<>
            <div className={`${styles.badge} ${extraClasses}`}>
               {badgetext}
            </div>
		</>
  );
}
