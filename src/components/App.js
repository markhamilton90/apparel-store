import React from 'react';
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';
import Results from './Results';
import Cart from './Cart';
import items from '../sample-items.js';
import filters from '../sample-filters.js';

class App extends React.Component {

    state = {
        inventory: items,
        filters: filters,
        activeFilter: null,
        query: '',
        inCart: []
    }

    onChange = value => {
        this.setState({
            query: value
        })
    }

    handleClick = filter => {
        const newActiveFilter = filter != this.state.activeFilter ? filter : null;
        this.setState({
            activeFilter: newActiveFilter
        })
    }

    addToCart = item => {
        const inCart = [ ...this.state.inCart ];
        inCart.push(item);
        this.setState({
            inCart: inCart
        })
    }

    render() {
        return (
            <div className="store">
                <Searchbar onChange={ this.onChange } />
                <Sidebar filters={ this.state.filters } handleClick={ this.handleClick } activeFilter={ this.state.activeFilter } />
                <Results inventory={ this.state.inventory } activeFilter={ this.state.activeFilter } query={ this.state.query } addToCart={ this.addToCart } />
                <Cart inCart={ this.state.inCart }/>
            </div>
        )
    }
}

export default App;
