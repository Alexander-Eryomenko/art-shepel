
import './PicturesItem.scss';

const PicturesItem = ({title, price, size, src }) => {

    const srcPicture = require(`../../assets/img/gallery/mobileSize/${src}`);
    return (
        <div className="pictures-item">
            <div className="pictures-item__img">
                <img src={srcPicture} alt={title}/>
            </div>
            <div className="pictures-item__title"><q>{title}</q></div>
            {price && <div className="pictures-item__price">{price}</div>}
            {size && <div className="pictures-item__price">{size}</div>}
        </div>
    );
};

export default PicturesItem;
