import { useContext } from "react";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'



const SpotActions = ({ spt, spot, setSpot }) => {

    const { image, tourists_spot_name, country_name, location,
        short_description, average_cost, seasonality,
        total_visitors_per_year, travel_time, user_name, user_email, _id } = spt;

    const { user } = useContext(AuthContext);



    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                /* 
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                */
                fetch(`http://localhost:5000/TouristSpots/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            const remaining = [];
                            spot.forEach(item => {
                                if (item._id !== _id) {
                                    remaining.push(item);
                                }
                            });
                            setSpot(remaining)
                        }
                    })
            }
        });
    }


    return (
        <div>
            {/*
                user.email == user_email ? <>
                    <div className="" >
                       iice
                    </div>

                </> :
                    <>
                        <p>Ok</p>
                    </>
    */ }

            <table>
                <tbody>
                    <tr className="flex md:flex-row gap-2 md:gap-10 my-5 md:my-10 text-center">
                        <th>{tourists_spot_name}</th>
                        <th>{country_name}</th>
                        <th>{travel_time}</th>
                        <th>{average_cost}</th>
                        <th>
                            <Link to={`/UpdateData/${_id}`}><button className="btn btn-primary mr-2">Update</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SpotActions;