import React from "react";
import Button from "../button";
import Img1 from "./images/6.png";
import Img2 from "./images/3.png";
import Img3 from "./images/2.png";
import Img4 from "./images/1.png";
import Img5 from "./images/5.png";
import Img6 from "./images/4.png";
import Img7 from "./images/7.png";
import styles from "./styles.scss";

export default function Error(props) {
  return (
    <>
        <div className={`${styles['error-page']}`}>
            <div className={`${styles.grid}`}>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img1})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img2})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img3})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img4})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img5})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img6})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img1})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img2})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img3})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img4})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img5})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img6})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img7})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img4})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img1})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img4})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img1})`}} />
                </div>
                <div className={`${styles['grid-item']}`}>
                    <div className={`${styles.item}`} style={{ backgroundImage: `url(${Img7})`}} />
                </div>
            </div>
            <div className={`${styles.content}`}>
                <h1>Oh no! Error.</h1>
                <p className={`${styles['error-inst']}`}>In publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such as web pages.</p>
                <Button>
                    Back to Homepage
                </Button>
            </div>
        </div>
    </>
  );
}
