import React from "react";


// Components
import Modal from "../modal";
import Button from "../button";
//Input
import InputLabel from "../input/text/input-label";
//styles
import modalStyles from "../modal/styles.scss";
import styles from "./styles.scss";
import BottomNav from "../bottom-nav";



export default function ConfirmAddress() {
  return (
    <>
      	<Modal 
		  	overlayClass="open"
            className="open only-for-dektop"
            contentClass="h-auto-desktop"
		>
			<div className={`${modalStyles["modal-header"]}`}>
				<h3 className={`${styles["modal-title"]}`}>Confirm address</h3>
			</div>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div className={`${styles["address-container"]}`}>
                    <form>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col}`}>
                                <InputLabel
                                    type="text"
                                    placeholdertext="Enter your family name"
                                    label="Family name"
                                    forName="family_name"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col}`}>
                                <InputLabel
                                    type="text"
                                    placeholdertext="Street name"
                                    defaultValuetext="Street name"
                                    label="Street name"
                                    forName="street_name"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col}`}>
                                <InputLabel
                                    type="text"
                                    placeholdertext="House number"
                                    defaultValuetext="84"
                                    label="House number"
                                    forName="house_number"
                                />
                            </div>
                            <div className={`${styles.col}`}>
                                <InputLabel
                                    type="text"
                                    placeholdertext="Appartment"
                                    defaultValuetext="2"
                                    label="Appartment"
                                    forName="appartment"
                                />
                            </div>
                            <div className={`${styles.col}`}>
                                <InputLabel
                                    type="text"
                                    placeholdertext="Postcode"
                                    defaultValuetext="124 000"
                                    label="Postcode"
                                    forName="post_code"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col}`}>
                                <InputLabel
                                    type="text"
                                    placeholdertext="City"
                                    defaultValuetext="Amsterdam"
                                    label="City"
                                    forName="city"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col} ${styles['btn-confirm']}`}>
                                <Button>Confirm</Button>
                            </div>
                        </div>
                    </form>
                </div>
        	</div>
      	</Modal>
        <BottomNav />
    </>
  );
}
