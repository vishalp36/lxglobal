import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import ProductCardCartlist from "../product-card-card-list/product-card-list-with-btn";
import Product1 from "../product-details/images/product.png";
import StoreCard from "../store-card/store-card-no-border";
import Store1 from "../store-card/images/1.png";
import Cat1 from "../home/images/cat1.png";


//styles
import styles from "./styles.scss";



export default function SearchDropDown() {
  return (
    <>
        <div className={`${styles['search-dropdown']}`}>
            <div className={`${styles['search-dropdown-box']}`}>
                <div>
                    <h2 className="h4">Product</h2>
                    <div className={`${styles['product-list']}`}>
                        <div className={`${styles.list}`}>
                            <ProductCardCartlist
                                className="product-list-lg" 
                                categoriesname="Tout Patisserie" 
                                ProductImg={Product1}
                                title="Lorem ipsum is placeholder"
                                Price="&euro;11.25"
                            />
                        </div>
                        <div className={`${styles.list}`}>
                            <ProductCardCartlist
                                className="product-list-lg" 
                                categoriesname="Tout Patisserie" 
                                ProductImg={Product1}
                                title="Lorem ipsum is placeholder"
                                Price="&euro;11.25"
                            />
                        </div>
                        <div className={`${styles.list}`}>
                            <ProductCardCartlist
                                className="product-list-lg" 
                                categoriesname="Tout Patisserie" 
                                ProductImg={Product1}
                                title="Lorem ipsum is placeholder"
                                Price="&euro;11.25"
                            />
                        </div>
                        <div className={`${styles.list}`}>
                            <ProductCardCartlist
                                className="product-list-lg" 
                                categoriesname="Tout Patisserie" 
                                ProductImg={Product1}
                                title="Lorem ipsum is placeholder"
                                Price="&euro;11.25"
                            />
                        </div>
                    </div>
                    <div className={`${styles['text-center']}`}>
                        <Button className="btn-link">
                            Show all products <span>(58)</span>
                        </Button>
                    </div>
                </div>
                <div className={`${styles['store-section']}`}>
                    <h2 className="h4">Stores</h2>
                    <div className={`${styles['store-listing']}`}>
                        <div className={`${styles['store-list']}`}>
                            <StoreCard 
								title="Frank Vork's Groenten, Fruit &amp; Traiteur"
								image={Store1}
								tagclassName="d-none"
								value1="Bakery"
								value2="Organic"
								className="store-no-border"
                                cardLink="/"
							/>
                        </div>
                        <div className={`${styles['store-list']}`}>
                            <StoreCard 
								title="Frank Vork's Groenten, Fruit &amp; Traiteur"
								image={Store1}
								tagclassName="d-none"
								value1="Bakery"
								value2="Organic"
								className="store-no-border"
                                cardLink="/"
							/>
                        </div>
                        <div className={`${styles['store-list']}`}>
                            <StoreCard 
								title="Frank Vork's Groenten, Fruit &amp; Traiteur"
								image={Store1}
								tagclassName="d-none"
								value1="Bakery"
								value2="Organic"
								className="store-no-border"
                                cardLink="/"
							/>
                        </div>
                    </div>
                    <div className={`${styles['text-center']}`}>
                        <Button className="btn-link">
                            Show all stores <span>(14)</span>
                        </Button>
                    </div>
                </div>
                <div className={`${styles['categories-section']}`}>
                    <h2 className="h4">Categories</h2>
                    <div className={`${styles['categories-listing']}`}>
                        <div className={`${styles['categories-list']}`}>
                            <Link to="/" className={`${styles['categories-link']}`}>
                                <div className={`${styles['cat-img']}`}>
                                    <img src={Cat1} />
                                </div>
                                <div className={`${styles['categories-name']} text-truncate`}>
                                    Category name
                                </div>
                            </Link>
                        </div>
                        <div className={`${styles['categories-list']}`}>
                            <Link to="/" className={`${styles['categories-link']}`}>
                                <div className={`${styles['cat-img']}`}>
                                    <img src={Cat1} />
                                </div>
                                <div className={`${styles['categories-name']} text-truncate`}>
                                    Category name
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
