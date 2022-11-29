import './Contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__phone">
                <div className="contacts__text-phone">Phone:</div>
                <div className="contacts__phone-numbers">
                    <a href="tel:+4916096557711">+49 160 965 577 11</a>
                    <a href="tel:+380661643286">+38 066 164 32 86</a>
                </div>
            </div>
            <div className="contacts__telegram">
                <div className="contacts__text-telegram">Telegram:</div>
                <a title="Click to start mesage" target="_blank" href='http://t.me/olga_shepel' rel="noreferrer">
                    @olga_shepel
                </a>
            </div>
        </div>
    );
};

export default Contacts;
