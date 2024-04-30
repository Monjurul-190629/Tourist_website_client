import { Link } from "react-router-dom";


const TouristCard = ({ tspot }) => {

    const { _id, image, tourists_spot_name, country_name, location,
        short_description, average_cost, seasonality, total_visitors_per_year, travel_time } = tspot;

    return (
        <div>
            <div className="my-10">
                <div className="py-4 px-4 rounded-xl  w-full md:w-96 bg-base-100 shadow-xl text-white text-center font-bold border-2 border-black">
                    <div className="bg-gray-800 shadow-xl rounded-2xl px-2 py-3 border-2 border-black">
                        <figure className="px-10 md:pt-5 flex justify-center">
                            <img src={image} alt="img" className="rounded-xl h-36 w-48" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title underline">{tourists_spot_name}</h2>
                        </div>
                        <div className="flex flex-col justify-center gap-2 py-2">
                            <h3 className="">Cost : {average_cost}</h3>
                            <h3 className="">Total_visitors : {total_visitors_per_year}</h3>
                            <h3 className="">Travel_time: {travel_time}</h3>
                            <h3 className="">Seasonality : {seasonality}</h3>
                        </div>
                        
                        <div className="card-actions flex justify-center gap-2 py-5">

                            <Link to= {`/ViewDetails/${_id}`} >
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristCard;