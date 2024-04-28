import { Link } from "react-router-dom";


const Transport = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card w-96 bg-base-100 shadow-xl bg-purple-400">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/ypDmBjd/file-small.jpg" alt="Buses" className="rounded-xl w-96 h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold">Buses</h2>
                    <p className="font-bold">Explore our convenient bus services for hassle-free travel to various destinations. Enjoy comfortable seating, scenic routes, and affordable fares.</p>
                    <div className="card-actions">
                        <Link to = "/AllTouristSpot">
                           <button className="btn btn-primary">See our spots</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl bg-purple-400">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/3Mb8gTv/Hdhut-blogspot-com-14.jpg" alt="Boats" className="rounded-xl w-96 h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold">Boats</h2>
                    <p className="font-bold">Embark on an unforgettable journey with our boat transportation services. Cruise along scenic waterways, explore remote islands, and enjoy unparalleled views of the sea.</p>
                    <div className="card-actions">
                        <Link to = "/AllTouristSpot">
                           <button className="btn btn-primary">See our spots</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl bg-purple-400">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/dp7NYrk/Plane-Pictures.jpg" alt="Boats" className="rounded-xl w-96 h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold">Air planes</h2>
                    <p className="font-bold">Experience seamless air travel with our comprehensive airplane services. Fly to domestic and international destinations with ease, enjoying comfort, convenience, and exceptional service.</p>
                    <div className="card-actions">
                        <Link to = "/AllTouristSpot">
                           <button className="btn btn-primary">See our spots</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transport;