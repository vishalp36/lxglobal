import React from "react";


// Components
import Modal from "../modal";
import Button from "../button";

//styles
import modalStyles from "../modal/styles.scss";
import styles from "./styles.scss";
import BottomNav from "../bottom-nav";



export default function AddressNonSignedIn() {
  return (
    <>
      	<Modal 
		  	overlayClass="open"
            className="open only-for-dektop"
            contentClass="h-auto-desktop justify-center"
		>
			<div className={`${modalStyles["modal-header"]}`}>
				<h3 className={`${styles["modal-title"]}`}>Looks like you have an account</h3>
			</div>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div className={`${styles['address-container']} ${styles['center-box']}`}>
                    <p className="text-gray">
                        We found an account associated with
                        <span className={`${styles['d-block']}`}>email@email.com</span>
                    </p>
                    <div className={`${styles['btn-div']}`}>
                        <Button>Sign in</Button>
                    </div>
                    <Button className="btn-link">Use different email address instead</Button>
                </div>
        	</div>
      	</Modal>
        <BottomNav />
    </>
  );
}
