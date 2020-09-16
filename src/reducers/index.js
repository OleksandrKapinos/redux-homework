// TODO: implement combine reducer functionality

import {combineReducers} from "redux";
import cartReducer from "./cart.reducer";
import productsReducer from "./products.reducer";

const reducer = combineReducers({
    cartReducer: cartReducer,
    productsReducer: productsReducer
});

export default reducer;
