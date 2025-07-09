import { resList } from '../utils/MockData';
import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';

const Body =() =>{

  const [filteredRestaurant, setfilteredRestaurant] = useState(resList);
 const handleClick=()=>{
  const topList = resList.filter((restaurant) => restaurant.info.avgRating > 4.5 )
  setfilteredRestaurant(topList);
  };
  return(
    <div className="body">
      <div className='filter'>
        <button className='toprated' onClick={handleClick}>Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
      {filteredRestaurant.map((restaurant) => (<RestaurantCard key = {restaurant.info.id} resData={restaurant}/>))}
      </div>
    </div>
  )
}

export default Body;