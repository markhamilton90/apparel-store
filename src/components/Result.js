import { formatPrice } from '../helpers.js';

export default function Result( props ) {
    const item = props.item;
    return (
        <div className="inventory">
            <h3>{ item.title }</h3>
            <p>{ formatPrice(item.price) }</p>
            <button onClick={ () => props.addToCart(props.itemKey, props.item) }>Add to Cart</button>
        </div>
    )
}