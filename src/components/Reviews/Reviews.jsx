import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map(({ id, ...review }) => {
        return <Review key={id} review={review} />;
      })}
    </div>
  );
};
