import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import BottomNav from "../bottom-nav";
import TopNav from "../header/checkout-header-onscroll";
import Breadcrumbs from "../categories/breadcrumbs-4";
import AccountSideBar from "../account-details/sidebar";
import HistoryList from "./history-list";
import Pagination from "../pagination";

import accountstyles from "../account-details/styles.scss";
import styles from "./styles.scss";




export default function OrderHistory(props) {
    const [state, setState] = useState([
        { 
          id: 1, 
          title: "Organic Food For You", 
          orderno: "#831013667",
          tag: "delivered",
          tagclassName:"badge-success",
          date: "14th February",
          price: "€30.00",
        },
        { 
            id: 2, 
            title: "Organic Food For You", 
            orderno: "#831013667",
            tag: "Refunded",
            tagclassName:"badge-gray",
            date: "14th February",
            price: "€30.00",
        },
        { 
            id: 3, 
            title: "Organic Food For You", 
            orderno: "#831013667",
            tag: "delivered",
            tagclassName:"badge-success",
            date: "14th February",
            price: "€30.00",
        },
        { 
            id: 4, 
            title: "Organic Food For You", 
            orderno: "#831013667",
            tag: "Refunded",
            tagclassName:"badge-gray",
            date: "14th February",
            price: "€30.00",
        },
        { 
            id: 4, 
            title: "Organic Food For You", 
            orderno: "#831013667",
            tag: "Cancelled",
            tagclassName:"badge-danger",
            date: "14th February",
            price: "€30.00",
        },
        { 
            id: 5, 
            title: "Organic Food For You", 
            orderno: "#831013667",
            tag: "delivered",
            tagclassName:"badge-success",
            date: "14th February",
            price: "€30.00",
        },
    ]);

const ListItem = (item) => (
    <HistoryList
        key={item.id}
        id={item.id}
        title={item.title}
        orderno={item.orderno}
        tag={item.tag}
        tagclassName={item.tagclassName}
        date={item.date}
        price={item.price}
    />
);
  return (
    <>
      	<TopNav/>
      	<div>
			<Breadcrumbs 
				breadcrumblink1="Home"
				breadcrumblink2="Order history"
			/>
      	</div>
		<div className="container">
			<div className={accountstyles['account-details-container']}>
				<div className={`${accountstyles['left-section']}`}>
					<AccountSideBar activeLink2="active" />
				</div>
				<div className={`${accountstyles['right-section']}`}>
					<div className={`${accountstyles['max-w-616']}`}>
						<h3 className={`${accountstyles.title}`}>Order history</h3>
                        <div>
                            {state.map(d => (
                                <Link to="/order-history-details/" key={d.id} className={`${styles['history-row']}`}>
                                    {ListItem(d)}
                                </Link>
                            ))}
                        </div>
                        <Pagination className={`${styles["pagination-section"]}`} />
					</div>
				</div>
			</div>
		</div>
		<BottomNav />
    </>
  );
}
