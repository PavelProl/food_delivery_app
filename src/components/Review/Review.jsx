import React from "react";

export const Review = ({ review }) => {
  return (
    <div>
      <div>{review.user}</div>
      <div style={{ fontSize: "12px" }}>{review.text}</div>
    </div>
  );
};
