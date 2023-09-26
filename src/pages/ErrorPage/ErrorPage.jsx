import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='h-screen mt-20 text-center'>
            <h1 className="text-5xl text-yellow-300">Oops!</h1>
            <p className="m-6 text-red-500">Sorry, an unexpected error has occurred.</p>
            <Link to={"/"}><button className="btn btn-secondary">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;