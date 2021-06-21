import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({ setCategory }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event?.target?.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 2) {

            setCategory(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
