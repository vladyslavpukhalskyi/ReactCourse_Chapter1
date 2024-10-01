import React from 'react';

const SearchInput = ({ searchQuery, onSearchChange, onSearchClick }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Search To-Do"
        value={searchQuery}
        onChange={onSearchChange}
      />
      <button type="button" onClick={onSearchClick}>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
