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
  
  };
    console.log(resinfo?.cards[2]?.card?.card?.info.name)
    //const {name} = resinfo?.cards[2]?.card?.card?.info;
  
    
  return resinfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
       <h2>{resinfo?.cards[2].card.card.info.name}</h2>
       <h3>{resinfo?.cards[2].card.card.info.areaName}</h3>
       <h4>{resinfo?.cards[2].card.card.info.costForTwoMessage}</h4>
       <h4>{resinfo?.cards[2].card.card.info.cuisines.join(", ")}</h4>

      <ul>
        <li>{}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
