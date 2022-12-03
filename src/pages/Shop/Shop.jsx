import PicturesItem from "../../components/PicturesItem/PicturesItem";

import {useSelector} from "react-redux";
import { selectShopData } from "../../store/shop/selectors";

import './Shop.scss';

const Shop = () => {
    const shopData = useSelector(selectShopData);
    return (
        <div className="shop">
            <div className="shop__title">
                Shop
            </div>
            <div className="shop__items">
                {shopData.map(picture => {
                    return <PicturesItem key={picture.id} id={picture.id} title={picture.title} typOfPaint={picture.typeOfPaint} size={picture.size} price={picture.price} name={picture.name} />;
                })}
            </div>
        </div>
    );
};

export default Shop;
