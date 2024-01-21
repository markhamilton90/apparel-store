export default function Sort( props ) {

    return (
        <div className="sort-dropdown">
            <p>Sort by: </p>
            <select defaultValue="default" onChange={ e => props.updateSort(e) }>
                <option value="default">Default</option>
                <option value="price-lh">Price (Low to High)</option>
                <option value="price-hl">Price (High to Low)</option>
            </select>
        </div>
    )
}