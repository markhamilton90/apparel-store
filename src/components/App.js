import React from 'react';
import Sidebar from './Sidebar';
import Results from './Results';
import items from '../sample-items.js';
import filters from '../sample-filters.js';

class App extends React.Component {

    state = {
        inventory: items,
        filters: filters,
        activeFilter: null
    }

    handleClick = filter => {
        const updatedFilters = this.state.filters;
        const newActiveFilter = filter != this.state.activeFilter ? filter : null;
        this.setState({
            filters: updatedFilters,
            activeFilter: newActiveFilter
        })
    }

    render() {
        return (
            <div className="store">
                <Sidebar filters={ this.state.filters } handleClick={ this.handleClick } activeFilter={ this.state.activeFilter } />
                <Results inventory={ this.state.inventory } />
            </div>
        )
    }
}

export default App;
