import PropTypes from 'prop-types';

const User = ({ user }) => {
    console.log(user)
    const { name, email, website, phone } = user;
    return (
        // <div className='grid grid-cols-3 max-w-7xl mx-auto'>
            <div className='border-2 py-5 space-y-3 text-center'>
                <h3>{name}</h3>
                <p>{email}</p>
                <h4>{website}</h4>
                <p>{phone}</p>
            </div>
        // </div>
    );
};

User.propTypes = {
    user: PropTypes.object,
};

export default User;