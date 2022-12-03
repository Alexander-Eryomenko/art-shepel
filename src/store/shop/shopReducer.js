// import {
//     ADD_ITEM_TO_WISH_LIST,
//     REMOVE_ITEM_FROM_WISH_LIST
// } from './actions';

const initialData = {
    shopData: [
        {
            id: 1,
            title: 'Glass',
            typeOfPaint: 'Acrylic',
            size: '50 x 50',
            price: '300 €',
            name: 'glass.jpg'
        },
        {
            id: 2,
            title: 'Figs',
            typeOfPaint: 'Acrylic',
            size: '30 x 40',
            price: '210 €',
            name: 'figs_shop.jpg'
        },
        {
            id: 3,
            title: 'Sailing life',
            typeOfPaint: 'Acrylic',
            size: '100 x 70',
            price: '370 €',
            name: 'sailing_life.png'
        }
    ]
};

export const shopReducer = (state = initialData, action) => {
    switch (action.type) {

        default:
            return state;
    }
};
