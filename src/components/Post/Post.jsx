
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {

    const { id, title, body } = post;
    const navigate = useNavigate();

    const handelClickBtn =()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div className='space-y-2 border-2 p-4 rounded-lg flex flex-col'>
            <div className='flex-grow space-y-2'>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p className='text-xl'>{body}</p>
            </div>
            <Link to={`/post/${id}`}>
                <button className='btn bg-lime-300 py-2 px-3 rounded-lg'>Click</button>
            </Link>
            <button onClick={handelClickBtn} className='bg-purple-600 text-white rounded-lg py-1 mx-14'>Show Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;