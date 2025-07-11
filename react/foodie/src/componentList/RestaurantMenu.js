import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=363359&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    
    setResInfo(json.data);
    console.log(json.data);
  };
    const {name, category,imageId }= resinfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[0].card.info
  return resinfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1> {name}</h1>
      <h2> {category}</h2>
      <ul>
        <li>{imageId}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
