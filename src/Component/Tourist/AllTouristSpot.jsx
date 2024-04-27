import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";


const AllTouristSpot = () => {

    const touristSpot = useLoaderData();

    return (
        <div>
            <h3 className="text-xl mt-10 font-bold underline">Tourist Spot : {touristSpot.length}</h3>
            <div className="grid md:grid-cols-3 justify-center md:gap-10 mx-10 md:mx-0">
                {
                    touristSpot.map(tspot => <TouristCard key={tspot._id} tspot={tspot}>

                    </TouristCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;