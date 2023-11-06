import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="text-center">
            <h3 className="text-3xl">React Router</h3>
            <nav className="space-x-3 font-bold text-xl mt-2">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;