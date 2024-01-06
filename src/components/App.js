import React from 'react';
import { withRouter } from 'react-router';
import Searchbar from './Searchbar';
import Sort from './Sort';
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
        sort: '',
        // inCart: {},
        page: 0,
        per_page: 4
    }

    updateSort = value => {
        this.setState({
            sort: value,
            page: 0
        })
    }

    onChange = event => {
        this.setState({
            query: event.currentTarget.value,
            page: 0
        })
    }

    clearSearch = event => {
        event.currentTarget.closest('form').reset();

        this.setState({
            query: '',
            page: 0
        })
    }

    // clearCart = () => {
    //     this.setState({
    //         inCart: {}
    //     })
    // }

    handleClick = filter => {
        const updatedFilters = [ ...this.state.activeFilters ];

        if (updatedFilters.includes(filter)) {
            updatedFilters.splice(updatedFilters.indexOf(filter), 1)
        } else {
            updatedFilters.push(filter);
        }

        this.setState({
            activeFilters: updatedFilters,
            page: 0
        })
    }

    // addToCart = (key, value) => {
    //     const inCart = { ...this.state.inCart };

    //     if (!inCart.hasOwnProperty(key)) {
    //         inCart[key] = value;
    //         inCart[key]['count'] = 1;
    //     } else {
    //         inCart[key]['count'] += 1;
    //     }

    //     this.setState({
    //         inCart: inCart
    //     })
    // }

    changePage = event => {
        if (event.currentTarget.hasAttribute('disabled')) {
            return
        }
        let page = this.state.page
        page = event.currentTarget.classList.contains('btn-next') ? (page + 1) : (page - 1)
        this.setState({
            page: page
        })
    }

    goToCart = () => {
        this.props.history.push('/cart')
    }

    render() {
        return (
            <div className="store">
                <Searchbar onChange={ this.onChange } clearSearch={ this.clearSearch } />
                <Sort updateSort={ this.updateSort } />
                <Sidebar filters={ this.state.filters } handleClick={ this.handleClick } activeFilters={ this.state.activeFilters } />
                <Results inventory={ this.state.inventory } activeFilters={ this.state.activeFilters } query={ this.state.query } sort={ this.state.sort } page={ this.state.page } per_page={ this.state.per_page } addToCart={ this.props.addToCart } changePage={ this.changePage } />
                <Cart inCart={ this.props.inCart } clearCart={ this.props.clearCart } goToCart={ this.goToCart }/>
            </div>
        )
    }
}

export default withRouter(App);
