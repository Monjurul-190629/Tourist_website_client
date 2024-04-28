import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";
import { useState } from "react";
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

    return (
        <div>
            <h3 className="text-3xl mt-10 font-bold underline">Tourist Spot : {touristSpot.length}</h3>
            <br /><br />
            <label htmlFor="sort">Sort by Average Cost:</label>
            <select id="sort" onChange={handleSortChange} value={sortOrder}>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
            <Fade>
                <div className="grid md:grid-cols-3 md:gap-10 mx-5 ">
                    {
                        touristSpot.map(tspot => <TouristCard key={tspot._id} tspot={tspot}>

                        </TouristCard>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default AllTouristSpot;