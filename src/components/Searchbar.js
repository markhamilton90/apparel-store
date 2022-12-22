import React from 'react';

class Searchbar extends React.Component {

    searchValue = React.createRef();

    render() {
        return (
            <div className="searchbar">
                <input
                    ref={ this.searchValue }
                    type="text"
                    placeholder="Enter a search term..."
                    onChange={ () => this.props.onChange(this.searchValue.current.value) }
                />
            </div>
        )
    }
}

export default Searchbar;
