// import {
//     ADD_ITEM_TO_WISH_LIST,
//     REMOVE_ITEM_FROM_WISH_LIST
// } from './actions';

const initialData = {
    galleryData: [
        {
            id: 1,
            title: 'Alps',
            name: 'alps.jpg'
        },
        {
            id: 2,
            title: 'Calmness',
            name: 'calmness.jpg'
        },
        {
            id: 3,
            title: 'Figs',
            name: 'figs.jpg'
        },
        {
            id: 4,
            title: 'Garnets',
            name: 'garnets.jpg'
        },
        {
            id: 5,
            title: 'Glass',
            name: 'glass.jpg'
        },
        {
            id: 6,
            title: 'Lily of the valley',
            name: 'lily_of_the_valley.jpg'
        },
        {
            id: 7,
            title: 'On the top',
            name: 'on_the_top.jpg'
        },
        {
            id: 8,
            title: 'Still life',
            name: 'still_life.jpg'
        },
        {
            id: 9,
            title: 'Sunflowers',
            name: 'sunflowers.jpg'
        },
        {
            id: 10,
            title: 'Acrylic',
            name: 'acrylic.png'
        }
    ]
};

export const galleryReducer = (state = initialData, action) => {
    switch (action.type) {

        default:
            return state;
    }
};
