import React from "react";
//buttons
import Button from "../button";

// Components
import TopNav from "../header/header-with-search-tag";

import BottomNav from "../bottom-nav";
import Banner from "./banner";
import SideBar from "./sidebar";
import SubCategoriesList from "./sub-category-list";
import CategoryFilter from "../categories/category-filter-2";
import SubCategoryProducts from "./product-slider";
import ProductList from "./product-slider-2.tsx";
import ProductList2 from "./product-slider-3.tsx";
import styles from './styles.scss';


export default function IndividualStore() {
  return (
    <>
        <TopNav MobileclassName="active header-h-60" defaulttext="Typing" />
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
        <div className={`${styles['store-search-result']} ${styles.open}`}>
            <div className="container">
                <div>
                    <ProductList2
                        productSectionTitle="Subcategory"
                        value="5"
                    />
                </div>
                <div>
                    <ProductList
                        productSectionTitle="Subcategory"
                        value="24"
                    />
                </div>
            </div>
        </div>
    </>
  );
}
