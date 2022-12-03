
import './PicturesItem.scss';
import {useCallback, useMemo } from "react";
import { addItemToWishList, removeItemFromWishList } from "../../store/wishList/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAdded } from "../../store/wishList/selectors";

const PicturesItem = ({id, title, typOfPaint, size, price, name}) => {
    const dispatch = useDispatch();
    const isAddedItemToWishList = useSelector(selectIsAdded)[id];
    const srcPicture = require(`../../assets/img/gallery/mobileSize/${name}`);
    const infoStyle = useMemo(() => {
        return `pictures-item__info ${price ? 'border' : ''}`;
    }, [price]);

    const likeIconStyle = useMemo(() => {
        return `icon-heart ${isAddedItemToWishList ? 'added-icon-heart' : ''}`;
    }, [isAddedItemToWishList]);

    const addItemToWishListHandler = useCallback(() => {
        dispatch(addItemToWishList({
            id,
            title,
            typOfPaint,
            size,
            price,
            name
        }));
    }, [dispatch, id, title, typOfPaint, size, price, name]);

    const removeItemFromWishListHandler = useCallback(() => {
        dispatch(removeItemFromWishList(id));
    }, [dispatch, id]);

    return (
        <div className="pictures-item">
            <div className="pictures-item__img">
                <img src={srcPicture} alt={title}/>
            </div>
            <div className={infoStyle}>
                <div className="pictures-item__title"><q>{title}</q></div>
                {typOfPaint && <div className="pictures-item__type-of-paint">{typOfPaint}</div>}
                {size && <div className="pictures-item__size">{size}</div>}
                {price && <div className="pictures-item__price">Price: {price}</div>}
                {price && <span onClick={!isAddedItemToWishList ? addItemToWishListHandler : removeItemFromWishListHandler} className={likeIconStyle}></span>}
            </div>
        </div>
    );
};

export default PicturesItem;
