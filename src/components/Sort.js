import React from 'react';

class Sort extends React.Component {

    dropdownRef = React.createRef();

    componentDidMount() {
        this.props.updateSort(this.dropdownRef.current.value)
    }

    render() {
        return (
            <div className="sort-dropdown">
                <p>Sort by: </p>
                <select ref={ this.dropdownRef } defaultValue="default" onChange={ () => this.props.updateSort(this.dropdownRef.current.value ) }>
                    <option value="default">Default</option>
                    <option value="price-hl">Price (High to Low)</option>
                    <option value="price-lh">Price (Low to High)</option>
                </select>
            </div>
        )
    }
}

export default Sort;