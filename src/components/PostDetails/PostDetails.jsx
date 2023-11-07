import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const {id, userId, title} = post;
    
    const navigate = useNavigate();
    const handelGoBack =()=>{
        navigate(-1);
    }

    return (
        <div className="text-center border-2 mx-96 py-3">
            <h3 className="font-bold text-xl">Post Details</h3>
            <p className="text-green-600">Post ID: {id}</p>
            <p className="text-blue-500">User Id: {userId}</p>
            <p className="text-purple-600">Titel: {title}</p>
            <button onClick={handelGoBack} className="btn mt-10 px-2 border-2 rounded-xl bg-gray-500 text-white">Go Back</button>
        </div>
    );
};

export default PostDetails;