import { Link } from "react-router-dom";

const Country_card = ({ tspot }) => {

    const { _id, image, tourists_spot_name, country_name, location,
        short_description, average_cost, seasonality, total_visitors_per_year, travel_time } = tspot;

    return (
        <div className="mx-10">
            <div>
                <div className="my-10">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl text-white text-center font-bold border-2 border-black">
                        <div className="bg-red-700 shadow-xl rounded-2xl px-2 py-3 border-2 border-black">
                            <figure className="px-10 md:pt-5">
                                <img src={image} alt="img" className="rounded-xl h-36 w-48" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title underline">#{tourists_spot_name}</h2>
                                <h2 className="card-title underline">#{country_name}</h2>

                            </div>
                            <div>
                                <h2 className="text-justify">{short_description}</h2>
                            </div>

                            <div className="card-actions flex justify-center gap-2 py-5">

                                <Link to={`/ViewDetailsCountry/${_id}`} >
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country_card;