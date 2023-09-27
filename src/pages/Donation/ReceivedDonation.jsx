

const ReceivedDonation = ({ donation }) => {

    const { picture, title, category, price, category_bg, card_bg, text_btn_color } = donation || {};

    return (
        <div>
            <div className="card my-3">
                <div className="flex gap-5">
                    <figure><img className="w-[50px}" src={picture} alt="" /></figure>
                    <div className="text-left space-y-3 mt-7">
                        <p>{category}</p>
                        <h2 className="card-title">{title}</h2>
                        <h6>Price: ${price}</h6>
                        <button className="btn btn-secondary">View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ReceivedDonation;