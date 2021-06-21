import React from "react";


// Components
import Modal from "../modal";
import Button from "../button";
import Receipt from "./images/receipt.svg";

//styles
import modalStyles from "../modal/styles.scss";
import styles from "./styles.scss";
import BottomNav from "../bottom-nav";



export default function PaymentError() {
  return (
    <>
      	<Modal 
		  	overlayClass="open"
            className="open only-for-dektop"
            contentClass="h-auto-desktop justify-center"
		>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div className={`${styles['center-box']}`}>
                    <div className={`${styles['circle-icon']}`}>
                        <img src={Receipt} alt="Receipt" />
                    </div>
                    <h3 className={`${styles["modal-title"]}`}>Payment was not complete</h3>
                    <p className="text-gray">Sorry we couldn't complete your payment, please contact your bank.</p>
                </div>
        	</div>
      	</Modal>
        <BottomNav />
    </>
  );
}
