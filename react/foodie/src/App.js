import './App.css';
import Heading from './componentList/Header'
import { Outlet } from 'react-router-dom';
import {Provider} from "react-redux"
import appStore from './utils/appStore';




function App() {
  return (
    <Provider store={appStore}>
    <div className='app'>
    <Heading/>
    <Outlet/>
    </div>
   </Provider>  
  )
}



export default App;
