import React, {useState} from 'react';
import {connect} from 'react-redux';

import './cart-list.css';
import CartProduct from "../cart-item";
import {getCartCount} from "../../actions/cart.actions";
import CountModal from "../../components/count-modal";


const CartList = (props) => {
    const [isShowCount, setIsShowCount] = useState(false);

    const list = props.products.map(i => <CartProduct item={i} key={i.name}/>);

    const showCount = () => {
        props.getCartCount();
        setIsShowCount(true);
    };
    const closeCount = () => setIsShowCount(false);


    return (<div className="App-cart">
        {props.products.length ?
            <div>
                {list}
                <button onClick={showCount}>Next</button>
                {isShowCount && <CountModal count={props.count} closeCount={closeCount}/>}
            </div>
            : 'Your cart-list is empty :('
        }
    </div>);

};

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.inCart,
        count: state.cartReducer.count
    }
};

export default connect(mapStateToProps, {getCartCount})(CartList);
