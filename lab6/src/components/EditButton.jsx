import React, { useState } from 'react';

const EditButton = ({ toDo, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(toDo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editValue.trim() !== "") {
      onUpdate(toDo.id, editValue);
    }
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </>
  );
};

export default EditButton;
