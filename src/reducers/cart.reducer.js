import {
    ADD_ITEM_TO_CART, DECREASE_ITEMS,
    GET_CART_COUNT,
    GET_CART_ITEMS,
    INCREASE_ITEMS,
    REMOVE_FROM_CART
} from '../actions/cart.actions';

const initState = {
    inCart: [],
    quantity: 0,
    count: 0
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return state.inCart;
        case ADD_ITEM_TO_CART:
            let index = state.inCart.find(item => item.id === action.product.id);
            if (index !== undefined) {
                return {
                    ...state,
                    inCart: state.inCart.map(item => {
                        item.id === action.product.id
                        && item.itemQuantity < item.available
                        && (item.itemQuantity += 1);
                        return item;
                    }),
                    quantity: state.inCart.length
                };
            } else {
                let cartItem = {
                    ...action.product,
                    itemQuantity: 1
                };
                return {
                    ...state,
                    inCart: [...state.inCart, cartItem],
                    quantity: state.quantity + 1
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                inCart: [...state.inCart].filter(item => item.id !== action.productId),
                quantity: state.quantity - 1
            };
        case INCREASE_ITEMS:
            return {
                ...state,
                inCart: state.inCart.map(item => {
                    if (item.id === action.productId) {
                        (item = {...item, itemQuantity: (item.itemQuantity + 1)});
                    }
                    return item;
                })
            };
        case DECREASE_ITEMS:
            return {
                ...state,
                inCart: state.inCart.map(item => {
                    if (item.id === action.productId) {
                        (item = {...item, itemQuantity: (item.itemQuantity - 1)});
                    }
                    return item;
                })
            };
        case GET_CART_COUNT:
            return {
                ...state, count: state.inCart.reduce((sum, current) => {
                    return sum + (current.price * current.itemQuantity);
                }, 0)
            };
        default:
            return state;
    }
};

export default cartReducer;
