import React from 'react';

class Cart extends React.Component {

    state = {
        showCart: false
    }

    toggleCart = () => {
        this.setState({
            showCart: !(this.state.showCart)
        })
    }

    render() {
        const cartItems = this.props.inCart;
        return (
            <div className="cart">
                <h2>Cart</h2>
                <ul className={`cart-items ${ this.state.showCart ? 'visible' : '' }`}>
                    {
                        Object.keys(cartItems).map( item => (
                            <li key={ this.props.itemKey }>
                                { cartItems[item].title } { cartItems[item].count > 1 ? `x${ cartItems[item].count }` : '' }
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Cart;
