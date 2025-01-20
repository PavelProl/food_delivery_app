import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map(({ id, ...dish }) => {
        return <Dish key={id} dish={dish} />;
      })}
    </div>
  );
};
