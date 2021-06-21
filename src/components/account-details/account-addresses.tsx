import React, {useState} from "react";
import { Link } from "react-router-dom";

import BottomNav from "../bottom-nav";
import TopNav from "../header/checkout-header-onscroll";
import Breadcrumbs from "../categories/breadcrumbs-4";
import AccountSideBar from "./sidebar";
import AddressList from "./address-list";


import styles from "./styles.scss";



export default function AccountDetails(props) {
    const [state, setState] = useState([
        { 
            id: 1, 
            title: "Antonio Vivaldistraat 7 A13",
            inst: "1083 HP, Amsterdam" 
        },
        { 
            id: 2, 
            title: "Antonio Vivaldistraat 7 A13",
            inst: "1083 HP, Amsterdam" 
        },
        { 
            id: 3, 
            title: "Antonio Vivaldistraat 7 A13",
            inst: "1083 HP, Amsterdam" 
        },
        { 
            id: 4, 
            title: "Antonio Vivaldistraat 7 A13",
            inst: "1083 HP, Amsterdam" 
        },
        { 
            id: 5, 
            title: "Antonio Vivaldistraat 7 A13",
            inst: "1083 HP, Amsterdam" 
        },
        { 
            id: 6, 
            title: "Antonio Vivaldistraat 7 A13",
            inst: "1083 HP, Amsterdam" 
        },
        { 
            id: 7, 
            title: "Antonio Vivaldistraat 7 A13",
            inst: "1083 HP, Amsterdam" 
        },
    ]);
    const ListItem = (item) => (
        <AddressList
            key={item.id}
            id={item.id}
            title={item.title}
            inst={item.inst}
        />
    );
  return (
    <>
      	<TopNav/>
      	<div>
			<Breadcrumbs 
				breadcrumblink1="Home"
				breadcrumblink2="Your account"
			/>
      	</div>
		<div className="container">
			<div className={styles['account-details-container']}>
				<div className={`${styles['left-section']}`}>
					<AccountSideBar activeLink="active" />
				</div>
				<div className={`${styles['right-section']}`}>
					<div className={`${styles['max-w-616']}`}>
						<h3 className={`${styles.title}`}>Your account</h3>
						<div className={`${styles['tab-section']}`}>
							<Link to="/" className={`${styles['tab-link']}`}>
								Account details
							</Link>
							<Link to="/" className={`${styles['tab-link']} ${styles.active}`}>
								Saved addresses
							</Link>
						</div>
						<div className={`${styles['tab-content']}`}>
							<div>
                                {state.map(d => (
                                    <div key={d.id} className={`${styles['address-row']}`}>
                                        {ListItem(d)}
                                    </div>
                                ))}
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<BottomNav />
    </>
  );
}
