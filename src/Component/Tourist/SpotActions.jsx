

const SpotActions = ({ spt }) => {

    const { image, tourists_spot_name, country_name, location,
        short_description, average_cost, seasonality,
        total_visitors_per_year, travel_time, user_name, user_email } = spt;




    return (
        <div>
            <table>
                <tbody>
                    <tr className="flex md:flex-row gap-2 md:gap-10 my-5 md:my-10 text-center">
                        <th>{tourists_spot_name}</th>
                        <th>{country_name}</th>
                        <th>{travel_time}</th>
                        <th>{average_cost}</th>
                        <th>
                            <button className="btn btn-primary mr-2">Update</button>
                            <button className="btn btn-primary">Delete</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SpotActions;