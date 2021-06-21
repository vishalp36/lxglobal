import React from "react";
import { Link } from "react-router-dom";
import { getExtraClasses } from "../../utils/common";
import Button from "../button";
import SearchInput from "../input/text/input-search-onheader";
import StoreMegaMenu from './store-menu';
import ProductMegaMenu from './product-mega-menu';
import Logo from "../../resources/images/logo-white.svg";
import Cycle from "./images/cycle.svg";
import DownArrow from "./images/down-arrow.svg";
import Clear from "./images/close.svg";

import styles from "./styles.scss";

export default function TopNav(props) {
	const { 
		MobileclassName,
		defaulttext,
	} = props;
  let mobileclasses = getExtraClasses(styles, MobileclassName);
  return (
    <>
      	<div className={`${styles["site-header"]} ${styles['header-desktop']}`}>
			<div className={`${styles["fix-div"]}`}>
				<div className={`${styles["top-nav"]}`}>
					<div className="container">
						<div className={`${styles["flex-container"]}`}>
							<div className={`${styles["logo-section"]}`}>
							<Link to="/" className={`${styles.logo}`}>
								<img src={Logo} alt="Peddler" />
							</Link>
							</div>
							<div className={`${styles["select-address"]}`}>
							<Button className="btn-link btn-link-with-icon">
								<img src={Cycle} alt="Delivery" />
								<span
								className={`text-truncate ${styles["hide-in-mobile"]} ${styles["max-w"]}`}
								>
								Choose delivery address
								</span>
								<span
								className={`text-truncate ${styles["hide-in-desktop-769"]} ${styles["max-w"]}`}
								>
								Deliver to
								</span>
								<span className={`${styles["hide-in-desktop-only"]}`}>
								<img
									src={DownArrow}
									alt="Delivery"
									className={`${styles["down-arrow"]}`}
								/>
								</span>
							</Button>
							</div>
							<div className={`${styles["right-section"]}`}>
							{/* <form className={`${styles['search-box-with-tag']} ${styles['search-box']} ${SearchOpen ? styles.active : ''}`}> */}
							<form
								className={`${styles["search-box-with-tag"]} ${styles["search-box"]}`}
							>
								{/* Conditional Rendering */}
								<div className={`${styles["tag-section"]}`}>
								<span className={`${styles.tag} text-truncate`}>
									Some store
								</span>
								<Button className="btn-link p-0">
									<img
									src={Clear}
									alt="Clear"
									className={`${styles["sm-icon"]}`}
									/>
								</Button>
								</div>
								<SearchInput
								// onClick={toggleSearch}
								type="search"
								placeholdertext="Search in store..."
								className="active header-search-input transparent-input input-search has-left-icon has-right-icon"
								autoFocus
								defaultValuetext="Typing"
								/>
							</form>
							<div>
								<Button
								element="a"
								href="/"
								className="btn-link btn-link-white"
								>
								Sign in
								</Button>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`${styles["mega-menu-div"]}`}>
					<div className={`${styles["pos-static"]} container`}>
						<ul className={`${styles["mega-menu-links"]}`}>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Stores
								</Link>
								<StoreMegaMenu />
							</li>
							<li>
								<Link to="/" className={`${styles.links} text-danger`}>
									Sales
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Food &amp; Drinks
								</Link>
								<ProductMegaMenu />
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Flowers &amp; Plants
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Home &amp; Interior
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									DIY
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Cooking &amp; Kitchen
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Pets
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Beauty &amp; Health
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Games
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Toys
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Baby
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Gifts
								</Link>
							</li>
							<li>
								<Link to="/" className={`${styles.links}`}>
									Fashion
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
      	</div>
		<div className={`${styles["header-mobile"]} ${styles["search-header-mobile"]} ${mobileclasses}`}>
			<div className={`${styles["header-container"]} container`}>
				<div className={`${styles["search-header-wrap"]}`}>
					<div className={`${styles["search-input-box"]}`}>
						<SearchInput 
							type="search" 
							placeholdertext="Search for products, brands, stores..."
							className="transparent-input input-search has-left-icon"
							autoFocus
							defaultValuetext={defaulttext}
						/>
					</div>
					<div className={`${styles["btn-cancel"]}`}>
						<Button className="btn-link font-weight-normal">
							Cancel
						</Button>
					</div>
			    </div>
			</div>
      	</div>
    </>
  );
}
