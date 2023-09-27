import "./Banner.css"

const Banner = () => {

    // const bannerStyle = {
    //     backgroundImage: `url(${"https://i.ibb.co/42pPMSZ/Rectangle-4288.png"})`,
    //     backgroundSize: 'cover', // You can adjust these styles as needed
    //     backgroundPosition: 'center center',
    // }


    return (

        <div className="h-[70vh]">

            <div className="overlay w-full relative">
                <div className="text-center pt-10 md:pt-20 lg:pt-36 space-y-5 absolute lg:ml-5 w-full">
                    <div>
                        <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
                    </div>
                    <div className="join">
                        <input className="input input-bordered join-item" placeholder="Category" />
                        <button className="btn join-item btn-secondary font-bold rounded-r-full">Search</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Banner;