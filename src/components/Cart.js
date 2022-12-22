import React from 'react';

class Cart extends React.Component {
    render() {
        const cartItems = this.props.inCart;
        return (
            <div className="cart">
                <h2>In Cart:</h2>
                {
                    Object.keys(cartItems).map( item => (
                        <p key={ this.props.itemKey }>
                            { cartItems[item].title } { cartItems[item].count > 1 ? `x${ cartItems[item].count }` : '' }
                        </p>
                    ))
                }
            </div>
        )
    }
}

export default Cart;
