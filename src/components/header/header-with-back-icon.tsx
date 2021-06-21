import React from "react";
import TopNav from "./with-mega-menu";
import { getExtraClasses } from "../../utils/common";
//buttons
import Button from "../button";

import MobileBack from "../product-details/images/left-arrow.svg";
import styles from "./styles.scss";

export default function HeaderWithBackIcon(props) {
	const { 
		MobileclassName 
	} = props;
  let mobileclasses = getExtraClasses(styles, MobileclassName);
  return (
    <>
    	<TopNav className="header-desktop" />
      	<div className={`${styles["header-mobile"]} ${mobileclasses}`}>
			<div className={`${styles["header-container"]} container`}>
				<div className={`${styles["header-wrap"]}`}>
					<div className={`${styles['mobile-back-btn']}`}>
						<Button element="a" href="/" className="btn-left-icon btn-left-sm-icon btn-link">
							<img src={MobileBack} alt="Back" />
						</Button>
					</div>
			    </div>
			</div>
      	</div>
    </>
  );
}
