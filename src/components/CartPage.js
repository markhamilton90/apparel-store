import { Link } from 'react-router-dom'

export default function CartPage( props ) {
    const cartItems = props.inCart
    return (
        <div>
            <ul className="cart-items">
                <h2>Cart Page</h2>
                {
                    Object.keys(cartItems).map( item => (
                        <p>
                            { cartItems[item].title } { cartItems[item].count > 1 ? ` (${ cartItems[item].count })` : '' }
                        </p>
                    ))
                }
            </ul>
            <Link className="btn" to="/">Go to Main Page</Link>
        </div>
    )
}