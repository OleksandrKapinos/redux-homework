import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route} from "react-router-dom";

// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart-list';
import ProductList from './containers/product-list';
import Header from "./components/header";

// CSS
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {activeComponent: 'product-list'};
        this.changeNavigation = this.changeNavigation.bind(this);
    }

    changeNavigation(prop) {
        this.setState({activeComponent: prop});
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Header/>
                    <div className="App-wrapper">
                        <SideBar/>
                        <Route path="/">
                            <Redirect to="/products"/>
                        </Route>
                        <Route path="/products" exact render={() => <ProductList/>}/>
                        <Route path="/cart" exact render={() => <Cart/>}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
