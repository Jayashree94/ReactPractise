import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=363359&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resinfo === null) return <Shimmer />;

  // Get restaurant info
  const restaurantCard = resinfo?.cards?.find(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const { name, cuisines, locality } = restaurantCard?.card?.card?.info || {};

  // Get menu items from REGULAR section
  const itemCategory = resinfo?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const itemCards = itemCategory?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{locality}</h3>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
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
  );
};

export default RestaurantMenu;
