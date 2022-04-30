import React from 'react';
import './SearchBox.css'

const SearchBox = ({placeholder, handleChange}) => {
    // handleChange handles the change4Search function in parent
    
    return (
        <div className='search'>
            <input 
                className='search'
                type='search' 
                placeholder={placeholder} 
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox;