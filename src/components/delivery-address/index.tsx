import React from "react";


// Components
import Modal from "../modal";
import Button from "../button";
import InputWithClearbtn from "../input/text/with-clear-icon";
import CurrentLoc from "./images/current-loc.svg";
import Pin from "./images/pin.svg";
import MobileBack from "../product-details/images/left-arrow.svg";
//styles
import modalStyles from "../modal/styles.scss";
import styles from "./styles.scss";
import BottomNav from "../bottom-nav";



export default function SelectNewAddress() {
  return (
    <>
      	<Modal 
		  	overlayClass="open"
            className="open only-for-dektop display-header-only-desktop"
            contentClass="h-auto-desktop"
		>
			<div className={`${modalStyles["modal-header"]}`}>
				<h3 className={`${styles["modal-title"]} ${styles['modal-desktop-title']}`}>Setup delivery address</h3>
			</div>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div className={`${styles["fix-top-header"]}`}>
                    <div className={`${styles['mobile-back-btn']}`}>
						<Button element="a" href="/" className="btn-left-icon btn-left-sm-icon btn-link">
							<img src={MobileBack} alt="Back" />
						</Button>
					</div>
                    <div className={`${styles["flex-1"]} ${styles["input-for-mobile"]}`}>
                        <InputWithClearbtn 
                            type="text"
                            className="has-right-icon" 
                            placeholdertext="Where are you?" 
                            autoFocus 
                        />
                    </div>
                </div>
                <div className={`${styles["search-result-container"]}`}>
                    <div className={`${styles["search-result-list"]}`}>
                        <div className={`${styles["list-icon"]}`}>
                            <div className={`${styles["icon-box"]}`}>
                                <img src={CurrentLoc} alt="Current location" className={`${styles.icon} ${styles['icon-18']}`} />
                            </div>
                        </div>
                        <div className={`${styles["list-content"]}`}>
                            <p className={`${styles.title} text-truncate`}>67, Van Woustraat, Amsterdam-Zuid</p>
                            <p className={`${styles.inst} text-truncate`}>We think you are here</p>
                        </div>
                    </div>
                    <div className={`${styles["recent-search"]}`}>
                        <h4>Recent deliveries</h4>
                        <div className={`${styles["search-result-list"]}`}>
                            <div className={`${styles["list-icon"]}`}>
                                <div className={`${styles["icon-box"]}`}>
                                    <img src={Pin} alt="Location" className={`${styles.icon}`} />
                                </div>
                            </div>
                            <div className={`${styles["list-content"]}`}>
                                <p className={`${styles.title} text-truncate`}>67, Van Woustraat</p>
                                <p className={`${styles.inst} text-truncate`}>Amsterdam</p>
                            </div>
                        </div>
                        <div className={`${styles["search-result-list"]}`}>
                            <div className={`${styles["list-icon"]}`}>
                                <div className={`${styles["icon-box"]}`}>
                                    <img src={Pin} alt="Location" className={`${styles.icon}`} />
                                </div>
                            </div>
                            <div className={`${styles["list-content"]}`}>
                                <p className={`${styles.title} text-truncate`}>67, Van Woustraat</p>
                                <p className={`${styles.inst} text-truncate`}>Amsterdam</p>
                            </div>
                        </div>
                        <div className={`${styles["search-result-list"]}`}>
                            <div className={`${styles["list-icon"]}`}>
                                <div className={`${styles["icon-box"]}`}>
                                    <img src={Pin} alt="Location" className={`${styles.icon}`} />
                                </div>
                            </div>
                            <div className={`${styles["list-content"]}`}>
                                <p className={`${styles.title} text-truncate`}>67, Van Woustraat</p>
                                <p className={`${styles.inst} text-truncate`}>Amsterdam</p>
                            </div>
                        </div>                    
                    </div>
                </div>
        	</div>
      	</Modal>
        <BottomNav />
    </>
  );
}
