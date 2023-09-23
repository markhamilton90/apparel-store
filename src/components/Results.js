import React from 'react';
import Result from './Result';

class Results extends React.Component {

    render() {
        const activeFilters = this.props.activeFilters;
        const inventory = this.props.inventory;
        const query = (this.props.query).trim().toLowerCase();

        let inventoryKeys = Object.keys(inventory);

        let start = this.props.page * this.props.per_page
        let end = start + this.props.per_page

        inventoryKeys = inventoryKeys.slice(start, end)

        // filter by filters selected
        // if ( activeFilters.length ) {
        //     // inventoryKeys = inventoryKeys.filter(item => inventory[item].type == activeFilters);
        //     inventoryKeys = inventoryKeys.filter(item => activeFilters.includes(inventory[item].type));
        // }
        // // filter by search query
        // if ( query != false ) {
        //     inventoryKeys = inventoryKeys.filter( item => inventory[item].title.trim().toLowerCase().includes(query) || inventory[item].type.trim().toLowerCase().includes(query));
        // }

        return (
            <div className="results">
                {
                    inventoryKeys.map( item => (
                        <Result key={ item } itemKey={ item } item={ inventory[item] } addToCart={ this.props.addToCart } />
                    ))
                }
            </div>
        )
    }
}

export default Results;
