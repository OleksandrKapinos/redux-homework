import React from 'react';
import {connect} from 'react-redux';

import './product.css';
import {addItemToCart} from "../../actions/cart.actions";

const Product = (props) => {

    const addToCart = () => {
        props.addItemToCart(props.item);
    };


    return <div className="product_list_item">
        <p>{props.item.name}</p>
        <p>Price: {props.item.price}</p>
        <p>{props.item.available > 0 ? 'In stock' : 'Sold out'}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart()}
                disabled={props.item.available < 1}>
             Add to card
        </button>
    </div>

};

export default connect(null, {addItemToCart})(Product);
