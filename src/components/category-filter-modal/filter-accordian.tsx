
import React, { useState, useEffect } from "react";

import Button from "../button";
import SearchInput from "../input/text/input-search";
import Checkbox from "../input/checks-radios/checkbox";
import Input from "../input/text";


import styles from "./styles.scss";

export default function FilterAccordian() {
  const [valueMin, SetValueMin] = useState(0);
  const [valueMax, SetValueMax] = useState(100);
  useEffect(() => {
    const ele = document.querySelector(".range-track");
    const rangeSlider = document.querySelector(".r-slide-min");

    const minSliderRange = rangeSlider.getAttribute("min");
    const maxSliderRange = rangeSlider.getAttribute("max");
    // code for track
    if (ele) {
      ele.style.left = `${Number(
        ((valueMin - minSliderRange) * 100) / (maxSliderRange - minSliderRange)
      )}%`;
      ele.style.right = `${Number(
        ((maxSliderRange - valueMax) * 100) / (maxSliderRange - minSliderRange)
      )}%`;
    }
  });
  	const [storeAccordian, setStoreAccordian] = useState(false);
	const toggleStoreAccordian = () => {
		setStoreAccordian(!storeAccordian);
	};
	const [brandAccordian, setBrandAccordian] = useState(false);
	const toggleBrandAccordian = () => {
		setBrandAccordian(!brandAccordian);
	};
	const [priceAccordian, setPriceAccordian] = useState(false);
	const togglePriceAccordian = () => {
		setPriceAccordian(!priceAccordian);
	};
	const [sortAccordian, setSortAccordian] = useState(false);
	const toggleSortAccordian = () => {
		setSortAccordian(!sortAccordian);
	};

  return (
    <>
      	<div>
            <div className={`${storeAccordian ? styles.active : ''}`}>
                <Button className={`${styles["accordian-title"]} btn btn-link`} onClick={toggleStoreAccordian}>
                    Stores <span className={`${styles['filter-value']}`}>3</span>
                </Button>
                <div className={`${styles["accordian-body"]}`}>
                    <div className={`${styles["accordian-block"]}`}>
                        <SearchInput
                            type="search"
                            placeholdertext="Search for store"
                            className="input-search has-left-icon has-right-icon"
                        />
                        <div className={`${styles["checkbox-wrap"]}`}>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="1"
                                    name="checkbox"
                                    checked
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="2"
                                    name="checkbox"
                                    checked
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="3"
                                    name="checkbox"
                                    checked
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="4"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="5"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="6"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="11"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="12"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="13"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="14"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="15"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                            <div className={`${styles["checkbox-div"]}`}>
                                <Checkbox
                                    className={`${styles["filter-modal-checkbox"]} `}
                                    type="checkbox"
                                    id="16"
                                    name="checkbox"
                                >
                                    <span className="text-16">Store name</span>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${brandAccordian ? styles.active : ''}`}>
                <Button className={`${styles["accordian-title"]} btn btn-link`} onClick={toggleBrandAccordian}>
                    Brands
                </Button>
                <div className={`${styles["accordian-body"]}`}>
                    <SearchInput
                        type="search"
                        placeholdertext="Search for brands"
                        className="input-search has-left-icon has-right-icon"
                    />
                    <div className={`${styles["checkbox-wrap"]}`}>
                        <div className={`${styles["checkbox-div"]}`}>
                            <Checkbox
                                className={`${styles["filter-modal-checkbox"]} `}
                                type="checkbox"
                                id="25"
                                name="checkbox"
                                checked
                            >
                                <span className="text-16">Brand name</span>
                            </Checkbox>
                        </div>
                        <div className={`${styles["checkbox-div"]}`}>
                            <Checkbox
                                className={`${styles["filter-modal-checkbox"]} `}
                                type="checkbox"
                                id="26"
                                name="checkbox"
                            >
                                <span className="text-16">Brand name</span>
                            </Checkbox>
                        </div>
                        <div className={`${styles["checkbox-div"]}`}>
                            <Checkbox
                                className={`${styles["filter-modal-checkbox"]} `}
                                type="checkbox"
                                id="27"
                                name="checkbox"
                            >
                                <span className="text-16">Brand name</span>
                            </Checkbox>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${priceAccordian ? styles.active : ''}`}>
                <Button className={`${styles["accordian-title"]} btn btn-link`} onClick={togglePriceAccordian}>
                    Price
                </Button>
                <div className={`${styles["accordian-body"]}`}>
                    <div className={`${styles["range-slider"]}`}>
                    <input
                        value={valueMin}
                        min="0"
                        max="500"
                        type="range"
                        className={`${styles["r-slide-min"]} r-slide-min`}
                        onChange={({ target: { value: value1 } }) => {
                        SetValueMin(parseInt(value1));
                        }}
                    />
                    <input
                        value={valueMax}
                        min="0"
                        max="500"
                        type="range"
                        className={`${styles["r-slide-max"]} r-slide-max`}
                        onChange={({ target: { value: value2 } }) => {
                        SetValueMax(parseInt(value2));
                        }}
                    />
                    <span
                        className={`${styles["range-track"]} range-track`}
                    ></span>
                    </div>
                    <div className={`${styles["range-input-row"]}`}>
                    <div className={`${styles["range-input-col"]}`}>
                        <p className={`${styles["range-input-label"]}`}>Min</p>
                        <Input
                        type="text"
                        defaultValuetext={`€ ${valueMin}`}
                        className={`${styles["range-input-min"]}`}
                        />
                    </div>
                    <div className={`${styles["range-input-col"]}`}>
                        <h5 className={`${styles["range-input-dash"]}`}>-</h5>
                    </div>

                    <div className={`${styles["range-input-col"]}`}>
                        <p className={`${styles["range-input-label"]}`}>Max</p>
                        <Input
                        type="text"
                        defaultValuetext={`€ ${valueMax}`}
                        className={`${styles["range-input-max"]}`}
                        />
                    </div>
                    </div>
                </div>
            </div>
            <div
                className={`${styles["sort-accordian"]} ${sortAccordian ? styles.active : ''}`}
            >
                <Button className={`${styles["accordian-title"]} btn btn-link`} onClick={toggleSortAccordian}>
                    Sort
                </Button>
                <div className={`${styles["accordian-body"]}`}>
                    <div className={`${styles["checkbox-wrap"]}`}>
                    <div className={`${styles["checkbox-div"]}`}>
                        <Checkbox
                        className={`${styles["filter-modal-checkbox"]} `}
                        type="checkbox"
                        id="21"
                        name="checkbox"
                        >
                        <span className="text-16">Recommended</span>
                        </Checkbox>
                    </div>
                    <div className={`${styles["checkbox-div"]}`}>
                        <Checkbox
                        className={`${styles["filter-modal-checkbox"]} `}
                        type="checkbox"
                        id="22"
                        name="checkbox"
                        >
                        <span className="text-16">Popular</span>
                        </Checkbox>
                    </div>
                    <div className={`${styles["checkbox-div"]}`}>
                        <Checkbox
                        className={`${styles["filter-modal-checkbox"]} `}
                        type="checkbox"
                        id="23"
                        name="checkbox"
                        >
                        <span className="text-16">Price: low to high</span>
                        </Checkbox>
                    </div>
                    <div className={`${styles["checkbox-div"]}`}>
                        <Checkbox
                        className={`${styles["filter-modal-checkbox"]} `}
                        type="checkbox"
                        id="24"
                        name="checkbox"
                        >
                        <span className="text-16">Price: high to low</span>
                        </Checkbox>
                    </div>
                    </div>
                </div>
            </div>
		</div>
    </>
  );
}
