import { combineReducers } from 'redux';

import { galleryReducer } from './gallery/galleryReducer';
import { wishListReducer } from './wishList/wishListReducer';
import { shopReducer } from "./shop/shopReducer";

const rootReducer = combineReducers({
    gallery: galleryReducer,
    shop: shopReducer,
    wishList: wishListReducer
});

export default rootReducer;
