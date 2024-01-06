import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CartPage from './CartPage';
import NotFound from './NotFound';

class Root extends React.Component {

    state = {
        inCart: {},
    }

    clearCart = () => {
        this.setState({
            inCart: {}
        })
    }

    addToCart = (key, value) => {
        const inCart = { ...this.state.inCart };

        if (!inCart.hasOwnProperty(key)) {
            inCart[key] = value;
            inCart[key]['count'] = 1;
        } else {
            inCart[key]['count'] += 1;
        }

        this.setState({
            inCart: inCart
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <App inCart={this.state.inCart} clearCart={this.clearCart} addToCart={this.addToCart}/>
                    </Route>
                    <Route exact path="/apparel-store">
                        <App inCart={this.state.inCart} clearCart={this.clearCart} addToCart={this.addToCart}/>
                    </Route>
                    <Route exact path="/cart">
                        <CartPage inCart={this.state.inCart} />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Root;
