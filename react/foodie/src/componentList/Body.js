import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);  
  const [SearchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    const topList = filteredRestaurant.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setSearchList(topList);
  };

  const handleSearch = () => {
    const searchRestaurant = filteredRestaurant.filter((restaurant) => 
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setSearchList(searchRestaurant);

  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setSearchList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={(searchText) => {
              handleSearch();
            }}>
            Search
          </button>
        </div>

        <button className="toprated" onClick={handleClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {SearchList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
