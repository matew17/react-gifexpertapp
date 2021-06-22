import React, { useState } from 'react'

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp({ defaultCategories = ['Kimetsu no yaiba'] }) {
    const [categories, setCategory] = useState(defaultCategories);

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
