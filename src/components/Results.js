import Result from './Result';
import Pagination from './Pagination';
import { comparePriceHighToLow, comparePriceLowToHigh } from '../helpers.js';

export default function Results( props ) {
    const activeFilters = props.activeFilters;
    const inventory = props.inventory;
    const query = (props.query).trim().toLowerCase();
    const sort = props.sort

    let inventoryKeys = Object.keys(inventory);

    // filter by filters selected
    if ( activeFilters.length ) {
        // inventoryKeys = inventoryKeys.filter(item => inventory[item].type == activeFilters);
        inventoryKeys = inventoryKeys.filter(item => activeFilters.includes(inventory[item].type));
    }
    // filter by search query
    if ( query != false ) {
        inventoryKeys = inventoryKeys.filter( item => inventory[item].title.trim().toLowerCase().includes(query) || inventory[item].type.trim().toLowerCase().includes(query));
    }
    // sorting
    if ( sort != false ) {
        switch (sort) {
            case 'price-lh':
                inventoryKeys.sort(comparePriceLowToHigh(inventory))
                break
            case 'price-hl':
                inventoryKeys.sort(comparePriceHighToLow(inventory))
                break
            default:
                break
        }
    }

    // pagination
    let start = props.page * props.per_page
    let end = start + props.per_page

    let pageResults = inventoryKeys.slice(start, end)

    return (
        <>
            <div className="results">
                {
                    pageResults.map( item => (
                        <Result key={ item } itemKey={ item } item={ inventory[item] } addToCart={ props.addToCart } />
                    ))
                }
            </div>
            <Pagination 
                page={ props.page } 
                per_page={ props.per_page } 
                length={ inventoryKeys.length } 
                changePage={ props.changePage } 
            />
        </>
    )
}