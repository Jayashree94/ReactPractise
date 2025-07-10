import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Aboutus from './componentList/Aboutus';
import Contactus from './componentList/Contactus';

const appRouter = createBrowserRouter([
  {path: "/",
    element:<App/>
  },
  {path: "/about",
  element: <Aboutus/>
  },
   {path: "/contact",
  element: <Contactus/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter}/>)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
