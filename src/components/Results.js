import React from 'react';
import Result from './Result';

class Results extends React.Component {

    matchesQuery = item => {
        item.includes(this.props.query)
    }

    render() {
        const activeFilter = this.props.activeFilter;
        const inventory = this.props.inventory;
        const query = (this.props.query).toLowerCase();

        let inventoryKeys = Object.keys(inventory);
        // filter by filters selected
        if ( activeFilter != null ) {
            inventoryKeys = inventoryKeys.filter(item => inventory[item].type == activeFilter);
        }
        // filter by search query
        if ( query != false ) {
            inventoryKeys = inventoryKeys.filter( item => inventory[item].title.toLowerCase().includes(query));
        }

        return (
            <div className="results">
                {
                    inventoryKeys.map( item => (
                        <Result key={ item } item={ inventory[item] } />
                    ))
                }
            </div>
        )
    }
}

export default Results;
