import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

    const { id, name, email, website, phone } = user;

    return (
        <div className='border-2 py-5 space-y-3 text-center rounded-lg'>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p>{email}</p>
            <h4>{website}</h4>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>
                <button className='btn bg-zinc-400 rounded-lg p-2'>Show Details</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object,
};

export default User;