import React from 'react';

class Pagination extends React.Component {

    render() {
        const page = this.props.page
        const per_page = this.props.per_page
        const length = this.props.length
        const totalPages = Math.floor(length / per_page)

        const disablePrev = page <= 0
        const disableNext = (page + 1) * per_page >= length

        return (
            <div className="pagination">
                <button className="btn btn-prev" disabled={ disablePrev } onClick={ this.props.changePage }>&#8592;</button>
                <span>{ page } of { totalPages }</span>
                <button className="btn btn-next" disabled={ disableNext } onClick={ this.props.changePage }>&#8594;</button>
            </div>
        )
    }
}

export default Pagination;