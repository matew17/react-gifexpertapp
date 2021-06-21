import React from 'react'
import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid({ category }) {
    const { data: images, loading } = useFetchGifs(category); // data:images renombre lo que llega como data por images

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando</p>}

            <div className="card-grid">
                {
                    images && images.map(image => (

                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
