import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();

    const {name,company} = user;

    return (
        <div className="text-center space-y-3 border-2 mx-96 py-4">
            <h3 className="text-3xl font-semibold text-blue-500">{name}</h3>
            <h4 className="font-bold text-2xl">Company: {company.name}</h4>
            <p className="text-xl">{company.catchPhrase}</p>
            <small className="text-sm">{company.bs}</small>
        </div>
    );
};

export default UserDetails;