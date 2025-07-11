import './App.css';
import Heading from './componentList/Header'
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
    <Heading/>
    <Outlet/>
    </div>
   
    
  )
}



export default App;
