import React from 'react';

const SearchInput = ({ title, onTitleChange, onAddClick, onSearchClick }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Add/Search To-Do"
        value={title}
        onChange={onTitleChange}
      />
      <button type="button" onClick={onAddClick}>
        Add
      </button>
      <button type="button" onClick={onSearchClick}>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
