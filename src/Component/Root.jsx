import { Outlet } from "react-router-dom";
import Navbar from "./Homes.jsx/Navbar";
import Footer from "./Homes.jsx/Footer"
import { useState } from "react";
import { MdNightlight } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Root = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={`bg-${darkMode ? 'gray-800' : 'white'} ${darkMode ? 'text-blue-700' : 'black'} transition-colors duration-500 w-screen`}>
            <div className="">
                
                <button onClick={toggleTheme} className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
                    {darkMode ? <MdOutlineDarkMode/> : <MdNightlight/>}
                </button>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;