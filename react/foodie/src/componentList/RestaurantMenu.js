import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();

  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=363359"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  const restaurantCard = resInfo.cards?.find(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const { name, cuisines, locality } = restaurantCard?.card?.card?.info || {};

  // 🔍 Extract all item categories (like Recommended, etc.)
  const itemCategories =
    resInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{locality}</h3>
      {itemCategories.map((category, idx) => (
        <div key={idx}>
          <h2>{category.card.card.title}</h2>
          <ul>
            {category.card.card.itemCards?.map((item) => {
              const info = item.card.info;
              return (
                <li key={info.id}>
                  <h4>{info.name}</h4>
                  <p>{info.description}</p>
                  <p>₹{info.price / 100}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
