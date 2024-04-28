import TouristCard from "../Tourist/TouristCard";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";



const Home = () => {

    const touristSpot = useLoaderData();

    return (
        <div>
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
                </div>
            </div>
        </div>
    );
};

export default Home;