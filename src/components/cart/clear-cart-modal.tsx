import React from "react";


// Components
import Modal from "../modal";
import Button from "../button";

//styles
import modalStyles from "../modal/styles.scss";
import styles from "./styles.scss";
import BottomNav from "../bottom-nav";



export default function ClearCart() {
  return (
    <>
      	<Modal 
		  	overlayClass="open"
            className="open hide-close-btn modal-default"
            contentClass="justify-center"
		>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div className={`${styles['center-box']}`}>
                    <h3 className={`${styles["modal-title"]}`}>
                     Are you sure you want to clear your cart?
                    </h3>
                    <div className={`${styles['btn-div']}`}>
                        <Button className="btn-block btn-danger">Clear my cart</Button>
                    </div>
                    <Button className="btn-link btn-link-gray">Cancel</Button>
                </div>
        	</div>
      	</Modal>
    </>
  );
}
