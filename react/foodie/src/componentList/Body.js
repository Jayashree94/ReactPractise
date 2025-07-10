import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
const [filteredRestaurant, setfilteredRestaurant] = useState([]);


useEffect(()=>{
fetchData();
},[]);

const handleClick = () => {
    const topList = filteredRestaurant.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setfilteredRestaurant(topList);
  };

const fetchData= async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
  const json = await data.json();
  console.log(json);
  setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

  return filteredRestaurant.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <button className="toprated" onClick={handleClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
