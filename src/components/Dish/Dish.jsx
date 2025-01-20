import React from "react";
import { useCount } from "../../hooks/useCount";

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount();

  return (
    <div>
      <div>{dish.name}</div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <div>
        {dish.ingredients.map((ingredient, index) => {
          return (
            <div key={index} style={{ fontSize: "12px" }}>
              {ingredient}
            </div>
          );
        })}
      </div>
    </div>
  );
};
