import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)
    return (
        <div className="text-center mt-44">
            <p className="text-7xl">{error.status}</p>
            <h1 className="font-semibold text-3xl">Opps!</h1>
            <p>Nothing Here</p>
            <p>{error.data}</p>
            <Link to="/"><button className="btn border-2 p-2 rounded-lg bg-gray-900 text-white">Home</button></Link>
        </div>
    );
};

export default ErrorPage;