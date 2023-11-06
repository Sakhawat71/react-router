import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    console.log(users[0])


    return (
        <div>
            <h3 className="text-center text-xl text-blue-600 my-3">Our users : {users.length}</h3>
            <div className="grid grid-cols-3 gap-3 mx-20">
                {
                    users.map(user => <User
                    key={user.id}
                    user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;