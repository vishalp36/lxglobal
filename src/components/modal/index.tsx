import React, { useState } from "react";
import { getExtraClasses } from "../../utils/common";

// Components
import Button from "../button";

// Images
import ClearIcon from "./images/clear.svg";

import styles from "./styles.scss";

export default function Modal(props) {
  const {
		children,
		className,
		overlayClass,
		contentClass,
		zIndexOverlay,
		zIndexModal,
	} = props;
	const inlineStyles: any = {};
	if (zIndexOverlay) {
		inlineStyles.zIndex = zIndexOverlay;
	}
	if (zIndexModal) {
		inlineStyles.zIndex = zIndexModal;
	}
	let extraClasses = getExtraClasses(styles, className);
	let overlayClasses = getExtraClasses(styles, overlayClass);
	let contentClasses = getExtraClasses(styles, contentClass);
  return (
    <>
      <div className={`${styles.overlay} ${overlayClasses}`} style={inlineStyles} />
      <div className={`${styles["modal"]} ${extraClasses}`} style={inlineStyles}>
        <div className={`${styles["modal-dialog"]}`}>
          <div className={`${styles["modal-content"]} ${contentClasses}`}>
            <div className={`${styles["modal-close-wrap"]}`}>
              <Button className={`${styles["modal-close-icon-btn"]}`}>
                <svg
                  className={`${styles["modal-close-icon"]}`}
                  viewBox="0 0 18 18"
                >
                  <use xlinkHref={`${ClearIcon}#img`} />
                </svg>
              </Button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
