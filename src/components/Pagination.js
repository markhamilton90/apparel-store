import React from 'react';

class Pagination extends React.Component {

    render() {
        const length = this.props.length
        const per_page = this.props.per_page
        const page = length ? this.props.page + 1 : 0
        const totalPages = length ? Math.ceil(length / per_page) : 0

        const disablePrev = page <= 1
        const disableNext = (page) * per_page >= length

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