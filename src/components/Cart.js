export default function Cart( props ) {
    const cartItems = props.inCart;
    return (
        <div className="cart">
            <h2>Cart</h2>
            <button onClick={ props.goToCart }>Go to Cart</button>
            <ul className="cart-items">
                {
                    Object.keys(cartItems).map( item => (
                        <li key={ props.itemKey }>
                            { cartItems[item].title } { cartItems[item].count > 1 ? `x${ cartItems[item].count }` : '' }
                        </li>
                    ))
                }
            </ul>
            {
                Object.keys(cartItems).length 
                    ? <button onClick={ props.clearCart }>
                        Clear cart
                        </button> 
                    : ''
            }
        </div>
    )
}
