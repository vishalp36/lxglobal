import React from "react";


// Components
import Modal from "../modal";
import Button from "../button";
import Radio from "../input/checks-radios";
import Img1 from "../../resources/images/1.png";
//styles
import modalStyles from "../modal/styles.scss";
import inputStyle from '../input/styles.scss';
import styles from "./styles.scss";


export default function ProductSelectModal() {
  return (
    <>
      	<Modal 
		  	overlayClass="open"
            className="open modal-flex-end"
		>
			<div className={`${modalStyles["modal-header"]}`}>
				<h3 className={`${modalStyles["modal-title"]} text-truncate`}>Macaron Naturel Collectie 8 Stuks</h3>
			</div>
			<div
				className={`${modalStyles["modal-body"]}`}
			>
				<div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="1" name="radio" checked>
                            <span className={`${inputStyle.list} ${inputStyle['no-pad-hover']}`}>
                                <span className={`${inputStyle['list-img']}`}>
                                    <img src={Img1} alt="Product" />
                                </span>
                                <span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
                                    lorem ipsum is common placeholder text used to demonstrate the graph
                                    lorem ipsum is common 
                                </span>
                            </span>
                        </Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="2" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="3" name="radio" disabled className="space-between out-of-stock">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
                            <span className={`${inputStyle['out-of-stock-text']}`}>Out of stock</span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="4" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="5" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="6" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="7" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="8" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="9" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="10" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="11" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="12" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                    <div className={`${styles["mb-16"]}`}>
                        <Radio type="radio" id="13" name="radio">
                            <span className={`${inputStyle['multi-line-ellipsis']}`}>
                                Lorem ipsum is placeholder
                            </span>
						</Radio>
                    </div>
                </div>
        	</div>
            <div
			    className={`${modalStyles["min-h-box-72"]}`}
			/>
			<div
			    className={`${modalStyles["modal-footer"]}`}
			>
                <Button className="btn-block">Add to cart  -  €11.25</Button>
			</div>
      	</Modal>
    </>
  );
}
