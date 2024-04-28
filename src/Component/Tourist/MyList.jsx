import { useLoaderData } from "react-router-dom";
import SpotActions from "./SpotActions";


const MyList = () => {
    
    const mySpot = useLoaderData();

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl md:text-3xl mt-10">Your Tourist Spots</h2>
            <table className="text-center mx-5">
                <thead className="">
                    <tr className="flex gap-2 md:gap-10 my-5 md:my-10">
                        <th>Name</th>
                        <th>Country</th>
                        <th>Travel_time</th>
                        <th>Cost</th>
                        <th className="md:ml-40">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mySpot.map(spt => <SpotActions key = {spt._id} spt = {spt}></SpotActions>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyList;