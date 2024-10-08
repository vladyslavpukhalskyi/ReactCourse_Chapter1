import React from 'react';

const Search = ({ onSearch }) => {
    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
        />
    );
};

export default Search;
