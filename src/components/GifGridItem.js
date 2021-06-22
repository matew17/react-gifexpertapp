import React from 'react'
import PropTypes from 'prop-types'
import './../index.css';
function GifGridItem({ url, title }) {
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default GifGridItem
