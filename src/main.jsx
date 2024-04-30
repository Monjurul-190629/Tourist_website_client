import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import Home from './Component/Homes.jsx/Home.jsx';
import Login from './Component/Log/Login.jsx';
import Register from './Component/Log/Register.jsx';
import AllTouristSpot from './Component/Tourist/AllTouristSpot.jsx';
import AddTouristSpot from './Component/Tourist/AddTouristSpot.jsx';
import MyList from './Component/Tourist/MyList.jsx';
import AuthProvider from './Component/Provider.jsx/AuthProvider.jsx';
import ViewDetails from './Component/Tourist/ViewDetails.jsx';
import Privateroute from './Component/Routes/PrivateRoute.jsx';
import UpdateData from './Component/Tourist/UpdateData.jsx';
import Not_Founded_Page from './Component/Not_Fouded_Page.jsx';
import Country from './Component/Homes.jsx/Country.jsx';
import Country_view_details from './Component/Homes.jsx/Country_view_details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/", 
        element : <Home></Home>,
        loader : () => fetch("https://assignment-10-server-sable.vercel.app/TouristSpots")
      },
      {
        path : "/Login",
        element : <Login></Login>
      },
      {
        path : "/Register",
        element: <Register></Register>
      },
      {
        path: "allTouristSpot",
        element : <AllTouristSpot></AllTouristSpot>, 
        loader : () => fetch("https://assignment-10-server-sable.vercel.app/TouristSpots")
      },
      {
        path: "addTouristSpot",
        element : <Privateroute><AddTouristSpot></AddTouristSpot></Privateroute>
      },
      {
        path: "MyList",
        element : <Privateroute><MyList></MyList></Privateroute>,
        loader : () => fetch("https://assignment-10-server-sable.vercel.app/TouristSpots")
      },
      {
        path: "ViewDetails/:id",
        element : <Privateroute><ViewDetails></ViewDetails></Privateroute>,
        loader : () => fetch("https://assignment-10-server-sable.vercel.app/TouristSpots")
      },
      {
        path : "UpdateData/:id",
        element : <Privateroute><UpdateData></UpdateData></Privateroute>,
        loader : ({params}) => fetch(`https://assignment-10-server-sable.vercel.app/TouristSpots/${params.id}`)
      },
      {
        path: "Not_Founded_Page",
        element : <Not_Founded_Page></Not_Founded_Page>
      },
      {
        path: "Country",
        element : <Country></Country>,
        loader : () => fetch("https://assignment-10-server-sable.vercel.app/Country_collection")
      },
      {
        path: "ViewDetailsCountry/:id",
        element : <Country_view_details></Country_view_details>,
        loader : () => fetch("https://assignment-10-server-sable.vercel.app/Country_collection")
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
