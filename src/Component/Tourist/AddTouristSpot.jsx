import swal from 'sweetalert2'

const AddTouristSpot = () => {
    const handleTouristSpot = e => {
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
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;

        const newSpot = {
            image, tourists_spot_name, country_name, location,
            short_description, average_cost, seasonality, total_visitors_per_year, travel_time, user_name, user_email
        }
        console.log(newSpot)


        ////// fetch
        fetch("https://assignment-10-server-sable.vercel.app/TouristSpots", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal.fire({
                        title: 'Success!',
                        text: 'new spot added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })


        ////// fetch
        fetch("https://assignment-10-server-sable.vercel.app/Country_collection", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal.fire({
                        title: 'Success!',
                        text: 'new spot added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })



    }
    return (
        <div className="bg-purple-500 my-5 py-10 rounded-3xl mx-20">
            <h2 className="text-center font-bold text-3xl">Add Tourist Spot</h2>
            <div className="flex justify-center py-10 mx-10 md:mx-0">
                <form onSubmit={handleTouristSpot} className="text-justify grid md:grid-cols-2 gap-10 md:gap-20 font-bold text-gray-900">
                    <div className="flex flex-col md:justify-between">
                        <label>Image URL:</label>
                        <input type="text" name="image" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <label>Tourist Spot Name:</label>
                        <input type="text" name="tourists_spot_name" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <label>Country Name:</label>
                        <select name="country_name" className="py-2 px-2 rounded-md">
                            <option value="">Select Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="Combodia"> Combodia </option>
                        </select>
                    </div>
                    <div className="flex flex-col  md:flex-row justify-between">
                        <label>Location:</label>
                        <input type="text" name="location" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <label>Short Description:</label>
                        <input type="text" name="short_description" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <label>Average Cost:</label>
                        <input type="text" name="average_cost" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <label>Seasonality:</label>
                        <select name="seasonality" className="py-2 px-2 rounded-md">
                            <option value="">Season</option>
                            <option value="Winter">Winter</option>
                            <option value="Summer">Summer</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <label>Travel Time:</label>
                        <input type="text" name="travel_time" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <label>Total Visitors Per Year:</label>
                        <input type="text" name="total_visitors_per_year" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <label>User Email:</label>
                        <input type="email" name="user_email" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <label>User Name:</label>
                        <input type="text" name="user_name" className="py-2 px-2 rounded-md" />
                    </div>
                    <input type="submit" value="Add" className="w-full bg-slate-300 rounded-md hover:text-white hover:bg-transparent hover:border-2 hover:border-white" />
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;