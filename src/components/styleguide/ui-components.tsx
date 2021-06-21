import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Badge from '../badge';
//card
import ProductCard from "../product-card";
import SmallProductCard from "../product-card/product-sm-card";
import StoreCard from '../store-card';
import InfoCard from '../info-card';
import StoreCardWithProducts from '../store-card/product-slider';
import Footer from '../footer';
//images
import Img1 from "../product-card/images/1.png";
import Img2 from "../product-card/images/2.png";
import Img3 from "../product-card/images/3.png";
import Store1 from "../store-card/images/1.png";
import Info1 from "../info-card/images/1.png";

import productstyle from "../product-card/styles.scss";

export default function StyleGuide() {
  return (
	<div style={{minHeight: '100vh', backgroundColor: '#f9f9f9'}}>
		<div className="container" style={{ padding: '20px' }}>
			<h1 className="h2 text-primary"><u>UI components</u></h1>
			<ul style={{padding: '0', listStyle: 'none'}}>
				<li style={{marginBottom: '2rem', display:'block'}}></li>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Badges</h2>
					<h3 className="h4">Small</h3>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem 2rem -.5rem'}}>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="bestseller" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="top rated" className="badge-yellow" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="our picks" className="badge-pink" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="positive" className="badge-success" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="negative" className="badge-danger" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="Cancelled" className="badge-gray" />
						</div>
					</div>	
					<h3 className="h4">Big</h3>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem 2rem -.5rem'}}>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="bestseller" className="badge-lg" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="top rated" className="badge-lg badge-yellow" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="our picks" className="badge-lg badge-pink" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="positive" className="badge-lg badge-success" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="negative" className="badge-lg badge-danger" />
						</div>
						<div style={{padding: '.5rem'}}>
							<Badge badgetext="Cancelled" className="badge-lg badge-gray" />
						</div>
					</div>	
            	<li style={{marginBottom: '2rem', display:'block'}}>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Product card</h2>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem'}}>
						<div style={{flex: '0 0 200px', padding: '.5rem'}}>
							<ProductCard 
								id={1}
                                image={Img1}
                                storename="Store Name"
                                title="Lorem ipsum is placeholder"
                                price="&euro;11.25"
								weight="0,75 kg"
								defaultWish
                            >
								<span className={`${productstyle['badge-div']}`}>
									<Badge badgetext="bestseller" />
								</span>
								<span className={`${productstyle['item-visible']} text-15`}>
									<span className="semibold">2x</span>
									&nbsp;for&nbsp;
									<span className="semibold">&euro;39.9</span>&nbsp;
									in your Cart
								</span>
							</ProductCard>
						</div>
						<div style={{flex: '0 0 200px', padding: '.5rem'}}>
							<ProductCard 
								id={2}
                                image={Img1}
                                storename="Store Name"
                                title="Lorem ipsum is placeholder"
                                price="&euro;11.25"
								weight="0,75 kg"
								newprice="&euro;11.25"
								priceclassName="with-new-price"
                            />
						</div>
						<div style={{flex: '0 0 200px', padding: '.5rem'}}>
							<ProductCard 
								id={3}
                                image={Img1}
                                storename="Store Name"
                                title="Lorem ipsum is placeholder"
                                price="&euro;11.25"
								weight="0,75 kg"
								disabledbtn
								className="out-of-stock"
                            >
								<span className={`${productstyle['not-available']}`}>Not available right now</span>
							</ProductCard>
						</div>
						<div style={{flex: '0 0 200px', padding: '.5rem'}}>
							<ProductCard
								className="active" 
								id={4}
                                image={Img1}
                                storename="Store Name"
                                title="Lorem ipsum is placeholder"
                                price="&euro;11.25"
								weight="0,75 kg"
                            >
								<span className={`${productstyle['badge-div']}`}>
									<Badge badgetext="bestseller" />
								</span>
								<span className={`${productstyle['item-visible']} text-15`}>
									<span className="semibold">2x</span>
									&nbsp;for&nbsp;
									<span className="semibold">&euro;39.9</span>&nbsp;
									in your Cart
								</span>
							</ProductCard>
						</div>
					</div>
				</li>
				<li style={{marginBottom: '2rem', display:'block'}}>
					<h3 className="h4" style={{marginBottom: '2rem'}}>Product small card</h3>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem'}}>
						<div style={{flex: '0 0 108px', padding: '.5rem'}}>
							<SmallProductCard 
                                image={Img3}
                                title="Lorem ipsum is placeholder"
                                price="&euro;11.25"
                            />
						</div>
					</div>
				</li>
				<li style={{marginBottom: '2rem', display:'block'}}>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Store card</h2>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem'}}>
						<div style={{flex: '0 0 436px', maxWidth: '36.33%', minWidth: '324px', padding: '.5rem'}}>
							<StoreCard 
								title="Frank Vork's Groenten, Fruit &amp; Traiteur"
								image={Store1}
								badgelabel="bestseller"
								value1="Bakery"
								value2="Organic"
								amount="&euro;2.99"
								time="60 min"
								className="h-auto"
							/>
						</div>
						<div style={{flex: '0 0 436px',maxWidth: '36.33%', minWidth: '324px', padding: '.5rem'}}>
							<StoreCard 
								title="Frank Vork's Groenten, Fruit &amp; Traiteur"
								image={Store1}
								badgelabel="bestseller"
								value1="Bakery"
								value2="Organic"
								amount="&euro;2.99"
								time="60 min"
							>
								<StoreCardWithProducts />
							</StoreCard>
						</div>
					</div>
				</li>
				<li style={{marginBottom: '2rem', display:'block'}}>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Info card</h2>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem'}}>
						<div style={{flex: '0 0 308px', padding: '.5rem'}}>
							<InfoCard 
                                image={Info1}
                                title="FAQ"
                            />
						</div>
					</div>
				</li>
			</ul>
			<div style={{minHeight: '100px'}} />
		</div>
		<Footer />
	</div>
	);
}
