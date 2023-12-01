import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Pagination = ({data}) => {
    const { content, ...rest } = data || {};
    const { pathname } = useLocation();

    return(
        <div aria-label="Page navigation example">
            <ul className="pagination">
                {
                    (rest && !rest.first) && (
                        <li className="page-item">
                            <Link className="page-link" to={pathname + `?page=1`} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                    )
                }

                {rest && new Array(rest.totalPages).fill(null).map((_, index) => (
                    <li className="page-item">
                        <Link className="page-link" to={`${pathname}}?page=${index + 1}`}>
                            {index + 1}
                        </Link>
                    </li>
                ))}

                {
                    (rest && !rest.last) && (
                        <li className="page-item">
                            <Link className="page-link" to={`${pathname}?page=${rest.totalPages}`} aria-label="next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Pagination