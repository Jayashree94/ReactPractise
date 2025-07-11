import { useState } from "react";
import { Link } from "react-router-dom";
const Header =() =>{

  const [btnName, setBtnName] = useState('login');

  const toggleButton=()=>{
    btnName === 'login' ? 
    setBtnName("logout") : 
    setBtnName("login");
  }

  return(

    <div className="header">
      <div>
        <img className= "logo" src="https://static.vecteezy.com/system/resources/previews/011/405/724/original/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg" alt="logo"></img>

      </div>
      <div className='nav-items'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact US</Link></li>
        <li><Link to='/about'>About US</Link></li>
        <li>Cart</li>
        <button className="login-btn" onClick={toggleButton}> {btnName} </button>
      </ul>
      </div>
     
    </div>

  )
}

export default Header;