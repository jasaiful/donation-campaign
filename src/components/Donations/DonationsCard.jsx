import { Link } from "react-router-dom";


const DonationsCard = ({ donation }) => {

    const { picture, title, category } = donation || {};

    return (
        <div>
            <Link to={`/donations/${category}`}>
                <div className="card card-compact w-full shadow-xl">
                    <figure><img src={picture} alt="" /></figure>
                    <div className="card-body">
                        <p>{category}</p>
                        <h2 className="card-title">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationsCard;