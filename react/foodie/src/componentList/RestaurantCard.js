const RestaurantCard =(props) =>{
  const {resData} = props;

  const {name, costForTwo, avgRating, areaName, } = resData?.info;
  return(
  <div className='res-card'>
   
    <img className="res-card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId} alt = "img"></img>
     <h3>{name}</h3>
       <h4>Biryani, North-Indian, Tandoori</h4>
       <h4>{areaName}</h4>
         <h4>{avgRating}</h4>
         <h4>38 mins</h4>
         <h4>{costForTwo}</h4>
  </div>
  )
}

//higher order componnet
//input - restocaard
//output - promoted restocard

export const withPromotedLabel =(RestaurantCard) => {

  return(props)=>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }

}

export default RestaurantCard;