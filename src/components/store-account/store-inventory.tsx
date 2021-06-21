import React, {useState} from "react";
//buttons
import Button from "../button";
import { ReactSortable } from "react-sortablejs";

// Components
import TopNav from "../header/checkout-header-onscroll";
import Breadcrumbs from "../categories/breadcrumbs-4";
import BottomNav from "../bottom-nav";
import InventoryList from "./category-list";
import Reorder from "./images/sort.svg";
import Orderstyles from '../order-status/styles.scss';
import accountstyles from "../account-details/styles.scss";
import styles from "./styles.scss";
import '../../resources/css/lib/sortable/sortable.scss';


export default function StoreInventory() {
    const [state, setState] = useState([
		{ id: 1, name: "Bread" },
		{ id: 2, name: "Cookies" },
		{ id: 3, name: "Cakes"},
		{ id: 4, name: "Pastry"},
	]);
	const ListItem = item => (
		<InventoryList 
			key={item.id}
			name={item.name} 
			className={item.class}
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
                    <ReactSortable tag="ul" list={state} setList={setState} className={`${styles['category-list']}`}>
					{state.map(p => (
						<li key={p.id}>
							{ListItem(p)}
						</li>
					))}
				    </ReactSortable>
				</div>
			</div> 
        </div>
        <BottomNav />
    </>
  );
}
