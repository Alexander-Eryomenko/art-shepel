
import './PicturesItem.scss';

const PicturesItem = ({title, typOfPaint, size, price, name}) => {
    const srcPicture = require(`../../assets/img/gallery/mobileSize/${name}`);
    const infoStyle = `pictures-item__info ${price ? 'border' : ''}`;

    return (
        <div className="pictures-item">
            <div className="pictures-item__img">
                <img src={srcPicture} alt={title}/>
            </div>
            <div className={infoStyle}>
                <div className="pictures-item__title"><q>{title}</q></div>
                {typOfPaint && <div className="pictures-item__type-of-paint">{typOfPaint}</div>}
                {size && <div className="pictures-item__size">{size}</div>}
                {price && <div className="pictures-item__price">{price}</div>}
            </div>
        </div>
    );
};

export default PicturesItem;
