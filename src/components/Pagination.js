import React from 'react';

class Pagination extends React.Component {

    render() {
        const page = this.props.page
        const per_page = this.props.per_page
        const length = this.props.length

        const disablePrev = page <= 0
        const disableNext = (page + 1) * per_page >= length

        return (
            <div className="pagination">
                <div className="btn btn-prev" 
                     data-prev 
                     data-disabled={ disablePrev } 
                     onClick={ this.props.changePage }>&#8592;</div>
                <span>{ page }</span>
                <div className="btn btn-next" 
                     data-next 
                     data-disabled={ disableNext } 
                     onClick={ this.props.changePage }>&#8594;</div>
            </div>
        )
    }
}

export default Pagination;