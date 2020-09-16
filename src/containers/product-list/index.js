import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './product-list.css';
import {getProductsFromAPI, getSortProductList} from "../../actions/products.action";
import Product from "../product";

const ProductList = (props) => {
    const list = props.products.map(i => <Product item={i} key={i.name}/>);

    const sortProductList = (e) => {
        props.getSortProductList(e.target.value);
    };

    useEffect(() => {
        props.getProductsFromAPI();
    }, [props.getProductsFromAPI]);

        return (<div className="App-product_list">
            <div className="App-product_sort-bar">
                <select onChange={sortProductList}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="available">Available</option>
                </select>
            </div>
            {list}
        </div>);

};

const mapStateToProps = state => {
    return {
        products: state.productsReducer.products,
    }
};


export default connect(mapStateToProps, {getSortProductList, getProductsFromAPI})(ProductList);
