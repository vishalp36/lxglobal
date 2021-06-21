import React from "react";
import Button from "../button";

// Components
import TopNav from "../header/store-header";
import BottomNav from "../bottom-nav";
import SubCategoriesList from "../categories/sub-categories-list-2";
import CategoryFilter from "../categories/category-filter-2";
import StoresList from "./store-list";
import Breadcrumbs from "../categories/breadcrumbs-4";
import styles from './styles.scss';

export default function StoreListing() {
  return (
    <>
      	<TopNav />
      	<Breadcrumbs 
		   breadcrumblink1="Home"
		   breadcrumblink2="Stores"
		/>
      	<SubCategoriesList />
      	<CategoryFilter />
      	<div>
		  	<div className={`${styles['store-slider']}`}>
				<div className="container">
					<div className={`${styles['space-between']}`}>
						<h3 className={`${styles['store-title']} mb-0`}>Picked by us</h3>
						<div className={`${styles['hide-in-desktop']}`}>
							<Button
								element="a"
								href="/"
								className="btn-link-underline btn-link"
							>
								See all
							</Button>
						</div>
					</div>
					<StoresList />
				</div>
      		</div>
			<div className={`${styles['store-slider']}`}>
				<div className="container">
					<div className={`${styles['space-between']}`}>
						<h3 className={`${styles['store-title']} mb-0`}>New stores</h3>
						<div className={`${styles['hide-in-desktop']}`}>
							<Button
								element="a"
								href="/"
								className="btn-link-underline btn-link"
							>
								See all
							</Button>
						</div>
					</div>
					<StoresList />
				</div>
			</div>
			<div className={`${styles['store-slider']}`}>
				<div className="container">
					<div className={`${styles['space-between']}`}>
						<h3 className={`${styles['store-title']} mb-0`}>The most popular</h3>
						<div className={`${styles['hide-in-desktop']}`}>
							<Button
								element="a"
								href="/"
								className="btn-link-underline btn-link"
							>
								See all
							</Button>
						</div>
					</div>
					<StoresList />
				</div>
			</div>
		</div>
      <BottomNav />
    </>
  );
}
