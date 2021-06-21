import React, { useState } from 'react'

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
    const [categories, setCategory] = useState(['Kimetsu no yaiba']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategory={setCategory} />

            <hr />

            <ul>
                {categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))}
            </ul>
        </>
    )
}

export default GifExpertApp
