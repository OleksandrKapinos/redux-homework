import {productsApi} from "../api/api";

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const GET_PRODUCT_SORT_BY_PROPERTY = 'GET_PRODUCT_SORT_BY_PROPERTY';

export const getProductList = () => ({type: GET_PRODUCT_LIST});
export const setProductList = productsObj => ({type: SET_PRODUCT_LIST, productsList: productsObj});
export const addNewProduct = product => ({type: ADD_NEW_PRODUCT, product});
export const getSortProductList = sortProperty => ({type: GET_PRODUCT_SORT_BY_PROPERTY, sortProperty});




