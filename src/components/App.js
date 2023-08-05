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
        activeFilters: [],
        query: '',
        inCart: {}
    }

    onChange = event => {
        this.setState({
            query: event.currentTarget.value
        })
    }

    clearSearch = event => {
        event.currentTarget.closest('form').reset();

        this.setState({
            query: ''
        })
    }

    clearCart = () => {
        this.setState({
            inCart: {}
        })
    }

    handleClick = filter => {
        const updatedFilters = [ ...this.state.activeFilters ];

        if (updatedFilters.includes(filter)) {
            updatedFilters.splice(updatedFilters.indexOf(filter), 1)
        } else {
            updatedFilters.push(filter);
        }

        this.setState({
            activeFilters: updatedFilters
        })
    }

    addToCart = (key, value) => {
        const inCart = { ...this.state.inCart };

        if (!inCart.hasOwnProperty(key)) {
            inCart[key] = value;
            inCart[key]['count'] = 1;
        } else {
            inCart[key]['count'] += 1;
        }

        this.setState({
            inCart: inCart
        })
    }

    render() {
        return (
            <div className="store">
                <Searchbar onChange={ this.onChange } clearSearch={ this.clearSearch } />
                <Sidebar filters={ this.state.filters } handleClick={ this.handleClick } activeFilters={ this.state.activeFilters } />
                <Results inventory={ this.state.inventory } activeFilters={ this.state.activeFilters } query={ this.state.query } addToCart={ this.addToCart } />
                <Cart inCart={ this.state.inCart } clearCart={ this.clearCart }/>
            </div>
        )
    }
}

export default App;
