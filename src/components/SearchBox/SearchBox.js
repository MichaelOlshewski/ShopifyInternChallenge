import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
    return (
        <div className='card'>
            <div className='searchForm'>
                <FaSearch className='searchForm-icon' />
                <input
                    type='text'
                    className='searchBar'
                    placeholder='Search For A Movie'
                />
            </div>
        </div>
    );
};
export default SearchBox;
