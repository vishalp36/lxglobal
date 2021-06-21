import React from "react";


// Components
import Modal from "../modal";

import Product1 from "./images/product.png";
//styles
import modalStyles from "../modal/styles.scss";



export default function ProductSelectModal() {
  return (
    <>
      	<Modal 
		  	overlayClass="open"
            className="open"
            contentClass="image-box-container"
		>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div className={`${modalStyles["image-box"]}`}>
                    <img src={Product1} alt="product" />
                </div>
        	</div>
            
		</Modal>
    </>
  );
}
