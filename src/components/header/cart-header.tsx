import React from "react";
import TopNav from "../header/with-mega-menu";
//buttons
import Button from "../button";
import DeleteIcon from "./images/delete.svg";
import styles from "./styles.scss";

export default function CartHeader() {
  return (
    <>
    	<TopNav className="cart-header-desktop" />
      	<div className={`${styles["cart-header-mobile"]}`}>
			<div className="container">
				<div className={`${styles["cart-header-wrap"]}`}>
					<h2 className={`${styles["cart-title"]}`}>Cart</h2>
					<div>
                        <Button className="btn-link btn-link-icon btn-link-lg-icon">
                            <img src={DeleteIcon} alt="remove" className={`${styles['delete-icon']}`} />
                        </Button>	
					</div>
			    </div>
			</div>
      	</div>
    </>
  );
}
