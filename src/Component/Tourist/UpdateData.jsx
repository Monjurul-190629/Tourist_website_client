import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'



const UpdateData = () => {

    const spot = useLoaderData();


    const {_id,  image, tourists_spot_name, country_name, location,
        short_description, average_cost, seasonality, total_visitors_per_year, travel_time } = spot;




    const handleUpdateData = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const travel_time = form.travel_time.value;

        const updateSpot = {
            image, tourists_spot_name, country_name, location,
            short_description, average_cost, seasonality, total_visitors_per_year, travel_time
        }
        console.log(updateSpot)


        ////fetch
        ////// fetch
        fetch(`https://assignment-10-server-sable.vercel.app/TouristSpots/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }



    return (
        <div className="bg-blue-300 my-20 py-10 rounded-3xl">
            <h2 className="text-center font-bold text-3xl">Update Tourist Spot</h2>
            <div className="flex justify-center py-10 mx-10 md:mx-0">
                <form onSubmit={handleUpdateData} className="text-justify grid md:grid-cols-2 gap-10 md:gap-20 font-bold text-gray-900">
                    <div className="flex md:justify-between">
                        <label>Image URL:</label>
                        <input type="text" name="image" defaultValue={image} className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Tourist Spot Name:</label>
                        <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Country Name:</label>
                        <select name="country_name" className="py-2 px-2 rounded-md" defaultValue={country_name}>
                            <option value="">Select Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="Combodia"> Combodia </option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label>Location:</label>
                        <input type="text" name="location" defaultValue={location} className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Short Description:</label>
                        <input type="text" name="short_description" defaultValue={short_description} className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Average Cost:</label>
                        <input type="text" name="average_cost" defaultValue={average_cost} className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Seasonality:</label>
                        <select name="seasonality" className="py-2 px-2 rounded-md" defaultValue={seasonality}>
                            <option value="">Season</option>
                            <option value="Winter">Winter</option>
                            <option value="Summer">Summer</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label>Travel Time:</label>
                        <input type="text" name="travel_time" defaultValue={travel_time} className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Total Visitors Per Year:</label>
                        <input type="text" name="total_visitors_per_year" defaultValue={total_visitors_per_year} className="py-2 px-2 rounded-md" />
                    </div>

                    <input type="submit" value="Update" className="w-full bg-slate-300 rounded-md hover:text-white hover:bg-transparent hover:border-2 hover:border-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateData;