

const Banner = () => {
    return (
        <div className="mx-10">
            
            <div className="carousel w-full relative">
                <div id="item1" className="carousel-item w-full h-screen relative text-center">
                    <img src="https://i.ibb.co/3NCD2r3/Coxs-Bazar-Exclusive-picture-coxsbazarcity-com-21.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Cox's Bazar" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                        <p className="text-white text-2xl font-bold">Cox's Bazar</p>
                        <p className="text-white md:text-xl md:w-2/6 px-5">
                        Cox's Bazar is not just a destination; it's an experience that leaves an indelible mark on the hearts of all who visit
                        </p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full h-screen relative">
                    <img src="https://i.ibb.co/Cv918PV/Rangerwood-Machan-Kerala-BB41020171.webp" className="absolute inset-0 w-full h-full object-cover" alt="Rangamati" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                        <p className="text-white text-xl font-bold">Rangamati</p>
                        <p className="text-white md:text-xl md:w-2/6 px-5"> 
                        Exploring Rangamati is like embarking on a journey of discovery, where every turn reveals a new wonder to behold. 
                        </p>
                        
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full h-screen relative">
                    <img src="https://i.ibb.co/2d8YKtT/Getty-Images-673149202-594874ac5f9b58d58a4c274a.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Image 3" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                        <p className="text-white text-xl font-bold">Cameron Highlands</p>
                        <p className="text-white md:text-xl md:w-2/6 px-5"> 
                        Nestled amidst the lush hills of Malaysia, is a verdant paradise that enchants visitors with its serene beauty and refreshing climate
                        </p>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full h-screen relative">
                    <img src="https://i.ibb.co/Rj1k7r9/HERO-Bangkok-Tips-Hero-shutterstock-367503629.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Image 4" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                        <p className="text-white text-xl font-bold">Bangkok</p>
                        <p className="text-white md:text-xl md:w-2/6 px-5"> 
                        The vibrant heart of Thailand, is a city that dazzles with its unique blend of tradition and modernity.
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;