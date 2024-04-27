

const AddTouristSpot = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="bg-purple-500 my-20 py-10 rounded-3xl">
            <h2 className="text-center font-bold text-3xl">Add Tourist Spot</h2>
            <div className="flex justify-center py-10 mx-10 md:mx-0">
                <form onSubmit={handleSubmit} className="text-justify grid md:grid-cols-2 gap-10 md:gap-20 font-bold text-gray-900">
                    <div className="flex md:justify-between">
                        <label>Image URL:</label>
                        <input type="text" name="image" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Tourist Spot Name:</label>
                        <input type="text" name="tourists_spot_name" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Country Name:</label>
                        <select name="country_name" className="py-2 px-2 rounded-md">
                            <option value="">Select Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Thailand">Thailand</option>
                            <option value = "Indonesia">Indonesia</option>
                            <option value = "Vietnam"> Vietnam </option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label>Location:</label>
                        <input type="text" name="location" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Short Description:</label>
                        <input type="text" name="short_description" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Average Cost:</label>
                        <input type="text" name="average_cost" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Seasonality:</label>
                        <select name="seasonality" className="py-2 px-2 rounded-md">
                            <option value="">Season</option>
                            <option value="Winter">Winter</option>
                            <option value="Summer">Summer</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label>Travel Time:</label>
                        <input type="text" name="travel_time" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>Total Visitors Per Year:</label>
                        <input type="text" name="total_visitors_per_year" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
                        <label>User Email:</label>
                        <input type="email" name="user_email" className="py-2 px-2 rounded-md" />
                    </div>
                    <div className="flex justify-between">
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