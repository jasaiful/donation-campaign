import { useEffect } from "react";
import { useState } from "react";
import ReceivedDonation from "./ReceivedDonation";


const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {

        const donateCard = JSON.parse(localStorage.getItem('donate'));

        if (donateCard) {
            setDonation(donateCard)
        }
        else {
            setNotFound("No data found");
        }

    }, [])

    console.log(donation);



    return (
        <div>
            {
                notFound ? <p className="h-[80vh] flex justify-center items-center">
                    {notFound} </p> :
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {
                            donation.map(donation => <ReceivedDonation key={donation.id} donation={donation} > </ReceivedDonation>)
                        }

                    </div>
            }
        </div>
    );
};

export default Donation;