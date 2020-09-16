import {productsApi} from "../api/api";
import {addNewProduct, setProductList} from "./products.action";

export const getProductsFromAPI = () => (dispatch) => {
    try {
        productsApi.getProducts()
            .then(response => dispatch(setProductList(response)))
    } catch (e) {
        console.log('Error: ', e);
    }
};

export const updateProductsToAPI = (products, newProduct) => (dispatch) => {
    try {
        productsApi.updateProducts(products)
            .then(() => dispatch(addNewProduct(newProduct)))
    } catch (e) {
        console.log('Error: ', e);
    }
};
