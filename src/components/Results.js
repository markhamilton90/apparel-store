import React from 'react';

class Results extends React.Component {
    render() {
        const activeFilter = this.props.activeFilter;
        const inventory = this.props.inventory;

        const inventoryKeys = activeFilter != null
            ? Object.keys(inventory).filter(item => inventory[item].type == activeFilter)
            : Object.keys(inventory);

        return (
            <div className="results">
                {
                    inventoryKeys.map( item => (
                        <div className="inventory" key={ item }>
                            <h3>{ inventory[item].title }</h3>
                            <p>{ inventory[item].price }</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Results;
