

const Advisors = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="card card-side shadow-xl flex md:flex-row flex-col justify-center bg-slate-400">
                <figure><img src="https://i.ibb.co/hfNZCX7/350b8188dc1170be76479bebaa1db9c3.jpg" alt="Movie" className="h-72 rounded-3xl"/></figure>
                <div className="card-body">
                    <h2 className="w-72 font-bold">
                    "Choosing [VoyageHub] for our travel needs was one of the best decisions we've ever made! From start to finish, 
                    they exceeded our expectations and made our vacation an absolute dream come true." --- <span className="font-bold text-xl">Brad Pitt</span>
                    </h2>
                   
                </div>
            </div>
            <div className="card card-side  shadow-xl flex md:flex-row flex-col justify-center bg-slate-400">
                <figure><img src="https://variety.com/wp-content/uploads/2018/06/depp.jpg?w=681&h=383&crop=1&resize=681%2C383" alt="Movie" className="h-72 rounded-3xl"/></figure>
                <div className="card-body">
                    <h2 className="w-72 font-bold ">
                    "We had the pleasure of booking our recent vacation with [Company Name], and it was an experience we'll never forget. From the moment we contacted them to inquire about their services, we were met with professionalism, enthusiasm, and a genuine desire to make our trip unforgettable." --- <span className="font-bold text-xl">Jhony Depp</span>
                    </h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Advisors;