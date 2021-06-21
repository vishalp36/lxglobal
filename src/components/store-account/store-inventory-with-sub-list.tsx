import React, {useState} from "react";
//buttons
import Button from "../button";
import { ReactSortable } from "react-sortablejs";

// Components
import TopNav from "../header/checkout-header-onscroll";
import Breadcrumbs from "../categories/breadcrumbs-4";
import BottomNav from "../bottom-nav";
import InventoryList from "./category-list";
import SubList from "./category-sub-list";
import Reorder from "./images/sort.svg";
import ListImg from "../product-card/images/1.png";
import Orderstyles from '../order-status/styles.scss';
import accountstyles from "../account-details/styles.scss";
import styles from "./styles.scss";
import '../../resources/css/lib/sortable/sortable.scss';


export default function StoreInventory() {
    const [state, setState] = useState([
		{ 
			id: 1, 
			name: "Lorem ipsum is placeho Lorem ipsum is placeho",
			Img: ListImg,
            label:"out of stock",
            badgeClass:"badge-danger badge-icon badge-danger-icon",
			price: "€12.50", 
        },
        { 
			id: 2, 
			name: "Lorem ipsum is placeho Lorem ipsum is placeho",
			Img: ListImg,
            label:"in stock",
            badgeClass:"badge-success badge-icon badge-success-icon",
			price: "€12.50", 
        },
        { 
			id: 3, 
			name: "Lorem ipsum is placeho Lorem ipsum is placeho",
			Img: ListImg,
            label:"in stock",
            badgeClass:"badge-success badge-icon badge-success-icon",
			price: "€12.50", 
        },
        { 
			id: 4, 
			name: "Lorem ipsum is placeho Lorem ipsum is placeho",
			Img: ListImg,
            label:"in stock",
            badgeClass:"badge-success badge-icon badge-success-icon",
			price: "€12.50", 
        },
        { 
			id: 5, 
			name: "Lorem ipsum is placeho Lorem ipsum is placeho",
			Img: ListImg,
            label:"in stock",
            badgeClass:"badge-success badge-icon badge-success-icon",
			price: "€12.50", 
        },
        { 
			id: 6, 
			name: "Lorem ipsum is placeho Lorem ipsum is placeho",
			Img: ListImg,
            label:"disabled",
            badgeClass:"badge-gray badge-icon badge-gray-icon",
			price: "€12.50", 
        },
        { 
			id: 7, 
			name: "Lorem ipsum is placeho Lorem ipsum is placeho",
			Img: ListImg,
            label:"in stock",
            badgeClass:"badge-success badge-icon badge-success-icon",
			price: "€12.50", 
        },
	]);
	const SubListItem = (subitem) => (
		<SubList
			key={subitem.id}
			ListImg={subitem.Img}
			productname={subitem.name} 
            badgelabel={subitem.label}
            badgeClass={subitem.badgeClass}
			price={subitem.price}

		/>
	);
  return (
    <>
        <TopNav />
        <div>
			<Breadcrumbs 
				breadcrumblink1="Home"
				breadcrumblink2="Inventory"
			/>
      	</div>
        <div className="container">
			<div className={`${styles['inventory-container']} ${Orderstyles['order-details-container']}`}>
                <div className={`${accountstyles['space-between']} ${accountstyles['align-center']}`}>
                    <h3 className={`${accountstyles.title}`}>Inventory</h3>
                    <Button className="btn-left-icon btn-left-icon-flex btn-link">
                        <img src={Reorder} alt="Reorder" />
                        Reorder
                    </Button>
                </div>
				<div>
                    <ul className={`${styles['category-list']}`}>
						<li>
		                    <InventoryList name="Bread" className="arrow">
                                <ReactSortable tag="ul" list={state} setList={setState} className={`${styles['sub-category-list']}`}>
									{state.map(sub => (
										<li key={sub.id}>
											{SubListItem(sub)}
										</li>
									))}
								</ReactSortable>
                            </InventoryList> 
                        </li>
                        <li>
		                    <InventoryList name="Bread" className="arrow open">
                                <ReactSortable tag="ul" list={state} setList={setState} className={`${styles['sub-category-list']}`}>
									{state.map(sub => (
										<li key={sub.id}>
											{SubListItem(sub)}
										</li>
									))}
								</ReactSortable>
                            </InventoryList> 
                        </li>
						<li>
		                    <InventoryList name="Bread" className="arrow">
                                <ReactSortable tag="ul" list={state} setList={setState} className={`${styles['sub-category-list']}`}>
									{state.map(sub => (
										<li key={sub.id}>
											{SubListItem(sub)}
										</li>
									))}
								</ReactSortable>
                            </InventoryList> 
                        </li>
                    </ul>
				</div>
			</div> 
        </div>
        <BottomNav />
    </>
  );
}
