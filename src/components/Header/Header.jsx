import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="text-center">
            <h3 className="text-3xl">React Router</h3>
            <nav className="space-x-3 font-bold text-xl mt-2">
                <NavLink className={({isActive,isPending})=> isActive ? 'text-blue-600' : isPending ? 'text-black' : '' }  to="/">Home</NavLink>
                <NavLink className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''} to="/users">Users</NavLink>
                <NavLink className={({isActive,isPending})=> isActive ? 'text-blue-600' : isPending ? 'text-black' : '' }  to="/posts">Posts</NavLink>
                <NavLink className={({isActive,isPending})=> isActive ? 'text-blue-600' : isPending ? 'text-black' : '' }  to="/contact">Contact</NavLink>
                <NavLink className={({isActive,isPending})=> isActive ? 'text-blue-600' : isPending ? 'text-black' : '' }  to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;