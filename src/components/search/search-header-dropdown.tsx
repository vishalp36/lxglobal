import React from "react";
import { Link } from "react-router-dom";
import TopNav from "../header/header-with-focus";
import SearchDropDown from "./search-dropdown";
import BottomNav from "../bottom-nav";



//styles
import styles from "./styles.scss";



export default function SearchHeaderDropDown() {
  return (
    <>
      	<TopNav>
			<SearchDropDown />
		</TopNav>
		<div className="container">
			<div className={`${styles['recent-search']}`}>
				<h4>Last time you search for</h4>
				<div className={`${styles['search-text']}`}>
					<Link to="/" className={`${styles['search-link']}`}>
						Search request
					</Link>
				</div>
				<div className={`${styles['search-text']}`}>
					<Link to="/" className={`${styles['search-link']}`}>
						Search request
					</Link>
				</div>
				<div className={`${styles['search-text']}`}>
					<Link to="/" className={`${styles['search-link']}`}>
						Search request
					</Link>
				</div>
				<div className={`${styles['search-text']}`}>
					<Link to="/" className={`${styles['search-link']}`}>
						Search request
					</Link>
				</div>
				<div className={`${styles['search-text']}`}>
					<Link to="/" className={`${styles['search-link']}`}>
						Search request
					</Link>
				</div>
				<div className={`${styles['search-text']}`}>
					<Link to="/" className={`${styles['search-link']}`}>
						Search request
					</Link>
				</div>
				<div className={`${styles['search-text']}`}>
					<Link to="/" className={`${styles['search-link']}`}>
						Search request
					</Link>
				</div>
				<div className={`${styles['search-text']}`}>
					<Link to="/" className={`${styles['search-link']}`}>
						Search request
					</Link>
				</div>
			</div>
		</div>
      	<BottomNav />
    </>
  );
}
