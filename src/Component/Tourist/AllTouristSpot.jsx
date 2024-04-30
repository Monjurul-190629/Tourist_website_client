import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const AllTouristSpot = () => {

    const touristSpot = useLoaderData();


    const [touristSpots, setTouristSpots] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');


    const sortTouristSpots = () => {
        const sortedSpots = [...touristSpots];
        if (sortOrder === 'asc') {
            sortedSpots.sort((a, b) => a.average_cost - b.average_cost);
        } else {
            sortedSpots.sort((a, b) => b.average_cost - a.average_cost);
        }
        setTouristSpots(sortedSpots);
    };



    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        sortTouristSpots();
    };

    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        // Simulating fetching data from an API
        setTimeout(() => {
            fetchData();
        }, 2000); // 
    }, []);

    const fetchData = () => {
        setLoading(false);
    };

    return (
        <div className="mx-10">
            <h3 className="text-3xl font-bold underline text-center">Tourist Spot : {touristSpot.length}</h3>
            <br /><br />
            <label htmlFor="sort" className="text-center">Sort by Average Cost:</label>
            <select id="sort" onChange={handleSortChange} value={sortOrder} className="">
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
            <br/>
            <br/>

            {loading ? (
                <span className="loading loading-bars loading-lg text-center"></span>
            ) : (
                // Render data
                <Fade>
                    <div className="grid md:grid-cols-3 md:gap-10 mx-5 ">
                        {
                            touristSpot.map(tspot => <TouristCard key={tspot._id} tspot={tspot}>

                            </TouristCard>)
                        }
                    </div>
                </Fade>
            )}
        </div>
    );
};

export default AllTouristSpot;