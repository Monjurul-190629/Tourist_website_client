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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/", 
        element : <Home></Home>,
        loader : () => fetch("http://localhost:5000/TouristSpots")
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
        loader : () => fetch("http://localhost:5000/TouristSpots")
      },
      {
        path: "addTouristSpot",
        element : <Privateroute><AddTouristSpot></AddTouristSpot></Privateroute>
      },
      {
        path: "MyList",
        element : <Privateroute><MyList></MyList></Privateroute>,
        loader : () => fetch("http://localhost:5000/TouristSpots")
      },
      {
        path: "ViewDetails/:id",
        element : <Privateroute><ViewDetails></ViewDetails></Privateroute>,
        loader : () => fetch("http://localhost:5000/TouristSpots")
      },
      {
        path : "UpdateData/:id",
        element : <Privateroute><UpdateData></UpdateData></Privateroute>,
        loader : ({params}) => fetch(`http://localhost:5000/TouristSpots/${params.id}`)
      },
      {
        path: "Not_Founded_Page",
        element : <Not_Founded_Page></Not_Founded_Page>
      }
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
