export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_ITEMS = 'INCREASE_ITEMS';
export const DECREASE_ITEMS = 'DECREASE_ITEMS';
export const GET_CART_COUNT = 'GET_CART_COUNT';

export const getCartItems = () => ({type: GET_CART_ITEMS});
export const addItemToCart = payload => ({type: ADD_ITEM_TO_CART, product: payload});
export const removeFromCart = id => ({type: REMOVE_FROM_CART, productId: id});
export const increaseItems = id => ({type: INCREASE_ITEMS, productId: id});
export const decreaseItems = id => ({type: DECREASE_ITEMS, productId: id});
export const getCartCount = () => ({type: GET_CART_COUNT});
