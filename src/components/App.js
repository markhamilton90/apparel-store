import { useState } from 'react'
import { withRouter } from 'react-router';
import Searchbar from './Searchbar';
import Sort from './Sort';
import Sidebar from './Sidebar';
import Results from './Results';
import Cart from './Cart';
import sampleItems from '../sample-items.js';
import sampleFilters from '../sample-filters.js';

const App = ( props ) => {

    const [inventory, setInventory] = useState(sampleItems)
    const [filters, setFilters] = useState(sampleFilters)
    const [activeFilters, setActiveFilters] = useState([])
    const [query, setQuery] = useState('')
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(0)
    const [per_page, setPerPage] = useState(4)

    function updateSort( value ) {
        setSort(value)
        setPage(0)
    }

    function onChange( event ) {
        setQuery(event.currentTarget.value)
        setPage(0)
    }

    function clearSearch( event ) {
        event.currentTarget.closest('form').reset();
        setQuery('')
        setPage(0)
    }

    function changePage( event ) {
        if (event.currentTarget.hasAttribute('disabled')) {
            return
        }

        event.currentTarget.classList.contains('btn-next') 
            ? setPage(page => page + 1) 
            : setPage(page => page - 1)
    }

    function handleClick( filter ) {
        const updatedFilters = [...activeFilters]

        if (updatedFilters.includes(filter)) {
            updatedFilters.splice(updatedFilters.indexOf(filter), 1)
        } else {
            updatedFilters.push(filter);
        }

        setActiveFilters(updatedFilters)
    }

    return (
        <div className="store">
            <Searchbar 
                onChange={ onChange } 
                clearSearch={ clearSearch } 
            />
            <Sort 
                updateSort={ updateSort }
            />
            <Sidebar 
                filters={ filters } 
                handleClick={ handleClick } 
                activeFilters={ activeFilters } 
            />
            <Results 
                inventory={ inventory } 
                activeFilters={ activeFilters } 
                query={ query } 
                sort={ sort } 
                page={ page } 
                per_page={ per_page } 
                addToCart={ props.addToCart } 
                changePage={ changePage } 
            />
            <Cart 
                inCart={ props.inCart } 
                clearCart={ props.clearCart } 
            />
        </div>
    )
}

export default withRouter(App);
