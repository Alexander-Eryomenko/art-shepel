import { combineReducers } from 'redux';

import { galleryReducer } from './gallery/galleryReducer';
import { wishListReducer } from './wishList/wishListReducer';

const rootReducer = combineReducers({
    gallery: galleryReducer,
    wishList: wishListReducer
});

export default rootReducer;
