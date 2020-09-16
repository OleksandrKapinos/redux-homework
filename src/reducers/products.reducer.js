import {
    ADD_NEW_PRODUCT,
    GET_PRODUCT_LIST,
    GET_PRODUCT_SORT_BY_PROPERTY, SET_PRODUCT_LIST
} from '../actions/products.action';

const initState = {
    products: []
};

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return state.products;
        case SET_PRODUCT_LIST:
            return {
                ...state,
                products: [...action.productsList]
            };
        case ADD_NEW_PRODUCT:
            return {...state, products: [...state.products, {...action.product}]};
        case GET_PRODUCT_SORT_BY_PROPERTY:
            let newProductList = action.sortProperty === 'name'
                ? [...state.products].sort(compare)
                : [...state.products].sort((a, b) => a[action.sortProperty] - b[action.sortProperty]);
            return {...state, products: newProductList};
        default:
            return state;
    }
};

export default productsReducer;


function compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}
