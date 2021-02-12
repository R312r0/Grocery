import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from '../actions'

const initialState = {
    menu: [],
    productsToBuy: []
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                id: item.id
            }
            
            return {
                ...state,
                productsToBuy: [
                    ...state.productsToBuy,
                    newItem
                ]
            };

        default:
            return state;
    }
}