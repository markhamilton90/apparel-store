import React from 'react';

class Searchbar extends React.Component {

    render() {
        return (
            <form className="searchbar">
                <input
                    type="text"
                    placeholder="Enter a search term..."
                    onChange={ this.props.onChange }
                />
                <div className="clear" onClick={ this.props.clearSearch }></div>
            </form>
        )
    }
}

export default Searchbar;
