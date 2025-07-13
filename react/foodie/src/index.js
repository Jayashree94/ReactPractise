import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./componentList/Aboutus";
import Contactus from "./componentList/Contactus";
import Error from "./componentList/Error";
import Body from "./componentList/Body";
import RestaurantMenu from "./componentList/RestaurantMenu";


const Grocery = lazy(()=>import("./componentList/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <Aboutus /> },
      { path: "/contact", element: <Contactus /> },
      { path:"/restaurants/:resid", element: <RestaurantMenu/>},
      { path:"/grocery", element: <Suspense fallback={<h1>Loading Grocery details...</h1>}><Grocery/></Suspense>},

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
