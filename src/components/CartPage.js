import React from 'react';

class CartPage extends React.Component {

    render() {
        const cartItems = this.props.inCart;
        return (
            <ul className="cart-items">
                <h2>Cart Page</h2>
                {
                    Object.keys(cartItems).map( item => (
                        <h2>{ cartItems[item].title }</h2>
                    ))
                }
            </ul>
        )
    }
}

export default CartPage;