import React from 'react';
import { formatPrice } from '../helpers.js';

class Result extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <div className="inventory">
                <h3>{ item.title }</h3>
                <p>{ formatPrice(item.price) }</p>
                <button onClick={ () => this.props.addToCart(this.props.itemKey, this.props.item) }>Add to Cart</button>
            </div>
        )
    }
}

export default Result;
