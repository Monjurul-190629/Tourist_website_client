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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/", 
        element : <Home></Home>
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
        element : <AddTouristSpot></AddTouristSpot>
      },
      {
        path: "MyList",
        element : <MyList></MyList>
      },
      {
        path: "ViewDetails/:id",
        element : <ViewDetails></ViewDetails>,
        loader : () => fetch("http://localhost:5000/TouristSpots")
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
