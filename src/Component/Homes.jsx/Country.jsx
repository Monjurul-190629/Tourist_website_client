import Country_card from "./Country_card";


const Country = () => {



    return (
        <div>
            <div className="grid md:gap-10 mx-5 ">
                <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl gap-5 ">
                    <div className="w-96 rounded-xl bg-purple-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://www.theflagman.co.uk/wp-content/uploads/2016/09/flag-of-bangladesh.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-justify">
                            <h2 className="card-title">Bangladesh</h2>
                            <p>Bangladesh, nestled in South Asia, boasts a rich tapestry of culture, history, and natural beauty. With its vibrant cities, lush landscapes, and the mighty rivers that crisscross the land, Bangladesh is a land of contrasts</p>
                            
                        </div>
                    </div>
                    <div className=" rounded-xl w-96 bg-purple-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://www.medianigeria.com/wp-content/uploads/2018/02/Thailand-Flag.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-justify">
                            <h2 className="card-title">Thailand</h2>
                            <p> Thailand, known as the "Land of Smiles," is a captivating blend of ancient temples, bustling markets, and stunning tropical beaches. From the vibrant streets of Bangkok, with its lively street food scene.</p>
                            
                        </div>
                    </div>
                    <div className=" rounded-xl w-96 bg-purple-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://www.worldatlas.com/r/w2000-h1125-q90/upload/9f/69/0a/id-flag.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-justify">
                            <h2 className="card-title">Indonesia</h2>
                            <p>Indonesia, the world's largest archipelago, is a mosaic of over 17,000 islands, each offering its own unique charm. From the stunning beaches of Bali, where surfers ride the waves and sun-seekers lounge on pristine sands.</p>
                            
                        </div>
                    </div>
                    <div className=" w-96 rounded-xl bg-purple-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2800px-Flag_of_Malaysia.svg.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-justify">
                            <h2 className="card-title">Malaysia</h2>
                            <p>Malaysia, situated in Southeast Asia, is a melting pot of cultures, cuisines, and landscapes. Its capital, Kuala Lumpur, is a dynamic metropolis where towering skyscrapers stand alongside colonial architecture and bustling street markets.</p>
                            
                        </div>
                    </div>
                    <div className="rounded-xl w-96 bg-purple-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.wallpapersafari.com/46/13/xUjeCI.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-justify">
                            <h2 className="card-title">Vietnam</h2>
                            <p>Vietnam, a land of breathtaking natural beauty and rich history, captivates visitors with its stunning landscapes, bustling cities, and vibrant culture. From the ancient streets of Hanoi, where cyclo drivers weave through a maze of narrow alleys.</p>
                            
                        </div>
                    </div>
                    <div className="rounded-xl w-96 bg-purple-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://s1.bwallpapers.com/wallpapers/2014/05/29/cambodia-flag_12123641.gif" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-justify">
                            <h2 className="card-title">Cambodia</h2>
                            <p>Cambodia, home to the magnificent temples of Angkor Wat and a history that stretches back millennia, is a land of ancient wonders and timeless beauty. The bustling capital, Phnom Penh, offers a glimpse into Cambodia's past with its ornate palaces and somber memorials.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;