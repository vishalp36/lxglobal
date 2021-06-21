import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "../button";

import BottomNav from "../bottom-nav";
import TopNav from "../header/checkout-header-onscroll";
import Breadcrumbs from "../categories/breadcrumbs-4";
import AccountSideBar from "../account-details/store-account-sidebar";
import Refresh from "./images/refresh.svg";
import HistoryList from "../order-history/history-list";
import Pagination from "../pagination";
import accountstyles from "../account-details/styles.scss";
import historystyles from "../order-history/styles.scss";



export default function StoreOrder(props) {
    const [state, setState] = useState([
        { 
          id: 1, 
          title: "5 items", 
          orderno: "#831013667",
          tag: "Ready to pick up",
          tagclassName:"badge-success",
          time: "Today, 14:00",
          name: "Street Name",
        },
        { 
            id: 2, 
            title: "5 items", 
            orderno: "#831013667",
            tag: "On the way to customer",
            tagclassName:"badge-gray",
            time: "Today, 14:00",
            name: "Street Name",
        },
        { 
            id: 3, 
            title: "5 items", 
            orderno: "#831013667",
            tag: "delivered",
            tagclassName:"badge-success",
            time: "Today, 14:00",
            name: "Street Name",
        },
        { 
            id: 4, 
            title: "5 items", 
            orderno: "#831013667",
            tag: "delivered",
            tagclassName:"badge-success",
            time: "Today, 14:00",
            name: "Street Name",
        },
        { 
            id: 5, 
            title: "5 items", 
            orderno: "#831013667",
            tag: "On the way to customer",
            tagclassName:"badge-gray",
            time: "Today, 14:00",
            name: "Street Name",
        },
        { 
            id: 6, 
            title: "5 items", 
            orderno: "#831013667",
            tag: "On the way to customer",
            tagclassName:"badge-gray",
            time: "Today, 14:00",
            name: "Street Name",
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
            date={item.time}
            price={item.name}
        />
    );
  return (
    <>
      	<TopNav/>
      	<div>
			<Breadcrumbs 
				breadcrumblink1="Home"
				breadcrumblink2="Store profile"
			/>
      	</div>
		<div className="container">
			<div className={accountstyles['account-details-container']}>
				<div className={`${accountstyles['left-section']}`}>
					<AccountSideBar activeLink3="active" />
				</div>
				<div className={`${accountstyles['right-section']}`}>
					<div className={`${accountstyles['max-w-616']}`}>
						<div className={`${accountstyles['space-between']} ${accountstyles['align-center']}`}>
                            <h3 className={`${accountstyles.title}`}>Orders</h3>
                            <Button className="btn-left-icon btn-left-icon-flex btn-link">
                                <img src={Refresh} alt="Refresh" />
                                Refresh
                            </Button>
                        </div>
                        <div className={`${accountstyles['tab-section']}`}>
							<Link to="/" className={`${accountstyles['tab-link']}`}>
                                New
							</Link>
							<Link to="/" className={`${accountstyles['tab-link']} ${accountstyles.active}`}>
                                In progress
							</Link>
                            <Link to="/" className={`${accountstyles['tab-link']}`}>
                                Completed
							</Link>
						</div>
						<div className={`${accountstyles['tab-content']} ${accountstyles['listing-section']}`}>
                            <div>
                                {state.map(d => (
                                    <Link to="/" key={d.id} className={`${historystyles['history-row']}`}>
                                        {ListItem(d)}
                                    </Link>
                                ))}
                            </div>
                            <Pagination className={`${historystyles["pagination-section"]}`} />
                        </div>
					</div>
				</div>
			</div>
		</div>
		<BottomNav />
    </>
  );
}
