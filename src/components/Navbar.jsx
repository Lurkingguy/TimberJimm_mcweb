import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
        <nav className="navbar">
            <Link to="/intropage" className="navbar-logo">TIMBER_JIMM</Link>
            <div className="links">
                <Link to="/">Home</Link>    
                <Link to="/aboutus">About</Link>
                <Link to="/showcase">Showcase</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;