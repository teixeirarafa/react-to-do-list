import React from 'react'

const Tag = (props) => {
    return(
        <span className="badge badge-pill badge-info mr-1">{props.tag}</span>
    )
}

export default Tag