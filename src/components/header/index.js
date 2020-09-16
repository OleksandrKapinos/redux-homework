import React, {useState} from 'react';
import './header.css';
import {Link} from "react-router-dom";
import NewProductModal from "../new-product-modal";
import {connect} from "react-redux";

export const Header = (props) => {
    const [isShowAddNewForm, setIsShowAddNewForm] = useState(false);

    const toggleIsShowAddNewForm = () => setIsShowAddNewForm(!isShowAddNewForm);


    return (
        <header className="App-header">
            <Link to="/products">
                <h1 className="App-title">My simple shop</h1>
            </Link>

            <div className="App-header_buttons">
                <button onClick={toggleIsShowAddNewForm}>new product</button>

                <Link to="/cart">
                    <h3>
                        Cart {props.cartItemsCount}
                    </h3>
                </Link>
            </div>

            {isShowAddNewForm &&
            <NewProductModal isShow={isShowAddNewForm} toggleIsShowAddNewForm={toggleIsShowAddNewForm}/>}
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItemsCount: state.cartReducer.quantity
    }
};

export default connect(mapStateToProps)(Header);
