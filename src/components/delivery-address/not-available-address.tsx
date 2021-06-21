import React from "react";


// Components
import Modal from "../modal";
import Button from "../button";

//styles
import modalStyles from "../modal/styles.scss";
import styles from "./styles.scss";
import BottomNav from "../bottom-nav";



export default function NotAvailableAddress() {
  return (
    <>
      	<Modal 
		  	overlayClass="open"
            className="open only-for-dektop"
            contentClass="h-auto-desktop justify-center"
		>
			<div className={`${modalStyles["modal-header"]}`}>
				<h3 className={`${styles["modal-title"]}`}>We are sorry, we don't deliver yet to your location area</h3>
			</div>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div className={`${styles['address-container']} ${styles['center-box']}`}>
                    <p className="text-gray">Peddler is available in Amsterdam and Utrecht right now.</p>
                    <div className={`${styles['btn-div']}`}>
                        <Button>Choose different address</Button>
                    </div>
                    <Button className="btn-link">Cancel my order</Button>
                </div>
        	</div>
      	</Modal>
        <BottomNav />
    </>
  );
}
