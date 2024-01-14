import { useRef } from 'react';

export default function Sort( props ) {

    const dropdownRef = useRef('');

    return (
        <div className="sort-dropdown">
            <p>Sort by: </p>
            <select ref={ dropdownRef } defaultValue="default" onChange={ () => props.updateSort(dropdownRef.current.value ) }>
                <option value="default">Default</option>
                <option value="price-lh">Price (Low to High)</option>
                <option value="price-hl">Price (High to Low)</option>
            </select>
        </div>
    )
}