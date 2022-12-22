import React from 'react';

class Cart extends React.Component {
    render() {
        const cartItems = this.props.inCart;
        return (
            <div className="cart">
                {
                    cartItems.map( item => (
                        <p>{ item.title }</p>
                    ))
                }
            </div>
        )
    }
}

export default Cart;
