import React from "react";
import Button from "../button";

// Components
import TopNav from "../header/final-category-header";
import BottomNav from "../bottom-nav";
import Pagination from "../pagination";
import CategoryFilter from "../categories/category-filter-2";
import StoreCard from "../store-card";
//images
import Store1 from "../store-card/images/1.png";
import Breadcrumbs from "../categories/breadcrumbs-3";
import styles from './styles.scss';

export default function StoreListing() {
  return (
    <>
      	<TopNav />
      	<Breadcrumbs 
		   breadcrumblink1="Home"
		   breadcrumblink2="Stores"
           breadcrumblink3="Final category"
		/>
        <div className={`${styles['final-cat-container']}`}>
            <div className="container">
                <h2 className={`${styles["sub-categories-list-heading"]}`}>
                Final category
                </h2>
            </div>
      	    <CategoryFilter />
            <div>
                <div className="container">
                    <div className={`${styles.row}`}>
                        <div className={`${styles.col}`}>
                            <StoreCard
                                title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                                image={Store1}
                                badgelabel="bestseller"
                                value1="Bakery"
                                value2="Organic"
                                amount="&euro;2.99"
                                time="60 min"
                                cardLink="/"
                            />
                        </div>
                        <div className={`${styles.col}`}>
                            <StoreCard
                                title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                                image={Store1}
                                badgelabel="top rated"
                                tagclassName="badge-yellow"
                                value1="Bakery"
                                value2="Organic"
                                amount="&euro;2.99"
                                time="60 min"
                                cardLink="/"
                            />
                        </div>
                        <div className={`${styles.col}`}>
                            <StoreCard
                                title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                                image={Store1}
                                tagclassName="d-none"
                                value1="Bakery"
                                value2="Organic"
                                amount="&euro;2.99"
                                time="60 min"
                                cardLink="/"
                            />
                        </div>
                        <div className={`${styles.col}`}>
                            <StoreCard
                                title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                                image={Store1}
                                badgelabel="bestseller"
                                value1="Bakery"
                                value2="Organic"
                                amount="&euro;2.99"
                                time="60 min"
                                cardLink="/"
                            />
                        </div>
                        <div className={`${styles.col}`}>
                            <StoreCard
                                title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                                image={Store1}
                                badgelabel="top rated"
                                tagclassName="badge-yellow"
                                value1="Bakery"
                                value2="Organic"
                                amount="&euro;2.99"
                                time="60 min"
                                cardLink="/"
                            />
                        </div>
                        <div className={`${styles.col}`}>
                            <StoreCard
                                title="Frank Vork's Groenten, Fruit &amp; Traiteur"
                                image={Store1}
                                tagclassName="d-none"
                                value1="Bakery"
                                value2="Organic"
                                amount="&euro;2.99"
                                time="60 min"
                                cardLink="/"
                            />
                        </div>
                    </div>
                    <Pagination className={`${styles["pagination-section"]}`} />
                </div>
            </div>
        </div>
      <BottomNav />
    </>
  );
}
