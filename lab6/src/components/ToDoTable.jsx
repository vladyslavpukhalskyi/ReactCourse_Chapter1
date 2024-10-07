import React, { useState } from 'react';
import DeleteButton from './Delete';

const ToDoTable = ({ toDos, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [error, setError] = useState(false);

  const handleEditClick = (toDo) => {
    setEditId(toDo.id);
    setEditValue(toDo.title);
    setError(false);
  };

  const handleSaveClick = (id) => {
    if (editValue.trim() === "") {
      setError(true);
    } else {
      onUpdate(id, editValue);
      setEditId(null);
      setError(false);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id.toString()}>
            <td>{toDo.id.toString()}</td>
            <td>
              {editId === toDo.id ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    style={{ borderColor: error ? 'red' : 'initial' }}
                  />
                  {error && <div style={{ color: 'red' }}>Title is required</div>}
                </>
              ) : (
                toDo.title
              )}
            </td>
            <td>
              {editId === toDo.id ? (
                <button onClick={() => handleSaveClick(toDo.id)}>
                  Save
                </button>
              ) : (
                <button onClick={() => handleEditClick(toDo)}>
                  Edit
                </button>
              )}
              <DeleteButton onDelete={() => onDelete(toDo.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
