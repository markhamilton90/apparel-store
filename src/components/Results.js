import React from 'react';
import Result from './Result';
import Pagination from './Pagination';
import { comparePriceHighToLow, comparePriceLowToHigh } from '../helpers.js';

class Results extends React.Component {

    render() {
        const activeFilters = this.props.activeFilters;
        const inventory = this.props.inventory;
        const query = (this.props.query).trim().toLowerCase();
        const sort = this.props.sort

        let inventoryKeys = Object.keys(inventory);

        // filter by filters selected
        if ( activeFilters.length ) {
            // inventoryKeys = inventoryKeys.filter(item => inventory[item].type == activeFilters);
            inventoryKeys = inventoryKeys.filter(item => activeFilters.includes(inventory[item].type));
        }
        // filter by search query
        if ( query != false ) {
            inventoryKeys = inventoryKeys.filter( item => inventory[item].title.trim().toLowerCase().includes(query) || inventory[item].type.trim().toLowerCase().includes(query));
        }
        // sorting
        if ( sort != false ) {
            switch (sort) {
                case 'price-lh':
                    inventoryKeys.sort(comparePriceLowToHigh(inventory))
                    break
                case 'price-hl':
                    inventoryKeys.sort(comparePriceHighToLow(inventory))
                    break
                default:
                    break
            }
        }

        // pagination
        let start = this.props.page * this.props.per_page
        let end = start + this.props.per_page

        let pageResults = inventoryKeys.slice(start, end)

        return (
            <React.Fragment>
                <div className="results">
                    {
                        pageResults.map( item => (
                            <Result key={ item } itemKey={ item } item={ inventory[item] } addToCart={ this.props.addToCart } />
                        ))
                    }
                </div>
                <Pagination 
                    page={ this.props.page } 
                    per_page={ this.props.per_page } 
                    length={ inventoryKeys.length } 
                    changePage={ this.props.changePage } />
            </React.Fragment>
        )
    }
}

export default Results;
