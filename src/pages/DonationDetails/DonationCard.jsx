

const DonationCard = ({ donation }) => {

    const { picture, title, price, category, category_bg, card_bg, text_btn_color, description } = donation || {};

    const handleAddToDonation = () => {

        const addedDonateCard = [];

        const donateCard = JSON.parse(localStorage.getItem('donate'))

        if (!donateCard) {
            addedDonateCard.push(donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateCard))

            // alert should be added
        }
        else {
            addedDonateCard.push(...donateCard, donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateCard))
        }

        
    }

    return (
        <div>
            <div className="relative flex w-full h-screen flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img className="w-full" src={picture} alt="" />
                    <div className="to-bg-black-30 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <button onClick={handleAddToDonation} className="btn btn-secondary">Donate ${price}</button>
                <div className="p-6">
                    <div className="mb-5">
                        <h2 className="text-4xl font-bold"> {title}</h2>
                    </div>
                    <p className=""> {description} </p>

                </div>

            </div>
        </div>
    );
};

export default DonationCard;