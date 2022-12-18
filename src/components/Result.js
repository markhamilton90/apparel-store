import React from 'react';

class Result extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <div className="inventory">
                <h3>{ item.title }</h3>
                <p>{ item.price }</p>
            </div>
        )
    }
}

export default Result;
