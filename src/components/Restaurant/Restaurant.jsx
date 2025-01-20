import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <div style={{ fontSize: "32px", fontWeight: 700, color: "orange" }}>
        {restaurant.name}
      </div>
      <h2>{"Menu"}</h2>
      <Menu menu={restaurant.menu} />
      <h2>{"Reviews"}</h2>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
