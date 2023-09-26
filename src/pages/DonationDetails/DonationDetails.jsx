import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";


const DonationDetails = () => {



    const [donation, setDonation] = useState({});

    const { category } = useParams();

    const donationDetail = useLoaderData();

    useEffect(() => {
        console.log("category, donationDetail")
        const findDonation = donationDetail?.find(donation => donation.category === category);

        setDonation(findDonation);
    }, [category, donationDetail]);

    console.log(donation);

    return (
        <div>
            <DonationCard donation={donation}></DonationCard>
        </div>
    );
};

export default DonationDetails;