import headerLogo from '../../assets/img/header.jpg';
import  './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <div className="header__logo">
                    <img src={headerLogo} alt="logo"/>
                </div>
            </Link>
        </header>
    );
};

export default Header;
