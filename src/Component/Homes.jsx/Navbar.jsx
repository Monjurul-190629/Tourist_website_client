import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import { Typewriter } from 'react-simple-typewriter'

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => console.log("log out successfully"))
            .catch((error) => console.log(error.message))
    }



    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allTouristSpot">All Tourists Spot</NavLink></li>
        <li><NavLink to="/addTouristSpot">Add Tourists Spot</NavLink></li>
        <li><NavLink to="/MyList">My List</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/Register">Register</NavLink></li>
        <li><NavLink to="/Not_Founded_Page">Not_Founded_Page</NavLink></li>
    </>
    return (
        <div className="mx-10">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><Typewriter
                        words={['VoyageHub']}
                        loop={50}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="tooltip  hover:tooltip-open" data-tip={user.displayName}>
                                <span><img src={user.photoURL} className="ml-12 w-1/2 md:w-2/3" /></span>
                            </div>

                            <a onClick={handleLogout} className="btn btn-sm">Log out</a>
                        </> :
                            <>
                                <Link to="/Login"><button className="btn btn-secondary">Log in</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;