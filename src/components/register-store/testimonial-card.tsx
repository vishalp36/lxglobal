import React, { Children } from "react";
import { getExtraClasses } from "../../utils/common";

//styles
import styles from "./styles.scss";

// images
import RatingImg from "./images/rating.svg";

export default function TestimonialCard(props) {
  const { className, avtarImg, testimonialName, testimonialText } = props;
  let extraClasses = getExtraClasses(styles, className);
  return (
    <>
      <div className={`${styles["testimonial-card-wrap"]} ${extraClasses}`}>
        <div className={`${styles["testimonial-text-wrap"]}`}>
          <p className={`${styles["testimonial-text"]}`}>{testimonialText}</p>
          <div className={`${styles["testimonial-rating-wrap"]}`}>
            <img
              src={RatingImg}
              alt="rating"
              className={`${styles["testimonial-rating"]}`}
            />
            <img
              src={RatingImg}
              alt="rating"
              className={`${styles["testimonial-rating"]}`}
            />
            <img
              src={RatingImg}
              alt="rating"
              className={`${styles["testimonial-rating"]}`}
            />
            <img
              src={RatingImg}
              alt="rating"
              className={`${styles["testimonial-rating"]}`}
            />
            <img
              src={RatingImg}
              alt="rating"
              className={`${styles["testimonial-rating"]}`}
            />
          </div>
        </div>
        <div className={`${styles["testimonial-user-wrap"]}`}>
          <div className={`${styles["testimonial-avatar-img-wrap"]}`}>
            <img
              src={avtarImg}
              alt={testimonialName}
              className={`${styles["testimonial-avatar"]}`}
            />
          </div>
          <p className={`${styles["testimonial-name"]}`}>{testimonialName}</p>
        </div>
      </div>
    </>
  );
}
