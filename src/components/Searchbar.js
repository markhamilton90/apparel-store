import React from 'react';

class Searchbar extends React.Component {

    render() {
        return (
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Enter a search term..."
                    onChange={ this.props.onChange }
                />
            </div>
        )
    }
}

export default Searchbar;
