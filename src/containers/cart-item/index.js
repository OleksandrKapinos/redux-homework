import React from 'react';
import {connect} from 'react-redux';

import './cart-item.css';
import {decreaseItems, increaseItems, removeFromCart} from "../../actions/cart.actions";

const CartItem = (props) => {
    const removeItem = () => {
        props.removeFromCart(props.item.id);
    };
    const increase = () => {
        props.increaseItems(props.item.id);
    };
    const decrease = () => {
        props.decreaseItems(props.item.id);
    };

    return <div className="cart_list_item">
        <p>{props.item.name}</p>
        <div className="cart_list_item-button-box">
            <div className="quantity">
                <span className="quantity-value">{props.item.itemQuantity}</span>
                <div className="quantity-buttons">
                    <button className="btn add1" onClick={increase}
                            disabled={props.item.itemQuantity >= props.item.available}>
                        &#9650;</button>
                    <button className="btn minus1" onClick={decrease}
                            disabled={props.item.itemQuantity < 2}>
                        &#9660;</button>
                </div>
            </div>
            <button className="remove-btn" onClick={removeItem}
                    disabled={props.item.available < 1}>
                Delete
            </button>
        </div>
    </div>
};


export default connect(null, {
    removeFromCart, increaseItems,
    decreaseItems})(CartItem);
