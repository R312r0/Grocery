import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from '../actions';

export const addToCart = (value) => ({type: ADD_TO_CART, payload: {value}});
export const deleteFromCart = (value) => ({type: DELETE_FROM_CART, payload: {value}});