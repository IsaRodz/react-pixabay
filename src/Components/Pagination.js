import React from 'react';
import './scss/pagination.scss';

const Pagination = props => {
    return (
        <div className="pagination">
            <button onClick={props.prevPage} className="btn">Prev</button>
            <button onClick={props.nextPage} className="btn">Next</button>
        </div>
    );
}

export default Pagination;