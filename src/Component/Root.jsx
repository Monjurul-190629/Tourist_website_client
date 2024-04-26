import { Outlet } from "react-router-dom";
import Navbar from "./Homes.jsx/Navbar";
import Footer from "./Homes.jsx/Footer"

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;