import React from 'react';

const AddToDoComponent = ({ title, onTitleChange, onSubmit }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Add new To-Do"
        value={title}
        onChange={onTitleChange}
      />
      <button type="button" onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default AddToDoComponent;
