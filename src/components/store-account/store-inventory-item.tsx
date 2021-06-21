import React from "react";
//buttons
import Button from "../button";
import Badge from '../badge';
//Input
import Input from "../input/text";
// Components
import TopNav from "../header/checkout-header-onscroll";
import Switch from "../input/checks-radios/switch";
import SwitchWithtext from "../input/checks-radios/switch-with-text";
import Tax from "./images/tax.svg";
import Star from "./images/star.svg";
import Circle from "./images/circle.svg";
import Percentage from "./images/percentage.svg";
import Inventoryicon from "./images/inventory.svg";
import Product1 from "../product-details/images/product.png";
import Back from "../product-details/images/back-arrow.svg";

import Orderstyles from '../order-status/styles.scss';
import accountstyles from "../account-details/styles.scss";
import Styles from "./styles.scss";
import BottomNav from "../bottom-nav";


export default function StoreOrderHistory() {
  return (
    <>
        <TopNav headertext="Inventory" />
        <div className={`${Styles['inventory-item-container']} ${Orderstyles['order-status-container']} container`}>
            <div className={`${Orderstyles['desktop-back-btn']}`}>
                <Button element="a" href="/" className="btn-left-icon btn-link">
                    <img src={Back} alt="Back" />
                    Back
                </Button>
            </div>
			<div className={`${Styles['inventory-details-section']} ${Orderstyles['order-details-container']}`}>
                <div>
                    <div className={`${Styles['product-row']}`}>
                        <div className={`${Styles['product-left']}`}>
                            <div className={`${Styles['product-img-w-80']} ${Styles['product-img']}`}>
                                <img src={Product1} alt="Product" />
                            </div>
                            <h2 className={`${Styles['inventory-title']} h3`}>Wally Case Iphone Xr Black</h2>
                        </div>
                        <div className={`${Styles['d-flex']} ${Styles['badge-div']}`}>
                            <Badge badgetext="In stock" className="badge-lg badge-success" />
                        </div>
                    </div>
                    <div className={`${accountstyles['input-row']} ${Styles['label-with-icon']} ${Styles['inventory-row']} ${Styles['align-start']}`}>
                        <img src={Tax} alt="Tax" className={`${Styles['svg-icon']}`} />
                        <div className={`${Styles['flex-1']}`}>
                            <div className={`${accountstyles['space-between']}`}>
                                <label className={`${accountstyles['label-name']}`}>
                                    Price per unit inc. tax
                                </label>
                                <Button className="btn-link p-0">Edit</Button>
                            </div>
                            <div>
                                <Input 
                                    type="text" 
                                    placeholdertext="Price"
                                    defaultValuetext="€11.25"
                                    className="transparent-input no-border"
                                    readOnly
                                    disabled
                                />
                            </div>
                        </div>
				    </div>
                    <div className={`${Styles['product-row']} ${Styles['inventory-row']}`}>
                        <div className={`${Styles['product-left']}`}>
                            <div className={`${Styles['product-icon']}`}>
                                <img src={Percentage} alt="Percentage" />
                            </div>
                            <span className={`${Styles['product-label']}`}>Sale</span>
                        </div>
                        <div className={`${Styles['d-flex']}`}>
                            <Switch className="switch-primary" type="checkbox" id="1" name="checkbox" checked />
                        </div>
                    </div>
                    <div className={`${Styles['product-row']} ${Styles['inventory-row']}`}>
                        <div className={`${Styles['product-left']}`}>
                            <div className={`${Styles['product-icon']}`}>
                                <img src={Percentage} alt="Percentage" />
                            </div>
                            <span className={`${Styles['product-label']}`}>Sale</span>
                        </div>
                        <div className={`${Styles['flex-1-100']}`}>
                            <form>
                                <Input placeholdertext="Set sale price" />
                                <div className={`${Styles['btn-save']}`}>
                                    <Button>Save</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={`${Styles['product-row']} ${Styles['inventory-row']}`}>
                        <div className={`${Styles['product-left']}`}>
                            <div className={`${Styles['product-icon']}`}>
                                <img src={Star} alt="Star" />
                            </div>
                            <span className={`${Styles['product-label']}`}>Store picks badge</span>
                        </div>
                        <div className={`${Styles['d-flex']}`}>
                            <Switch className="switch-primary" type="checkbox" id="2" name="checkbox" />
                        </div>
                    </div>
                    <div className={`${Styles['product-row']} ${Styles['inventory-row']}`}>
                        <div className={`${Styles['product-left']}`}>
                            <div className={`${Styles['product-icon']}`}>
                                <img src={Circle} alt="Circle" />
                            </div>
                            <span className={`${Styles['product-label']}`}>Disable product</span>
                        </div>
                        <div className={`${Styles['d-flex']}`}>
                            <Switch className="switch-primary" type="checkbox" id="3" name="checkbox" />
                        </div>
                    </div>
                </div>
                <div className={`${Styles['stock-section']}`}>
                    <h3>Product stock</h3>
                    <div className={`${Styles['switch-section']}`}>
                        <SwitchWithtext 
                            id="7"
                            id2="8"
                            switch1text="Infinite"
                            switch2text="Fixed"
                            defaultChecked2
                        />
                    </div>
                    <div>
                        <div className={`${Styles['product-row']} ${Styles['inventory-row']}`}>
                            <div className={`${Styles['product-left']}`}>
                                <div className={`${Styles['product-icon']}`}>
                                    <img src={Inventoryicon} alt="Inventory" />
                                </div>
                                <span className={`${Styles['product-label']}`}>Product in Stock</span>
                            </div>
                            <div className={`${Styles['d-flex']}`}>
                                <Switch className="switch-primary" type="checkbox" id="4" name="checkbox" checked />
                            </div>
                        </div>
                        <div className={`${accountstyles['input-row']} ${Styles['label-with-icon']} ${Styles['inventory-row']} ${Styles['align-start']}`}>
                            <img src={Inventoryicon} alt="Inventoryicon" className={`${Styles['svg-icon']}`} />
                            <div className={`${Styles['flex-1']}`}>
                                <div className={`${accountstyles['space-between']}`}>
                                    <label className={`${accountstyles['label-name']}`}>
                                        Number of products in stock
                                    </label>
                                    <Button className="btn-link p-0">Change</Button>
                                </div>
                                <div>
                                    <Input 
                                        type="text" 
                                        placeholdertext="Price"
                                        defaultValuetext="Sold: 3 / Stock: -"
                                        className="transparent-input no-border"
                                        readOnly
                                        disabled
                                    />
                                </div>
                            </div>
				        </div>
                    </div>
                </div>
                <div className={`${Styles['min-h-72']}`} />
                <div className={`${Styles['btn-save-change']}`}>
                    <Button className="btn-block">Save changes</Button>
                </div>
			</div> 
        </div>
        <BottomNav />
    </>
  );
}
