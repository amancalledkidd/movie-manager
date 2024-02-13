import './Navbar.scss'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/user-films">My Films</Link>
        </div>
    );
}

export default Navbar;
