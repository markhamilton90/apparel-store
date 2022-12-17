import React from 'react';

class Results extends React.Component {
    render() {
        const inventory = this.props.inventory;
        return (
            <div className="results">
                {
                    // filter(item => inventory[item].type === 'pants')
                    Object.keys(inventory).map( item => (
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
