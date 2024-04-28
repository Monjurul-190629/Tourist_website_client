import { useState } from "react";
import Advisors from "../Advisors";
import TouristCard from "../Tourist/TouristCard";
import Transport from "../Transport";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";



const Home = () => {

    const touristSpot = useLoaderData();
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`bg-${darkMode ? 'gray-800' : 'white'} text-${darkMode ? 'white' : 'black'} transition-colors duration-500`}>
            <button onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            </button>
            <Banner></Banner>
            <div>
                <div>
                    <h3 className="text-3xl mt-20 font-bold underline">Tourist Spot</h3>
                    <br /><br />

                    <div className="grid md:grid-cols-3 md:gap-10 mx-5 ">
                        {
                            touristSpot.map(tspot => <TouristCard key={tspot._id} tspot={tspot}>

                            </TouristCard>)
                        }
                    </div>
                    <h3 className="text-3xl text-center font-bold underline my-10">Our Transport Services</h3>
                    <div>
                        <Transport></Transport>
                    </div>
                    <h3 className="text-3xl text-center font-bold underline my-20">Our Advisors</h3>
                    <div>
                        <Advisors></Advisors>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;