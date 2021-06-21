import React from "react";
import TopNav from "../header/login-with-mega-menu";
//buttons
import Button from "../button";
import MobileBack from "../product-details/images/left-arrow.svg";
import styles from "./styles.scss";

export default function CheckoutHeader(props) {
    const {
		headertext,
		mobilemenuclass,
	} = props;
  return (
    <>
    	<TopNav className="header-desktop" menuclassName={mobilemenuclass} />
      	<div className={`${styles["header-mobile"]}`}>
			<div className={`${styles["header-container"]} container`}>
				<div className={`${styles["header-wrap"]}`}>
					<div className={`${styles['mobile-back-btn']}`}>
						<Button element="a" href="/" className="btn-left-icon btn-left-sm-icon btn-link">
							<img src={MobileBack} alt="Back" />
                            <span className={`${styles["header-text"]}`}>
                                {headertext}
                            </span>
						</Button>
                    </div>
                </div>
			</div>
      	</div>
    </>
  );
}
