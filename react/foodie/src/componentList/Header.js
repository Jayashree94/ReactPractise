import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"
const Header =() =>{

  const cartItems = useSelector((store) => store.cart.items);

  const [btnName, setBtnName] = useState('login');

  const toggleButton=()=>{
    btnName === 'login' ? 
    setBtnName("logout") : 
    setBtnName("login");
    
  }
  const onlinestatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  return(

    <div className="header">
      <div>
        <img className= "logo" src="https://static.vecteezy.com/system/resources/previews/011/405/724/original/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg" alt="logo"></img>

      </div>
      <div className='nav-items'>
      <ul>
        <li>Online status: {onlinestatus ? "✅":"🔴"} </li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact US</Link></li>
        <li><Link to='/about'>About US</Link></li>
        <li><Link to='/grocery'>Grocery</Link></li>
       

        <li>Cart ( {cartItems.length}  - items)</li>
        <button className="login-btn" onClick={toggleButton}> {btnName} </button>
        <li>{loggedInUser}</li>
      </ul>
      </div>
     
    </div>

  )
}

export default Header;