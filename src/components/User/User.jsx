import PropTypes from 'prop-types';

const User = ({ user }) => {

    const { name, email, website, phone } = user;
    return (
        <div className='border-2 py-5 space-y-3 text-center rounded-lg'>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p>{email}</p>
            <h4>{website}</h4>
            <p>{phone}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object,
};

export default User;