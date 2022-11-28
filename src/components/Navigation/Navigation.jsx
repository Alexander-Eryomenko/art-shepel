import { Link } from "react-router-dom";
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link className="navigation__link" to="/about">About me</Link>
            <Link className="navigation__link" to="/shop">Shop</Link>
            <Link className="navigation__link" to="/gallery">Gallery</Link>
            <Link className="navigation__link" to="/contacts">Contacts</Link>
            <Link className="navigation__link" to="/wish-list">Wish List</Link>
        </nav>
    );
};

export default Navigation;
