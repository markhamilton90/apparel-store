export default function Sidebar( props ) {
    const filters = props.filters;
    const activeFilters = props.activeFilters;
    return (
        <div className="sidebar">
            {
                Object.keys(filters).map( filter => (
                    <div
                        className={`filter ${ activeFilters.includes(filter) ? "selected" : "" }`}
                        key={ filter }
                        onClick={ () => props.handleClick(filter) }>
                        { props.filters[filter].label }
                    </div>
                ))
            }
        </div>
    )
}