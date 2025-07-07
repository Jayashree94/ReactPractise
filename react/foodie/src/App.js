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
      <div className='res-container'></div>
    </div>
  )
}

const RestaurantCard =() =>{
  <div className='res-card'>
    
  </div>
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
