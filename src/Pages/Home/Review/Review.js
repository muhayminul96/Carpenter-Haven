import React from "react";
import "./Review.css";
import ReactStars from "react-rating-stars-component";

const Review = (props) => {
  const { picture, name, rating, reviewText } = props.review;

  return (
    <div className="review-info bg-gray-800">
      <div className="stars">
        <ReactStars
          count={rating}
          size={34}
          color="#898279"
          activeColor="#898279"
        />
        <ReactStars
          count={5 - rating}
          size={34}
          color="#d68535"
          activeColor="#d68535"
        />
      </div>

      <p className="my-4 text-lg" title={reviewText}>
        {reviewText.length > 150
          ? reviewText.slice(0, 147) + "..."
          : reviewText}
      </p>

      <div className="reviewer-info">
        <img src={picture} alt="" />
        <h3 className="text-2xl font-extrabold">{name}</h3>
      </div>
    </div>
  );
};

export default Review;
