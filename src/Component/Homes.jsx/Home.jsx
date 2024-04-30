import Advisors from "../Advisors";
import TouristCard from "../Tourist/TouristCard";
import Transport from "../Transport";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Country from "./Country";
import { useEffect, useState } from "react";



const Home = () => {

    const touristSpot = useLoaderData();

    const [loading, setLoading] = useState(true); 
    

    useEffect(() => {
        // Simulating fetching data from an API
        setTimeout(() => {
            fetchData();
        }, 3000); 
    }, []);

    const fetchData = () => {
        setLoading(false);
    };

    return (
        <div>
            <Banner></Banner>
            <div className="mx-10">
                <div>
                    <h3 className="text-3xl mt-20 font-bold underline text-center">Tourist Spot</h3>
                    <br /><br />
                    {loading ? (
                        // Show loading spinner while data is loading
                        <span className="loading loading-bars loading-lg"></span>
                    ) : (
                        // Render data when data fetching is complete
                        <div className="grid md:grid-cols-3 md:gap-10 ">
                            {
                                touristSpot.map(tspot => <TouristCard key={tspot._id} tspot={tspot}>

                                </TouristCard>)
                            }
                        </div>
                    )}

                    <h3 className="text-3xl text-center font-bold underline my-10">Countries</h3>
                    <div className="">
                        <Country></Country>
                    </div>


                    <h3 className="text-3xl text-center font-bold underline my-10">Our Transport Services</h3>
                    <div className="">
                        <Transport></Transport>
                    </div>
                    <h3 className="text-3xl text-center font-bold underline my-20">Our Advisors</h3>
                    <div className="">
                        <Advisors></Advisors>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;