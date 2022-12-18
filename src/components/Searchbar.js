import React from 'react';

class Searchbar extends React.Component {

    searchValue = React.createRef();

    render() {
        return (
            <div className="searchbar">
                <form action="" onSubmit={ e => e.preventDefault() }>
                    <input
                        ref={ this.searchValue }
                        type="text"
                        onChange={ () => this.props.onChange(this.searchValue.current.value) }
                    />
                </form>
            </div>
        )
    }
}

export default Searchbar;
