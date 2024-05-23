import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import About from './about';
import Resets from './Resets';
import Select from './Select';
import ReviewPage from './Review';
import Optionsfood from './Optionsfood';
import Optionstrek from './Optiontrek';
import Optiontemples from './Optiontemples';
import Optionsmalls from './Optionsmalls';
import Optionfunparks from './Optionfunparks';
import Optionshop from './Optionshop';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Resets",
    element: <Resets/>,
  },
  {
    path: "Select",
    element: <Select/>,
  },
    {
    path: "ReviewPage",
    element: <ReviewPage/>,
  },
    {
    path: "Optionsfood",
    element: <Optionsfood/>,
  },
    {
    path: "Optionstrek",
    element: <Optionstrek/>,
  },
    {
    path: "Optiontemples",
    element: <Optiontemples/>,
  },
  {
    path: "Optionmalls",
    element: <Optionsmalls/>,
  },
  {
  path: "Optionfunparks",
    element: <Optionfunparks/>,
  },
  {
  path: "Optionshop",
    element: <Optionshop/>,
  },
  {
    path: "Home",
    element: <Home/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
