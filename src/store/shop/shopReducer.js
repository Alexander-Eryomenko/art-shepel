// import {
//     ADD_ITEM_TO_WISH_LIST,
//     REMOVE_ITEM_FROM_WISH_LIST
// } from './actions';

const initialData = {
    galleryData: [{
        id: 1,
        title: 'Glass',
        typeOfPaint: 'Acryl',
        size: '50 x 50'
    }]
};

export const shopReducer = (state = initialData, action) => {
    switch (action.type) {

        default:
            return state;
    }
};
