import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const spots = useLoaderData();
    const { id } = useParams();

    const spot = spots.find(st => st._id == id)

    const { image, tourists_spot_name, country_name, location,
        short_description, average_cost, seasonality, total_visitors_per_year, travel_time, user_name, user_email } = spot;


    return (
        <div>
            <div className=" px-4 py-5 rounded-2xl mx-auto text-white">
                <div className="bg-purple-600 px-5 pb-10 pt-10  rounded-2xl">
                    <div className="flex justify-center mb-10">
                        <img src={image} alt="estate" className=" h-48" /><br />
                    </div>
                    <div className="text-gray-300 flex gap-5 font-semibold justify-center mb-10">
                        <h3 className="text-xl md:text-3xl">#{tourists_spot_name}</h3>
                        <h3 className="text-xl md:text-3xl">#{country_name}</h3>
                    </div>
                    <div className="font-bold text-center text-gray-300">
                        <span className="underline text-xl">Location</span> : {location}
                    </div><br/>
                    <div className="font-bold text-center text-gray-300">
                        <span className="underline text-xl">Short Description</span> : {short_description}
                    </div>
                    <h3 className="text-2xl text-gray-300 font-semibold my-8 mb-10">Total Visitors per Year: {total_visitors_per_year}</h3>
                    <h2 className="text-xl font-semibold my-4 text-gray-200">Travel_time: {travel_time}</h2>
                    <h2 className="text-xl font-semibold my-4 text-gray-200">Average_cost: {average_cost}</h2>
                    <h2 className="text-xl font-semibold my-4 text-gray-200">Seasonality: {seasonality}</h2>
                    <div className="flex flex-col justify-center md:text-xl gap-4 border-2 border-white py-2 px-2 font-bold mt-10">
                         <h3>User name : {user_name}</h3>
                         <h3>User email : {user_email}</h3>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ViewDetails;