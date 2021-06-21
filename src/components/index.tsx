import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <>
    <div className="container">
      <br />
      <h1 className="h2">Peddler V2</h1>
      <h2 className="h4">Style Guide &amp; Components</h2>
      <hr />
      <Link to="/styleguide/">
        <u>View style guide</u>
      </Link>
      <br />
      <br />
      <Link to="/ui-components/">
        <u>UI components</u>
      </Link>
      <br />
      <br />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px" }}>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/top-nav/">Top Navbar</Link>
            </li>
            <li>
              <Link to="/top-nav-with-login/">Top Navbar with login</Link>
            </li>
            <li>
              <Link to="/top-nav-with-search-tag/">
                Top Navbar with search tag
              </Link>
            </li>
            <li>
              <Link to="/top-nav-with-megamenu/">Top Navbar with megamenu</Link>
            </li>
            <li>
              <Link to="/top-nav-with-store-megamenu/">
                Top Navbar with store megamenu
              </Link>
            </li>
            <li>
              <Link to="/bottom-nav/">Bottom nav</Link>
            </li>
          </ul>
          <h2 className="h4">Home</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/home/">Home</Link>
            </li>
			<li>
              <Link to="/home-with-video/">Home with animation</Link>
            </li>
          </ul>
          <h2 className="h4">Product Categories</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/categories/">Categories</Link>
            </li>
            <li>
              <Link to="/categories/categories-with-address/">
                Categories with Address
              </Link>
            </li>
            <li>
              <Link to="/categories/sub-categories/">Sub Categories</Link>
            </li>
            <li>
              <Link to="/categories/sub-categories-filter-applied/">
                Sub Categories with Filter Applied
              </Link>
            </li>
            <li>
              <Link to="/categories/sub-categories-open-dropdown/">
                Sub Categories expanded(Open Sub Categories list)
              </Link>
            </li>
            <li>
              <Link to="/categories/final-category/">Final Category</Link>
            </li>
            <li>
              <Link to="/categories/final-category-scroll/">
                Final Category Scroll
              </Link>
            </li>
            <li>
              <Link to="/categories/category-filter/">Filter Modal</Link>
            </li>
            <li>
              <Link to="/categories/sub-categories-collapsed/">
                Sub categories collapsed
              </Link>
            </li>
            <li>
              <Link to="/categories/sub-categories-collapsed-expanded/">
                Sub categories collapsed expanded
              </Link>
            </li>
          </ul>
          <h2 className="h4">Product Details</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/product-details/">Product details</Link>
            </li>
            <li>
              <Link to="/product-out-of-stock/">Product out of stock</Link>
            </li>
            <li>
              <Link to="/product-with-qty/">Product with quantity</Link>
            </li>
            <li>
              <Link to="/product-select-option/">
                Product select option modal
              </Link>
            </li>
            <li>
              <Link to="/product-select-option-with-scroll/">
                Product select option modal with scroll
              </Link>
            </li>
            <li>
              <Link to="/product-select-option-with-footer-shadow/">
                Product select option modal with footer shadow(shadow visible on
                Scroll up)
              </Link>
            </li>
            <li>
              <Link to="/product-select-option-with-header-shadow/">
                Product select option modal with header shadow(shadow visible on
                Scroll Down)
              </Link>
            </li>
            <li>
              <Link to="/image-preview-modal/">Image preview modal</Link>
            </li>
            <li>
              <Link to="/product-detail-popup/">
              Product detail popup
              </Link>
					  </li>
          </ul>
          <h2 className="h4">Cart</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/cart/">Cart</Link>
            </li>
            <li>
              <Link to="/empty-cart/">Empty Cart</Link>
            </li>
            <li>
              <Link to="/clear-cart/">Clear Cart</Link>
            </li>
          </ul>
		  <h2 className="h4">Checkout</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/checkout/">Checkout</Link>
            </li>
            <li>
              <Link to="/checkout-with-fields-expanded/">
                Checkout with fields expanded
              </Link>
            </li>
            <li>
              <Link to="/checkout-with-store-pickup/">
                Checkout with store pickup
              </Link>
            </li>
            <li>
              <Link to="/checkout-with-info-added/">
                Checkout with info added
              </Link>
            </li>
            <li>
              <Link to="/checkout-non-signed-in/">Checkout Non-signed-in</Link>
            </li>
            <li>
              <Link to="/checkout-non-signed-in-info-added/">
                Checkout Non-signed-in with info added
              </Link>
            </li>
            <li>
              <Link to="/checkout-with-scroll-header/">
                Checkout with scroll header mobile
              </Link>
            </li>
          </ul>
		  <h2 className="h4">Delivery address</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/select-new-address/">Delivery New address</Link>
            </li>
            <li>
              <Link to="/select-new-address-typing/">
                Delivery New address typing
              </Link>
            </li>
            <li>
              <Link to="/confirm-address/">Delivery confirm address</Link>
            </li>
            <li>
              <Link to="/not-available-address/">Not available address</Link>
            </li>
            <li>
              <Link to="/address-non-signed-in/">Address non signed in</Link>
            </li>
          </ul>
		  <h2 className="h4">Order Status</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/order-status/">Order Status</Link>
            </li>
            <li>
              <Link to="/payment-error/">Payment error modal</Link>
            </li>
          </ul>
		  <h2 className="h4">Deliver Anything</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/deliver-anything/">Deliver Anything</Link>
            </li>
            <li>
              <Link to="/deliver-anything-cart/">Deliver Anything cart</Link>
            </li>
          </ul>
        </div>
        <div style={{ flex: "1 1 400px" }}>
          <h2 className="h4">Store listing</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/store-listing/">Stores list</Link>
            </li>
            <li>
              <Link to="/store-final-category/">Stores final category list</Link>
            </li>
          </ul>
          <h2 className="h4">Individual Store</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/individual-store/">Individual stores</Link>
            </li>
            <li>
              <Link to="/store-details/">Store details</Link>
            </li>
          </ul>
          <h2 className="h4">Search</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/search-result/">Search result</Link>
            </li>
            <li>
              <Link to="/search-header-dropdown/">Search header dropdown</Link>
            </li>
			<li>
              <Link to="/search-result-typing/">Search result typing</Link>
            </li>
            <li>
              <Link to="/store-search/">Store search</Link>
            </li>
            <li>
              <Link to="/store-search-overlay/">Store search with overlay(Mobile)</Link>
            </li>
          </ul>
          <h2 className="h4">Static Pages</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/register-store/">Register your store</Link>
            </li>
            <li>
              <Link to="/about-us/">About Us</Link>
            </li>
            <li>
              <Link to="/become-rider/">Become Rider</Link>
            </li>
            <li>
              <Link to="/faq/">FAQ</Link>
            </li>
          </ul>
		      <h2 className="h4">Order history</h2>
          <ul style={{ padding: "0 1rem" }}>
            <li>
              <Link to="/order-history/">Order history</Link>
            </li>
            <li>
              <Link to="/order-history-details/">Order history details</Link>
            </li>
          </ul>
          	<h2 className="h4">Account Details</h2>
          	<ul style={{ padding: "0 1rem" }}>
				<li>
				<Link to="/account-details/">Account Details</Link>
				</li>
				<li>
				<Link to="/account-details-with-newsletter/">Account Details with newsletter</Link>
				</li>
				<li>
				<Link to="/account-addresses/">Account addresses</Link>
				</li>
          	</ul>
			<h2 className="h4">Store Account</h2>
          	<ul style={{ padding: "0 1rem" }}>
				<li>
					<Link to="/store-profile/">Store profile</Link>
				</li>
				<li>
					<Link to="/store-orders/">Store orders</Link>
				</li>
				<li>
					<Link to="/store-orders-details/">Store orders details</Link>
				</li>
				<li>
					<Link to="/store-orders-details-accepted/">Store orders details accepted</Link>
				</li>
				<li>
					<Link to="/store-inventory/">Store Inventory</Link>
				</li>
				<li>
					<Link to="/store-inventory-with-sub-cat/">Store Inventory with sub categories</Link>
				</li>
				<li>
					<Link to="/store-inventory-item/">Store inventory item</Link>
				</li>
          	</ul>
			<h2 className="h4">Error</h2>
          	<ul style={{ padding: "0 1rem" }}>
				<li>
					<Link to="/error/">Error</Link>
				</li>
          	</ul>
			<h2 className="h4">My favourites</h2>
          	<ul style={{ padding: "0 1rem" }}>
				<li>
					<Link to="/my-favourites/">My favourites</Link>
				</li>
          	</ul>
        </div>
      </div>
    </div>
  </>
);
