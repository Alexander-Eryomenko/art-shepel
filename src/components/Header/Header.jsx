import logoShepelIcon from '../../assets/icons/logo-shepel-icon.jpg';
import  './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
                <Link className="header__link" to='/'>
                    <div className="header__logo">
                        <div className="header__text">
                            <div>Shepel</div>
                            <div>Olha</div>
                            <div className="header__text_grey">Artist</div>
                        </div>
                        <div className="header__foto">
                            <img src={logoShepelIcon} alt="foto shepel"/>
                        </div>
                    </div>
                </Link>
        </header>
    );
};

export default Header;
