import React from 'react';
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';
import Results from './Results';
import items from '../sample-items.js';
import filters from '../sample-filters.js';

class App extends React.Component {

    state = {
        inventory: items,
        filters: filters,
        activeFilter: null,
        query: ''
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

    render() {
        return (
            <div className="store">
                <Searchbar onChange={ this.onChange } />
                <Sidebar filters={ this.state.filters } handleClick={ this.handleClick } activeFilter={ this.state.activeFilter } />
                <Results inventory={ this.state.inventory } activeFilter={ this.state.activeFilter } query={ this.state.query } />
            </div>
        )
    }
}

export default App;
