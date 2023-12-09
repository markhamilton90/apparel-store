import React from 'react';

class Cart extends React.Component {

    render() {
        const cartItems = this.props.inCart;
        return (
            <div className="cart">
                <h2>Cart</h2>
                <button onClick={ this.props.goToCart }>Go to Cart</button>
                <ul className="cart-items">
                    {
                        Object.keys(cartItems).map( item => (
                            <li key={ this.props.itemKey }>
                                { cartItems[item].title } { cartItems[item].count > 1 ? `x${ cartItems[item].count }` : '' }
                            </li>
                        ))
                    }
                </ul>
                {
                    Object.keys(cartItems).length 
                        ? <button onClick={ this.props.clearCart }>
                            Clear cart
                          </button> 
                        : ''
                }
            </div>
        )
    }
}

export default Cart;
