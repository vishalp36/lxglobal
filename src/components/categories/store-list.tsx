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
import Storestyles from '../store-listing/styles.scss';

export default function StoreListing() {
  return (
    <>
        <div>
            <div className="container">
                <h3 className={`${Storestyles['store-title']}`}>Favourite stores</h3>
                <div className={`${Storestyles.row}`}>
                    <div className={`${Storestyles.col}`}>
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
                    <div className={`${Storestyles.col}`}>
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
                    <div className={`${Storestyles.col}`}>
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
                    <div className={`${Storestyles.col}`}>
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
                    <div className={`${Storestyles.col}`}>
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
                    <div className={`${Storestyles.col}`}>
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
            </div>
        </div>
    </>
  );
}
