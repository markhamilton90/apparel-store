export default function Searchbar( props ) {
    return (
        <form className="searchbar">
            <input
                type="text"
                placeholder="Enter a search term..."
                onChange={ props.onChange }
            />
            <div className="clear" onClick={ props.clearSearch }></div>
        </form>
    )
}
