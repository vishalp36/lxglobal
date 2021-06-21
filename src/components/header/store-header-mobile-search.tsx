import React from "react";
import { getExtraClasses } from "../../utils/common";

import Button from "../button";

import BackIcon from "./images/back-icon.svg";
import SearchIcon from "../individual-stores/images/search.svg";

import styles from "./styles.scss";

export default function CategoryHeaderMobile(props) {
  const { className, backLink, categotyName } = props;
  let mobileclasses = getExtraClasses(styles, className);

  return (
    <>
    	<div className={`${styles["header-mobile"]} ${mobileclasses}`}>
			<div className={`${styles["header-container"]} container`}>
				<div className={`${styles["header-wrap"]}`}>
					<div className={`${styles['mobile-back-btn']}`}>
						<Button element="a" href="/" className="btn-left-icon btn-left-sm-icon btn-link">
							<img src={BackIcon} alt="Back" />
						</Button>
					</div>
					<h2 className={`${styles["category-header-title"]}`}>
              			{categotyName}
            		</h2>
					<div>
						<Button element="a" href="/" className="btn-link-lg-icon btn-left-icon btn-left-sm-icon btn-link">
							<img src={SearchIcon} alt="Search" />
						</Button>
            		</div>
			    </div>
			</div>
    	</div>
    </>
  );
}
