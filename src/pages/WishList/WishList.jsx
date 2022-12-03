import { useSelector } from "react-redux";
import { selectWishListData } from "../../store/wishList/selectors";

import PicturesItem from "../../components/PicturesItem/PicturesItem";

import './WishList.scss';

const WishList = () => {
    const wishListData = useSelector(selectWishListData);
    return (
        <div className="wish-list">
            <div className="wish-list__title">
                {wishListData.length ? 'Wish List' : 'Wish List is empty'}
            </div>
            <div className="wish-list__items">
                {wishListData.map(picture => {
                    return <PicturesItem key={picture.id} id={picture.id} title={picture.title} typOfPaint={picture.typeOfPaint} size={picture.size} price={picture.price} name={picture.name} />;
                })}
            </div>
        </div>
    );
};

export default WishList;
