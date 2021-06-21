
import React from "react";



// Components
import Modal from "../modal";
import Button from "../button";
import FilterAccordian from "./filter-accordian";

//styles
import modalStyles from "../modal/styles.scss";
import styles from "./styles.scss";


export default function OpenPriceAccordian() {
   return (
    <>
      	<Modal
			overlayClass="open"
			className="open"
		>
			<div className={`${modalStyles["modal-header"]}`}>
				<h3 className={`${styles["filter-title"]}`}>More filters</h3>
			</div>
			<div
				className={`${modalStyles["modal-body"]} ${styles["filter-modal-body"]}`}
			>
				<FilterAccordian />
        	</div>
			<div
				className={`${modalStyles["modal-footer"]} ${styles["filter-modal-footer"]}`}
			>
				<div className={`${styles["filter-modal-footer-row"]}`}>
					<div className={`${styles["filter-modal-footer-col"]}`}>
					<Button className={`${styles["filter-clear-btn"]} btn btn-link`}>
						Clear
					</Button>
					</div>
					<div className={`${styles["filter-modal-footer-col"]}`}>
					<Button className={`${styles["filter-show-btn"]}`}>
						Show <span>(24)</span>
					</Button>
					</div>
				</div>
			</div>
      	</Modal>
    </>
  );
}
