import { Link } from 'react-router-dom'

export default function Cart( props ) {
    const cartItems = props.inCart
    return (
        <div className="cart">
            <h2>Cart</h2>
            <Link className="btn" to="/cart">Go to Cart</Link>
            <ul className="cart-items">
                {
                    Object.keys(cartItems).map( item => (
                        <li key={ props.itemKey }>
                            { cartItems[item].title } { cartItems[item].count > 1 ? ` (${ cartItems[item].count })` : '' }
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
