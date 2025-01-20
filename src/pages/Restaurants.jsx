import React, { useState } from "react";
import { Restaurant } from "../components/Restaurant/Restaurant";
import { Tabs } from "../components/Tabs/Tabs";

export const Restaurants = ({ restaurants }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <h1>Restaurants</h1>
      <Tabs
        tabs={restaurants.map((restaurant) => restaurant.name)}
        onClick={setActiveTabIndex}
        activeTabIndex={activeTabIndex}
      />
      <Restaurant restaurant={restaurants[activeTabIndex]} />
    </div>
  );
};
