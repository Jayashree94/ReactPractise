import './App.css';

const Heading =() =>{
  return(
    <div className="header">
      <div>
        <img className= "logo" src="https://static.vecteezy.com/system/resources/previews/011/405/724/original/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg" alt="logo"></img>

      </div>
      <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>Contact US</li>
        <li>About US</li>
        <li>CART</li>
      </ul>
      </div>
     
    </div>

  )
}

const Body =() =>{
  return(
    <div className="body">
      <div className='search'>Search</div>
      <div className='res-container'>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      </div>
    </div>
  )
}

const RestaurantCard =() =>{
  return(
  <div className='res-card'>
   
    <img className="res-card-img" src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" alt = "img"></img>
     <h3>Megna Foods</h3>
       <h4>Biryani, North-Indian, Tandoori</h4>
         <h4>4.3 Star</h4>
         <h4>38 mins</h4>
  </div>
  )
}

function App() {
  return (
    <div className='app'>
    <Heading/>
    <Body/>
    </div>
   
    
  )
}

export default App;
