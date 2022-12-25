import React from 'react';

class Sidebar extends React.Component {
    render() {
        const filters = this.props.filters;
        const activeFilter = this.props.activeFilter;
        return (
            <div className="sidebar">
                {
                    Object.keys(this.props.filters).map( filter => (
                        <div
                            // className={`filter ${ filter === activeFilter ? "selected" : "" }`}
                            className={`filter ${ activeFilter.includes(filter) ? "selected" : "" }`}
                            key={ filter }
                            onClick={ () => this.props.handleClick(filter) }>
                            { this.props.filters[filter].label }
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Sidebar;
