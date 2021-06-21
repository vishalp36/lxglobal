import React from "react";
//buttons
import Button from "../button";

// Components
import TopNav from "../header/header-with-back-icon";

import BottomNav from "../bottom-nav";
import Banner from "./banner";
import SideBar from "./sidebar";
import SubCategoriesList from "./sub-category-list";
import CategoryFilter from "../categories/category-filter-2";
import SubCategoryProducts from "./product-slider";
import styles from './styles.scss';


export default function IndividualStore() {
  return (
    <>
        <TopNav MobileclassName= "display-none"/>
        <div className={`${styles['stores-section']}`}>
            <Banner />
			<div className="container">
				<div className={`${styles['hide-in-desktop']} ${styles['sub-cat-list']}`}>
					<SubCategoriesList />
				</div>
				<div className={`${styles.row}`}>
					<div className={`${styles['left-col']} ${styles['display-only-desktop']}`}>
						<div className={`${styles['pos-sticky']}`}>
							<SideBar />
						</div>
					</div>
					<div className={`${styles['right-col']}`}>
						<div className={`${styles['filter-section']} ${styles['pos-sticky']}`}>
							<CategoryFilter className="py-10" />
						</div>
						<div>
							<SubCategoryProducts
								productSectionTitle="Subcategory"
							/>
							<SubCategoryProducts
								productSectionTitle="Subcategory"
							/>
							<SubCategoryProducts
								productSectionTitle="Subcategory"
							/>
						</div>
					</div>
				</div>
			</div>
        </div> 
        <BottomNav  />
    </>
  );
}
