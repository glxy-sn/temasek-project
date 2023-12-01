import React from 'react'
import { Link } from 'react-router-dom'

const PageContentHeader = ({breadcrumbs, ...props}) => {
    console.log(breadcrumbs)
    return (
        <div className='px-3 py-2 bg-light border-buttom'>
            <div className='breadcrumb mb-1'>
                <ol className='breadcrumb mb-0'>
                    {
                        breadcrumbs.map((item, idx) => (
                            <div className={`breadcrumb-item ${item.type === 'current' ? 'active' : ''}`} key={`breadcrumb_${idx}`}>
                                <Link to={item.url} disabled>
                                    {item.name}
                                </Link>
                            </div>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default PageContentHeader