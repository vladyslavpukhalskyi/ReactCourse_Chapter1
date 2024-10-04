import React, { useState } from 'react';

const EditButton = ({ toDo, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(toDo.title);
  const [error, setError] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editValue.trim() === "") {
      setError(true);
    } else {
      onUpdate(toDo.id, editValue);
      setIsEditing(false);
      setError(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            style={{ borderColor: error ? 'red' : 'initial' }}
          />
          {error && <div style={{ color: 'red' }}>Empty Field</div>}
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </>
  );
};

export default EditButton;
