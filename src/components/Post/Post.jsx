
import PropTypes from 'prop-types';

const Post = ({post}) => {
    
    const {title,body} = post;

    return (
        <div className='space-y-2 border-2 p-4 rounded-lg'>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p className='text-xl'>{body}</p>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;