import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CartPage from './CartPage';
import NotFound from './NotFound';

export default function Root() {

    const [inCart, setInCart] = useState({})

    function clearCart() {
        setInCart({})
    }

    function addToCart(key, value) {
        const cartObj = {...inCart}

        if (!cartObj.hasOwnProperty(key)) {
            cartObj[key] = value;
            cartObj[key]['count'] = 1;
        } else {
            cartObj[key]['count'] += 1;
        }

        setInCart(cartObj)
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <App inCart={inCart} clearCart={clearCart} addToCart={addToCart} />
                </Route>
                <Route exact path="/apparel-store">
                    <App inCart={inCart} clearCart={clearCart} addToCart={addToCart} />
                </Route>
                <Route exact path="/cart">
                    <CartPage inCart={inCart} />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}