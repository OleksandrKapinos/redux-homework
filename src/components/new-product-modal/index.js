import React, {useState} from 'react';
import {connect} from 'react-redux';

import './new-product-modal.css';
import {updateProductsToAPI} from "../../actions/products.thunk";

const NewProductModal = (props) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productAvailable, setProductAvailable] = useState('');

    const setName = (e) => setProductName(e.target.value);
    const setPrice = (e) => setProductPrice(e.target.value);
    const setAvailable = (e) => setProductAvailable(e.target.value);


    const addProduct = () => {
        const newProduct = {
            id: props.products[(props.products.length - 1)].id + 1,
            name: productName,
            price: +productPrice,
            available: +productAvailable
        };
        const newProductList = [...props.products, newProduct];
        props.updateProductsToAPI(newProductList, newProduct);
        props.toggleIsShowAddNewForm();
    };
    const cancel = () => {
        props.toggleIsShowAddNewForm();
    };


    return (
        <dialog open={props.isShow} className="App-new_product-wrapper">
            <form onSubmit={addProduct} className="App-new_product">
                <h2>Add new product</h2>
                <label>Name
                    <input type="text" name="name"
                           value={productName} onChange={setName}
                           required maxLength="30"
                    />
                </label>
                <label>Price
                    <input type="number" name="price"
                           value={productPrice} onChange={setPrice}
                           required
                    />
                </label>
                <label>Available
                    <input type="number" name="available"
                           value={productAvailable} onChange={setAvailable}
                           required
                    />
                </label>
                <div className="App-new_product-button_box">
                    <button id="cancel" type="reset" onClick={cancel}>Cancel</button>
                    <button type="submit">Add</button>
                </div>
            </form>
        </dialog>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.productsReducer.products
    }
};

export default connect(mapStateToProps, {updateProductsToAPI})(NewProductModal);
